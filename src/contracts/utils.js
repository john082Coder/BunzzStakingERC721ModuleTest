import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});



export const getStakingERC721Contract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.stakingERC721;
}


export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}

export const claim = async (stakingERC721Contract, account) => {
  return stakingERC721Contract.methods.claim().send({ from: account })
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const fund = async (stakingERC721Contract, reward, account) => {
  return stakingERC721Contract.methods.fund(new BigNumber(reward).times(new BigNumber(10).pow(18)).toString()).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}
export const setPaused = async (stakingERC721Contract, newPaused,  account) => {
  return stakingERC721Contract.methods.setPaused(newPaused).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}
export const setRewardsDuration = async (stakingERC721Contract, duration, account) => {
  return stakingERC721Contract.methods.setRewardsDuration(duration).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}
export const stake = async (stakingERC721Contract, tokenIds, account) => {
  return stakingERC721Contract.methods.stake(tokenIds).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}
export const unstake = async (stakingERC721Contract, tokenIds, account) => {
  return stakingERC721Contract.methods.unstake(tokenIds).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}
export const exit = async (stakingERC721Contract, tokenIds, account) => {
  return stakingERC721Contract.methods.exit(tokenIds).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const getEarned = async (stakingERC721Contract, account) => {
  
  try {
    console.log("staking contract", account);
    const earned = await stakingERC721Contract.methods.earned(account).call();
    
    console.log("earned = ", earned);
    return earned;
  } catch {
    console.log("error");
    return 0;
  }

}





