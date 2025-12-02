def map_grant_event(log):
    return {
        "tx_hash": log["transactionHash"].hex(),
        "block_number": log["blockNumber"],
        "from_address": log["args"]["from"],
        "value": str(log["args"]["value"])
    }
