from db import Session, GrantEvent

def save_grant_event(event_data):
    session = Session()
    if session.query(GrantEvent).filter_by(tx_hash=event_data["tx_hash"]).first():
        session.close()
        return
    record = GrantEvent(**event_data)
    session.add(record)
    session.commit()
    session.close()
