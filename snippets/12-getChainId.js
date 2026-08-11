import { publicClient } from './03-createPublicClient.js';

export async function getConnectedChainId() {
  return publicClient.getChainId();
}
