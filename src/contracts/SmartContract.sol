// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SmartContract is ERC20 {
    address public owner; 

    constructor() ERC20("Fixed", "FIX") {
        _mint(msg.sender, 1000);
        owner = msg.sender; 
    }

    modifier onlyOwner() { 
        require(msg.sender == owner, "Only the owner can call this function."); 
       _; 
    } 

    function totalSupply() public view override onlyOwner returns (uint256)  {
        return super.totalSupply();
    }
}