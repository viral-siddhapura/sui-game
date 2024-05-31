import { GoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { getSuiAddress, nonceGenerator } from '../utils/zk_login_setup';
import { useNavigate } from 'react-router-dom';
import { ConnectButton, useWallet } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';

const Login = () => {
  const navigate = useNavigate();
  const [jwt, setJwt] = useState('');
  const [userSalt, setUserSalt] = useState('');
  const [nonce, setNonce] = useState('');

  const responseMessage = async (response) => {
    console.log('Google login response: ', response);
    console.log('salt: ', userSalt);
    localStorage.setItem('salt', userSalt);
    setJwt(response.credential);
    const suiAdd = await getSuiAddress(response.credential, userSalt, nonce);
    console.log('sui Add : ', suiAdd);
    navigate('/nfts');
  };
  const errorMessage = (error) => {
    console.log('Google login error: ', error);
  };

  const wallet = useWallet();

  useEffect(() => {
    // generating nonce for google oauth flow
    const res = nonceGenerator();
    setNonce(res);
  }, []);

  return (
    <div className='w-full h-screen bg-gray-950 bg-[url("/login-bg2.jpeg")] bg-no-repeat bg-cover flex items-center justify-center'>
      <div className='text-center text-white border-4 border-yellow-600 w-[48%] rounded-2xl bg-gradient-to-r from-yellow-700 to-yellow-500 bg-opacity-60 filter p-4 glass'>
        <h1 className='text-6xl flex items-center justify-center'>
          Login to{' '}
          <img
            className='inline'
            src='/logo.png'
            width={100}
            alt='sui-frenia'
          />
          <span className='bg-white px-2 rounded-2xl'>
            <span className='bg-gradient-to-r from-red-600 to-amber-800 bg-clip-text text-transparent font-[handlee] font-extrabold'>
              <u>SuiFrenia</u>
            </span>
          </span>
        </h1>
        <p className='text-2xl font-[handlee] my-4'>
          Let&apos;s dive into world of SuiFrens!
        </p>
        <input
          className='rounded-lg text-lg py-1 px-3 w-72 mt-7 text-black'
          type='text'
          placeholder='Enter salt (Remember this) '
          value={userSalt}
          onChange={(e) => setUserSalt(e.target.value)}
        />
        <p>You can&apos;t afford to forget the salt!</p>
        <div className='w-80 text-center mx-auto py-6 flex justify-center'>
          <GoogleLogin
            onSuccess={responseMessage}
            onError={errorMessage}
            nonce={nonce}
          />
        </div>
        ---------------------OR---------------------
        <div>
          <ConnectButton />
        </div>
        {wallet.status}
      </div>
    </div>
  );
};

export default Login;
