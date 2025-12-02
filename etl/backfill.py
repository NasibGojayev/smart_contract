from extractor import get_contract_events
from transformer import map_grant_event
from loader import save_grant_event

def run_backfill(contract, event_name, start_block, end_block, batch_size):
    for i in range(start_block, end_block + 1, batch_size):
        batch_end = min(i + batch_size - 1, end_block)
        logs = get_contract_events(contract, event_name, i, batch_end)
        for log in logs:
            save_grant_event(map_grant_event(log))
