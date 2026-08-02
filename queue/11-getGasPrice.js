import { publicClient } from './03-createPublicClient.js';

export async function getCurrentGasPrice() {
  return publicClient.getGasPrice();
}
