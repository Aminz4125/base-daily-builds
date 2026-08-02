import { publicClient } from './03-createPublicClient.js';

const erc20AbiBalanceOf = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ type: 'uint256' }],
  },
];

export async function getTokenBalance(tokenAddress, account) {
  return publicClient.readContract({
    address: tokenAddress,
    abi: erc20AbiBalanceOf,
    functionName: 'balanceOf',
    args: [account],
  });
}
