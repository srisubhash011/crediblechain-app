import { ethers } from "ethers";
import CredibleLendingPoolABI from "../CredibleLendingPoolABI.json";

const CONTRACT_ADDRESS = "0x186a3dc785aa8ada188b6805b54fb153123c3a5d";

export function getLendingPoolContract(signerOrProvider) {
  return new ethers.Contract(CONTRACT_ADDRESS, CredibleLendingPoolABI, signerOrProvider);
}