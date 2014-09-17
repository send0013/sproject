<?php 


//http://stackoverflow.com/questions/6809053/simple-jquery-php-and-jsonp-example

//Example - the php file on the server has a longer string

// just posting string from encodingJSON
$jsonString = '[{"Name":"Jim Fortin","Program":"GEN_1","Level":1,"courseGrades":{"Math":"A -","English":"D -","History":"F","French":"A +","P.E":"C -"}}';



// DON"T ENCODE FOR JSON when using JSONP!!!!!!!
// header('Content-type: application/json');
echo $_GET['callback'].'('. $jsonString.')';

?>
