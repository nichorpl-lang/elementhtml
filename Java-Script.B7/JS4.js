// Struktur if - else if - else
let nilai = 85;

if (nilai >= 90) {
    console.log('Predikat: A - Sangat Baik');
} else if (nilai >= 80) {
    console.log('Predikat: B - Baik');
} else if (nilai >= 70) {
    console.log('Predikat: C - Cukup');
} else if (nilai >= 60) {
    console.log('Predikat: D - Kurang');
} else {
    console.log('Predikat: E - Sangat Kurang');
}
// kondisi Gabungan dengan operator logika
let usia = 17;
let punyaSIM = false;

if (umur >= 17 && punyaSIM) {
    console.log('Boleh mengemudi');
} else if (umur >= 17 && !punyaSIM) {
    console.log('Cukup umur, tapi tidak punya SIM');
} else {
    console.log('Belum cukup umur');
}

// Ternary operator - versi singkat dari if - else untuk 1 kondisi
let status = (nilai >= 70) ? 'LULUS' : 'TIDAK LULUS';
console.log(status); // 'LULUS'

//switch cocok ketika satu variabel dibandingkan dengan banyak nilai
let hari = 'Senin';
switch (hari) {
    case 'Senin':
    case 'Selasa':
    case 'Rabu':
    case 'Kamis':
    case 'Jumat':
        console.log('Hari kerja - sekolah');
        break; // PENTING: hentikan eksekusi agar tidak lanjut ke case berikutnya
    case 'Sabtu':
        console.log('Sabtu - ekskul atau les');
        break;
    case 'Minggu':
        console.log('Minggu - libur');
        break;
    default:
        console.log('Nama hari tidak valid');
}
// Output: 'Hari kerja - sekolah'

// Tanpa break, eksekusi akan 'jatuh' ke case berikutnya (fall-through)
// Ini kadang dimanfaatkan untuk mengelompokan case (seperti Senin - Jumat di atas)