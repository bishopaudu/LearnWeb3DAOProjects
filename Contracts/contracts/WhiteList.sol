// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract WhiteList{
    // Maximum number of whiteListed addresses allowed
    uint8 public maximumWhiteListedAddress;
    mapping (address => bool) public WhiteListAddresses;
    uint8 public numAddressWhiteListed;
    constructor(uint8 _maxwhitelistedAddresses) {
        maximumWhiteListedAddress = _maxwhitelistedAddresses;
    }

    function addAddressToWhiteList() public{
        require(!WhiteListAddresses[msg.sender], "sender has already been whitelisted");
        require(numAddressWhiteListed < maximumWhiteListedAddress,"Maximum Limit reached....unable to add more addresses");
        // add the address which called the function the whitelist array
        WhiteListAddresses[msg.sender] = true; 
        numAddressWhiteListed++;
    }
}

