import { publicClient } from './03-createPublicClient.js';

export async function waitForConfirmation(hash) {
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  return receipt.status;
}
