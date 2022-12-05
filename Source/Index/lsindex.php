<?php
include 'config.php';

session_start();
error_reporting(0);

if(isset($_SESSION['username'])){
    header("Location: forum.php");
}


if(isset($_POST['submit'])) {
    $email = $_POST['email'];
    $password = md5($_POST['password']);

    $sql = "SELECT * FROM users WHERE email = '$email' AND password ='$password'";
    $result = mysqli_query($connection, $sql);

    if($result->num_rows > 0 ) {
        $row = mysqli_fetch_assoc($result);
        $_SESSION['username'] = $row['username'];
        header("Location: calendar.php");
    }else{

        echo "<script>alert('Whoops... Email or Password is wrong!')</script>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style/ls_style.css"/>
    <title>Login</title>
</head>
<body>
    <div class="container">
        <form action="" method="POST" class="login">
            <div class="center__text">
                <p class="login__text">Login</p>
            <div class="data">
                <input type="email" name="email" placeholder="Email" class="input-text" value="<?php echo $email; ?>"require>
            </div>  
            <div class="data">  
                <input type="password" name="password" placeholder="Password" class="input-text" require>
            </div>
            <div class="data">
                <button name="submit" class="btn">Login</button>
            </div>
            </div>
            <div class="text">
                <p class="register">If you don't have an account. </p> <a class="switch" href="register.php">Register Here</a>
            </div>        
        </form>     
    </div>
</body>
</html>