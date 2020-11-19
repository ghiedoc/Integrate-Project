<?php
include "../php/config.php";

$con = connection();

session_start();

$id = $_SESSION['id'];

$sql = "SELECT * from progress WHERE user_id = '$id' AND subject = 'MATH'";
$progress = $con->query($sql) or die ($con->error);
$row = $progress->fetch_assoc();
$total = $row["total"];
$done = $row["done"];

$percentage = ($done / $total) * 100;

$topics = ["Counting Numbers", "Addition", "Subtraction", "Fraction", "Money", "Shapes", "Time", "Measurement"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Topics</title>
    <link rel="stylesheet" href="../css/topics_math.css">
    <link rel="shortcut icon" href="../images/logo.png" type="image/png">
 
</head>
<body>
    
    <div class= "container">
    <a href="../html/subject_topic.html">
        <button class= "btn_back">BACK</button>
    </a>
  
    <div class = "topics">
        <img src="../images/Lesson Math.svg" alt="" class= "math">
       
        <?php for($i = 1; $i <= $total; $i++) { ?>
            <!-- UNLOCKED -->
            <?php if($i <= ($done + 1)) { ?>

                <div id= "pics1" value="<?=$i?>" onclick="showID(<?=$i?>)" >
                        <img src="../images/<?=$topics[$i-1]?>.svg" alt="" class = "pics">
                    </div>

            <!-- LOCKED -->
            <?php } else { ?>
                <div id= "pics1" value="<?=$i?>">
                    <!-- Palitan yung name ng image -->
                        <img src="../images/Lock_Lesson/Lock_Math.svg" alt="" class = "pics">
                    </div>
            <?php  } }?>

    </div>
    </div>
    
</body>
<script type="text/javascript" src="../Math Page/jsp_Math/topics-math.js"></script>
</html>