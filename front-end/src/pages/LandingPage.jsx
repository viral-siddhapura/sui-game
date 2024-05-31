import React from "react";
import land2 from "../../public/landin2.png";
import land3 from "../../public/land3.png";
import land4 from "../../public/land4.png";
import land5 from "../../public/land5.png";
import land6 from "../../public/land6.png";

const LandingPage = () => {
  return (
    <div
      className="flex flex-col justify w-screen h-screen content center bg-violet-950"
   
    >

      <div>
        {" "}
        <img src={land2} alt="" />{" "}
      </div>
      <div>
        {" "}
        <img src={land3} alt="" />{" "}
      </div>
      <div>
        {" "}
        <img src={land4} alt="" />{" "}
      </div>
      <div>
        {" "}
        <img src={land5} alt="" />{" "}
      </div>
      <div>
        {" "}
        <img src={land6} alt="" />{" "}
      </div>
      <div> 
      <button className="bg-blue-500 h-[200px] w-[50px]"> Login Page </button>
      </div>
    </div>
  );
};

export default LandingPage;
