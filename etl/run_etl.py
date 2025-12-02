from db import init_db
from contracts import GRANT_REGISTRY_ABI, GRANT_REGISTRY_ADDRESS
from web3 import Web3
from backfill import run_backfill
from listener import run_listener

w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:8545"))
contract = w3.eth.contract(address=GRANT_REGISTRY_ADDRESS, abi=GRANT_REGISTRY_ABI)

if __name__ == "__main__":
    init_db()
    # Uncomment one of these:
    # run_backfill(contract, "GrantCreated", 0, w3.eth.block_number, batch_size=1000)
    # run_listener(contract, "GrantCreated", poll_interval=2)
