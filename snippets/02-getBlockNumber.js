import { createPublicClient, http } from 'viem';
import { base } from 'viem/chains';

const client = createPublicClient({ chain: base, transport: http() });

export async function getLatestBlockNumber() {
  return client.getBlockNumber();
}
