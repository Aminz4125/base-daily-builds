import { walletClient } from './04-createWalletClient.js';

export async function deploy(abi, bytecode, args = []) {
  return walletClient.deployContract({ abi, bytecode, args });
}
