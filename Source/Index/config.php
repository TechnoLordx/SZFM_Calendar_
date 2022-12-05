<?php

$server = "localhost";
$userName = "root";
$password = "";
$database = "project";

$connection = mysqli_connect($server, $userName, $password, $database);

if(!$connection){
   echo "<script>alert('Connection Failed')</script>";
}

?>