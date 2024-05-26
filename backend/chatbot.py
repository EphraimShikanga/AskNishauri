"""
Chatbot logic and functionality
"""

import argparse
import os
import json
from flask import Flask, request, jsonify, session
from flask_cors import CORS
from dotenv import load_dotenv
from langchain.prompts import ChatPromptTemplate
from langchain_community.vectorstores.chroma import Chroma
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_google_genai.embeddings import GoogleGenerativeAIEmbeddings


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
app.secret_key = "es"

load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")

CHROMA_DB_PATH = "../database/chroma"
PROMPT_TEMPLATE = """
**Context:**
* You are a personal health assistant called Dr.Nishauri provided with the patient's real-time location, {location}, helping patients with medical queries.

* **Patient Real-Time Location:** {location}
* **Patient Details:** {context}
* **Conversation History:** {history}
* **Hospitals Details:** {hospitals}

**User Query:** {question}


**Instructions:**

1. **Identify Query Type:**
    * If the query is a greeting, respond with a greeting tailored to the time of day and patient's name (e.g., "Good morning, [Patient Name]").
    * If the query is a request for information, prioritize using the provided patient details, conversation history, and external information from reliable medical sources. Ensure the information is relevant to the patient's location and context.
    * If the query requires further clarification or suggests a potential health concern, acknowledge and offer assistance (e.g., "I understand you're concerned about [symptom]. Can you tell me more about what you're experiencing?").
    * If the query is a request for a specific action or recommendation, provide clear and concise guidance based on the patient's details and context.

2. **Craft Response:**
    * Maintain a professional and informative tone, avoiding medical jargon whenever possible.
    * Base your response on the provided context and reliable external medical sources, ensuring factual accuracy.
    * Acknowledge limitations and encourage seeking professional medical advice for complex issues or suspected diagnoses (e.g., "This information cannot replace a doctor's diagnosis. If you're concerned, please schedule an appointment with your physician.").
    * Consider incorporating elements of empathy and reassurance in your responses.

3. **Privacy and Security:**
    * Do not disclose any personal health information beyond what is explicitly provided in the patient details and conversation history.
    * Maintain user privacy by not referencing external information that could be traced back to the patient.

* **Patient Real-Time Location:** {location}
"""


PROMPT_TEMPLATE_2 = """
**Context:**
* Assume your role is to generate follow-up questions that the user is likely to ask based on the response provided to their initial query.

* **Initial Query:** {question}
* **Response Given:** {response}
* **Conversation History:** {history}

**Instructions:**

1. **Analyze Response:**
    * Review the response provided given on the Initial Query.

2. **Generate potential follow up questions:**
    * Formulate follow-up questions to further explore the topic or request additional information.
    * Consider the context of the conversation and the user's intent in crafting your questions.
    * Aim to deepen the conversation.

3. **Craft Response:**
    * Use the response provided as a reference point for your follow-up questions.
    * Maintain a conversational and engaging tone to encourage further interaction.
    * Seek to address any unanswered questions or areas of interest raised by the user.
    * Consider incorporating elements of empathy and understanding in your responses.
    * Encourage the user to provide more details or ask additional questions to enhance the conversation.

4. **Returning Response**
    * Pick at most 3 that are most relevant
    * Do not include numbers in your response i.e no numbering the follow-up questions
    * Return your response as a list (e.g., [follow-up_1, follow-up_3, follow-up_3 ]).

"""


@app.route("/login", methods=["POST"])
def login():
    print("Login invoked")
    data = request.get_json()
    # print(f"Data: {data}")
    phone = data["phone"]
    password = data["password"]

    # Query the database for the user
    with open("../data/testData.json", "r") as file:
        database = json.load(file)

    
    try:
        for patient in database["patients"]:
            if patient["patient_id"] == password and patient["contact"]["phone"] == phone:
                with open("../data/chats-hist.json", "r") as file:
                    users_hist = json.load(file)
                user_hist = users_hist.get(password, [])
                
                # print(f"User history: {user_hist}")

                session["user"] = patient["patient_id"]
                return jsonify({"id":patient["patient_id"],"name": patient["name"], "details":patient, "history": user_hist ,"status": "success"})
        return jsonify({"message": "Login failed, Patient does not exist", "status": "error"})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": e, "status": "error"})


@app.route("/logout", methods=["POST"])
def logout():
    data = request.get_json()
    user = data["user"]
    history = data["history"]
    # print(f"User: {data}")

    # Save the history to a json file with user as key
    with open("../data/chats-hist.json", "r") as file:
        users_hist = json.load(file)
    users_hist[user] = history
    with open("../data/chats-hist.json", "w") as file:
        json.dump(users_hist, file)

    session.pop("user", None)
    return jsonify({"message": "User logged out", "status": "success"})


@app.route("/chatbot", methods=["POST"])
def chatbot():
    print("Chatbot invoked")
    data = request.get_json()
    # print(f"Data: {data}")
    query_text = data["message"]
    details = data["details"]
    history = data["history"]
    query = f"{query_text} in Juja,Kiambu,Kenya"

    embedding_function = GoogleGenerativeAIEmbeddings(
        model="models/embedding-001", google_api_key=api_key
    )
    db = Chroma(persist_directory=CHROMA_DB_PATH, embedding_function=embedding_function)

    results = db.similarity_search_with_relevance_scores(query, k=5)
    print("\n")
    # print(f"Results: {results}")

    if len(results) == 0 or results[0][1] < 0.5:
        print("No results found")

    context_text = "\n\n---\n\n".join([doc.page_content for doc, _score in results])
    prompt_template = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
    prompt_template_2 = ChatPromptTemplate.from_template(PROMPT_TEMPLATE_2)
    prompt = prompt_template.format(context=details, question=query_text, hospitals=context_text, location="Juja,Kiambu, Kenya", history=history)

    model_one = ChatGoogleGenerativeAI(model="gemini-pro", google_api_key=api_key)

    try:
        response = model_one.invoke(prompt).content
        print(type(response))
        response_one = dict(model_one.invoke(prompt))

        prompt_2 = prompt_template_2.format(question=query_text, response=response, history=history)
        response_two = model_one.invoke(prompt_2).content

        return jsonify({"message": response_one["content"], "followUps": response_two.split("\n") ,"status": "success"})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": e, "status": "error"})
    finally:
        print("\n")
        print(f"Question: {query_text}" )
        print("\n")
        print(response)
        print("\n")
        print(response_one)
        print("\n")
        print(response_two.split("\n"))


def main():
    """
    Main function for the chatbot
    """
    # parser = argparse.ArgumentParser()
    # parser.add_argument("query_text", type=str, help="Query text")
    # args = parser.parse_args()
    # query_text = args.query_text

    # load the database created earlier
    app.run(port=5000, debug=True)


if __name__ == "__main__":
    main()
