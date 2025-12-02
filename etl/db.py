from sqlalchemy import create_engine, Column, Integer, String, BigInteger
from sqlalchemy.orm import declarative_base, sessionmaker
from config import DB_URL

Base = declarative_base()
engine = create_engine(DB_URL)
Session = sessionmaker(bind=engine)

class GrantEvent(Base):
    __tablename__ = "grant_events"
    id = Column(Integer, primary_key=True)
    tx_hash = Column(String, unique=True)
    block_number = Column(BigInteger)
    from_address = Column(String)
    value = Column(String)

def init_db():
    Base.metadata.create_all(engine)
