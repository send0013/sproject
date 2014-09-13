var subjects = ["Math", "English", "History", "French", "P.E"];
var firstNames = ["John", "Jim", "Jones", "James", "Jackie", "Bob"];
var lastNames = ["Smith", "Roy", "Gagnon", "Lavoie", "Fortin", "Gagne", "Doe"];

function getRandomStudent(){
	// 
	// add random subjects
	// set courseGrades literal property
	var randomStudent = new RandomStudent();
	for(var i in subjects) {
		var subject = subjects[i];
		randomStudent.courseGrades[subject] = randomGrade();					
	}
	return randomStudent;
}

function RandomStudent(){
	this.Name = firstNames[Math.floor(random(firstNames.length))] + " " + lastNames[Math.floor(random(firstNames.length))],
	this.Program = "GEN_1",
	this.Level= Math.floor(random(4)) + 1,
	//https://stackoverflow.com/questions/1208222/how-do-i-implement-a-dictionary-or-hashtable-in-javascript
	this.courseGrades = {}   
}

function randomGrade(){
	var grades = ["A", "B", "C", "D", "F"];
	var plusOrMinus = Math.random() > 0.5 ? "-" : "+";
	var grade = grades[Math.floor(random(grades.length))] + " " + plusOrMinus;
	return grade;
}

function random(max){
	//
	return Math.random() * max;
}