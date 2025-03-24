from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')  # Make sure this route exists
def home():
    return jsonify({"message": "Welcome to the fuss Busss!"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)


