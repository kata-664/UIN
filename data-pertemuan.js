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
     - tipe : salah satu dari "ppt", "doc", "xlsx", "pdf"
     - url  : link file (Google Drive/SharePoint/dsb — WAJIB bisa
              diakses publik/"anyone with the link")
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
      }
    ]
  },
  {
    nomor: 2,
    judul: "Ukuran Pemusatan Data (Mean, Median, Modus)",
    tanggal: "2026-08-18",
    files: []
  },
  // Tambahkan pertemuan baru di sini, contoh:
  // {
  //   nomor: 3,
  //   judul: "Judul Pertemuan 3",
  //   tanggal: "2026-08-25",
  //   files: []
  // },
];
