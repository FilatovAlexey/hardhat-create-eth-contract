import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const MyNFT = await ethers.getContractFactory("MyNFT");
  const test = await MyNFT.deploy();
  test.mint("0xc3e2e26a10eb71f451055c888a207570043ae3fd", "");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
