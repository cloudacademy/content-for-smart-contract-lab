const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Variables Unit Tests", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  async function deploySmartcCotract() {
    const Contract = await ethers.getContractFactory("SmartContract");
    const contract = await Contract.deploy();

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    return { contract, owner, otherAccount };
  }

  describe("step 1", function () {
    it("test if total suply set to 1000 declared", async function () {
      const { contract } = await loadFixture(deploySmartcCotract);
       expect( await contract.totalSupply()).to.equal(1000);
    });
  });

  describe("step 2", function () {
    it("test if total suply can only be viewed by owner", async function () {
      const { contract, otherAccount } = await loadFixture(deploySmartcCotract);
      // We use contract.connect() to send a transaction from another account
      await expect(contract.connect(otherAccount).totalSupply()).to.be.revertedWith(
        "Only the owner can call this function."
      );
    });
  });

});
