import land2 from '/landin2.png';
import land3 from '/land3.png';
import land4 from '/land4.png';
import land5 from '/land5.png';
import land6 from '/land6.png';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className='flex flex-col justify w-screen h-screen content center bg-violet-950'>
      <div>
        <img src={land2} alt='' />
      </div>
      <div>
        <img src={land3} alt='' />
      </div>
      <div>
        <img src={land4} alt='' />
      </div>
      <div>
        <img src={land5} alt='' />
      </div>
      <div>
        <img src={land6} alt='' />
      </div>
      <div className='absolute top-4 right-4 '>
        <Link to={'/login'}>
          <button className='bg-gradient-to-r from-[#f0d040] to-[#cd8f09] w-[200px] h-[50px] rounded-lg font-bold market-cards'>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
