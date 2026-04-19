<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas 1 - Form Nilai Ujian</title>
</head>

<body>

    <h2>Form Penilaian Ujian</h2>
    <form action="" method="post">
        <label for="">Nama:</label><br>
        <input type="text" name="fullname" id="" required><br><br>

        <label for="">Email:</label><br>
        <input type="email" name="email" id="" required><br><br>

        <label for="">Nilai Ujian:</label><br>
        <input type="number" name="grade" id="" required><br><br>

        <input type="submit" value="Kirim" name="proses">
    </form>

    <hr>

    <?php
    if (isset($_POST['proses'])) {
        $fname  = $_POST['fullname'];
        $email = $_POST['email'];
        $grade = $_POST['grade'];

        // Struktur kendali (Ternary)
        if ($grade > 70) $keterangan = "Lulus";
        else $keterangan = "Remedial";

        // Output
        echo "<h3>Hasil:</h3>";
        echo "Nama: $fname <br>";
        echo "Email: $email <br>";
        echo "Nilai Ujian: $grade <br>";
        echo "Keterangan: $keterangan";
    }
    ?>

</body>

</html>