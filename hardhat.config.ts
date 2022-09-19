/** @format */
import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.6.6",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/" + process.env.INFURA_API_KEY,
      accounts: [
        process.env.MUMBAI_PRIVATE_KEY_1 || "",
        process.env.MUMBAI_PRIVATE_KEY_2 || "",
        process.env.MUMBAI_PRIVATE_KEY_3 || "",
      ],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [
        process.env.MUMBAI_PRIVATE_KEY_1 || "",
        process.env.MUMBAI_PRIVATE_KEY_2 || "",
        process.env.MUMBAI_PRIVATE_KEY_3 || "",
      ],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
