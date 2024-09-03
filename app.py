from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Joshua.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Todo(db.Model):
    srno = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    desc = db.Column(db.String(500), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __repr__(self) -> str:
        return f"{self.srno} - {self.title}"

@app.route('/')
def hello_world():
    age = 18
    qualification = "software engineering"
    name = "Joshua Dmello"
    country_list = ['USA', 'UK', 'PAK', 'IND', 'UAE']

    todos = Todo.query.all()
    return render_template("index.html", person=name, age=age, qua=qualification, list=country_list, todos=todos)

@app.route('/products')
def products():
    return 'This is a products page'

@app.route('/add', methods=['POST'])
def add_todo():
    if request.method == 'POST':
        title = request.form['title']
        desc = request.form['desc']
        new_todo = Todo(title=title, desc=desc)
        db.session.add(new_todo)
        db.session.commit()
    return redirect(url_for('hello_world'))

if __name__ == "__main__":
    app.run(debug=True, port=8000)
