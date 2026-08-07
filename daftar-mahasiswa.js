/* ============================================================
   DAFTAR MAHASISWA & ABSENSI
   Edit file ini untuk mengatur data mahasiswa & kehadiran.
   Supaya semua orang yang membuka web ini melihat data absensi
   yang sama persis (bukan cuma tersimpan di HP masing-masing).

   CARA PAKAI:
   1) Daftarkan SEMUA mahasiswa SEKALI SAJA di MAHASISWA_DATA
      di bawah (nim + nama).
   2) Di ABSENSI_DATA, untuk tiap nomor pertemuan, isi NIM
      mahasiswa yang HADIR saja. Mahasiswa yang NIM-nya tidak
      dicantumkan pada pertemuan tsb otomatis dianggap TIDAK HADIR.
============================================================ */

/* 1) DAFTAR MASTER MAHASISWA (isi sekali, dipakai di semua pertemuan) */
window.MAHASISWA_DATA = [
  { nim: "2201010001", nama: "Budi Santoso" },
  { nim: "2201010002", nama: "Siti Aminah" },
  { nim: "2201010003", nama: "Andi Wijaya" },
  { nim: "2201010004", nama: "Dewi Lestari" },
  // tambahkan mahasiswa lain di sini, format:
  // { nim: "NIM_DISINI", nama: "Nama Mahasiswa" },
];

/* 2) ABSENSI PER PERTEMUAN
   key = nomor pertemuan (harus sama dengan "nomor" di data-pertemuan.js)
   value = array berisi NIM mahasiswa yang HADIR pada pertemuan itu */
window.ABSENSI_DATA = {
  1: [
    "2201010001",
    "2201010002",
  ],
  2: [
    "2201010001",
    "2201010002",
    "2201010003",
  ],
  // tambahkan pertemuan lain di sini, format:
  // NOMOR_PERTEMUAN: [ "NIM_YANG_HADIR", "NIM_YANG_HADIR", ... ],
};
