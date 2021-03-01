from flask import Flask , jsonify
import requests
from news import getnews


app = Flask(__name__)
app.url_map.strict_slashes = False

@app.route('/')
def index():
    return " Api for Tamil news website- SLATEKUCHI"


@app.route("/<string>")
def page(string):
    news = getnews(string)
    return news


if __name__ == "__main__":
    app.run(debug=True)