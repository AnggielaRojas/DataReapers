# import dependencies
from flask import Flask, jsonify, request, render_template
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"]="mongodb://localhost:27017/fetal_database"
mongo = PyMongo(app)

# establish route
@app.route("/")
def home_page():
    return render_template('index.html')

# run app
app.run(debug=True)