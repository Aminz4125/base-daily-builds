import { publicClient } from './03-createPublicClient.js';

export async function readTokenName(contractAddress, abi) {
  return publicClient.readContract({ address: contractAddress, abi, functionName: 'name' });
}
