import pymongo
from flask import Flask, jsonify
from bson.json_util import dumps

app = Flask(__name__)

conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

db = client.record_db
collection = db.item




@app.route("/")
def home():
    print("received request from 'home page'")
    return ("/api/v1.0/terrorism_data")

@app.route("/api/v1.0/terrorism_data")
def data():
    print("received request from 'station page'")
    results = db.item.find()
    # data = dumps(results)
    # return jsonify(data)
# Set route
@app.route('/')
def index():
    # Store the entire team collection in a list
    records = list(db.item.find())
    print(records)

    # Return the template with the teams list passed in
    return render_template('index.html')

    return dumps(results)

@app.route("/terrordata")
def terrordata():
    """Return the MetaData for a given sample."""
    df = pd.DataFrame(list(db.item.find()))
    incidents = df.groupby(["iyear", "region"]).count()["eventid"]
    df_subset = pd.DataFrame(incidents).reset_index()
    df_region1 = df_subset[df_subset["region"] == 1]
    df_region2 = df_subset[df_subset["region"] == 2]
    data = {}
    data["region1_year"] = df_region1["iyear"].values
    data["region1_numberofincidents"] = df_region1["eventid"].values
    data["region2_year"] = df_region2["iyear"].values
    data["region2_numberofincidents"] = df_region2["eventid"].values
    return jsonify(data)

  

if __name__=="__main__":
    app.run(debug=True)
