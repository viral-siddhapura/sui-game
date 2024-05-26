import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const responseMessage = (response) => {
    console.log('Google login response: ', response);
  };
  const errorMessage = (error) => {
    console.log('Google login error: ', error);
  };
  return (
    <div className='w-full h-screen bg-gray-950'>
      <div className='text-center text-white'>
        <h1>Login to SuiFrenia</h1>
        <h2>Using ZkLogin</h2>
        <div className='w-56 text-center mx-auto py-8'>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
      </div>
    </div>
  );
};

export default Login;
