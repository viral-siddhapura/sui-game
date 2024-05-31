import { useState, useEffect } from 'react';
import './styles.css';
import jungle from '../../public/junglecard1.png';
import aqua from '../../public/aquacard.png';
import mystic from '../../public/mysticcard.png';
import map1 from '../../public/bgmap4.png';
import { feedCards, getCardCollection } from '../../node-api/server-api';

const Evolution = () => {
  const [food, setFood] = useState(1000);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [battleDeck, setBattleDeck] = useState([null, null, null]);
  const [isLevelUp, setIsLevelUp] = useState(false);

  const [characters, setCharcaters] = useState([
    {
      id: 1,
      name: 'Capybara',
      level: 1,
      hp: 100,
      speed: 10,
      power: 15,
      stamina: 20,
      image: jungle,
      foodRequired: 20,
      foodProgress: 0,
    },
    {
      id: 2,
      name: 'Bullshark 1',
      level: 1,
      hp: 120,
      speed: 12,
      power: 20,
      stamina: 25,
      image: aqua,
      foodRequired: 20,
      foodProgress: 0,
    },
    {
      id: 3,
      name: 'Bullshark 2',
      level: 1,
      hp: 120,
      speed: 12,
      power: 20,
      stamina: 25,
      image: mystic,
      foodRequired: 20,
      foodProgress: 0,
    },
  ]);

  const fetchCardCollections = async () => {
    const res = await getCardCollection();
    console.log(res.data);
    setCharcaters(res.data);
  };

  useEffect(() => {
    if (characters.length > 0) {
      setSelectedCharacter(characters[0]);
    }
    fetchCardCollections();
  }, []);

  const handleFeed = async () => {
    await feedCards({
      id: selectedCharacter._id,
      hp: selectedCharacter.hp + 10,
      speed: selectedCharacter.speed + 2,
      power: selectedCharacter.power + 3,
      stamina: selectedCharacter.stamina + 4,
      level: selectedCharacter.level + 1,
    });
    alert('Leveled Up!');
    window.location.reload();
    if (selectedCharacter) {
      const foodNeeded =
        selectedCharacter.foodRequired - selectedCharacter.foodProgress;
      const foodToConsume = Math.min(food, foodNeeded);

      if (foodToConsume > 0) {
        setFood(food - foodToConsume);
        selectedCharacter.foodProgress += foodToConsume;

        if (selectedCharacter.foodProgress >= selectedCharacter.foodRequired) {
          setIsLevelUp(true);
          setTimeout(() => {
            selectedCharacter.hp += 10;
            selectedCharacter.speed += 2;
            selectedCharacter.power += 3;
            selectedCharacter.stamina += 4;
            selectedCharacter.level += 1;
            selectedCharacter.foodProgress = 0; // Reset food progress after leveling up
            selectedCharacter.foodRequired += 10; // Increase food required for next level
            setIsLevelUp(false);
            setSelectedCharacter({ ...selectedCharacter });
          }, 3000); // Match the duration of the animation
        } else {
          setSelectedCharacter({ ...selectedCharacter });
        }
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
    <div
      className='flex flex-col bg-yellow-600 h-[100vh]'
      style={{
        backgroundImage: `url(${map1})`,
        backgroundSize: 'cover',
        // backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        // width: "100%",
        height: '100vh',
      }}
    >
      <div className='fixed w-full flex justify-between p-4 bg-gray-700 h-[60px] text-white z-10'>
        <div className='flex items-center'>
          <span className=''>🍅 Food: {food}</span>
        </div>
        <div className='flex items-center'>
          <span className=''>💰 Coins: 200</span>
        </div>
      </div>
      <div className='bg-blue-00 flex '>
        <div className='flex flex-row w-[100%] h-[91.13vh] mt-16 '>
          <div className='w-[30%] mt-4 rounded-3xl ml-4 p-4 flex flex-col bg-orange-00 overflow-auto no-scrollbar'>
            {characters.map((character) => (
              <div key={characters._id}>
                <div
                  className='p-0 mb-[20px] flex flex-col  items-center bg-red-00 image-border rounded hover:cursor-pointer relative'
                  onClick={() => setSelectedCharacter(character)}
                >
                  <img
                    src={character.cardImgUrl}
                    alt={character.name}
                    className='w-full h-auto rounded-3xl'
                  />
                  <div className='absolute bottom-6 flex flex-col items-center gap-1'>
                    <span className=' font-bold text-3xl bg-white'>
                      {character.name}
                    </span>

                    <span className='font-bold text-xl bg-white'>
                      Level: {character.level}
                    </span>
                  </div>
                  {/* <img className='absolute mt-[-385px] w-[900px] ' src= {border1} alt="" />  */}
                </div>
              </div>
            ))}
          </div>
          <div className=' mt-4 flex flex-col ml-[5%] w-[50%] h-[88vh]  rounded-3xl bg-yellow-00 items-center  text-xl '>
            {selectedCharacter && (
              <div className='w-[100%] h-[100vh] p-[20px] flex flex-col items-center bg-cyan-00 overflow-scroll rounded-3xl no-scrollbar shadow-lg '>
                <div className='h-[800px] scale-[.9] relative'>
                  <img
                    src={selectedCharacter.cardImgUrl}
                    alt={selectedCharacter.name}
                    className=' rounded-3xl h-[100%]'
                  />
                  <div className='absolute bottom-0 text-center flex flex-col items-center w-[100%] scale-[0.90]'>
                    <h2 className='font-bold text-3xl bg-white'>
                      {selectedCharacter.name}
                    </h2>
                    <p className='text-xl font-bold bg-white'>
                      Level: {selectedCharacter.level}
                    </p>
                    <div className=' flex flex-col items-center'>
                      <div className='flex'>
                        <p
                          className='w-[200px] m-[5px] p-2 text-center font-bold text-yellow-100 rounded-xl border-4 border-yellow-100'
                          style={{
                            backgroundImage:
                              "url('https://img.freepik.com/premium-photo/old-brown-crumpled-paper-texture-background-vintage-wallpaper_118047-8897.jpg')",
                          }}
                        >
                          HP: {selectedCharacter.hp}
                        </p>
                        <p
                          className='w-[200px] m-[5px] p-2 text-center font-bold text-yellow-100 rounded-xl border-4 border-yellow-100'
                          style={{
                            backgroundImage:
                              "url('https://img.freepik.com/premium-photo/old-brown-crumpled-paper-texture-background-vintage-wallpaper_118047-8897.jpg')",
                          }}
                        >
                          Speed: {selectedCharacter.speed}
                        </p>
                      </div>
                      <div className='flex'>
                        <p
                          className='w-[200px] m-[5px] p-2 text-center font-bold text-yellow-100 rounded-xl border-4 border-yellow-100'
                          style={{
                            backgroundImage:
                              "url('https://img.freepik.com/premium-photo/old-brown-crumpled-paper-texture-background-vintage-wallpaper_118047-8897.jpg')",
                          }}
                        >
                          Power: {selectedCharacter.power}
                        </p>
                        <p
                          className='w-[200px] m-[5px] p-2 text-center font-bold text-yellow-100 rounded-xl border-4 border-yellow-100'
                          style={{
                            backgroundImage:
                              "url('https://img.freepik.com/premium-photo/old-brown-crumpled-paper-texture-background-vintage-wallpaper_118047-8897.jpg')",
                          }}
                        >
                          Stamina: {selectedCharacter.stamina}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className='mt-4 text-yellow-200'>
                  Food required for next level: {selectedCharacter.foodRequired}
                </p>
                <div className='w-[300px] h-[10px] border-yellow-700 border-[1px] rounded-full overflow-hidden'>
                  <div
                    className={`bg-red-400 h-4 rounded-full ${
                      isLevelUp ? 'fill-animation' : 'progress-bar'
                    }`}
                    style={{
                      width: `${
                        (selectedCharacter.foodProgress /
                          selectedCharacter.foodRequired) *
                        100
                      }%`,
                    }}
                    onAnimationEnd={() => {
                      if (isLevelUp) {
                        setIsLevelUp(false);
                      }
                    }}
                  ></div>
                  {isLevelUp && (
                    <div
                      className='bg-red-400 h-4 rounded-full empty-animation'
                      style={{ width: '100%' }}
                    ></div>
                  )}
                </div>

                <div className='mt-4'>
                  <button
                    onClick={handleFeed}
                    className='w-[200px] p-2 bg-blue-500 text-white rounded hover:bg-blue-700'
                  >
                    Feed
                  </button>
                </div>
                <div className='mt-2'>
                  <button
                    onClick={handleAddToBattle}
                    className='w-[200px] p-2 bg-green-500 text-white rounded hover:bg-green-700'
                  >
                    Add to Battle
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className='bg-green-700 mt-[60px] w-[30%] flex flex-col z-10 h-[91.64vh] p-4 text-center font-bold text-slate-700 border-[10px] border-t-0 border-b-0 border-yellow-100 border-double '
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/old-brown-crumpled-paper-texture-background-vintage-wallpaper_118047-8897.jpg')",
          }}
        >
          <div className='font-bold text-2xl leading-[60px] underline-offset- decoration-2 '>
            <h2>Battle Deck💪</h2>
          </div>

          <div className='flex flex-col p-[20px] no-scrollbar mt-4 overflow-auto bg-red-00'>
            {battleDeck.map((slot, index) => (
              <div
                key={index}
                className='p-2 bg-gray-700 mb-[10px] rounded flex flex-col items-center '
              >
                {slot ? (
                  <>
                    <img
                      src={slot.cardImgUrl}
                      alt={slot.name}
                      className='h-auto rounded'
                    />
                    <div className='bg-yellow-600 text-xl text-white'>
                      <p className=' mt-[-50px]'>{slot.name}</p>
                      <p className=' '>Level: {slot.level}</p>
                    </div>
                  </>
                ) : (
                  <span className='text-white'>Empty Slot</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evolution;
