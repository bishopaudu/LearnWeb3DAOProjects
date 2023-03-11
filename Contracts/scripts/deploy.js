const hre = require("hardhat");

async function main() {
  const whiteList = await hre.ethers.getContractFactory('WhiteList');
  const whiteListInstance = await whiteList.deploy(10);
  console.log('deploying contracts ......')
  await whiteListInstance.deployed();
  console.log(`WhiteList contracts address: ${whiteListInstance.address}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
