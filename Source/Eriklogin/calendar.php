
<?php

session_start();

if(!isset($_SESSION['username'])){
    header("Location: lsindex.php");
}

?>

<?php
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
<body>
    <nav class="navbar">
        <div class="navbar__container">
            <a href="calendar.php" id="nav__logo">Calendar</a>
            <div class="navbar__change" id="mobile">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
            <ul class="navbar__menu">
                <li class="navbar__item">
                    <a href="wiki.php" class="navbar__links">Wiki</a>
                </li>
                <li class="navbar__item">
                    <a href="forum.php" class="navbar__links">Forum</a>
                </li>
                <li class="navbar__btn">
                    <a href="exit.php" class="button">Log Out</a>
                </li>
            </ul>
        </div>
    </nav>
    <script type="text/javascript" src="javascript/do.js"></script>

    <p class="e_egg2"> "To infinity, and beyond! 2/2" </p>
</body>
    <script>
            if(window.history.replaceState) 
            {
                window.history.replaceState(null, null, window.location.href);
            }
    </script>
</html>