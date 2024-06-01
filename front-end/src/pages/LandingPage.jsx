import React from "react";
import land1 from "../../public/1.png";
import land2 from "../../public/2.png";
import land3 from "../../public/3.png";
import land4 from "../../public/4.png";
import land5 from "../../public/5.png";
import land6 from "../../public/6.png";
import land7 from "../../public/7.png";

import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="flex flex-col justify w-screen overflow-x-hidden no-scrollbar h-screen content center bg-violet-950">
      <div>
        <img src={land1} alt="" />
      </div>
      <div>
        <img src={land2} alt="" />
      </div>
      <div>
        <img src={land3} alt="" />
      </div>
      <div>
        <img src={land4} alt="" />
      </div>
      <div>
        <img src={land5} alt="" />
      </div>
      <div>
        <img src={land6} alt="" />
      </div>
      <div>
        <img src={land7} alt="" />
      </div>
      <div className="fixed top-4 right-[20px]">
        <Link to={"/login"}>
          <button className="bg-gradient-to-r from-[#f0d040] to-[#cd8f09] w-[200px] h-[50px] rounded-lg font-bold market-cards">
            PLAY NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
