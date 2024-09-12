# Assignment README (IU2141230095-Ayush)

## Submitting Date
12-09-2024 (12th September-2024)

## Everything is followed as per steps
Yes

# Solidity Smart Contract Examples

This repository contains Solidity smart contract examples for two different use cases: a crowdfunding platform and a voting system. These contracts demonstrate important concepts such as fund management, deadline handling, proposal voting, and access control. Each contract is explained with examples of how to use it.

## Overview

The following smart contracts are included:

- **Crowdfunding Contract**: Allows users to create crowdfunding campaigns, contribute funds, and manage the release or refund of funds based on campaign success.
- **Voting System Contract**: Implements a voting system where participants can propose options, vote, and determine the winning proposal based on the highest vote count.

## Crowdfunding Contract

### Features:
- Create a crowdfunding campaign with a target amount and deadline.
- Contributors can send funds to a campaign.
- If the target is met before the deadline, the campaign creator receives the funds.
- If the target is not met, contributors can withdraw their funds.
- Each campaign tracks total contributions and individual contributions.

### Functions:
1. `createCampaign`: Create a new campaign specifying the target amount and duration.
2. `contribute`: Contribute funds to a campaign before the deadline.
3. `finalizeCampaign`: Finalize a campaign and release funds to the creator if successful or allow withdrawals if failed.
4. `withdrawContribution`: Allows contributors to withdraw their funds if the campaign did not reach its target.

### Example Usage:
```solidity
// Create a new crowdfunding campaign
createCampaign(1000, 7 days);

// Contribute to the campaign
contribute(1) payable;

// Finalize the campaign
finalizeCampaign(1);

// Withdraw contributions if the campaign fails
withdrawContribution(1);
