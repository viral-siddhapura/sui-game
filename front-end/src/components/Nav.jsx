import React from "react";
import { Link } from "react-router-dom";
import food from "../../public/food.png";
import coin from "../../public/coin.png";
import logo from "../../public/suifrenia-logo.png";


function Navbar() {
  const links = [
    { url: "nfts", name: "Nfts" },
    { url: "accessories", name: "Dress Up" },
    { url: "evolution", name: "Evolution" },
    { url: "battleground", name: "Battle Map" },
  ];

  return (
    <div>
      <div className="w-[100%] m-0 h-[60px] p-0 z-50 flex flex-row justify-between navbar-component text-white">
        <div className="w-[150px] flex justify-between items-center">
            <img src={logo} alt="" className="w-[60px] h-[60px]"/>
            <h1 className="text-[30px] font-bold text-black">SUIFRENIA</h1>
        </div>

        <span className="flex justify-between w-[60%] px-4 py-1">
          <span className="w-[80px] h-[90%] bg-gradient-to-r from-[#4e1818] to-[#713838] rounded-lg flex items-center justify-evenly">
            <img src={food} alt="" className="w-[30px] h-[30px]"/>
            <p>500</p>
          </span>
          <span className="w-[80px] h-[90%] bg-gradient-to-r from-[#4e1818] to-[#713838] rounded-lg flex items-center justify-evenly">
            <img src={coin} alt="" className="w-[30px] h-[30px]"/>
            <p>500</p>
          </span>
          {links.map((link, index) => (
            <Link
              to={`/${link.url}`}
              key={index}
              className="w-[80px] h-[90%] bg-gradient-to-r from-[#713838] to-[#4e1818] rounded-lg flex items-center justify-center"
            >
              <span className="w-full h-full flex items-center justify-center">
                {link.name}
              </span>
            </Link>
          ))}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
