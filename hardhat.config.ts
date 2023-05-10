import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-web3";
import * as ethers from "ethers";

//test mnemonic
const mnemonic =
  "place test wall beauty test aware provide test source virus debris test";
const path = "m/44'/60'/0'/0";

const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/GCR0cqhsfVwg_43C0OVm2_cf3X4j2v-T`,
      accounts: [wallet.privateKey],
    },
  },
};

export default config;
