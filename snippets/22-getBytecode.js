import { publicClient } from './03-createPublicClient.js';

export async function getContractCode(address) {
  return publicClient.getBytecode({ address });
}
