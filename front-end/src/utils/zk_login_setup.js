import { SuiClient } from '@mysten/sui.js/client';
import { getExtendedEphemeralPublicKey } from '@mysten/zklogin';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import {
  generateNonce,
  generateRandomness,
  jwtToAddress,
} from '@mysten/zklogin';
import axios from 'axios';

const FULLNODE_URL = 'https://fullnode.devnet.sui.io';
const suiClient = new SuiClient({ url: FULLNODE_URL });
const { epoch, epochDurationMs, epochStartTimestampMs } =
  await suiClient.getLatestSuiSystemState();

const maxEpoch = Number(epoch) + 2; // this means the ephemeral key will be active for 2 epochs from now.
const ephemeralKeyPair = new Ed25519Keypair();
const randomness = generateRandomness();
const nonce = generateNonce(
  ephemeralKeyPair.getPublicKey(),
  maxEpoch,
  randomness
);

const extendedEphemeralPublicKey = getExtendedEphemeralPublicKey(
  ephemeralKeyPair.getPublicKey()
);

export const getSuiAddress = async (jwt, userSalt) => {
  const zkLoginUserAddress = jwtToAddress(jwt, userSalt);
  const zkp = await axios.post(import.meta.env.VITE_PROVER_URL, {
    jwt,
    extendedEphemeralPublicKey,
    maxEpoch,
    jwtRandomness: randomness,
    salt: userSalt,
    keyClaimName: 'sub',
  });
  console.log('zkp: ', zkp);
  return zkLoginUserAddress;
};
