import { useEffect, useState, useCallback } from 'react';
import Web3 from 'web3';
import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import { getEarned} from '../contracts/utils'

const useEarnedAmount = (stakingERC721Contract=null) => {
  const [earnedAmount, setEarnedAmount] = useState(new BigNumber(0));
  const {  connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,} = useWeb3React();
   
    const fetchEarnedAmount = useCallback(async () => {
     
      const earnedAmount = await getEarned(
        stakingERC721Contract,
        account
      );
      console.log("earnedAmount = ", earnedAmount);
      setEarnedAmount(new BigNumber(earnedAmount));
    }, [account, stakingERC721Contract]);
  

    useEffect(() => {
      if (account && stakingERC721Contract) {
        fetchEarnedAmount();
      }
      let refreshInterval = setInterval(fetchEarnedAmount, 10000);
      return () => clearInterval(refreshInterval);
    }, [account, stakingERC721Contract, fetchEarnedAmount]);

  return earnedAmount;
}

export default useEarnedAmount;
