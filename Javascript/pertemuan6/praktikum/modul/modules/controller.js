import { produkModel } from "./model.js";

export class ProdukController {
    constructor(view){
        this.model = new produkModel();
        this.view = view;
    }

    tambahProduk(namaProduk){
        if(namaProduk.trim() !== ""){
            this.model.tambahProduk(namaProduk);
            this.view.tampilkanProduk(this.model.getProduk(), this);
        }
    }

    hapusProduk(namaProduk){
        this.model.hapusProduk(namaProduk);
        this.view.tampilkanProduk(this.model.getProduk(), this);
    }
}