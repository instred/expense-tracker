# import necessary packages
import flask
import mariadb
import sys

# create the flask app
app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def index():
   return 'Success!'

config = {
    'host': '213.227.68.191',
    'port': 42069,
    'user': 'root',
    'password': 'NieWiem124',
    'database': 'expense-tracker'
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