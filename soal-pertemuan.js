/* ============================================================
   BANK SOAL LATIHAN PER PERTEMUAN
   Edit file ini untuk menambah/mengubah soal latihan. Kalau
   sebuah pertemuan belum ada key-nya di sini, menu Latihan akan
   menampilkan "Soal belum tersedia" untuk pertemuan tersebut.

   FORMAT:
   window.SOAL_PERTEMUAN = {
     NOMOR_PERTEMUAN: [ ...daftar soal... ],
     NOMOR_PERTEMUAN_LAIN: [ ...daftar soal... ],
   };

   Tiap soal berbentuk:
   {
     question    : "Teks pertanyaan",                (WAJIB)
     options     : ["Pilihan A", "Pilihan B", ...],   (WAJIB, boleh 2-5 pilihan)
     answer      : 0,                                  (WAJIB — INDEX jawaban benar,
                                                          dihitung dari 0.
                                                          0 = pilihan pertama (A),
                                                          1 = pilihan kedua (B), dst.)
     pembahasan  : "Penjelasan kenapa jawabannya itu"  (OPSIONAL, boleh dihapus/dikosongkan)
   }
============================================================ */

window.SOAL_PERTEMUAN = {

  // ---------- Soal untuk Pertemuan 1 ----------
  1: [
    {
      question: "Statistika deskriptif digunakan untuk...",
      options: [
        "Menarik kesimpulan tentang populasi berdasarkan sampel",
        "Meringkas dan menyajikan data agar mudah dipahami",
        "Menguji hipotesis penelitian",
        "Memprediksi kejadian di masa depan"
      ],
      answer: 1, // jawaban benar = pilihan ke-2 ("Meringkas dan menyajikan data...")
      pembahasan: "Statistika deskriptif fokus pada peringkasan dan penyajian data (tabel, grafik, ukuran pemusatan/penyebaran), bukan penarikan kesimpulan ke populasi — itu ranah statistika inferensia."
    },
    {
      question: "Berikut ini yang termasuk data kualitatif adalah...",
      options: [
        "Tinggi badan mahasiswa",
        "Jumlah anak dalam keluarga",
        "Jenis kelamin mahasiswa",
        "Nilai ujian statistika"
      ],
      answer: 2,
      pembahasan: "Jenis kelamin adalah data kategorik/kualitatif (bukan berupa angka hasil pengukuran atau perhitungan)."
    }
    // tambahkan soal lain untuk pertemuan 1 di sini
  ],

  // ---------- Soal untuk Pertemuan 2 ----------
  2: [
    {
      question: "Ukuran pemusatan data yang paling terpengaruh oleh nilai ekstrem (outlier) adalah...",
      options: ["Mean", "Median", "Modus", "Semua sama-sama terpengaruh"],
      answer: 0,
      pembahasan: "Mean dihitung dari seluruh nilai data sehingga sangat sensitif terhadap outlier, berbeda dengan median yang hanya melihat posisi tengah."
    }
    // tambahkan soal lain untuk pertemuan 2 di sini
  ],

  // Tambahkan soal untuk pertemuan lain di sini, contoh:
  // 3: [
  //   {
  //     question: "Teks soal...",
  //     options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
  //     answer: 0,
  //     pembahasan: "Penjelasan..."
  //   },
  // ],

};
