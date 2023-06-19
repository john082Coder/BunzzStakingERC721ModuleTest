# WRITE(main)

## transferOwnerShip
This function will be called by the owner if he wants to transfer the ownership of the contract to another address

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|newOwner|address|The address that will become the new owner of the contract.||N/A|

## recoverERC20
Transfer ERC20 tokens back from this contract to the owner except staking token, callable only when unpaused and by owner.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|tokenAddress|address|Recovering token address||N/A|
|tokenAmount|address|Recovering token amount||N/A|

## exit
Claim rewards tokens and unstake staked tokens, callable only when unpaused.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|tokenIds|uint256[]|Array of token Ids||N/A|

## stake
Stakes user's NFTs

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|tokenIds|uint256[]|The tokenIds of the NFTs which will be staked||N/A|

## unstake
Unstake staked user's NFTs

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|tokenIds|uint256[]|The tokenIds of the NFTs which will be withdrawn||N/A|


## setRewardsDuration
Set rewards duration, only available to set after finish of previous rewards period.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|duration|uint256|New rewards duration||N/A|

## setPaused
Pause or unpause contract

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|newPaused|bool|Flag to new paused state||N/A|

## renounceOwnership
Renounce ownership

No arguments

## fund
Fund rewards tokens and re-calculate rewards rate, callable only when unpaused and by owner. Rewards rate will be calculated again from remaining distributable tokens and awarding rewards tokens.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|reward|uint256|Funding rewards token amount||N/A|

## claim
Claim rewards tokens, callable only when unpaused.

No arguments


# READ(main)

## balanceOf
Returns balance of staked amount per user.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|account|address|User address||N/A|

## balances
Returns balances of staked token per user

No arguments

## earned
Returns earned rewards per user.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|account|address|User address||N/A|

## getRewardForDuration
Returns total rewards amount for current duration.

No arguments

## lastTimeRewardApplicable
Returns last time to calculate rewards. If now is less than the last time, return now.

No arguments

## lastUpdateTime
Returns last timestamp of funding in seconds.

No arguments

## owner
Returns current owner of contract.

No arguments

## paused
Returns current paused state.

No arguments

## periodFinish
Returns block timestamp of the end of reward session

No arguments

## rewardPerToken
Returns total amount of calculated rewards.

No arguments

## rewardPerTokenStored
Returns accumulated rewards token

No arguments

## rewardRate
Returns reward rate in wei unit.

No arguments

## rewards
Returns mapping for rewards amount per each user.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
||address|User address||N/A|

## rewardsDuration
Returns rewards duration in seconds

No arguments

## rewardsToken
Returns address to rewards ERC20 token

No arguments

## stakedAssets
Returns mapping of staker/depositor of the token

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
||address|User address||N/A|

## stakingToken
Returns address to staking ERC721 token

No arguments

## totalSupply
Returns total staked token amount

No arguments

## userRewardPerTokenPaid
Returns mapping for accumulated rewards token as temporary store

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
||address|User address||N/A|