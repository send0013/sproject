<?php
	//determines which method has been used to make the request:
	$method = $_SERVER['REQUEST_METHOD'];

	//what url was requested
	$url = $_SERVER['REQUEST_URI'];
	$name = $_GET['name'];

	// $jsonString = + ' '+ $url;
	// header('Content-type: application/json');


	//jsonp
	$json = json_encode('method='.$method .' url= '. $url. '</br> name= '. $name);
	echo $_GET['callback']. '(' .$json. ')';
?>