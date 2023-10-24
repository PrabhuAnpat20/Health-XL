import React from "react";

function Contact() {
  return (
    <>
      <div className="mx-32">
        <div className="flex justify-center text-2xl mt-8 font-bold">
          <p className="text-white">Let's </p>
          <span className=" text-red-600 ml-1"> Begin...</span>
        </div>
        <div className="flex my-12 justify-center ml-16">
          <div className=" text-white mt-28">
            <p className="text-5xl font-bold">Lets Go...</p>
            <p className=" text-4xl">Start Your Journey Now !</p>
          </div>
          <div className=" w-1/2 ml-11">
            <img src="women.webp" className=" " alt="" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="  border-solid border-2 border-red-600 max-w-md ">
            <div className=" p-24 flex-col justify-center">
              <p className="text-3xl text-white mb-4 font-semibold ">Connect With Us</p>
              <div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="  my-4 w-56 p-1"
                />
                <br />
                <input
                  type="mobilenumber"
                  placeholder="Enter Mobile Number "
                  className="  my-4 w-56 p-1"
                />
                <br />
                <div className="flex justify-center text-white">
                  <button className=" bg-red-600 p-2 rounded-md mt-5 ">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
