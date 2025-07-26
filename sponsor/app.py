from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def sponsor_info():
    sponsors = {
        2025: ['Company D', 'Company E', 'Company F']
    }
    return render_template('index.html', sponsors=sponsors)

if __name__ == '__main__':
    app.run(debug=True)