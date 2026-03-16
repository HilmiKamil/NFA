let buah = ['Pepaya', 'Mangga', 'Pisang', 'Semangka'];
buah[2] = 'Durian';
buah.length = 2;
let angka = new Array(10, 20, 30);
let arrKosong = new Array(5);

for (let i = 0; i < arrKosong.length; i++){
    arrKosong[i] = i +1;
}

Array.prototype.tampilkan = function(){
    console.log(this.join("-"));
}

let warna = ['Merah', 'Biru', 'Hijau'];
warna.tampilkan();


buah.push("Jengkol")
console.log(buah)
buah.pop()
console.log(buah)
buah.unshift("Jengkol")
console.log(buah)
buah.shift()
console.log(buah)

console.log(buah[0]);
console.log(buah[1]);
console.log(buah[2]);

console.log(arrKosong)
console.log(arrKosong[0])

console.log(angka);
console.log(buah.length);
console.log(buah.constructor);