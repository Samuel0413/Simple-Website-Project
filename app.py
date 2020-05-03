from flask import Flask, render_template, send_file, request

app = Flask(__name__)

links = {
"Github":"https://github.com/Samuel0413",
"About Me":"https://drive.google.com/file/d/1vXtkTjje9duDxsFFcvy7J8GPKyEmu8Sc/view?usp=sharing",
"Baidu":"https://www.baidu.com"
}

@app.route('/', methods=["GET", "POST"])
def index():

	if request.method == "POST": #post request
		#with open("MATH.pdf", "rb") as f:
		return send_file("MATH.pdf", attachment_filename="MATH.pdf", as_attachment=True)

	else:
		return render_template("index.html", links=links)



@app.route('/<type_your_name>')
def index1(type_your_name):
				return "Hello, " + type_your_name + "!"


if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')