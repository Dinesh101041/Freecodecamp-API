from flask import Flask , jsonify
import requests
from camp import getblog


app =  Flask(__name__)
app.url_map.strict_slashes = False

@app.route("/")
def news():
    x="This is free code camp api to fetch freecodecamp blogs"
    return x

@app.route("/<string>")
def blog(string):
    x=getblog(string)
    return x

if __name__ == "__main__":
    app.debug = True
    app.run()
    