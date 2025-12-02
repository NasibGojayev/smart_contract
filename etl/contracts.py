import json

with open("../artifacts/contracts/GrantRegistry.sol/GrantRegistry.json") as f:
    GRANT_REGISTRY_ABI = json.load(f)["abi"]

GRANT_REGISTRY_ADDRESS = "0xfbab4aa40c202e4e80390171e82379824f7372dd"
