import { useContractCall, useContractFunction } from "@usedapp/core";
import { ethers } from "ethers";
import { voteSystemContract } from "../voteSystemContract";
import voteSystemContractAbi from "./ABIs/simpleContract.json";
import { Contract } from "@ethersproject/contracts";

const voteSystemInterface = new ethers.utils.Interface(voteSystemContractAbi);
const contract = new Contract(voteSystemContract, voteSystemInterface);

export function UseContractMethod(methodName: string) {
  const { state, send } = useContractFunction(contract, methodName, {});
  return { state, send };
}

export function UseGetCandidates() {
  return (
    useContractCall({
      abi: voteSystemInterface,
      address: voteSystemContract,
      method: "getCandidates",
      args: [],
    }) ?? []
  );
}

