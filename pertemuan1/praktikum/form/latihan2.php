<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Method POST</title>
</head>

<body>
    <form action="" method="post">
        <label for="">Username</label><br>
        <input type="text" name="uname"><br>

        <label for="">Password</label>
        <br><input type="password" name="pwd" id=""><br><br>

        <input type="submit" value="Login" name="proses">
    </form>

    <?php
    if (isset($_POST['proses'])) {
        $username = $_POST['uname'];
        $password = $_POST['pwd'];
        $login = $_POST['proses'];

        echo "Username kamu adalah $username <br>Password kamu adalah $password";
    }

    ?>

</body>

</html>