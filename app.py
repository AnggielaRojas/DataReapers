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
fetal_data = Base.classes.fetal_db

# establish route home page
@app.route("/")
def home_page():
    return render_template('index.html')

# # establish route for data
@app.route("/api/fetal_data")
def fetaldata():
    session =Session(engine)
    fetaldata = session.query(
        fetal_data.state,
        fetal_data.race_hispanic_origin,
        fetal_data.age,
        fetal_data.delivery_place,
        fetal_data.delivery_method,
        fetal_data.fetal_deaths
    ).all()
    session.close()
    all_fetaldata = list(np.ravel(fetal_data))
    return jsonify(all_fetaldata)


# run app
app.run(debug=True)