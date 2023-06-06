// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
// Step 1: Import the ERC20 contract

// Step 2: Inherit the ERC20 contract
contract SmartContract {
    // Step 5: Create the public variable called 'owner'
    // Step 3: Pass the name and symbol to the ERC20 constructor
    constructor() {
        // Step 4: Mint 1000 tokens to msg.sender
        // Step 6: Set the owner variable to msg.sender
    }

    // Step 7: Create the onlyOwner modifier
    // Step 8: Require the owner variable to be equal to msg.sender, else throw an error saying "Only the owner can call this function."
    // Step 9: Override the totalSupply function to make it only accessible to the owner
}