# import necessary packages
from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
import dotenv
import os
from flask_session import Session

from models import db, User
from config import ApplicationConfig

# create the flask app
app = Flask(__name__)
app.config["DEBUG"] = True
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
server_session = Session(app)
db.init_app(app)

with app.app_context():
   db.create_all()

@app.route('/register', methods=['POST'])
def register_user():
   
   email = request.json["email"]
   password = request.json["password"]

   user_exist = User.query.filter_by(email=email).first() is not None

   if user_exist:
      return jsonify({
         "error" : "user already exists"
      }), 409

   hashed_pwd = bcrypt.generate_password_hash(password)
   new_user = User(email=email, password=hashed_pwd)
   db.session.add(new_user)
   db.session.commit()

   return jsonify({
      'id' : new_user.id,
      'email' : new_user.email 

   })

@app.route("/@me")
def get_current_user():
   user_id = session.get("user_id")

   if not user_id:
      return jsonify({"error" : "Unauthorized"}), 401
   
   user = User.query.filter_by(id=user_id).first()
   return jsonify({
      'id' : user.id,
      'email' : user.email 

   })

@app.route('/login', methods=['POST'])
def login_user():
   
   email = request.json["email"]
   password = request.json["password"]


   user = User.query.filter_by(email=email).first()

   if user is None:
      return jsonify({"error" : "Unauthorized"}), 401
   
   if not bcrypt.check_password_hash(user.password, password):
      return jsonify({"error" : "Unauthorized"}), 401
   
   session["user_id"] = user.id


   return jsonify({
      'id' : user.id,
      'email' : user.email 

   })



if __name__ == '__main__':

   # run the app
   app.run()