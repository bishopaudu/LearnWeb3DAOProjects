require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
const URL = process.env.ALCHEMY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    georli:{
      url:URL,
      accounts:[PRIVATE_KEY]
    }
  }
};
