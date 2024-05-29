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
    <div className="mt-8 rounded-lg shadow-md bg-white w-[300px] text-black h-[418px] flex items-center justify-center">
      <p>No Card Selected</p>
    </div>
  );

  const Card = ({ src, name, level, width, height }) => (
    <div
      className={`w-[${width}] h-[${height}] mt-8 flex flex-col items-center relative cursor-pointer`}
      onClick={() => handleImageClick(src)}
    >
      <img src={src} alt="Bear" className="cursor-pointer" />
      <div className="absolute text-center w-full text-black font-bold bottom-8">
        <h3>{name}</h3>
        <p>Level {level}</p>
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
      return <p>Select theme</p>; // If no theme is selected, don't display details
    }
  };

  return (
    <div className="w-[100vw] h-screen">
      <div className="w-[100vw] h-[60px] absolute z-50 bg-white">NAVBAR</div>
      <div className="acc-page bg-gray-200 flex text-white ">
        <div className="w-3/4 p-8 overflow-y-auto">
          <h1 className="text-3xl font-bold p-4">Your Cards</h1>
          <div className="options-container no-scrollbar">
            <Card
              src={bear}
              name={"Capybara"}
              level={"1"}
              width={"150px"}
              height={"209px"}
            />
          </div>
          <h2 className="text-xl font-bold my-4">Selected Image:</h2>
          <div className="w-[100%] flex justify-between items-center">
            {selectedImage ? (
              <div className="mt-2">
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
              <div className="w-[55%] fit h-[438px] flex justify-center items-center theme-details text-black">
                <ThemeDetails />
              </div>
            }
          </div>
        </div>
        <div className="w-[400px] h-[100vh] theme-wrapper p-8 flex flex-col justify-between items-center">
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
          </div>
          <button
            className={`mt-8 px-4 py-2  rounded-md ${
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
  );
}

export default Accessories;
