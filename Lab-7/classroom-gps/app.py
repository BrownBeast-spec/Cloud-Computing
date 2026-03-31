# app.py
import requests
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/location')
def get_location():
    try:
        # Fetching dynamic location based on the server's public IP
        response = requests.get('http://ip-api.com/json/').json()
        
        return jsonify({
            "classroom": "Room 101",
            "latitude": response.get("lat", "Unknown"),
            "longitude": response.get("lon", "Unknown"),
            "city": response.get("city", "Unknown"),
            "country": response.get("country", "Unknown")
        })
        
    except Exception as e:
        return jsonify({
            "error": "Could not fetch location", 
            "details": str(e)
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
