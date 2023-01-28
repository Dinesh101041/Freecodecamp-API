from flask import Flask , jsonify
from flask import render_template
import requests
from camp import getBlogData


app =  Flask(__name__)
# app.url_map.strict_slashes = False

@app.route("/")
def news():
   return render_template('index.html')

@app.route("/<string>")
def blog(string):
    x = getBlogData(string)
    return x

if __name__ == "__main__":
#     app.debug = True
    app.run()
