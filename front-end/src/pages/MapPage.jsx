import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import drop from '/dropcard.png';
import bg22 from '/bg22.png';
import view3 from '/war25.png';

// Sample user data with coordinates
const users = [
  { id: 1, name: 'User1', level: 10 },
  { id: 2, name: 'User2', level: 12 },
  { id: 3, name: 'User3', level: 8 },
  { id: 4, name: 'User4', level: 8 },
  { id: 5, name: 'User5', level: 8 },
  { id: 6, name: 'User6', level: 8 },
  // Add more users with random coordinates
];

const MapPage = () => {
  const [hoveredUser, setHoveredUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserHover = (user) => {
    setHoveredUser(user);
  };

  const handleUserLeave = () => {
    setHoveredUser(null);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleBattleClick = () => {
    // Do nothing on battle button click
  };

  const stepSize = 400; // Define step size for x-coordinate increment

  return (
    <div className='bg-red-200'>
      <nav className='fixed top-0 left-0 w-full h-[60px] bg-gray-800 text-white flex items-center justify-center z-50'>
        Navbar
      </nav>
      <div
        className=' w-[100%] h-[100vh] bg-no-repeat bg-cover overflow-auto bg-red-700'
        style={{
          backgroundImage: `url(${view3})`,
        }}
      >
        <div
          className='w-[100%] h-[60%] mt-[200px]  flex overflow-x-scroll border-8 border-l-0 border-r-0 border-double bg-contain bg-local  no-scrollbar'
          style={{ backgroundImage: `url(${bg22})`, opacity: 0.9 }}
        >
          {/* <h1 className="bg-red-500 h-[60px] m-4 p-4">qwerty</h1>  */}
          <div className='relative mt-[60px] ml-[20px] p-0 h-fit'>
            {users.map((user, index) => (
              <div
                key={user.id}
                className='absolute w-[100px] h-[100px] bg-yellow-00 border-4 border-yellow-500 rounded-full border-double flex items-center justify-center cursor-pointer'
                style={{
                  top: index % 2 === 0 ? '0px' : '250px', // Adjust the y-coordinate to create the zigzag pattern
                  left: `${index * stepSize}px`, // Increment the x-coordinate
                  // backgroundImage: `url(https://cdn.textures4photoshop.com/tex/thumbs/grunge-stained-old-paper-texture-130.jpg)`,
                }}
                onMouseEnter={() => handleUserHover(user)}
                onMouseLeave={handleUserLeave}
                onClick={() => handleUserClick(user)}
              >
                <div className='relative'>
                  <img src={drop} className='w-full h-full' />
                  {hoveredUser && hoveredUser.id === user.id && (
                    <div
                      className='absolute top-[-20px] left-[70px] h-[60px] w-[100px] border-4 border-double text-center text-bold border-red-700 text-yellow-100 text-sm p-1 rounded'
                      style={{
                        backgroundImage:
                          "url('https://img.freepik.com/premium-photo/old-brown-crumpled-paper-texture-background-vintage-wallpaper_118047-8897.jpg')",
                      }}
                    >
                      {user.name} (Level {user.level})
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {selectedUser && (
            <button
              className='fixed bottom-5 ml-[44vw] w-[200px] font-medium text-xl px-4 py-2 bg-yellow-300 border-4 text-yellow-200 border-yellow-100 border-double rounded-2xl'
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/premium-photo/old-brown-crumpled-paper-texture-background-vintage-wallpaper_118047-8897.jpg')",
              }}
              onClick={handleBattleClick}
            >
              Battle
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapPage;
