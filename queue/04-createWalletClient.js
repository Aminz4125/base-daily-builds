import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { base } from 'viem/chains';

const account = privateKeyToAccount(process.env.PRIVATE_KEY);

export const walletClient = createWalletClient({
  account,
  chain: base,
  transport: http(),
});
