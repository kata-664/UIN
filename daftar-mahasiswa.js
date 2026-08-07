/* ============================================================
   DAFTAR MAHASISWA & ABSENSI
   Edit file ini untuk mengatur data mahasiswa & kehadiran.
   Supaya semua orang yang membuka web ini melihat data absensi
   yang sama persis (bukan cuma tersimpan di HP masing-masing).

   CARA PAKAI:
   1) Daftarkan SEMUA mahasiswa SEKALI SAJA di MAHASISWA_DATA
      di bawah (nim + nama).
   2) Di ABSENSI_DATA, untuk tiap nomor pertemuan, isi status
      TIAP mahasiswa yang HADIR atau IZIN saja (pakai NIM sebagai
      key). Status yang bisa dipakai:
        "hadir" -> hadir
        "izin"  -> izin (ada surat/keterangan)
      Mahasiswa yang NIM-nya TIDAK dicantumkan pada pertemuan
      tsb otomatis dianggap "alpha" (tidak hadir tanpa keterangan).
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
   key   = nomor pertemuan (harus sama dengan "nomor" di data-pertemuan.js)
   value = objek { NIM: "hadir" atau "izin", ... }
   NIM yang tidak disebutkan di sini otomatis dianggap "alpha". */
window.ABSENSI_DATA = {
  1: {
    "2201010001": "hadir",
    "2201010002": "hadir",
    "2201010003": "izin",
    // "2201010004" tidak dicantumkan -> otomatis alpha
  },
  2: {
    "2201010001": "hadir",
    "2201010002": "hadir",
    "2201010003": "hadir",
  },
  // tambahkan pertemuan lain di sini, format:
  // NOMOR_PERTEMUAN: { "NIM": "hadir", "NIM_LAIN": "izin", ... },
};
