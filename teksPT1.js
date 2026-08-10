/* ============================================================
   RANGKUMAN PERTEMUAN 1 — Pengantar Statistika Deskriptif
   File ini dirujuk lewat "url" di data-pertemuan.js untuk file
   bertipe "rangkuman". Wajib mengisi window.RANGKUMAN_TEXT.
   Boleh pakai markdown, LaTeX ($...$ / $$...$$), dan blok kode
   (```bahasa ... ```).
============================================================ */
window.RANGKUMAN_TEXT = `
# Rangkuman Pertemuan 1: Pengantar Statistika Deskriptif

Statistika deskriptif adalah cabang ilmu statistika yang berfokus
pada **pengumpulan, penyajian, dan peringkasan data** sehingga
data tersebut mudah dipahami. Berbeda dengan statistika
inferensia yang menarik kesimpulan tentang populasi, statistika
deskriptif hanya menggambarkan data apa adanya.

## 1. Populasi vs Sampel

- **Populasi**: keseluruhan objek/individu yang menjadi perhatian.
- **Sampel**: bagian dari populasi yang benar-benar diamati/diukur.

> Sampel yang baik harus *representatif*, artinya cukup mewakili
> karakteristik populasinya.

## 2. Jenis Data

1. **Data kualitatif** — berupa kategori, mis. jenis kelamin, warna.
2. **Data kuantitatif** — berupa angka, mis. tinggi badan, nilai ujian.

## 3. Ukuran Pemusatan Data

Salah satu ukuran paling dasar adalah **rata-rata (mean)**, yaitu
jumlah seluruh data dibagi banyaknya data:

$$\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}$$

Contoh: nilai ujian 3 mahasiswa adalah 70, 80, dan 90. Maka:

$$\\bar{x} = \\frac{70+80+90}{3} = 80$$

## 4. Menghitung Mean dengan Python

Berikut contoh kode Python sederhana untuk menghitung rata-rata.
Ketuk/klik area kodenya untuk menyalin.

\`\`\`python
data = [70, 80, 90]
mean = sum(data) / len(data)
print("Rata-rata:", mean)
\`\`\`

Hasilnya akan mencetak \`Rata-rata: 80.0\`.

## 5. Ringkasan

| Istilah   | Penjelasan Singkat                          |
|-----------|----------------------------------------------|
| Populasi  | Seluruh objek yang diteliti                   |
| Sampel    | Bagian populasi yang diamati                  |
| Mean      | Rata-rata seluruh data                        |

Materi selanjutnya akan membahas ukuran pemusatan data lain
seperti **median** dan **modus** pada Pertemuan 2.
`;
