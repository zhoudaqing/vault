import { earnContractABI } from "../configure";
import BigNumber from "bignumber.js";

export const fetchEarningsPerShare = async ({account, contract}) => {
  // console.log(`=====================================fetchEarningsPerShare begin=====================================`)
  // const contract = new web3.eth.Contract(earnContractABI, contractAddress);
  // console.log(`
  //   account:${account}\n
  //   contractAddress:${contractAddress}\n
  // `)
  const data = await contract.methods.global_(0).call({ from: account });
  const totalStake = data["total_stake"];
  const earningsPerShare = data['earnings_per_share'];
  // console.log( `totalStake:${totalStake}\n
  // earningsPerShare:${earningsPerShare}\n`)
  // console.log(`=====================================fetchEarningsPerShare success=====================================`)

  return { earningsPerShare, totalStake };
}