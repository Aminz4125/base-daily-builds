import { walletClient } from './04-createWalletClient.js';

export async function callContractWrite(contractAddress, abi, functionName, args) {
  return walletClient.writeContract({ address: contractAddress, abi, functionName, args });
}
