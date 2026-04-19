<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Method GET</title>
</head>

<body>
    <form action="" method="get">
        <label for="">Nama Lengkap</label><br>
        <input type="text" name="fullname" id=""><br>

        <label for="">Alamat Rumah</label><br>
        <textarea name="alamat" id=""></textarea><br>

        <input type="submit" value="Kirim" name="proses">
    </form>

    <?php
    if (isset($_GET['proses'])) {
        $fname = $_GET['fullname'];
        $almt = $_GET['alamat'];
        $tombol = $_GET['proses'];

        echo "Nama: $fname <br>Alamat: $almt";
    }

    ?>

</body>

</html>