import { network } from "hardhat";
import GrantRegistryArtifact from "../artifacts/contracts/GrantRegistry.sol/GrantRegistry.json";
import RoundManagerArtifact from "../artifacts/contracts/RoundManager.sol/RoundManager.json";
import DonationVaultArtifact from "../artifacts/contracts/DonationVault.sol/DonationVault.json";
import GovernanceTokenArtifact from "../artifacts/contracts/GovernanceToken.sol/GovernanceToken.json";
import MatchingPoolArtifact from "../artifacts/contracts/MatchingPool.sol/MatchingPool.json";

async function main() {
  // Connect to Base Sepolia via Viem
  const { viem } = await network.connect({
    network: "baseSepolia",
    chainType: "l1", // Base is L1
  });

  const [deployerClient] = await viem.getWalletClients();
  console.log("Deploying contracts with account:", deployerClient.account.address);

  // Helper function to deploy
  async function deployContract(artifact) {
  const txHash = await deployerClient.deployContract({
    abi: artifact.abi,
    bytecode: artifact.bytecode,
    args: [],
  });

  const receipt = await viem.getPublicClient().waitForTransactionReceipt({ hash: txHash });
  console.log(`${artifact.contractName} deployed at: ${receipt.contractAddress}`);
  return receipt.contractAddress;
}


  // Deploy all contracts
  const grantRegistryAddr = await deployContract(GrantRegistryArtifact);
  const roundManagerAddr = await deployContract(RoundManagerArtifact);
  const donationVaultAddr = await deployContract(DonationVaultArtifact);
  const governanceTokenAddr = await deployContract(GovernanceTokenArtifact);
  const matchingPoolAddr = await deployContract(MatchingPoolArtifact);

  console.log("✅ All contracts deployed!");
  console.log({
    grantRegistryAddr,
    roundManagerAddr,
    donationVaultAddr,
    governanceTokenAddr,
    matchingPoolAddr,
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
