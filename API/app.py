from flask import Flask, jsonify
import requests
from io import BytesIO
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import OperationalError
from sqlalchemy import text
import time


app = Flask(__name__)

a