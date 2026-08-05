import { parseEther } from 'viem';
import { walletClient } from './04-createWalletClient.js';

export async function sendEth(to, amountEth) {
  return walletClient.sendTransaction({ to, value: parseEther(amountEth) });
}
