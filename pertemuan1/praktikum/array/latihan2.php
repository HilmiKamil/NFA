<?php
// Satu Baris
$fruit = ['name' => 'Apel', 'color' => 'Red', 'price' => 5000];

// Multi Baris
$car = [
    'brand' => 'Ford',
    'model' => 'Mustang',
    'year' => 1964
];

foreach ($fruit as $a => $b) {
    echo "$a: $b <br>";
}

echo '<br><br>';

foreach ($car as $x => $y) {
    echo "$x: $y <br>";
}
