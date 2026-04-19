<?php
$fruits = ['Pepaya', 'Apel', 'Mangga'];
// $fruits[0] = 'Jeruk';
// unset($fruits[2]);

// $fruits[] = 'Naga';

// echo $fruits[3];

echo '----Cetak Value dari Array----';
foreach ($fruits as $fruit) {
    echo '<br>Nama Buah: ' .$fruit;
}

echo '<br><br>';
echo '----Cetak Key dari Array----';
foreach ($fruits as $id => $fruit) {
    echo '<br>Key Array Buah: ' .$id;
}

echo '<br><br>';
echo '----Cetak Key dan Value dari Array----';
foreach ($fruits as $id => $fruit) {
    echo '<br>Buah dengan id: ' .$id . ' adalah buah ' .$fruit;
}

?>
