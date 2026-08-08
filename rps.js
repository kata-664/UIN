/* ============================================================
   DATA RPS (Rencana Pembelajaran Semester)
   Edit file ini untuk mengatur dokumen RPS yang muncul saat
   mahasiswa klik menu "RPS" di halaman utama.

   Isi window.RPS_DATA dengan SALAH SATU cara berikut:

   ---------------------------------------------------------------
   CARA 1: Pakai URL (paling gampang, disarankan)
   ---------------------------------------------------------------
   Upload file PDF RPS ke Google Drive, klik kanan > Bagikan >
   ubah jadi "Siapa saja yang memiliki link", lalu copy link-nya
   ke bawah ini:

   window.RPS_DATA = {
     tipe: 'url',
     url: 'https://drive.google.com/file/d/GANTI_DENGAN_ID_FILE/view',
     judul: 'RPS Pengantar Statistika'
   };

   Bisa juga pakai URL PDF langsung dari web lain (bukan Google
   Drive), selama linknya publik dan berakhiran .pdf atau memang
   file PDF.

   ---------------------------------------------------------------
   CARA 2: Pakai base64 (kalau tidak mau upload ke mana-mana,
   filenya langsung "ditempel" di dalam kode ini)
   ---------------------------------------------------------------
   Cocok untuk file PDF kecil atau hasil scan/foto RPS.
   Cara dapatkan base64: buka https://www.base64-image.de (untuk
   gambar) atau https://base64.guru/converter/encode/pdf (untuk
   PDF), upload filenya, copy hasil "data:...;base64,...." lalu
   tempel ke bawah ini (biasanya sangat panjang, itu wajar):

   window.RPS_DATA = {
     tipe: 'base64',
     data: 'data:application/pdf;base64,JVBERi0xLjQKJ...', // PDF
     // ATAU kalau berupa hasil foto/scan (gambar), pakai ini:
     // data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...',
     judul: 'RPS Pengantar Statistika'
   };

   ---------------------------------------------------------------
   Catatan: base64 untuk file besar bisa membuat file HTML jadi
   berat dan lambat dimuat. Untuk file di atas beberapa MB,
   sebaiknya pakai CARA 1 (URL) saja.
============================================================ */

window.RPS_DATA = {
  tipe: 'url',
  url: 'https://drive.google.com/file/d/16sUh3zUVYd1lqALIED2OCXXQi2js-GNK/view?usp=sharing',       // <-- ganti dengan link PDF RPS kamu
  judul: 'RPS Pengantar Statistika'
};
