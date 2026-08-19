import { walletClient } from './04-createWalletClient.js';

const erc20AbiApprove = [
  {
    name: 'approve',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [{ type: 'bool' }],
  },
];

export async function approveSpender(tokenAddress, spender, amount) {
  return walletClient.writeContract({
    address: tokenAddress,
    abi: erc20AbiApprove,
    functionName: 'approve',
    args: [spender, amount],
  });
}
