let angka1 = [20, 21, 40, 50, 60]

let i = 0;

while(i < angka1.length){
    console.log(angka1[i]);
    i++;
}

// loop foreach

angka1.forEach(function(item, index){
    console.log(`Index ${index} : ${item}`)
});

//loop map

let angkaBaru = angka1.map(num => num);
console.log(angkaBaru)

// Filter

let angkaBaru1 = angkaBaru.filter(num => num % 2 !== 0);
console.log(angkaBaru1);

// Reduce

let total = angka1.reduce((acc, num) => acc + num, 0);
console.log(total);

//For Of
for(let item of angka1){
    console.log(item);
}