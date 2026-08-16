import { publicClient } from './03-createPublicClient.js';

export async function getBlockByNumber(blockNumber) {
  return publicClient.getBlock({ blockNumber });
}
