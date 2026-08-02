import { publicClient } from './03-createPublicClient.js';

export async function simulateBeforeSend(contractAddress, abi, functionName, args, account) {
  const { request } = await publicClient.simulateContract({
    address: contractAddress,
    abi,
    functionName,
    args,
    account,
  });
  return request;
}
