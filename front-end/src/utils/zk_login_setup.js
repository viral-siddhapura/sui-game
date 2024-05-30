import { SuiClient } from '@mysten/sui.js/client';
import { getExtendedEphemeralPublicKey } from '@mysten/zklogin';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import {
  generateNonce,
  generateRandomness,
  jwtToAddress,
} from '@mysten/zklogin';
import axios from 'axios';
import { stringToBigInt } from './misc';
import { toBigIntBE } from 'bigint-buffer';
import { fromB64 } from '@mysten/bcs';
import { Buffer } from 'buffer';

const FULLNODE_URL = 'https://fullnode.mainnet.sui.io';
const suiClient = new SuiClient({ url: FULLNODE_URL });
// const obj1 = suiClient.getOwnedObjects(
//   '0xb2ffd33c92aa567ea5fbf535dd8fd64f173a92395704195156ce813400b2a410'
// );
// console.log('obj 1: ', obj1);
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
  const zkLoginUserAddress = jwtToAddress(jwt, stringToBigInt(userSalt));
  const ephemeralPublicKeyArray = fromB64(extendedEphemeralPublicKey);
  console.log(
    'post data fro zkp - ',
    JSON.stringify({
      jwt,
      extendedEphemeralPublicKey: toBigIntBE(
        Buffer.from(ephemeralPublicKeyArray)
      ).toString(),
      maxEpoch,
      jwtRandomness: randomness,
      salt: userSalt,
      keyClaimName: 'sub',
    })
  );
  const zkp = await axios.post('https://prover-dev.mystenlabs.com/v1', {
    jwt: jwt,
    extendedEphemeralPublicKey: toBigIntBE(
      Buffer.from(ephemeralPublicKeyArray)
    ).toString(),
    maxEpoch: maxEpoch,
    jwtRandomness: randomness,
    salt: userSalt,
    keyClaimName: 'sub',
  });
  console.log('zkp: ', zkp);
  return zkLoginUserAddress;
};
