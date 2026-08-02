import { walletClient } from './04-createWalletClient.js';

const erc20AbiTransfer = [
  {
    name: 'transfer',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [{ type: 'bool' }],
  },
];

export async function transferToken(tokenAddress, to, amount) {
  return walletClient.writeContract({
    address: tokenAddress,
    abi: erc20AbiTransfer,
    functionName: 'transfer',
    args: [to, amount],
  });
}
