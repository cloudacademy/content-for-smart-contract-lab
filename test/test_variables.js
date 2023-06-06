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

  async function deployVariablesContract() {
    const Variables = await ethers.getContractFactory("Variables");
    const nameOfTheContract = "Variables";
    const variablesContract = await Variables.deploy(nameOfTheContract);
    return { variablesContract, nameOfTheContract};
  }

  describe("step 1", function () {
    it("test if nameOfTheContract variable is declared", async function () {
      const { variablesContract, nameOfTheContract } = await loadFixture(deployVariablesContract);
      expect(await variablesContract.nameOfTheContract()).to.equal(nameOfTheContract);
    });
  });
  
  describe("step 2", function () {
    it("test if greetings variable  declared", async function () {
      const { variablesContract } = await loadFixture(deployVariablesContract);
      // expect variable greetings to be declared
      expect(await variablesContract.greetings()).not.to.be.empty;
    });
  });

  describe("step 3", function () {
    it("test if visibleByEveryone variable is public", async function () {
      const { variablesContract } = await loadFixture(deployVariablesContract);
      // expect variable visibleByEveryone to be public
      expect(await variablesContract.visibleByEveryone()).not.to.be.empty;
    });
  });

  describe("step 4", function () {
    it("test if local variables in function getResult() are declared", async function () {
      const { variablesContract } = await loadFixture(deployVariablesContract);
      // expect variable localVariable to be declared
      expect(await variablesContract.getResult()).to.equal(3);
    });
  });

});
