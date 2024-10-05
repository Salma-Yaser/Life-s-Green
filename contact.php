<?php
 if(isset($_POST['submit'])){
include 'connect.php';
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

$stm="insert into contact(Name,email,message) values('$Name','$email','$message')";

$x=mysqli_query($conn,$stm);
if($x){
  echo "Message Sent Successfully...";
}
else {
    echo "Error!" ; 
   
    echo "Please try again later";
}
 }
?>