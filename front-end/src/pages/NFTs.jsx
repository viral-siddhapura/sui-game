import { useState } from 'react';
import { fetchSuiFrensNfts } from '../utils/sui-api';

const NFTs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [NFTs, SetNFTs] = useState([]);

  const walletAddress =
    '0x5be5fe79e9449a61d7ee04c553787657cef20717ab4fcc1c377d251b7bcb4d03';
  const bullshark_nft_type = import.meta.env.VITE_APP_BULLSHARK_NFT_TYPE;
  const capy_nft_type = import.meta.env.VITE_APP_CAPY_NFT_TYPE;

  const makeRpcCall = async () => {
    setLoading(true);
    setError(null);

    try {
      const response1 = await fetchSuiFrensNfts(
        walletAddress,
        bullshark_nft_type,
        10
      );
      const response2 = await fetchSuiFrensNfts(
        walletAddress,
        capy_nft_type,
        10
      );

      if (response1.data.error) {
        setError(response1.data.error.message);
      } else {
        if (response2.data.error) {
          setError(response2.data.error.message);
        } else {
          setData(response2.data.result);
          console.log(data);
          SetNFTs([
            ...response1.data.result.data,
            ...response2.data.result.data,
          ]);
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full h-full bg-black text-white'>
      <button onClick={makeRpcCall}>Fetch NFTs</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className='flex justify-center items-center gap-7 flex-wrap'>
        {NFTs.map((item) => {
          return (
            <div key={item.data.objectId} className='border-4 rounded-2xl border-yellow-600 cursor-pointer bg-yellow-400 hover:bg-yellow-600'>
              <img
                src={item.data.display.data.image_url}
                width={150}
                alt='NFT image'
                className='m-7'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NFTs;
