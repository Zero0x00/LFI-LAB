from flask import Flask, render_template, request, Response, send_file
import requests, os
app = Flask(__name__)


@app.route("/")
def index():
    return render_template('home.html')

@app.route("/Home")
def home():
    return render_template('home.html')

@app.route("/Find")
def about():
    return render_template('Find.html')

@app.route('/Find/file')
def cat_picture():
    abc = request.args.get('file_path')
    if not abc:
        return 404
    return send_file(os.path.join(os.getcwd(), abc))

