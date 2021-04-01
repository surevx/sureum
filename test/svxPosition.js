const { SignerWithAddress } = require('@nomiclabs/hardhat-ethers/signers');
const { expect } = require('chai');
const { ethers } = require("hardhat");

describe('svxPosition', () => {
    before(async () => {
        svxPosition = await ethers.getContractFactory('svxPosition');
        const signers = await ethers.getSigners();
        svxPos = await svxPosition.deploy(signers[0].address, signers[1].address);
    });

    describe('Testing contract functions', () => {
        it('Should create the contract', async () => {
            expect(svxPos.address).to.not.be.undefined;
        });

        it('Should retrieve the contract balance', async () => {
            const balance = await svxPos.getBalance();
            expect(balance).to.equal(0);
        });
    });
    describe('Testing contract public vars', () => {
        it('Should return a receiver', async () => {
            const receiver = await svxPos.receiver();
            expect(receiver).to.be.properAddress;
        });

        it('Should return the payer', async () => {
            const payer = await svxPos.payer();
            expect(payer).to.be.properAddress;
        });
    });
});