<?php
include "../php/config.php";

$con = connection();

session_start();

$id = $_SESSION['id'];

$sql = "SELECT * from progress WHERE user_id = '$id' AND subject = 'FILIPINO'";
$progress = $con->query($sql) or die ($con->error);
$row = $progress->fetch_assoc();
$total = $row["total"];
$done = $row["done"];

$percentage = ($done / $total) * 100;

$topics = ["Mga tunog", "Pagbuo", "Buwan saka Araw", "Mga kulay", "Prutas", "", "", ""];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Topics</title>
    <link rel="stylesheet" href="../css/topics_filipino.css">
    <link rel="shortcut icon" href="../images/logo.png" type="image/png">
 
</head>
<body>
    <div class= "container">
    <a href="../html/subject_topic.html">
        <button class= "btn_back">BACK</button>
    </a>
  
    <div class="topics">
        <div id="pics1" value="1">
          <img src="../images/Leksyon.svg" alt="" class="leksyon">
        </div>
        <br><br>
       
        <?php for($i = 1; $i <= $total; $i++) { ?>
            <!-- UNLOCKED -->
            <?php if($i <= ($done + 1)) { ?>

                <div id= "pics1" value="<?=$i?>" onclick="showID(<?=$i?>)" >
                        <img src="../images/<?=$topics[$i-1]?>.svg" alt="" class = "pics">
                    </div>
                    <br><br>  <br><br>

            <!-- LOCKED -->
            <?php } else { ?>
                <!-- Pakirename na lang mga lock -->
                    <?php if($i == 1)  { ?>    
                        <div id= "pics1" value="1" >
                            <img src="../images/Lock_Lesson/Lock_Filipino/Alpabetong_Lock.svg" alt="" class = "pics">
                        </div>
                        <br><br><br><br>
                    <?php } else if($i == 2) { ?>
                        <div id= "pics1" value="2">
                            <img src="../images/Lock_Lesson/Lock_Filipino/Pagbuo_Lock.svg" alt="" class = "pics">
                        </div>
                    <?php } else if($i == 3) { ?>
                        <div id= "pics1" value="3"> 
                            <img src="../images/Lock_Lesson/Lock_Filipino/Buwan_Lock.svg" alt="" class = "pics">
                        </div>
                        <br><br>  <br><br>
                    <?php } else if($i == 4) { ?>
                        <div id= "pics1" value="4" > 
                            <img src="../images/Lock_Lesson/Lock_Filipino/MgaKulay_Lock.svg" alt="" class = "pics">
                        </div>
                        <br><br>  <br><br>
                    <?php } else if($i == 5) { ?>
                        <div id= "pics1" value="5" > 
                            <img src="../images/Lock_Lesson/Lock_Filipino/Prutas_Lock.svg" alt="" class = "pics">
                        </div>
                    <?php } } } ?>
        </div>
    </div>
    
</body>
<script type="text/javascript" src="../Filipino Page/jsp_Filipino/topics-filipino.js"></script>
</html>