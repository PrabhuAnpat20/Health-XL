import React from "react";

function Home() {
  return (
    <>
      <div className="mx-32 flex text-white justify-evenly">
        <div className="  max-w-xl mt-28 ">
            <h1 className=" font-extrabold text-5xl mb-8">Get Comited to Fitness</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus assumenda recusandae quae consequuntur pariatur at officiis nemo nesciunt? Reprehenderit eius expedita totam earum quas ullam fugit</p>
            <button className=" bg-red-600 p-2 rounded-md mt-5 ">Join Now</button>
        </div>
        <div className="">
          <img src="Ankit.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
