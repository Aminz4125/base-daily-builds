import { createPublicClient, http, formatEther } from 'viem';
import { base } from 'viem/chains';

const client = createPublicClient({ chain: base, transport: http() });

export async function getBalance(address) {
  const balance = await client.getBalance({ address });
  return formatEther(balance);
}
