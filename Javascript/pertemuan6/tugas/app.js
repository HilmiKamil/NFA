import { index, store, destroy } from './modules/controller.js';

// Push 2 Member
store({ nama: "Rina Marlina", umur: 24, alamat: "Jl. Kemerdekaan No.12, Palembang", email: "rina@mgail.com" });
store({ nama: "Sigit Prasetyo", umur: 33, alamat: "Jl. Sisingamangaraja No.15, Medan", email: "sigit@gmail.com" });

const output = document.getElementById('output');
const tampil = () => output.innerText = index();
// View Button
document.getElementById('tombolIndex').onclick = tampil;

//Prompt Add Data
document.getElementById('tombolStore').onclick = () => {
    const nama = prompt("Nama:");
    const umur = parseInt(prompt("Umur:"));
    const alamat = prompt("Alamat:");
    const email = prompt("Email:");
    if (nama && !isNaN(umur) && alamat && email) {
        const form = store({ nama, umur, alamat, email });
        alert(form);
        tampil();  
    } else {
        alert("Data tidak lengkap!");
    }
};
// Delete Button
document.getElementById('tombolDestroy').onclick = () => {
    const email = prompt("Email yang dihapus:");
    if (email) alert(destroy(email)) && tampil();
};

tampil();