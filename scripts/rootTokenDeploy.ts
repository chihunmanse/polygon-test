/** @format */
import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(deployer.address);
  console.log(await deployer.getBalance());

  const RootERC721 = await ethers.getContractFactory("DummyMintableERC721");
  const rootERC721 = await RootERC721.deploy("RootERC721", "Root");
  await rootERC721.connect(deployer).deployed();

  console.log(rootERC721.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
