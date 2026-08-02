import { walletClient } from './04-createWalletClient.js';

export async function signPlainMessage(message) {
  return walletClient.signMessage({ message });
}
