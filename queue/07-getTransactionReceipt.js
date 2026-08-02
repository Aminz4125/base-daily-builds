import { publicClient } from './03-createPublicClient.js';

export async function getReceipt(hash) {
  return publicClient.getTransactionReceipt({ hash });
}
