import axios from 'axios';

export const loginUser = async (loginData) => {
  const res = await axios.post(
    `${import.meta.env.VITE_APP_SERVER_URL}/api/users/login`,
    loginData
  );
  return res;
};

export const updateWalletAddress = async (address, user_id) => {
  const res = await axios.post(
    `${import.meta.env.VITE_APP_SERVER_URL}/api/users/update/wallet-address`,
    {
      _id: user_id,
      walletAddress: address,
    }
  );
  return res;
};

export const createCard = async (cardDetails) => {
  const res = await axios.post(
    `${import.meta.env.VITE_APP_SERVER_URL}/api/cards/`,
    cardDetails
  );
  return res;
};

export const getCardCollection = async () => {
  const res = await axios.post(
    `${import.meta.env.VITE_APP_SERVER_URL}/api/cards/`,
    { user_id: localStorage.getItem('user_id') }
  );
  return res;
};
