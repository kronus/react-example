<?php
global $server;
$server = "localhost";
global $user;
$user = "someU";
global $pwd;
// $pwd = "someP"; // production
 $pwd = "someP"; // local
global $db;
$db = "someDb";

 //open connection to mysql db
$connection = mysqli_connect($server,$user,$pwd,$db) or die("Error " . mysqli_error($connection));

//fetch table rows from mysql db
$sql = "select * from songs_new";
$result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

// create an array
$mArr = array();

//fetch tha data from the database 
while ($row = mysqli_fetch_assoc($result)) {
   $mArr[] = $row;
   // var_dump($row);
}
// var_dump($mArr);

function utf8ize($d) {
    if (is_array($d)) {
        foreach ($d as $k => $v) {
            $d[$k] = utf8ize($v);
        }
    } else if (is_string ($d)) {
        return utf8_encode($d);
    }
    return $d;
}

//convert to json
echo json_encode(utf8ize($mArr), JSON_UNESCAPED_SLASHES|JSON_PRETTY_PRINT);

//close the connection
mysqli_close($connection);
?>
