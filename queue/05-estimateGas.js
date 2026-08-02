import { publicClient } from './03-createPublicClient.js';

export async function estimateGasCost({ to, value }) {
  return publicClient.estimateGas({ to, value });
}
