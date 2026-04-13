import React, { useRef, useState } from 'react';
import produkData from '../assets/Utils/produkData'
import styles from "../assets/styles/Produk.module.css"

function Produk() {
    const [produkList, setProdukList] = useState([...produkData]);
    // let produkList = [...produkData]; //salin data produk awal
    // const produkContainerRef = useRef(null); //Ref untuk container Produl
    const handleClick = () => {
        const newProduk = {
            id: produkList.length +1,
            nama: "Printer Epson",
            tahun: 2023,
            harga: "Rp. 3.000.000",
            gambar: "https://placehold.co/150",
        };

        // produkList.push(newProduk); //menambahkan produk baru kedalam array

        // Menambahkan produk baru ke dalam DOM menggunakan ref
        // if (produkContainerRef.current) {

        // const newProductElement = document.createElement("div");

        // newProductElement.className = styles.card;

        // newProductElement.innerHTML = `
        //     <img src="${newProduk.gambar}" alt="${newProduk.nama}"/>
        //     <h3>${newProduk.nama}</h3>
        //     <p>Tahun: ${newProduk.tahun}</p>
        //     <p>Harga: ${newProduk.harga}</p>
        // `;

        // produkContainerRef.current.appendChild(newProductElement);
        // }

        // console.log("Produk terbaru:", produkList);

        // alert("produk baru berhasil ditambahkan! Silahkan cek produk di browser.");

        // Menambahkan Produk baru ke stateProdukList

        setProdukList((prevList) =>[...prevList, newProduk]);
        alert("Produk Berhasil Ditambahkan!");
    };
  return (
    <div className={styles.produkContainer}>

        <h1 className={styles.title}>Daftar Produk</h1>
        <div className={styles.cardContainer}>
            {produkList.map((item)=> (
                <div key={item.id} className={styles.card}>
                    <img src={item.gambar} alt={item.nama} />
                    <h3>{item.nama}</h3>
                    <p>Tahun: {item.tahun}</p>
                    <p>Harga: {item.harga}</p>
                </div>
            ))}

        </div>
        <button onClick={handleClick} className={styles.addButton}>
        Tambah Produk Baru
      </button>
      
    </div>
  );
}

export default Produk;