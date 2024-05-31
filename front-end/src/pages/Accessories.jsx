import React, { useState } from "react";
import bear from "/bear-default.png";
import shark from "/bull-shark-default.png";
import theme1 from "/junglecard.png"; // Import theme images as required
import theme2 from "/mysticcard.png";
import theme3 from "/aquacard.png";

function Accessories() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleThemeSelect = (themeSrc) => {
    setSelectedTheme(themeSrc);
  };

  const applyTheme = () => {
    if (selectedTheme) {
      setSelectedImage(selectedTheme);
    }
  };

  const PlaceholderCard = () => (
    <div className=" rounded-2xl shadow-md bg-slate-700 ml-[50px] w-[240px] text-white border-8 border-yellow-100 border-double h-[350px] flex items-center justify-center">
      <p>First Select a Card</p>
    </div>
  );

  const Card = ({ src, name, level, width, height }) => (
    <div>
      <div
        className={`w-[${width}] h-[${height}] ml-[20px] mt-[0px]  flex flex-col items-center relative scale-[0.8] cursor-pointer`}
        onClick={() => handleImageClick(src)}
      >
        <img src={src} alt="Bear" className="cursor-pointer rounded-2xl" />
        <div className="absolute text-center w-full text-black font-bold bottom-8">
          <h3>{name}</h3>
          <p>Level {level}</p>
        </div>
      </div>
    </div>
  );

  const ThemeDetails = () => {
    if (selectedTheme === theme1) {
      return <p>This is Theme 1. It represents the jungle.</p>;
    } else if (selectedTheme === theme2) {
      return <p>This is Theme 2. It represents the mystic.</p>;
    } else if (selectedTheme === theme3) {
      return <p>This is Theme 3. It represents the aqua.</p>;
    } else {
      return (
        <p className="font-semibold text-2xl ml-[-20px]">
          Welcome to the Dress-up Page{" "}
        </p>
      ); // If no theme is selected, don't display details
    }
  };

  return (
    <div className="w-full h-full ">
      <div className="acc-page bg-red-00 flex flex-col p-0 m-0 w-[100%]  h-[100vh]   text-white ">
        <div className="w-[100%] m-0 h-[60px] p-0 z-50 bg-slate-700 text-center ">
          <h5>NAVBAR</h5>
        </div>
        <div>
          <h1 className="text-3xl ml-[55px] p-4 font-bold ">Current Cards:</h1>{" "}
        </div>
        <div className="flex w-[100%] mt-[0px] p-0 h-[100%]">
          <div className="w-[80%] p-0 h-[85vh] bg-yellow-00 overflow-y-hidden ">
            <div className="options-container flex w-[100%] h-[190px] overflow-x-auto p-4 bg-red-00 ml-[0px] no-scrollbar">
              <Card
                src={bear}
                name={"Capybara"}
                level={"1"}
                width={"150px"}
                height={"209px"}
              />
              <Card
                src={bear}
                name={"Capybara"}
                level={"1"}
                width={"150px"}
                height={"209px"}
              />
              <Card
                src={bear}
                name={"Capybara"}
                level={"1"}
                width={"150px"}
                height={"209px"}
              />
              <Card
                src={bear}
                name={"Capybara"}
                level={"1"}
                width={"150px"}
                height={"209px"}
              />
              <Card
                src={bear}
                name={"Capybara"}
                level={"1"}
                width={"150px"}
                height={"209px"}
              />
              <Card
                src={bear}
                name={"Capybara"}
                level={"1"}
                width={"150px"}
                height={"209px"}
              />
              <Card
                src={bear}
                name={"Capybara"}
                level={"1"}
                width={"150px"}
                height={"209px"}
              />
              <Card
                src={bear}
                name={"Capybara"}
                level={"1"}
                width={"150px"}
                height={"209px"}
              />
              <Card
                src={bear}
                name={"Capybara"}
                level={"1"}
                width={"150px"}
                height={"209px"}
              />
              <Card
                src={bear}
                name={"Capybara"}
                level={"1"}
                width={"150px"}
                height={"209px"}
              />
              <Card
                src={bear}
                name={"Capybara"}
                level={"1"}
                width={"150px"}
                height={"209px"}
              />
              <Card
                src={bear}
                name={"Capybara"}
                level={"1"}
                width={"150px"}
                height={"209px"}
              />
            </div>
            <h1 className="text-3xl bg-green-00 font-medium ml-[65px] underline ">
              Preview:
            </h1>
            <div className="w-[100%] bg-red-00 h-[54vh] flex justify-between items-center">
              {selectedImage ? (
                <div className="mt-[-30px]">
                  <Card
                    src={selectedImage}
                    name={"Capybara"}
                    level={"1"}
                    width={"300px"}
                    height={"418px"}
                  />
                </div>
              ) : (
                <PlaceholderCard />
              )}

              {
                <div className="w-[55%] fit h-[438px] flex justify-center items-center  theme-details text-slate-800">
                  <ThemeDetails />
                </div>
              }
            </div>
          </div>
          <div className="w-[20%] h-[95vh] mt-[-70px] bg-cyan-400 theme-wrapper p-0 flex flex-col justify-between items-center">
            <h2 className="text-xl font-bold mb-4">Select Theme:</h2>
            <div className="theme-options flex flex-col items-center">
              <img
                src={theme1}
                alt="Theme 1"
                className={`cursor-pointer mb-2 ${
                  selectedTheme === theme1
                    ? "border-[8px] border-green-700"
                    : "border-[8px] border-gray-300"
                }`}
                onClick={() => handleThemeSelect(theme1)}
              />
              <img
                src={theme2}
                alt="Theme 2"
                className={`cursor-pointer mb-2 ${
                  selectedTheme === theme2
                    ? "border-[8px] border-green-700"
                    : "border-[8px]  border-gray-300"
                }`}
                onClick={() => handleThemeSelect(theme2)}
              />
              <img
                src={theme3}
                alt="Theme 3"
                className={`cursor-pointer mb-2 ${
                  selectedTheme === theme3
                    ? "border-[8px]  border-green-700"
                    : "border-[8px]  border-gray-300"
                }`}
                onClick={() => handleThemeSelect(theme3)}
              />

              <button
                className={`mt-8 mb-4 px-4 py-2  rounded-md ${
                  selectedImage
                    ? "bg-green-600 text-white"
                    : "bg-gray-300 cursor-not-allowed text-black"
                }`}
                disabled={!selectedImage}
                onClick={applyTheme}
              >
                Apply Theme
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accessories;
