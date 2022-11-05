<?php

// "$connection" needed for the connection of database, otherwise we can't make a connection to there
function setComments($connection) 
{
    if(isset($_POST['saveComment'])){
      $user =  $_POST['username'];
      $date =  $_POST['date'];
      $message =  $_POST['message'];

      $sql = "INSERT INTO comment (username, date, message) VALUES ('$user','$date','$message')";
      $result = mysqli_query($connection, $sql);
    }
}

function getComments($connection)
{
    $sql = "SELECT * FROM comment ORDER BY date DESC";
    $result = mysqli_query($connection, $sql);
    while($row = mysqli_fetch_assoc($result)) // 3. all row is here from database and row is now an array[] 
    { 
            echo "<div class='comment__box'>";
?>
                <p class= "<?php if($row['username'] == $_SESSION['username']) {echo "highlight";} else {echo "none";} ?>">
<?php
                echo $row['username'];
?>
                <br>
                </p>
<?php
                echo $row['date']."<br>";
                echo nl2br($row['message']);
            echo" 
            <form method='POST'>
                <input type='hidden' name='id' value='".$row['id']."'>
                <input type='hidden' name='username' value='".$row['username']."'>
                <input type='hidden' name='date' value='".$row['date']."'>
                <input type='hidden' name='message' value='".$row['message']."'>
            </form>
            </div>";
    }
}
?>