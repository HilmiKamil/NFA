class Kendaraan {
    bergerak(){
        console.log("Kendaraan ini bergera");
    }
}

class Mobil extends Kendaraan{
    bergerak(){
        console.log("Mobil melaju di jalan raya")
    }
}

class Kapal extends Kendaraan{
    bergerak(){
        console.log("Kapal berlayar di laut");
    }
}

class Pesawat extends Kendaraan{
    bergerak(){
        console.log("Pesawat terbang di Udara");
    }
}

const kendaraan1 = new Mobil();
const kendaraan2 = new Kapal();
const kendaraan3 = new Pesawat();

// Overriding
kendaraan1.bergerak();
kendaraan2.bergerak();

// Overloading

class Kalkulator {
    tambah(a, b = 0, c = 0) {
        return a + b + c;
    }
}

const kalkulator = new Kalkulator();

console.log(kalkulator.tambah(5));        // Output: 5
console.log(kalkulator.tambah(5, 10));    // Output: 15
console.log(kalkulator.tambah(5, 10, 15)); // Output: 30