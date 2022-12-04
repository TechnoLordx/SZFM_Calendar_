<?php

session_start();

if(!isset($_SESSION['username'])){
    header("Location: lsindex.php");
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>B1G Project</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="./weather_style.css">
    <script src="./weather_script.js" defer></script>
</head>

<header>
    <nav class="navbar">
		<a href="#" class="logo">CALENDAR</a>
        <div class="nav_links">
			<ul>
                <li>
                <a href="exit.php" class="btn" id="sign">Sign Out</a>
                </li>
                <li>
                <a href="forum.php" class="btn" id="sign">Comment</a>
                </li>
               
			</ul>

        </div>
        <img src="menu-btn.png" alt="menu lines" class="menu_lines">
    </nav>
    <script type="text/javascript" src="Script/nav.js"></script>
</header>
<body>
    <div id="app"></div>
    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>

</html>
