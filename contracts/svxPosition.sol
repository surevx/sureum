// SPDX-License-Identifier: UNLICENSED
// Copyright SureVX Ltd 2021

pragma solidity ^0.8.0;

contract svxPosition {
    address payable public receiver; // Payee of underlying deal
    address payable public payer; // Payer of underlying deal

    constructor(address payable _payee, address payable _payer) public payable {
        receiver = _payee;
        payer = _payer;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
