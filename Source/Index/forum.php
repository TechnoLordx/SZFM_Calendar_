<?php

session_start();

if(!isset($_SESSION['username'])){
    header("Location: lsindex.php");
}

?>

<?php
    include 'comment.php';
    include 'config.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    <title>Calendar</title>
    <link rel="stylesheet" href="style/styles.css"/>
</head>
<header>
<nav class="navbar">
            <a href="#" class="logo">CALENDAR</a>
            <div class="nav_links">
                <ul>
                    
                    <a href="exit.php" class="btn" id="sign">Sign Out</a>
                    
                   
                    <a href="Calendar.php" class="btn" id="sign">Back</a>
                    
                
                </ul>

            </div>
    </nav>
    <script type="text/javascript" src="Script/nav.js"></script>
</header>
<body>
    
    <script type="text/javascript" src="javascript/do.js"></script>

    <div class="forum__container">
         <div class="content2"> 
            <?php
                echo"<form class='mid' method='POST' action='".setComments($connection)."'>
                    <input type='hidden' name='username' value='".$_SESSION['username']."'>
                    <input type='hidden' name='date' value='".date('Y-m-d H:i:s')."'>
                    <textarea class='commnet__text' name='message'> </textarea> <br>
                    <button class='comment__btn' type='submit' name='saveComment'> Save </button>
                </form>";

                getComments($connection);
            ?>
        </div>
    </div>

    
</body>
    <script>
            if(window.history.replaceState) 
            {
                window.history.replaceState(null, null, window.location.href);
            }
    </script>
</html>