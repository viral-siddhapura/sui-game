import React, { useState, useEffect } from "react";
import shark from "../../public/aquacard.png";
import "./styles.css";

function BattleGround() {
  const [selectedCardPlayer1, setSelectedCardPlayer1] = useState(null);
  const [selectedCardPlayer2, setSelectedCardPlayer2] = useState(null);
  const [title, setTitle] = useState("Start Battle");
  const [titleClass, setTitleClass] = useState("");
  const [isBattleStarted, setIsBattleStarted] = useState(false);
  const [winner, setWinner] = useState(null);
  const [round, setRound] = useState(1);
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);

  useEffect(() => {
    if (isBattleStarted && selectedCardPlayer1 && selectedCardPlayer2) {
      compareCards();
    }
  }, [isBattleStarted, selectedCardPlayer1, selectedCardPlayer2]);

  const handleCardClick = (card, player) => {
    if (isBattleStarted) {
      if (player === 1) {
        setSelectedCardPlayer1(card);
      } else if (player === 2) {
        setSelectedCardPlayer2(card);
      }
    }
  };

  const compareCards = () => {
    if (selectedCardPlayer1 && selectedCardPlayer2) {
      const player1Value = selectedCardPlayer1[title.toLowerCase()];
      const player2Value = selectedCardPlayer2[title.toLowerCase()];

      if (player1Value > player2Value) {
        setWinner(1);
        setScorePlayer1(scorePlayer1 + 1);
      } else if (player1Value < player2Value) {
        setWinner(2);
        setScorePlayer2(scorePlayer2 + 1);
      } else {
        setWinner("draw");
        setScorePlayer1(scorePlayer1 + 0.5);
        setScorePlayer2(scorePlayer2 + 0.5);
      }

      setTimeout(() => {
        if (round < 3) {
          startNextRound();
        } else {
          endGame();
        }
      }, 1000);
    }
  };

  const startNextRound = () => {
    setRound(round + 1);
    setSelectedCardPlayer1(null);
    setSelectedCardPlayer2(null);
    setWinner(null);
    setTitle("Next Round");
    setIsBattleStarted(false);
    setTimeout(() => {
      setTitleClass("");
    }, 500);
  };

  const endGame = () => {
    setTitle("Game Over");
    setIsBattleStarted(false);
    setTimeout(() => {
      setTitleClass("");
    }, 500);
  };

  const startBattle = () => {
    const titles = ["stamina", "Power", "Speed", "skill"];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    setTitle(randomTitle);
    setTitleClass("title-reveal");
    setIsBattleStarted(true);
    setWinner(null);
    setRound(1);
    setScorePlayer1(0);
    setScorePlayer2(0);

    setTimeout(() => {
      setTitleClass("");
    }, 500);
  };

  const Card = ({ card, player }) => (
    <div
      className="mt-8 flex flex-col items-center relative cursor-pointer"
      style={{ width: "auto", height: "20%" }}
      onClick={() => handleCardClick(card, player)}
    >
      <img
        src={card.src}
        alt={card.name}
        className="w-full h-full object-cover"
      />
    </div>
  );

  const Card2 = ({ card, isWinner }) => (
    <div
      className={`mt-8 flex flex-col items-center relative cursor-pointer border-[10px] ${
        isWinner === true
          ? "border-green-500"
          : isWinner === false
          ? "border-red-500"
          : ""
      }`}
      style={{ width: "auto", height: "40%" }}
    >
      <img
        src={card.src}
        alt={card.name}
        className="w-full h-full object-cover"
      />
      <div className="w-full card-details bg-opacity-80 text-center py-2 border-t-2 border-black font-bold">
        <h3 className="text-[1em] mb-1">{card.name}</h3>
        <p className="text-[0.9em] mb-1">Power: {card.power}</p>
        <p className="text-[0.9em] mb-1">Speed: {card.speed}</p>
        <p className="text-[0.9em] mb-1">Stamina: {card.stamina}</p>
        <p className="text-[0.9em] mb-1">skill: {card.skill}</p>
      </div>
    </div>
  );

  return (
    <div className="battleground w-[100vw] h-[100vh]">
      <div className="w-[100vw] h-[100vh] flex justify-between">
        <div className="first_player w-[50%] h-[100vh] flex flex-row items-center justify-between">
          <div className="card-area w-[25%] h-[100vh] flex flex-col justify-evenly p-4 items-center">
            <h3 className="text-[2vw]">Player 1</h3>
            <Card
              card={{
                src: shark,
                name: "Shark",
                power: 10,
                speed: 8,
                stamina: 7,
                skill: 6,
              }}
              player={1}
            />
            <Card
              card={{
                src: shark,
                name: "Cappy",
                power: 3,
                speed: 8,
                stamina: 5,
                skill: 6,
              }}
              player={1}
            />
            <Card
              card={{
                src: shark,
                name: "Dummy",
                power: 10,
                speed: 6,
                stamina: 7,
                skill: 3,
              }}
              player={1}
            />
          </div>

          <div className="playing_card w-[75%] h-[100vh] flex justify-center items-center">
            {selectedCardPlayer1 && (
              <Card2 card={selectedCardPlayer1} isWinner={winner === 1} />
            )}
          </div>
        </div>

        <div className="second_player w-[50%] h-[100vh] flex flex-row items-center justify-between">
          <div className="playing_card w-[75%] h-[100vh] flex justify-center items-center">
            {selectedCardPlayer2 && (
              <Card2 card={selectedCardPlayer2} isWinner={winner === 2} />
            )}
          </div>

          <div className="card-area w-[25%] h-[100vh] bg-green-500 flex flex-col justify-evenly p-4 items-center">
            <h3 className="text-[2vw]">Player 2</h3>
            <Card
              card={{
                src: shark,
                name: "Shark",
                power: 9,
                speed: 7,
                stamina: 6,
                skill: 5,
              }}
              player={2}
            />
            <Card
              card={{
                src: shark,
                name: "cappy",
                power: 9,
                speed: 4,
                stamina: 5,
                skill: 1,
              }}
              player={2}
            />
            <Card
              card={{
                src: shark,
                name: "Dummy",
                power: 3,
                speed: 4,
                stamina: 6,
                skill: 5,
              }}
              player={2}
            />
          </div>
        </div>
        <div className="battle-button absolute top-0 w-[100%] flex justify-center items-center h-[200px]">
          <button
            className={`w-[150px] h-[50px] bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-400 rounded-[6px] text-[1.5vw] flex justify-center items-center ${titleClass}`}
            onClick={startBattle}
          >
            {title}
          </button>
          {/* {selectedCardPlayer1 && selectedCardPlayer2 && (
          <button
            className="w-[150px] h-[50px] bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 rounded-[6px] text-[1.5vw] flex justify-center items-center ml-4"
            onClick={compareCards}
          >
            Compare Cards
          </button>
        )} */}
        </div>
        {
          <div className="absolute top-[0] left-0 w-full bg-gray-800 text-white text-center py-4 flex justify-between px-12">
            <p className="text-lg">Score: {scorePlayer1}</p>
            <p className="text-lg">Round: {round}</p>
            <p className="text-lg"> Score: {scorePlayer2}</p>
          </div>
        }
      </div>
    </div>
  );
}

export default BattleGround;
