<?php
include "../../php/config.php";

$con = connection();

session_start();

$id = $_SESSION['id'];

$sql = "SELECT * from progress WHERE user_id = '$id' AND subject = 'ENGLISH'";
$progress = $con->query($sql) or die ($con->error);
$row = $progress->fetch_assoc();
$total = $row["total"];
$done = $row["done"];

$percentage = ($done / $total) * 100;

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Progress English</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" href="../../css/progress_english.css">
</head>

<body>

<div class="progressbar-container">
    <!-- <h1>Progress: <?= $done ?> / <?= $total ?> = </h1> -->
    <h1>PROGRESS: </h1>

    <div class="meter animate">
            <span style="width:<?=$percentage?>%">&nbsp;&nbsp;&nbsp;<?=$percentage?>%<span></span></span>
        </div>

    </div>

    <div class="container">
    <br>
        <a href="../../html/subject_progress.html">
            <button class="btn_back">BACK</button>
        </a>
    <h1>Progress: <?= $done ?> / <?= $total ?> </h1>
     <h3>Percentage: <?= $percentage ?> % </h3>

    <?php for($i = 1; $i <= $total; $i++) { ?>

    <!-- done -->
    <?php if($i <= ($done)) { ?>
        <div class="circle<?=$i?>" onclick="showID(<?=$i?>)">
            <img src="../../images/english_passed.svg" alt="" class="circle" id="circle">
        </div>

    <!-- current -->
    <?php } else if($i == ($done + 1)) { ?>

        <div class="circle<?=$i?>" onclick="showID(<?=$i?>)">
            <img src="../../images/english_circ<?=$i?>.svg" alt="" class="circle" id="circle">
        </div>

    <!-- locked -->
    <?php }  else { ?>
        <div class="circle<?=$i?>" onclick="" >
            <img src="../../images/english_lock.svg" alt="" class="circle" id="circle">
        </div>
    <?php } ?>


    <?php } ?>

    </div>



</body>

</html>
    <script src="../../jsp_English/progress.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>
</body>

</html>