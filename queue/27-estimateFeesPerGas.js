import { publicClient } from './03-createPublicClient.js';

export async function estimateEip1559Fees() {
  return publicClient.estimateFeesPerGas();
}
