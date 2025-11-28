import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";
import { configVariable, defineConfig } from "hardhat/config";

export default defineConfig({
  plugins: [hardhatToolboxViemPlugin],
  solidity: {
    profiles: {
      default: {
        version: "0.8.28",
      },
      production: {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    baseSepolia: {
      type:"http",
      url: "https://base-rpc.publicnode.com",
      accounts: ["3c0e0ca01f5adeda20ed78af384e948764e7f186095f14b054c9b724a0c7598d"],
    },
    sepolia: {
      type: "http",
      chainType: "l1",
      url: "wss://base-rpc.publicnode.com",
      accounts: ["3c0e0ca01f5adeda20ed78af384e948764e7f186095f14b054c9b724a0c7598d"],
    },
  },
});
