import { users } from './data.js';

// Index (Tampilkan Data)

export function index() {
    if (users.length === 0) return "Tidak ada data.";
    let hasil = "--- Daftar Data ---\n";
    users.map((item, index) => {
        hasil += `${index+1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat}, Email: ${item.email}\n`;
    });
    return hasil;
}

// Store (Tambah Data)

export function store(newMember) {
    users.push(newMember);
    return `Data "${newMember.nama}" berhasil ditambahkan. Total data: ${users.length}`;
}

// Destroy (Hapus Data)

export function destroy(email) {
    const index = users.findIndex(item => item.email === email);
    if (index !== -1) {
        const namaTerhapus = users[index].nama;
        users.splice(index, 1);
        return `Data "${namaTerhapus}" dengan email ${email} dihapus. Sisa data: ${users.length}`;
    }
    return `Email ${email} tidak ditemukan.`;
}