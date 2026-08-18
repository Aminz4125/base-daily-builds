import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

const ensClient = createPublicClient({ chain: mainnet, transport: http() });

export async function resolveName(name) {
  return ensClient.getEnsAddress({ name });
}
