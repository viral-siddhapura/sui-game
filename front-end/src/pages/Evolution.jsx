import React, { useState } from 'react';


const Evolution = () => {
  const [food, setFood] = useState(100);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [battleDeck, setBattleDeck] = useState([null, null, null]);

  const characters = [
    {
      id: 1,
      name: 'Capybara',
      level: 1,
      hp: 100,
      speed: 10,
      power: 15,
      stamina: 20,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgga0xByKSmuEvdKDcRyXgpEwzUlSl6GXjGImzs60Nuk8gpi9OlIUHrc9TrvuvT6cjT6E&usqp=CAU',
      foodRequired: 20,
      foodProgress: 0,
    },
    {
      id: 2,
      name: 'Bullshark',
      level: 1,
      hp: 120,
      speed: 12,
      power: 20,
      stamina: 25,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vYGoAqt2xW_3uzGPZpUrxeu9tRARu7W5rdZZlu2l8A&s',
      foodRequired: 20,
      foodProgress: 0,
    },
  ];

  const handleFeed = () => {
    if (selectedCharacter) {
      const foodNeeded = selectedCharacter.foodRequired - selectedCharacter.foodProgress;
      const foodToConsume = Math.min(food, foodNeeded);

      if (foodToConsume > 0) {
        setFood(food - foodToConsume);
        selectedCharacter.foodProgress += foodToConsume;

        if (selectedCharacter.foodProgress >= selectedCharacter.foodRequired) {
          selectedCharacter.hp += 10;
          selectedCharacter.speed += 2;
          selectedCharacter.power += 3;
          selectedCharacter.stamina += 4;
          selectedCharacter.level += 1;
          selectedCharacter.foodProgress = 0; // Reset food progress after leveling up
          selectedCharacter.foodRequired += 10; // Increase food required for next level
        }

        setSelectedCharacter({ ...selectedCharacter });
      }
    }
  };

  const handleAddToBattle = () => {
    const newBattleDeck = [...battleDeck];
    const indexToReplace = newBattleDeck.findIndex((slot) => slot === null);
    if (indexToReplace !== -1) {
      newBattleDeck[indexToReplace] = selectedCharacter;
    } else {
      newBattleDeck[0] = selectedCharacter; // Replace the first one for simplicity
    }
    setBattleDeck(newBattleDeck);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="fixed w-full flex justify-between p-4 bg-gray-800 text-white z-10">
        <div className="flex items-center">
          <span className="animate-pulse">🍖 Food: {food}</span>
        </div>
        <div className="flex items-center">
          <span className="animate-pulse">💰 Coins: 200</span>
        </div>
      </div>
      <div className="flex flex-1 mt-16">
        <div className="w-1/4 p-4 bg-gray-200 overflow-y-auto">
          {characters.map((character) => (
            <div
              key={character.id}
              className="p-4 mb-4 bg-white rounded shadow hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedCharacter(character)}
            >
              <img src={character.image} alt={character.name} className="w-full h-auto rounded" />
              <p className="mt-2 font-bold">{character.name}</p>
              <p>Level: {character.level}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 p-4 flex flex-col items-center justify-center">
          {selectedCharacter && (
            <div className="w-2/3 p-4 bg-white rounded shadow-lg">
              <img
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
                className="w-full h-auto rounded"
              />
              <h2 className="text-xl font-bold mt-4">{selectedCharacter.name}</h2>
              <p>Level: {selectedCharacter.level}</p>
              <p>HP: {selectedCharacter.hp}</p>
              <p>Speed: {selectedCharacter.speed}</p>
              <p>Power: {selectedCharacter.power}</p>
              <p>Stamina: {selectedCharacter.stamina}</p>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-4 overflow-hidden">
                <div
                  className="bg-blue-500 h-4 rounded-full transition-all duration-300"
                  style={{ width: `${(selectedCharacter.foodProgress / selectedCharacter.foodRequired) * 100}%` }}
                ></div>
              </div>
              <p className="mt-2">Food required for next level: {selectedCharacter.foodRequired}</p>
              <div className="mt-4">
                <button
                  onClick={handleFeed}
                  className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  Feed
                </button>
              </div>
              <div className="mt-2">
                <button
                  onClick={handleAddToBattle}
                  className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-700"
                >
                  Add to Battle
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center p-4 bg-gray-800 text-white">
        {battleDeck.map((slot, index) => (
          <div
            key={index}
            className="w-1/4 p-2 bg-gray-700 mx-2 rounded flex items-center justify-center"
          >
            {slot ? (
              <img src={slot.image} alt={slot.name} className="w-full h-auto rounded" />
            ) : (
              <span>Empty</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Evolution;
