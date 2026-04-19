<?php
// Variabel
$nama = 'Fakhirul';
$totalBelanja = 90000;
$keterangan = '';

// if-else
if ($totalBelanja > 100000) {
    $keterangan = "Selamat $nama Anda mendapatkan Hadiah";
} else {
    $keterangan = "Terima Kasih $nama, sudah berbelanja";
}

echo "Nama Pelanggan : $nama";
echo "<br/>Total Belanja: Rp. $totalBelanja";
echo "<br/>Keterangan: $keterangan";

?>
