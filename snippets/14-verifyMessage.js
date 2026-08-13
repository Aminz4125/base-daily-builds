import { publicClient } from './03-createPublicClient.js';

export async function verifySignedMessage({ address, message, signature }) {
  return publicClient.verifyMessage({ address, message, signature });
}
