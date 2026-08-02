import { publicClient } from './03-createPublicClient.js';

export async function batchReadBalances(erc20Abi, tokenAddress, holders) {
  return publicClient.multicall({
    contracts: holders.map((holder) => ({
      address: tokenAddress,
      abi: erc20Abi,
      functionName: 'balanceOf',
      args: [holder],
    })),
  });
}
