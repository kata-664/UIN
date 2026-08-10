/* ============================================================
   DAFTAR PERTEMUAN & FILE MATERI
   Edit file ini untuk menambah/mengubah pertemuan. Supaya semua
   orang yang membuka web ini melihat pertemuan & file yang sama.
   CARA MENAMBAH PERTEMUAN BARU:
   Tambahkan satu objek baru di dalam array PERTEMUAN_DATA di bawah,
   lalu isi:
     - nomor   : angka urutan pertemuan (WAJIB, harus unik)
     - judul   : judul/topik pertemuan (WAJIB)
     - tanggal : format "YYYY-MM-DD" (boleh dikosongkan "")
     - files   : daftar file materi (boleh dikosongkan [])
   CARA MENAMBAH FILE DI SEBUAH PERTEMUAN:
   Tiap file punya:
     - id   : kode unik bebas, asal tidak sama dengan file lain (mis. "f1", "f2")
     - nama : nama file yang ditampilkan
     - tipe : salah satu dari "ppt", "doc", "xlsx", "pdf", "rangkuman"
     - url  : link file. Untuk tipe "ppt"/"doc"/"xlsx"/"pdf", link
              Google Drive/SharePoint/dsb (WAJIB bisa diakses
              publik/"anyone with the link"). Untuk tipe
              "rangkuman", url mengarah ke file JS terpisah (mis.
              "teksPT1.js") yang berisi tulisan pertemuan itu.
   TIPE FILE "rangkuman" (tulisan/blog pertemuan):
   Dipakai untuk membagikan rangkuman materi dalam bentuk tulisan
   (bukan file PPT/PDF), yang mendukung format markdown, LaTeX,
   perataan teks (kiri/tengah/kanan/kiri-kanan), tab/indentasi,
   dan blok kode R (RStudio) yang bisa disalin dengan sekali klik.
   File JS yang dirujuk di "url" WAJIB mengisi variabel global
   berikut saat dimuat:
     window.RANGKUMAN_TEXT = `... isi tulisan di sini ...`;
   Tata cara penulisan lengkapnya (markdown, LaTeX, blok kode,
   class perataan rk-left/rk-center/rk-right/rk-justify, dan
   class tab/indentasi rk-tab/rk-indent/rk-indent-2) sudah
   dikomentari lengkap di file teksPT1.js dan di fungsi
   openRangkuman() pada Pengantar_Statistika.html — tinggal contek
   pola yang sama untuk teksPT2.js, teksPT3.js, dst.
   CATATAN: 16 pertemuan di bawah ini disusun mengikuti struktur
   semester standar (Pertemuan 8 = UTS, Pertemuan 16 = UAS).
   Judul, tanggal (mingguan tiap Selasa), dan file boleh diubah
   bebas sesuai RPS/silabus Anda. Pertemuan yang belum ada filenya
   dibiarkan files: [] — tambahkan sendiri saat materi sudah siap.
   Buka/kunci akses tiap pertemuan diatur terpisah di
   setting-locks.js.
============================================================ */
window.PERTEMUAN_DATA = [
  {
    nomor: 1,
    judul: "Pengantar Statistika Deskriptif",
    tanggal: "2026-08-11",
    files: [
      {
        id: "f1",
        nama: "Slide Pertemuan 1 - Pengantar Statistika",
        tipe: "ppt",
        url: "https://drive.google.com/file/d/11ASsH-qGV58yyYF6rl7eYzXu82B2nZl4/view?usp=sharing"
      },
      {
        id: "f2",
        nama: "Modul Pertemuan 1",
        tipe: "ppt",
        url: "https://drive.google.com/file/d/16sUh3zUVYd1lqALIED2OCXXQi2js-GNK/view?usp=sharing"
      },
      {
        id: "f3",
        nama: "Rangkuman Pertemuan 1",
        tipe: "rangkuman",
        url: "teksPT1.js"
      }
    ]
  },
  {
    nomor: 2,
    judul: "Ukuran Pemusatan Data (Mean, Median, Modus)",
    tanggal: "2026-08-18",
    files: []
  },
  {
    nomor: 3,
    judul: "Ukuran Penyebaran Data (Range, Varians, Simpangan Baku)",
    tanggal: "2026-08-25",
    files: []
  },
  {
    nomor: 4,
    judul: "Distribusi Frekuensi & Penyajian Data (Tabel, Histogram, Diagram)",
    tanggal: "2026-09-01",
    files: []
  },
  {
    nomor: 5,
    judul: "Konsep Dasar Probabilitas & Aturan Peluang",
    tanggal: "2026-09-08",
    files: []
  },
  {
    nomor: 6,
    judul: "Distribusi Peluang Diskrit (Binomial & Poisson)",
    tanggal: "2026-09-15",
    files: []
  },
  {
    nomor: 7,
    judul: "Distribusi Peluang Kontinu (Distribusi Normal)",
    tanggal: "2026-09-22",
    files: []
  },
  {
    nomor: 8,
    judul: "Ujian Tengah Semester (UTS)",
    tanggal: "2026-09-29",
    files: []
  },
  {
    nomor: 9,
    judul: "Distribusi Sampling & Teorema Limit Pusat",
    tanggal: "2026-10-06",
    files: []
  },
  {
    nomor: 10,
    judul: "Estimasi Parameter & Interval Kepercayaan",
    tanggal: "2026-10-13",
    files: []
  },
  {
    nomor: 11,
    judul: "Pengujian Hipotesis Satu Sampel",
    tanggal: "2026-10-20",
    files: []
  },
  {
    nomor: 12,
    judul: "Pengujian Hipotesis Dua Sampel",
    tanggal: "2026-10-27",
    files: []
  },
  {
    nomor: 13,
    judul: "Analisis Korelasi",
    tanggal: "2026-11-03",
    files: []
  },
  {
    nomor: 14,
    judul: "Analisis Regresi Linear Sederhana",
    tanggal: "2026-11-10",
    files: []
  },
  {
    nomor: 15,
    judul: "Pengantar Regresi Linear Berganda & Review Materi",
    tanggal: "2026-11-17",
    files: []
  },
  {
    nomor: 16,
    judul: "Ujian Akhir Semester (UAS)",
    tanggal: "2026-11-24",
    files: []
  },
];
