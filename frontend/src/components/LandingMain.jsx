import chat from "./../assets/chat.png";
import nicole from "./../assets/nicole.jpeg";
import ephraim from "./../assets/ephraim.jpg";
import collins from "./../assets/collins.jpg";
import johnmark from "./../assets/johnmark.jpg";

function LandingMain() {
  return (
    <div className="h-screen">
      <div className="h-[761.51px] flex bg-cover rounded-3xl m-5 my-10 shadow-md bg-[url('https://img.freepik.com/free-photo/medic-african-ethnicity-helping-sick-patient-clinic-hospital-ward-doctor-using-medical-equipment-technology-young-woman-healthcare-treatment-black-person-bed_482257-16526.jpg?t=st=1716722515~exp=1716726115~hmac=6788e0c25a0477a93bfcbc1ac9222b2e97c999e4c0860431797eb2c4fd734b25&w=740')]">
        <div className="h-full flex flex-col justify-center text-white w-[50%] p-3">
          <div className="flex flex-col justify-center">
            <div className="font-semibold text-6xl p-2">Message Nishauri</div>
            <div className="text-3xl p-2">
              <div>Your Personal Assistant</div>
              <div>Reliable and Available</div>
            </div>
          </div>
        </div>
        <div className="w-[50%] p-3 pt-20 flex flex-col">
          <div className="relative p-3 ml-10 my-7 self-start bg-[#D9D9D9]  rounded-3xl rounded-bl-none">
            <div>Hello! How can I assist you today?</div>
            <div className="absolute -bottom-6 text-sm left-0">12:12 p.m.</div>
          </div>
          <div className="relative self-end p-3 mr-10 my-7 text-white bg-[#B273F0] rounded-3xl rounded-br-none">
            <div>What are the symptoms of malaria</div>
            <div className="absolute -bottom-6 text-sm right-0">12:13 p.m.</div>
          </div>
          <div className="self-start h-[53px] ml-10 w-[550px] my-7 bg-no-repeat bg-contain bg-[url('https://scontent.whatsapp.net/v/t39.8562-34/327063196_5800887573364035_3294745791563659576_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=18v_pLYcHxEQ7kNvgH7ztpc&_nc_ht=scontent.whatsapp.net&oh=01_Q5AaIGlm-1iSIHPCZ1Bl91_GgFz0sF3ZGH_5W5Herpre_thm&oe=6658E48E')]"></div>
        </div>
      </div>
      <div className="text-center flex justify-center items-center h-[500px]">
        <p className="w-[75%] text-5xl">
          With a personal assistant, you can find more about disease symptoms,
          and recommendations on your lifestyle, improve your life and take care
          of your health.
        </p>
      </div>
      <div className="h-[500px] bg-gradient-to-b from-[#B273F0] to-white flex">
        <div className="text-5xl w-[50%] flex flex-col justify-center items-center">
          <p className="w-[64%] font-medium">
            Do not spend a lot of time typing, just speak to Nishauri like your
            friend.
          </p>
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <div className="h-[80%] w-[43%] rounded-3xl bg-no-repeat bg-contain bg-[url('https://www.shutterstock.com/image-vector/audio-record-concept-voice-messages-600w-2314211757.jpg')]"></div>
        </div>
      </div>
      <div className="flex text-white bg-[#B273F0] h-[700px]">
        <div className="w-1/2 flex justify-center items-center">
          <div className="h-[90%] ">
            <img
              src={chat}
              alt="Chat"
              className="object-cover h-full rounded-2xl"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="font-semibold text-5xl m-5">
            <p>Deal with Emergency situations fast</p>
          </div>
          <div className="text-4xl w-1/2 m-5">
            <p>
              Do not panic while in an emergency, find the nearest hospital to
              get help as fast as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center flex justify-center items-center h-[500px]">
        <p className="w-[75%] text-5xl">
          Make appointments with your doctor for consultations and private
          sessions with the doctor, to keep track of your progress and health,
          work and keep in touch with the doctor directly.
        </p>
      </div>
      <div className="h-[600px] bg-[#4D4949]">
        <div className="h-[80%] flex">
          <div className="w-[25%] flex flex-col justify-evenly items-center h-full">
            <div className="h-[200px] w-[200px] m-5 rounded-2xl bg-contain bg-no-repeat  bg-[url('https://play-lh.googleusercontent.com/dOtBnrlwTJvTdmJeWy_Bu6iYJb0DjrckeIaYuYBDlYx_1kjiDAM7EGAzaZ37L18JgA0=w240-h480')]"></div>
            <button className="bg-[#B273F0] p-3 rounded-3xl px-10 text-white">
              Login
            </button>
          </div>
          <div className="flex-1">
            <div className="flex justify-evenly">
              <div className="w-full">
                <div className="text-sm my-5 text-white">Who We Are</div>
                <div className="text-xl my-3">About Us</div>
                <div className="text-xl my-3">Careers</div>
              </div>
              <div className="w-full">
                <div className="text-sm my-5 text-white">Use Nishauri</div>
                <div className="text-xl my-3">Android</div>
                <div className="text-xl my-3">PC</div>
                <div className="text-xl my-3">Nishauri Web</div>
              </div>
              <div className="w-full">
                <div className="text-sm my-5 text-white">What We Do</div>
                <div className="text-xl my-3">Android</div>
              </div>
              <div className="w-full">
                <div className="text-sm my-5 text-white">Need Help?</div>
                <div className="text-xl my-3">Contact Us</div>
                <div className="text-xl my-3">Help Center</div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-evenly items-center m-5">
                <div className="relative h-[110px] w-[110px]">
                  <img
                    src={nicole}
                    alt="Nicole's Profile"
                    className="absolute h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="relative h-[110px] w-[110px]">
                  <img
                    src={ephraim}
                    alt="Ephraim's Profile"
                    className="absolute h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="relative h-[110px] w-[110px]">
                  <img
                    src={collins}
                    alt="Collins's Profile"
                    className="absolute h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="relative h-[110px] w-[110px]">
                  <img
                    src={johnmark}
                    alt="Johnmark's Profile"
                    className="absolute h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="relative h-[110px] flex justify-center items-center rounded-full w-[110px] bg-[#D9D9D9]">
                  <p>Chris</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 mx-5 flex p-2 text-white">
          <div className="w-1/2 flex justify-evenly">
            <div className="">2024@Nishauri</div>
            <div className="">
              <div>Terms & Privacy</div>
              <div>Policy</div>
            </div>
          </div>
          <div className="w-1/2 flex justify-evenly m-5">
            <div className="h-[65px] w-[65px] bg-no-repeat rounded-full bg-contain bg-[url('data:image/jpeg;base64,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')]"></div>
            <div className="h-[65px] w-[65px] bg-no-repeat rounded-full bg-contain bg-[url('data:image/png;base64,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')]"></div>
            <div className="h-[65px] w-[65px] bg-no-repeat rounded-full bg-contain bg-[url('data:image/png;base64,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')]"></div>
            <div className="h-[65px] w-[65px] bg-no-repeat rounded-full bg-contain bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEUdofL///8Am/EAnfIAmfEUn/L4/P8Al/D0+v7x+P7o9P0AlvHD4vvu9v7e7/0ho/J6wPbX7PzL5vuczviVy/iHxvdZs/Q5qPOp1fm23Po/q/NOr/RsuvWd0fiv2Pl6w/YMYfS1AAAMfklEQVR4nNWd65qiMAyGa0tAkLOcBNT7v8sF8YBITykw7Pc8+2+Z4Z2WJE3TlByMZV8aYEAM1D3eXGzzNyGGz7tpbDnMhGQQc6w4dQ2BjGDs8FZQak4yiFpNFRrhGMAc06ymRtNrKqB1lh7/AObo5xGFRVk6GqBR7rsbw9h+HC02v75Fo9hHTjYcjB+XZvZLJGBl7G8GE97LpefXBAfKu7cNzJmsizLgRNcNYJJypW9likPLZGWY4/20gIdUEzvdNc20FoztR9ZWKL2sSM+u6cCEOdtsWAYxyMNVYGy/2BjlgVNoDI4yTJCVf8DS0ZRZsDRM2MKfsPRTrVU1a4owfr2ex5cJWK0YEKjBXKM/Q3ngKHpQJZj7+i5fQgP3hWCC9u+m2JuGtQpmQA4TttvEL2IBbeUeRwqTNps6fb6sJjWFSZs9jMtDVEojgfGbP/Iuc2KNxESLYfy/8fo8sVJMI4RJ98XS0whnmggmrf/cJE/FalFoI4BJ9sfSmWgRDR/G29O3/xFr+KkOLoy3C185I9pyaXgwx3yX40L6yCbnpQY4MPZ52SzykgJ65iw+OTAXsluWjoZcdGB2aJTHgnre3czC7NSQfcQxabMwezVkH9FWFabaSdAvklWpwYQ7n2OD2Mxa7RfG3vfH/xI0KjC79ZYTsVwO40d//Zaqin4WN1MYt9i9JXuJFtOEzRTmvGfX/y0g07BmArOh6wdgtBdDZ+XYNBD4hgnijb5+oJTUbZznedw2EbVwPCwOBDD+wu/MEXXq/JKEXuAe3cALEz9rHO6nKkwN+3wYb4uvH+jpp+THdpN4HgecUmBeaeFxYS4bxDHUiefLSdzc+sWhNEsbwdBYX4uBMYxXyqeuqX0AQcrYi7+mFABEudfZV9GPK8dDM4a5ygemLIxoWHQV7lDe3om6ztaRMvP6XITQJlnjnZsRTCDfUbIq1yT3LM2vHtKiGxzox6Ruqwd3JX4riEYGbQSTOdKX6QY1xGc5WSHfnPTazvOURXx9/tdQtsXtnOdgjvI/+SOT4EdIGpUdlv7Dic9+8pqM9lXqUtln4n5grtKBIdHD415wY0MF2bux3LGxS+U2yfl8NW8YWx4ts2f67YIZG4i063q6z1jF8UXvoXnD3BRn2UCjbdPAwdTDxSrWht5+YBQSMp8FhD6NEyNKFfOBhTnC38bea84XjC93h+Nsla9Jw2qdgp6n7k7vpJkVXe6ivzS8I7QXTKvwQmNrlNRa/uYzFdQVn3qPU+fJITmJf/or7/SESRQiGfYVVIU6QSkUugNjJw0t6yJLu9npyX76q2bwCXNWmDaT7LsdE2WjxrQLLtO4zfzBeLoyvwnReQxzFAdAz2eyyTd8VXU4vNwwX7b3ngXHXFrswtrjCMZXmGW/MAe/UNv4YJyoX0VHYdT8fLPnLvQAo/DAHMwhzFT8JxBEWe9TtiTQfOr8gZGE2U/N7VjZfiMfHJBs34t0U4o2nrHJA0YhAiK8yRKcqezX6duytxS9Mwz1AQ+YSulDZpyd0bA+iX8ja7GnYm6q9pJVLxhPLcHEt0myVcFvVlhNmeSvNIKJvSeMcvUCf+pfa+AaUIAz9zmR7Fbi+Me/41Hr0MNc1AwsUIFRcq9FxMEBMrcxJEUJC41cEdDLAHPMFAMT3kczKKja+ZMoEGFgEr0lIO39BulTf6qPSdZXRz9vyK9tw8Fc9LZWWJ8O7GBC5WQYrSRmyU4ueWlNZi3OZ/qlFgyQ8AHjK4e/UMuX8W7HUzPr62xdtj4MoX4PY5/VY/nZPd4fHcO0aiPq0GdmBTCmWXcHr1/Tk4OrFMsMglI1YjwG3QgVkXNyLMtpEWcvdWFY63YwgVIs85SlVPn9kR1erlmLOQ2naQAIKYMOJtHauTrprkywumnCAEs6GF+e/Bs/Q/BLEy2phf4jOX4Hc9bblKHFNjTaO8XWuYNRr/oZ4hV2Vz5pZKJMD+VRG0QOyvvLUZzV/YF5yDGnW3UV66YZoT4QW/2h2yGpit59xBvQtNowxCauapwNUPVZk7S6N6TBngtXlqu/RXdyiSxb+BEbliW264VJsjZMItqW5cAkRN0yU24J7gpSSn59y/HJTdkyi5czC0vbzXS2+UbU3Yx+XtJAuf4+sHUmwt2CiTjlxCvoiCjiYXeiETPTbLOPJkTUG7CWaDzFGnQyT1eI779bOROdAjO22TyrEMdcoSG1xuRUOvm5hFBnRFhNtMaT4jPgWpLWZcwJNLMGrFjb8w/S3f99SW9Bp5bRMFaFqjaKNJdAcNrCoKntF83iaIlFG0y0BIuimwShmLyRnmzkMZFIz5r1YvnaSYAAV27YWTMdPzM8s/qyOcUVG3Z+BlFiDvGqVsBGRMyP12oIyj0VazpPhVrRWXWxGcYKApS/NQGLqdLKSo5gWq31zBinRtQpqQnbFqZbzygUM8+LRrKtJ5x89W3Zb1lXjRzAR0PpMZxOxWV5w4bu12PdNLIzH5bm3hZN0xRtnPtLu9ALugjc8UmoP6r9vo59dI9rhAJ2g2Uhp1A9ozlStN6K84Y+OgGOS2zEc9SgfkwsTz+R+YaJbHJAPG5ScyXWGd/iijVa+zMf0XidZAAiw/x5p35/BuNoYJ08jW1yete6au9pPsXKNYYGu/R/6LGnGaKmKV0htYHKybwEED7qAFAPO9iKOK7szOT8HjzqAHQqNEaKTuLjY/ryjZr1DRUaOrUzX7KWpQnNGncMtTMaVU3fAsgWDDNtpbMyAhh/qDdD2xCIEaeVOMLOj9erREO9GTrl1rmbploo2rwYdoR87FGSvpUR3ooAKRZxnwn2iOFL1nmo0ew+GoO/CpDGfAFt+PH31bN9tKhV18yhodHdrMgBUcEwfYnmVdds3NKAUYeV7blCxtJIT/f1Bo/IdzgLsECvCbBUT5X+sCzQHgLeZwEW6ZwBNdKHBnfz1rbPEoUHTGA8zozEyIqHbo6b/yWfm60aJ5sEP4sVN+SSwFuC5VUG/jxzZjLPwKkrbCZd64Ak/w2ehTADjG0QBJzKK/oKnIXa9L5OGz3PaV5xGR6gTn3z0D7mhqjDmHuL12GDJ0yIKe+gThdp4mMzO1+olRKU4RfMIdZ5GHoSStCX3jyUKB7yVFB8+IZJ5QiMQf+v/3NGUVGZRf/2ZcGbhV5e4d0PQJhMgDqO26JX28bZLTVelIWxtVhXKFa8fuobRpx9Hy7osBdaJ3uXcsHeQ/S9CPn00BCbAFpmS60qj/6ivfmh/O2hIdtK7FaV5yU2me00N12Ifcv5lPN8YGzZr2CkOBt/LGm+8K0cQOb6zhyusp2aziQ3mdHo+HG99E0Wp1Gd1QjGlWdpujcp8RmZW8M7l4oXRKOtonEXLcUNeFbfEG4/zNS7VGjIGRfAjWECtd0RYBYtLjp7Z3Z4rZ1VullDM156fHWe89U7fDi0qLxAPkK26/WXOy7nIifv8ZV2+IIJdHbRwDnV91saepwrPe3jo3VhS0/rdRif7OBNujXqZWqh+4uXRV7d/DRNwtALAtcNvP5ESurfrlnbEMda8+4aiL7X6t8wiHrivrUnI1HZ9GFbnN/7IK6po6jv97n2hULTrh6TDqfYHVLoA+qPALbo+jpk/vgwh+t/0xS407QueQpz3H9/85d+S19/+jWrtKDahaZf/xzMIftfOmn/dhmYadhunJLfRFD8vvkMjPc/9J8GMrMambsX4IJsn7yhgM5t2M3e2HDfvUWjs00WZmG0YrS/EJ0/YjV/y0my75tBeNdQce6fMaovWlvweyOAEOZw3fPNQLymPDwYO98rDdCcl4vk3qZ1jPdJAzTmrm/595yZb3SuIvZz6YQKDOp88epiov6CorsBjYtAlpf4eLXw1kbNbrnriwrvOZTcp5nui4ZK2itIbjpN93QdDS0khROyO2iT/dBQaSd+6e3AYYE8Ara0HPmtAvJ7m71deE8Q3DypAdNFNnuA4cYwejB9R6s/djhMrUei2i30N+1Dw8uyKJ6jVIPpTPTfXd4OTGaSNWGWqQvDscBddR9VFebgVn9zIzUrK+VNOmWYbqq129voziJrlEtqwByCDDYeHKZ3dkIHpm+Gvum9oY74anNDmL5V13b37VHdBry6MN2KDbawawCg3+ZKG6b3oOsHBAx1XAIBc/CyxStgvtWNSoY5cIyBWaE26QuF9XfOYISDOdhpVoovH0KjOOXj0pkNYXqcc7l4xQIwqzzje3SiYfru7FW9bE0Ms+rKpN2oAUzfvNUvZu6NRIo6zQVfvW4M0yvMyBJ+FCgxP/X5D5MAqY7u4aPYAAAAAElFTkSuQmCC')]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingMain;
