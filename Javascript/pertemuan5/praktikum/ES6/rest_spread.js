let daftarProduk  = ["Laptop", "Smartphone"];

function tambahProduk(...produkBaru){
    daftarProduk = [...daftarProduk, ...produkBaru];
    console.log("Produk berhasil ditambahkan", produkBaru);
}

function tampilkanProduk(){
    console.log("Daftar Produk saat ini", daftarProduk);
}

function salinProduk(){
    return[...daftarProduk];
}

tambahProduk("Tablet", "Earphone");
tampilkanProduk();

const produkCadangan = salinProduk();
console.log("Produk Cadangan", produkCadangan);

tambahProduk("Smartwatch", "Mouse");
tampilkanProduk();

console.log("Produk Cadangan setelah Perubahan ", produkCadangan);