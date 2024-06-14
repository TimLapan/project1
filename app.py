from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    dob = request.form['dob']
    today = datetime.now()
    birthday = datetime.strptime(dob, '%Y-%m-%d')
    age = today.year - birthday.year - ((today.month, today.day) < (birthday.month, birthday.day))
    return render_template('greeting.html', age=age, dob=dob)

if __name__ == '__main__':
    app.run(debug=True)
