#!/bin/python3
import flask, flask_login
from flask import url_for, request, render_template, redirect
from flask_login import current_user
import collections, json, queue, random
from datetime import datetime
from base import app,load_info,ajax,DBDict,DBList,random_id,hash_id,full_url_for

# -- Info for every Hack-A-Day project --
load_info({
    "project_name": "Hack-A-Clock",
    "source_url": "https://github.com/za3k/day24_clock",
    "subdir": "/hackaday/clock",
    "description": "is a decimal time clock",
    "instructions": "Learn more about decimal time on <a href=\"https://en.wikipedia.org/wiki/Decimal_time\">wikipedia</a>",
    "login": False,
    "fullscreen": True,
})

# -- Routes specific to this Hack-A-Day project --

@app.route("/")
def index():
    return render_template('index.html')
