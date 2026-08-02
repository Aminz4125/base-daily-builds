import { publicClient } from './03-createPublicClient.js';

export async function getNonce(address) {
  return publicClient.getTransactionCount({ address });
}
