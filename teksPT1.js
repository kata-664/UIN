/* ============================================================
   RANGKUMAN PERTEMUAN 1 — Pengantar Statistika Deskriptif
   File ini dirujuk lewat "url" di data-pertemuan.js untuk file
   bertipe "rangkuman". Wajib mengisi window.RANGKUMAN_TEXT.

   TATA CARA PENULISAN (ringkas — versi lengkap ada di komentar
   fungsi openRangkuman di Pengantar_Statistika.html):
     - Markdown biasa: # Judul, ## Sub Judul, **tebal**, *miring*,
       - list, > kutipan, tabel |a|b|
     - LaTeX: inline $...$ , blok $$...$$
     - Kode (bisa diketuk untuk disalin): ```r ... ``` (mata kuliah
       ini pakai R/RStudio; bahasa lain juga bisa, mis. ```python)
     - Rata teks: <p class="rk-center">, "rk-left", "rk-right",
       "rk-justify"
     - Tab/indentasi: <span class="rk-tab"></span> di awal kalimat,
       atau <p class="rk-indent">...</p> untuk satu paragraf penuh
============================================================ */
window.RANGKUMAN_TEXT = `
# Rangkuman Pertemuan 1: Pengantar Statistika Deskriptif

<p class="rk-justify">
Statistika deskriptif adalah cabang ilmu statistika yang berfokus
pada **pengumpulan, penyajian, dan peringkasan data** sehingga
data tersebut mudah dipahami. Berbeda dengan statistika
inferensia yang menarik kesimpulan tentang populasi, statistika
deskriptif hanya menggambarkan data apa adanya.
</p>

<p class="rk-center">— Selamat belajar! —</p>

## 1. Populasi vs Sampel

- **Populasi**: keseluruhan objek/individu yang menjadi perhatian.
- **Sampel**: bagian dari populasi yang benar-benar diamati/diukur.

> Sampel yang baik harus *representatif*, artinya cukup mewakili
> karakteristik populasinya.

## 2. Jenis Data

1. **Data kualitatif** — berupa kategori, mis. jenis kelamin, warna.
2. **Data kuantitatif** — berupa angka, mis. tinggi badan, nilai ujian.

## 3. Ukuran Pemusatan Data

<span class="rk-tab"></span>Salah satu ukuran paling dasar adalah
**rata-rata (mean)**, yaitu jumlah seluruh data dibagi banyaknya
data:

$$\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}$$

Contoh: nilai ujian 3 mahasiswa adalah 70, 80, dan 90. Maka:

$$\\bar{x} = \\frac{70+80+90}{3} = 80$$

## 4. Menghitung Mean dengan R

Berikut contoh kode R (RStudio) untuk menghitung rata-rata.
Ketuk/klik area kodenya untuk menyalin.

\`\`\`r
data <- c(70, 80, 90)
rata_rata <- mean(data)
print(rata_rata)
\`\`\`

Hasilnya akan mencetak \`[1] 80\`.

## 5. Ringkasan

| Istilah   | Penjelasan Singkat                          |
|-----------|----------------------------------------------|
| Populasi  | Seluruh objek yang diteliti                   |
| Sampel    | Bagian populasi yang diamati                  |
| Mean      | Rata-rata seluruh data                        |

<p class="rk-indent">
Materi selanjutnya akan membahas ukuran pemusatan data lain
seperti **median** dan **modus** pada Pertemuan 2.
</p>
`;
