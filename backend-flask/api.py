# import necessary packages
import flask
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



if __name__ == '__main__':

   # run the app
   app.run()