<?php
    // Variabel
    $nama = 'Fakhirul';
    $nilai = 75;

    // jika $nilai >=60 = lulus
    // jika $nilai <=60 = tidak lulus

    $keterangan = ($nilai >=60) ? 'Lulus' : 'Tidak Lulus';

    echo "Nama Siswa: $nama";
    echo "<br/>Nilai: $nilai";
    echo "<br/>Keterangan: $keterangan";

?>
