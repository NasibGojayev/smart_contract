import time
from extractor import create_event_filter
from transformer import map_grant_event
from loader import save_grant_event

def run_listener(contract, event_name, poll_interval):
    event_filter = create_event_filter(contract, event_name)
    while True:
        for event in event_filter.get_new_entries():
            save_grant_event(map_grant_event(event))
        time.sleep(poll_interval)
