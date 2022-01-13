# import dependencies
import sqlalchemy
import numpy as np
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, request, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql.expression import all_

# establish app
app = Flask(__name__)

# establish database setup
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost/fetal_db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
Base = automap_base()
Base.prepare(db.engine, reflect = True)

# reference to tables
fetal_data = Base.classes.fetal_data

# establish route home page
@app.route("/")
def home_page():
    return render_template('index.html')

# # establish route for data
@app.route("/api/fetal_data")
def fetaldata():
    sel = [
        fetal_data.state,
        fetal_data.race_hispanic_origin,
        fetal_data.age,
        fetal_data.delivery_place,
        fetal_data.delivery_method,
        fetal_data.fetal_deaths
    ]
    results = db.session.query(*sel).all()

    data_fetal = {}
   
    data_fetal["state"]  = [result[0] for result in results]
    data_fetal["race_hispanic_origin"] = [result[1] for result in results]
    data_fetal["age"] = [result[2] for result in results]
    data_fetal["delivery_place"] = [result[3] for result in results]
    data_fetal["delivery_method"] = [result[4] for result in results]
    data_fetal["fetal_deaths"] = [result[5] for result in results]

    print(data_fetal)
    return jsonify(data_fetal)


# run app
app.run(debug=True)