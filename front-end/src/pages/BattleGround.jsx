import React, { useState } from 'react';
import shark from '/aquacard.png';
import './styles.css';

function BattleGround() {
  const [selectedCardPlayer1, setSelectedCardPlayer1] = useState(null);
  const [selectedCardPlayer2, setSelectedCardPlayer2] = useState(null);
  const [title, setTitle] = useState('Title');
  const [animationStarted, setAnimationStarted] = useState(false);

  const handleCardClick = (card, player) => {
    if (player === 1) {
      setSelectedCardPlayer1(card);
    } else if (player === 2) {
      setSelectedCardPlayer2(card);
    }
  };

  const startAnimation = () => {
    if (!animationStarted) {
      const titles = ['Skill', 'Power', 'Speed', 'Hype'];
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      setTitle(randomTitle);
      setAnimationStarted(true);
    }
  };

  const Card = ({ src, name, level, width, height, player }) => (
    <div
      className='mt-8 flex flex-col items-center relative cursor-pointer'
      style={{ width: 'auto', height: height }}
      onClick={() => handleCardClick({ src, name, level }, player)}
    >
      <img src={src} alt={name} className='w-full h-full object-cover' />
      <div className='absolute text-center w-full text-black font-bold bottom-[0px] h-fit'>
        <h3 className='text-[0.8em]'>{name}</h3>
        <p className='text-[1em]'>Level {level}</p>
      </div>
    </div>
  );

  const Card2 = ({ src, name, level, width, height }) => (
    <div
      className='mt-8 flex flex-col items-center relative cursor-pointer'
      style={{ width: 'auto', height: height }}
    >
      <img src={src} alt={name} className='w-full h-full object-cover' />
      <div className='absolute text-center w-full text-black font-bold bottom-[20px] h-fit'>
        <h3 className='text-[1.2em]'>{name}</h3>
        <p className='text-[1em]'>Level {level}</p>
      </div>
    </div>
  );

  return (
    <div className='battleground w-[100vw] h-[100vh]'>
      <div className='w-[100vw] h-[100vh] flex justify-between'>
        <div className='first_player w-[50%] h-[100vh] flex flex-row items-center justify-between'>
          <div className='card-area w-[25%] h-[100vh] flex flex-col justify-evenly p-4 items-center'>
            <h3 className='text-[2vw]'>Player 1</h3>
            <Card
              src={shark}
              width='100%'
              height='20%'
              name='Shark'
              level='1'
              player={1}
            />
            <Card
              src={shark}
              width='100%'
              height='20%'
              name='Shark'
              level='1'
              player={1}
            />
            <Card
              src={shark}
              width='100%'
              height='20%'
              name='Shark'
              level='1'
              player={1}
            />
          </div>

          <div className='playing_card w-[75%] h-[100vh] flex justify-center items-center'>
            {selectedCardPlayer1 && (
              <Card2
                src={selectedCardPlayer1.src}
                width='50%'
                height='40%'
                name={selectedCardPlayer1.name}
                level={selectedCardPlayer1.level}
              />
            )}
          </div>
        </div>

        <div className='second_player w-[50%] h-[100vh] flex flex-row items-center justify-between'>
          <div className='playing_card w-[75%] h-[100vh] flex justify-center items-center'>
            {selectedCardPlayer2 && (
              <Card2
                src={selectedCardPlayer2.src}
                width='50%'
                height='40%'
                name={selectedCardPlayer2.name}
                level={selectedCardPlayer2.level}
              />
            )}
          </div>

          <div className='card-area w-[25%] h-[100vh] bg-green-500 flex flex-col justify-evenly p-4 items-center'>
            <h3 className='text-[2vw]'>Player 2</h3>
            <Card
              src={shark}
              width='100%'
              height='20%'
              name='Shark'
              level='1'
              player={2}
            />
            <Card
              src={shark}
              width='100%'
              height='20%'
              name='Shark'
              level='2'
              player={2}
            />
            <Card
              src={shark}
              width='100%'
              height='20%'
              name='Shark'
              level='3'
              player={2}
            />
          </div>
        </div>
      </div>
      <div className='battle-button absolute top-0 w-[100%] flex justify-center items-center h-[200px]'>
        <button
          className='w-[150px] h-[50px] bg-white m-auto rounded-[6px] text-[1.5vw] flex justify-center items-center'
          onClick={startAnimation}
        >
          {title}
        </button>
      </div>
    </div>
  );
}

export default BattleGround;
