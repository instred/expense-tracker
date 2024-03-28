# import necessary packages
import flask
import mariadb
import sys
import dotenv
import os

path = '../.env'

dotenv.load_dotenv(dotenv_path=path)


# create the flask app
app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def index():
   return 'Success!'

config = {
    'host': os.getenv('host'),
    'port': os.getenv('port'),
    'user': os.getenv('user'),
    'password': os.getenv('password'),
    'database': os.getenv('database')
}


@app.route('/api', methods=['GET'])
def index2():
   try:
      conn = mariadb.connect(
         **config
      )
   except mariadb.Error as e:
      print(f"Error connecting to MariaDB Platform: {e}")
      sys.exit(1)
   print(conn.response)


# run the app
app.run()