
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var multer = require('multer');
var upload = multer();
app.use(express.static('static'));


app.post('/getdata', upload.array(), function (req, res) {
	var listas = []
	var length = req.body.notas1.length;
	var notasN = req.body.notas1.map(Number);
	for (var i = 0; i<length; i++) {
		var estudiante = new Person(req.body.nombre1[i],notasN[i])
		listas.push(estudiante);
	}
	var class1 = new Students(listas);
	var average = JSON.stringify(class1.promedio());
	var max = JSON.stringify(class1.maximum());
	var best = JSON.stringify(class1.best());
	string = "The best student is " + best;
  res.send(string);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});




function Students(list) {
	this.identity ="26391",
	this.length = list.length,
	this.suma = function () {
		var suma= 0;
		for (var i = 0; i < list.length; i++) {
			suma += list[i].grade;
		}
		return suma;
	},
	this.promedio = function () {
		var promedio = this.suma()/list.length;
		return promedio;
	},
	this.maximum = function () {
		var notes = [];
		for (var i=0; i<list.length;i++) {
			notes.push(list[i].grade);
		}
		var maximum = Math.max.apply(Math,notes);
		return maximum;
	},
	this.best = function () {
		for (var i=0; i<list.length;i++) {
			if(list[i].grade === this.maximum()) {
				return list[i].name;
			}
		}
	}
};

function Person(name,grade) {
	this.name = name,
	this.grade = grade
}

/*function datos() {
	var list=[];
	var names = ["Shirley","Alex","Kali"];
	var notas = [50,56,50]
	for (var i = 0; i<names.length; i++) {
		var estudiante = new person(names[i],notas[i])
		list.push(estudiante);
	} 

	console.log(list)
	var class1 = new students(list);
	var average = class1.promedio();
	console.log(average);
	var max = class1.maximum();
	var best = class1.best();

	/*return {average: average, max: max, best: best};
}*/



