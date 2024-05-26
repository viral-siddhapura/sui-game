import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { getSuiAddress } from '../utils/zk_login_setup';

const Login = () => {
  const [jwt, setJwt] = useState('');
  const [userSalt, setUserSalt] = useState('');

  const responseMessage = (response) => {
    console.log('Google login response: ', response);
    const suiAdd = getSuiAddress(jwt, userSalt);
    console.log('sui Add : ', suiAdd);
  };
  const errorMessage = (error) => {
    console.log('Google login error: ', error);
  };
  return (
    <div className='w-full h-screen bg-gray-950'>
      <div className='w-full text-center text-white'>
        <h1>Login to SuiFrenia</h1>
        <h2>Using ZkLogin</h2>
        <div className='w-80 text-center mx-auto py-8'>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
        <input
          className='rounded-full text-xl py-1 px-2 w-72 mt-7 text-black'
          type='text'
          placeholder='Enter salt (Remember this) '
          value={userSalt}
          onChange={(e) => setUserSalt(e.target.value)}
        />
        <p>You cannot afford to forget the salt...</p>
      </div>
    </div>
  );
};

export default Login;
