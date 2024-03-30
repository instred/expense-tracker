from dotenv import load_dotenv
import os
import redis

path = '../.env'
load_dotenv(dotenv_path=path)

data_path = os.path.abspath(os.getcwd())+"\data\db.sqlite"

class ApplicationConfig:

    SECRET_KEY = os.environ["SECRET_KEY"]

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///" + data_path

    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.from_url("redis://127.0.0.1:6379")