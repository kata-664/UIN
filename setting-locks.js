/* ============================================================
   PENGATURAN BUKA / KUNCI PERTEMUAN & LATIHAN
   ------------------------------------------------------------
   File ini diedit langsung oleh dosen (bukan lewat web).
   Aturannya sederhana:

     true  = TERKUNCI (mahasiswa belum bisa membuka)
     false = TERBUKA  (mahasiswa sudah bisa membuka)

   "pertemuan" mengunci akses ke halaman detail pertemuan
   (materi/file & absensi) untuk nomor pertemuan tersebut.

   "latihan" mengunci akses ke soal latihan untuk nomor
   pertemuan tersebut (meskipun soalnya sudah ada di
   soal-pertemuan.js, mahasiswa tetap tidak bisa mengerjakan
   selama masih true di sini).

   Nomor yang TIDAK dicantumkan di bawah otomatis dianggap
   TERBUKA (false), jadi pastikan semua nomor pertemuan yang
   ingin dikunci disertakan di sini.

   Contoh cara pakai di tengah semester:
   - Sudah selesai mengajar Pertemuan 3 dan ingin membukanya
     untuk mahasiswa? Ubah pertemuan[3] dan latihan[3] dari
     true menjadi false, lalu simpan file ini.
============================================================ */

window.LOCK_SETTINGS = {

  // Kunci akses ke materi/file & absensi per pertemuan
  pertemuan: {
    1: false,   // Pertemuan 1 — sudah dibuka
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
    16: true,
  },

  // Kunci akses untuk mengerjakan latihan per pertemuan
  latihan: {
    1: false,   // Latihan Pertemuan 1 — sudah dibuka
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
    16: true,
  },

};
