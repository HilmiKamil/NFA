export class produkModel{
    constructor(){
        this.produkList= [];
    }

    // Tambah Produk

    tambahProduk(namaProduk){
        this.produkList.push(namaProduk);
    }

    // Menghapus Produk

    hapusProduk(namaProduk){
        this.produkList = this.produkList.filter(produk => produk != namaProduk);
    }

    // Melihat daftar produk

    getProduk(){
        return this.produkList;
    }
}