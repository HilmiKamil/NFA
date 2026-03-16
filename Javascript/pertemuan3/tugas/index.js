// Data awal produk 
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Mnambahkan produk baru
function tambahProduk(nama, harga, stok) {
    // Tentukan ID baru berdasarkan ID terbesar + 1
    let idBaru = produkToko.length === 0 ? 1 : Math.max(...produkToko.map(p => p.id)) + 1;
    
    let produkBaru = { id: idBaru, nama, harga, stok };
    produkToko.push(produkBaru);
    console.log(`Produk "${nama}" berhasil ditambahkan dengan ID ${idBaru}.`);
}

// Menghapus produk berdasarkan ID
function hapusProduk(id) {
    let indeks = produkToko.findIndex(p => p.id === id);
    if (indeks !== -1) {
        let nama = produkToko[indeks].nama;
        produkToko.splice(indeks, 1);
        console.log(`Produk "${nama}" dengan ID ${id} dihapus.`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan.`);
    }
}

// Menampilkan semua produk
function tampilkanProduk() {
    if (produkToko.length === 0) {
        console.log("Tidak ada produk.");
    } else {
        console.log("Daftar Produk:", produkToko);
    }
}

// Menampilkan Ouput (Console)
console.log("=== Manajemen Produk Toko ===");
tampilkanProduk();               // Tampilkan awal
tambahProduk("Monitor", 1500000, 8); // Tambah monitor
tambahProduk("Printer", 2500000, 3); // Tambah printer
tampilkanProduk();               // Tampilkan setelah tambah
hapusProduk(2);                  // Hapus Mouse (id 2)
tampilkanProduk();               // Tampilkan setelah hapus
hapusProduk(99);                 // Coba hapus id tidak ada