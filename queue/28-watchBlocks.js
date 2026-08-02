import { publicClient } from './03-createPublicClient.js';

export function watchNewBlocks(onBlock) {
  return publicClient.watchBlocks({ onBlock });
}
