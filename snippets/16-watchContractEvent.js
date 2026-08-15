import { publicClient } from './03-createPublicClient.js';

export function watchTransferEvents(contractAddress, abi, onTransfer) {
  return publicClient.watchContractEvent({
    address: contractAddress,
    abi,
    eventName: 'Transfer',
    onLogs: onTransfer,
  });
}
