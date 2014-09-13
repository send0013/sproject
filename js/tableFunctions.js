//
// functions for writing a html table
//

function writeColumns(student){
	//row html
	var html;
	// write sudent prop
	for(var prop in student) {
	// var subject = student.courseGrades[course];
	if(prop === "courseGrades") break;
		html += "<td>" + prop + "</td>";
	};
	// write grades
	// for(var course in student.courseGrades) {
	// 	// var subject = student.courseGrades[course];
	// 	html += "<td>" + course + "</td>";
	// };

	// > is child selector https://api.jquery.com/child-selector/
	$("#myTable > tbody").append("<tr>"+ html + "</tr>");
}


// https://stackoverflow.com/questions/171027/add-table-row-in-jquery
function writeStudenToRow(student){
	var html;
	// add student property not grades
	for(var prop in student) {
		if(prop === "courseGrades") break;
		if(prop === "Name"){
			html += "<td class=\"name\">" + student[prop] + "</td>"
			// html += "<a href=\"\;\" class=\"name\">"+ student[prop]  +"</a></td></tr>";
			continue;
		}
		html += "<td>" + student[prop] + "</td>";
	};

	// for(var course in student.courseGrades) {

	// 	html += "<td>" + student.courseGrades[course] + "</td>";
	// };
	$("#myTable > tbody").append("<tr>"+ html + "</tr>");
	
}