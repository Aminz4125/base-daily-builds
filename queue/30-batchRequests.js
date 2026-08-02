import { createPublicClient, http } from 'viem';
import { base } from 'viem/chains';

export const batchedClient = createPublicClient({
  chain: base,
  transport: http(undefined, { batch: true }),
});
