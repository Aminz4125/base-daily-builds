import { publicClient } from './03-createPublicClient.js';

export async function readStorageSlot(address, slot) {
  return publicClient.getStorageAt({ address, slot });
}
