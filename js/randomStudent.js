var subjects = ["math", "english", "history", "french"];
var firstNames = ["John", "Jim", "Jones", "James", "Jackie", "Bob"];
var lastName = ["Smith", "Roy", "Gagnon", "Lavoie", "Fortin", "Gagné", "Doe"];

function getRandomStudent(){
	return Student;
}

var Student = {
	name : "ok",
	program: "program1",
	level: 2,
	//https://stackoverflow.com/questions/1208222/how-do-i-implement-a-dictionary-or-hashtable-in-javascript
	courseGrades : {
		math : "A",
		english : "B-",
		history : "C+",
		french : "F",	
	}
};

function random(max){
	//firstNames[Math.floor(random(firstNames.length))] + " " + lastNames[Math.floor(random(firstNames.length))]
	return Math.random() * max;
}