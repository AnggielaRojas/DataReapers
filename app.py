# import dependencies
from flask import Flask, jsonify, request, render_template
from flask_pymongo import PyMongo

app = Flask(__name__)
# app.config["MONGO_URI"]="mongodb://localhost:27017/fetal_database"
# mongo = PyMongo(app)

# establish route
@app.route("/")
def home_page():
    return render_template('index.html')

@app.route('/flask', methods=['GET'])
def index():
    return "Flask server"

if __name__ == "__main__":
    app.run(port=5000, debug=True)

# run app
app.run(debug=True)