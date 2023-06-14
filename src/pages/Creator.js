import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState, useEffect  } from "react";

import useBunzz from '../hooks/useBunzz';

import { getStakingERC721Contract, fund, stake, unstake, claim, exit } from '../contracts/utils'
import { useWeb3React } from "@web3-react/core";
import useEarnedAmount from "../hooks/useEarnedAmount";
import { bnToDec, isAddress } from "../utils";
const Creator = () => {
    const bunzz = useBunzz();
    const { account} = useWeb3React();
    const stakingERC721Contract = getStakingERC721Contract(bunzz);

    const [fundAmount, setFundAmount] = useState(0);
    const [tokenIDs, setTokenIDs] = useState([]);
    const [tokenIDsText, setTokenIDsText] = useState();
  
    const [price, setPrice] = useState();

    const [buyAmounts, setBuyAmounts] = useState();

    const earnedAmount =bnToDec( useEarnedAmount(stakingERC721Contract));

   
    const [pendingFund, setPendingFund] = useState(false);
    const [pendingStake, setPendingStake] = useState(false);
    const [pendingUnStake, setPendingUnStake] = useState(false);
    const [pendingClaim, setPendingClaim] = useState(false);
    const [pendingExit, setPendingExit] = useState(false);
    const [pendingWithdrawTokens, setPendingWithdrawTokens] = useState(false);

    useEffect(() => {
        if(tokenIDsText)
        {
            var array1 = tokenIDsText.replace(' ', '').split(','); 
            setTokenIDs(array1);
        
            console.log("array1 = ", array1);
        }
   
       }, [tokenIDsText]);

  
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg="4" md="4" xs="12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Fund Amount</Form.Label>
                            <Form.Control type="email" placeholder="Enter amount" value={fundAmount} onChange={(val) => setFundAmount(val.target.value)} />
                        </Form.Group>
                            {!pendingFund ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingFund(true);
                                try {
                                    let txHash;
                                    txHash = await fund(
                                        stakingERC721Contract,
                                        fundAmount,
                                        account,
                                    );
                                    console.log(txHash);
                                    setPendingFund(false);
                                } catch (e) {
                                    console.log(e);
                                    setPendingFund(false);
                                }
                            }}>
                               Fund
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Fund
                            </Button>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Token IDs</Form.Label>
                            <Form.Control type="email" placeholder="Enter IDs" value={tokenIDsText} onChange={(val) => setTokenIDsText(val.target.value)} />
                           
                        </Form.Group>

                        {!pendingStake ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingStake(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await stake(
                                        stakingERC721Contract,
                                        tokenIDs,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingStake(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingStake(false);
                                    
                                }
                            }}>
                                Stake
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Stake
                            </Button>
                        }
                        {!pendingUnStake ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingUnStake(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await unstake(
                                        stakingERC721Contract,
                                        tokenIDs,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingUnStake(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingUnStake(false);
                                    
                                }
                            }}>
                                UnStake
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} UnStake
                            </Button>
                        }
                         {!pendingClaim ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingClaim(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await claim(
                                        stakingERC721Contract,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingClaim(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingClaim(false);
                                    
                                }
                            }}>
                                Claim
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Claim
                            </Button>
                        }
                        {!pendingExit ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingExit(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await exit(
                                        stakingERC721Contract,
                                        tokenIDs,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingExit(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingExit(false);
                                    
                                }
                            }}>
                                Exit
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Exit
                            </Button>
                        }
                       <div>Earned Amount:{earnedAmount} </div>
                       

                    </Form>
                    

                   

                        
                </Col>
            </Row>
        </Container>
    )
}

export default Creator;