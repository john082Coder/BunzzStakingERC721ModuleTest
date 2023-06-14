# WRITE(main)

## transferOwnerShip
This function will be called by the owner if he wants to transfer the ownership of the contract to another address

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|newOwner|address|The address that will become the new owner of the contract.||N/A|

## renounceOwnership
This function will be called by the owner if he wants to drop the ownership of the contract

No arguments

## buy
Pay ETH and buy the target token.

No arguments

## updatePrice
Update the token price for ICO

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|_price|uint256|The new token price||N/A|

## connectToOtherContracts
Call this function to connect a token to your contract, it should be the first thing to do to setup the contract

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|addresses|address[]|The array should only contain one item, and that item should be the address of the token you wish to airdrop||N/A|


## withdrawETH
Withdraw ETH from the ICO contract

No arguments

## withdrawToken
Withdraw the target tokens from contract

No arguments


# READ(main)

## endTime
Returns ICO end time

No arguments

## startTime
Returns ICO start time

No arguments

## token
Returns the address of the token that is connected with this contract

No arguments

## owner
Returns contract owner address

No arguments

## price
Returns token price

No arguments