import { publicClient } from './03-createPublicClient.js';

export async function fetchLogs(address, fromBlock, toBlock) {
  return publicClient.getLogs({ address, fromBlock, toBlock });
}
