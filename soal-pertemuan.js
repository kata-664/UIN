/* ============================================================
   BANK SOAL LATIHAN PER PERTEMUAN
   Edit file ini untuk menambah/mengubah soal latihan.
   Kalau sebuah pertemuan belum ada key-nya di sini, menu Latihan
   akan menampilkan "Soal belum tersedia" untuk pertemuan tersebut.

   CATATAN: Pertemuan 8 (UTS) dan Pertemuan 16 (UAS) sengaja tidak
   diberi soal latihan karena merupakan minggu ujian, bukan minggu
   materi baru. Tambahkan sendiri jika ingin ada soal review di
   minggu tersebut.

   FORMAT:
   window.SOAL_PERTEMUAN = {
     NOMOR_PERTEMUAN: [ ...daftar soal... ],
     NOMOR_PERTEMUAN_LAIN: [ ...daftar soal... ],
   };

   Tiap soal berbentuk:
   {
     question    : "Teks pertanyaan",                (WAJIB)
     options     : ["Pilihan A", "Pilihan B", ...],   (WAJIB, boleh 2-5 pilihan)
     answer      : 0,                                 (WAJIB — INDEX jawaban benar, dihitung dari 0.
                                                        0 = pilihan pertama (A), 1 = pilihan kedua (B), dst.)
     pembahasan  : "Penjelasan kenapa jawabannya itu"  (OPSIONAL, boleh dihapus/dikosongkan)
   }
============================================================ */
window.SOAL_PERTEMUAN = {

  // ---------- Pertemuan 1: Pengantar Statistika Deskriptif ----------
  1: [
    {
      question: "Statistika deskriptif digunakan untuk...",
      options: [
        "Menarik kesimpulan tentang populasi berdasarkan sampel",
        "Meringkas dan menyajikan data agar mudah dipahami",
        "Menguji hipotesis penelitian",
        "Memprediksi kejadian di masa depan"
      ],
      answer: 1,
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
    },
    {
      question: "Populasi berbeda dengan sampel karena...",
      options: [
        "Populasi selalu lebih kecil dari sampel",
        "Populasi mencakup keseluruhan objek/individu yang diteliti, sampel adalah sebagian darinya",
        "Sampel tidak boleh digunakan untuk analisis statistik",
        "Populasi dan sampel adalah istilah yang sama"
      ],
      answer: 1,
      pembahasan: "Populasi adalah keseluruhan objek penelitian, sedangkan sampel adalah bagian dari populasi yang diambil untuk mewakili populasi tersebut."
    }
  ],

  // ---------- Pertemuan 2: Ukuran Pemusatan Data (Mean, Median, Modus) ----------
  2: [
    {
      question: "Ukuran pemusatan data yang paling terpengaruh oleh nilai ekstrem (outlier) adalah...",
      options: ["Mean", "Median", "Modus", "Semua sama-sama terpengaruh"],
      answer: 0,
      pembahasan: "Mean dihitung dari seluruh nilai data sehingga sangat sensitif terhadap outlier, berbeda dengan median yang hanya melihat posisi tengah."
    },
    {
      question: "Data: 4, 6, 6, 8, 10. Modus dari data tersebut adalah...",
      options: ["4", "6", "8", "10"],
      answer: 1,
      pembahasan: "Modus adalah nilai yang paling sering muncul. Angka 6 muncul dua kali, sedangkan yang lain hanya sekali."
    },
    {
      question: "Median cocok digunakan sebagai ukuran pemusatan ketika...",
      options: [
        "Data terdistribusi normal sempurna",
        "Data memiliki nilai ekstrem/outlier",
        "Data bertipe kategorik",
        "Jumlah data sangat sedikit (kurang dari 3)"
      ],
      answer: 1,
      pembahasan: "Karena median tidak terpengaruh outlier, median lebih representatif dibanding mean saat ada nilai ekstrem dalam data."
    }
  ],

  // ---------- Pertemuan 3: Ukuran Penyebaran Data ----------
  3: [
    {
      question: "Simpangan baku (standar deviasi) mengukur...",
      options: [
        "Nilai tengah dari sekumpulan data",
        "Seberapa sering suatu nilai muncul",
        "Seberapa jauh data tersebar dari rata-ratanya",
        "Selisih antara nilai maksimum dan minimum"
      ],
      answer: 2,
      pembahasan: "Simpangan baku menggambarkan rata-rata jarak (penyebaran) setiap titik data terhadap mean."
    },
    {
      question: "Range (jangkauan) dihitung dengan cara...",
      options: [
        "Nilai maksimum dikurangi nilai minimum",
        "Nilai maksimum ditambah nilai minimum",
        "Jumlah seluruh data dibagi banyaknya data",
        "Akar kuadrat dari varians"
      ],
      answer: 0,
      pembahasan: "Range = nilai maksimum − nilai minimum, merupakan ukuran penyebaran paling sederhana."
    },
    {
      question: "Varians pada dasarnya adalah...",
      options: [
        "Akar dari simpangan baku",
        "Kuadrat dari simpangan baku",
        "Sama persis dengan mean",
        "Selisih median dan modus"
      ],
      answer: 1,
      pembahasan: "Varians = (simpangan baku)², sehingga simpangan baku diperoleh dari akar kuadrat varians."
    }
  ],

  // ---------- Pertemuan 4: Distribusi Frekuensi & Penyajian Data ----------
  4: [
    {
      question: "Tujuan utama membuat tabel distribusi frekuensi adalah...",
      options: [
        "Mengurangi jumlah data yang harus dianalisis",
        "Mengelompokkan data agar pola dan sebarannya lebih mudah dibaca",
        "Menghitung nilai mean secara otomatis",
        "Mengubah data kualitatif menjadi kuantitatif"
      ],
      answer: 1,
      pembahasan: "Distribusi frekuensi mengelompokkan data ke dalam kelas-kelas interval sehingga pola sebaran data lebih mudah dipahami."
    },
    {
      question: "Diagram yang paling tepat digunakan untuk menyajikan data kategorik (misalnya jenis kelamin) adalah...",
      options: ["Histogram", "Diagram batang atau diagram lingkaran", "Ogive", "Poligon frekuensi"],
      answer: 1,
      pembahasan: "Diagram batang/lingkaran cocok untuk data kategorik, sedangkan histogram digunakan untuk data numerik kontinu yang dikelompokkan."
    },
    {
      question: "Perbedaan utama histogram dengan diagram batang biasa adalah...",
      options: [
        "Histogram hanya untuk data kualitatif",
        "Histogram batangnya saling berdempetan karena mewakili interval data kontinu",
        "Diagram batang tidak boleh punya sumbu Y",
        "Tidak ada perbedaan, keduanya identik"
      ],
      answer: 1,
      pembahasan: "Histogram menampilkan data kontinu dalam interval kelas sehingga batangnya berdempetan tanpa jarak, berbeda dengan diagram batang untuk data kategorik."
    }
  ],

  // ---------- Pertemuan 5: Konsep Dasar Probabilitas & Aturan Peluang ----------
  5: [
    {
      question: "Nilai peluang suatu kejadian selalu berada pada rentang...",
      options: ["-1 sampai 1", "0 sampai 1", "0 sampai 100", "1 sampai 10"],
      answer: 1,
      pembahasan: "Peluang suatu kejadian dinyatakan dalam rentang 0 (tidak mungkin terjadi) hingga 1 (pasti terjadi)."
    },
    {
      question: "Jika sebuah dadu dilempar satu kali, peluang muncul mata dadu genap adalah...",
      options: ["1/6", "2/6", "3/6", "4/6"],
      answer: 2,
      pembahasan: "Mata dadu genap ada 3 (2, 4, 6) dari total 6 kemungkinan, sehingga peluangnya 3/6 = 1/2."
    },
    {
      question: "Dua kejadian disebut saling lepas (mutually exclusive) jika...",
      options: [
        "Kedua kejadian bisa terjadi bersamaan",
        "Kedua kejadian tidak dapat terjadi bersamaan dalam satu percobaan",
        "Peluang keduanya selalu sama",
        "Salah satu kejadian pasti terjadi"
      ],
      answer: 1,
      pembahasan: "Kejadian saling lepas berarti jika satu kejadian terjadi, kejadian lain tidak mungkin terjadi pada saat yang sama."
    }
  ],

  // ---------- Pertemuan 6: Distribusi Peluang Diskrit (Binomial & Poisson) ----------
  6: [
    {
      question: "Distribusi Binomial digunakan pada percobaan yang memiliki karakteristik...",
      options: [
        "Jumlah percobaan tidak terbatas dan hasil bisa lebih dari dua kemungkinan",
        "Setiap percobaan hanya memiliki dua hasil (sukses/gagal) dan peluang sukses tetap",
        "Data harus kontinu dan berdistribusi normal",
        "Peluang berubah-ubah di setiap percobaan"
      ],
      answer: 1,
      pembahasan: "Ciri khas distribusi Binomial: jumlah percobaan tetap (n), setiap percobaan independen, hanya ada dua hasil, dan peluang sukses (p) konstan."
    },
    {
      question: "Distribusi Poisson paling cocok digunakan untuk memodelkan...",
      options: [
        "Tinggi badan sekelompok mahasiswa",
        "Jumlah kejadian langka dalam suatu interval waktu/ruang tertentu, misalnya jumlah panggilan telepon per jam",
        "Nilai ujian yang berdistribusi normal",
        "Hasil lemparan dua buah dadu"
      ],
      answer: 1,
      pembahasan: "Distribusi Poisson memodelkan jumlah kejadian dalam interval waktu/ruang tertentu dengan rata-rata kemunculan (λ) yang diketahui."
    },
    {
      question: "Pada distribusi Binomial, simbol 'p' pada umumnya merepresentasikan...",
      options: [
        "Jumlah percobaan",
        "Jumlah kejadian sukses",
        "Peluang sukses pada satu kali percobaan",
        "Rata-rata distribusi Poisson"
      ],
      answer: 2,
      pembahasan: "p adalah peluang sukses pada satu kali percobaan (trial), sedangkan n adalah jumlah percobaan."
    }
  ],

  // ---------- Pertemuan 7: Distribusi Peluang Kontinu (Distribusi Normal) ----------
  7: [
    {
      question: "Kurva distribusi normal memiliki bentuk...",
      options: [
        "Simetris seperti lonceng (bell-shaped)",
        "Menurun secara eksponensial",
        "Berbentuk kotak (uniform)",
        "Selalu miring ke kanan"
      ],
      answer: 0,
      pembahasan: "Distribusi normal memiliki kurva simetris berbentuk lonceng dengan mean, median, dan modus yang bernilai sama, terletak di pusat kurva."
    },
    {
      question: "Nilai Z (Z-score) digunakan untuk...",
      options: [
        "Mengukur jumlah data dalam sampel",
        "Menyatakan posisi suatu nilai relatif terhadap mean dalam satuan simpangan baku",
        "Menghitung modus data",
        "Mengganti nilai median"
      ],
      answer: 1,
      pembahasan: "Z-score = (X − μ) / σ, menunjukkan berapa simpangan baku suatu nilai berada dari rata-rata populasi."
    },
    {
      question: "Pada distribusi normal standar, luas area di bawah kurva total bernilai...",
      options: ["0", "0,5", "1", "Tak terhingga"],
      answer: 2,
      pembahasan: "Total luas area di bawah kurva distribusi normal (atau distribusi peluang kontinu manapun) selalu sama dengan 1, karena mewakili keseluruhan peluang."
    }
  ],

  // Pertemuan 8 = UTS: tidak ada soal latihan (minggu ujian)

  // ---------- Pertemuan 9: Distribusi Sampling & Teorema Limit Pusat ----------
  9: [
    {
      question: "Teorema Limit Pusat (Central Limit Theorem) menyatakan bahwa...",
      options: [
        "Distribusi sampel selalu sama dengan distribusi populasi",
        "Distribusi rata-rata sampel akan mendekati distribusi normal ketika ukuran sampel cukup besar, apapun bentuk distribusi populasinya",
        "Semakin kecil sampel, semakin akurat estimasinya",
        "Rata-rata populasi selalu lebih besar dari rata-rata sampel"
      ],
      answer: 1,
      pembahasan: "CLT menjelaskan bahwa untuk ukuran sampel yang cukup besar (umumnya n ≥ 30), distribusi rata-rata sampel akan mendekati distribusi normal, terlepas dari bentuk distribusi populasi aslinya."
    },
    {
      question: "Standard error (galat baku) dari rata-rata sampel akan semakin kecil jika...",
      options: [
        "Ukuran sampel diperbesar",
        "Ukuran sampel diperkecil",
        "Simpangan baku populasi diperbesar",
        "Populasi diperkecil"
      ],
      answer: 0,
      pembahasan: "Standard error = σ/√n, sehingga semakin besar ukuran sampel (n), semakin kecil standard error-nya."
    }
  ],

  // ---------- Pertemuan 10: Estimasi Parameter & Interval Kepercayaan ----------
  10: [
    {
      question: "Interval kepercayaan (confidence interval) 95% berarti...",
      options: [
        "95% data berada dalam interval tersebut",
        "Kita 95% yakin nilai parameter populasi berada dalam rentang interval yang dihasilkan dari prosedur sampling berulang",
        "Peluang sampel salah adalah 5%",
        "Rata-rata sampel pasti sama dengan rata-rata populasi"
      ],
      answer: 1,
      pembahasan: "Tingkat kepercayaan 95% menyatakan bahwa jika prosedur sampling diulang berkali-kali, sekitar 95% dari interval yang terbentuk akan memuat nilai parameter populasi yang sebenarnya."
    },
    {
      question: "Semakin tinggi tingkat kepercayaan yang diinginkan (misal dari 95% ke 99%), maka lebar interval kepercayaan akan...",
      options: ["Semakin sempit", "Semakin lebar", "Tetap sama", "Menjadi nol"],
      answer: 1,
      pembahasan: "Untuk mencapai tingkat keyakinan yang lebih tinggi, interval harus diperlebar agar peluang mencakup parameter populasi yang sebenarnya juga meningkat."
    }
  ],

  // ---------- Pertemuan 11: Pengujian Hipotesis Satu Sampel ----------
  11: [
    {
      question: "Hipotesis nol (H0) dalam pengujian hipotesis pada umumnya menyatakan...",
      options: [
        "Adanya perbedaan atau efek yang signifikan",
        "Tidak adanya perbedaan atau efek (kondisi status quo)",
        "Selalu benar dan tidak bisa ditolak",
        "Kesimpulan akhir penelitian"
      ],
      answer: 1,
      pembahasan: "H0 biasanya menyatakan tidak ada perbedaan/efek (status quo), dan pengujian dilakukan untuk melihat apakah data cukup kuat untuk menolak H0."
    },
    {
      question: "Jika nilai p-value lebih kecil dari taraf signifikansi (α), maka kesimpulannya adalah...",
      options: [
        "Gagal tolak H0",
        "Tolak H0, ada bukti signifikan mendukung H1",
        "Penelitian dianggap gagal",
        "Sampel harus diperbesar"
      ],
      answer: 1,
      pembahasan: "p-value < α menunjukkan hasil yang signifikan secara statistik, sehingga H0 ditolak dan H1 (hipotesis alternatif) didukung."
    }
  ],

  // ---------- Pertemuan 12: Pengujian Hipotesis Dua Sampel ----------
  12: [
    {
      question: "Uji-t dua sampel independen digunakan untuk membandingkan...",
      options: [
        "Dua rata-rata dari dua kelompok yang berbeda dan tidak saling berhubungan",
        "Dua rata-rata dari kelompok yang sama diukur dua kali (before-after)",
        "Proporsi dua kelompok",
        "Varians dari satu kelompok saja"
      ],
      answer: 0,
      pembahasan: "Uji-t dua sampel independen membandingkan rata-rata dari dua kelompok yang berbeda dan tidak berpasangan, misalnya nilai ujian kelas A vs kelas B."
    },
    {
      question: "Uji-t berpasangan (paired t-test) cocok digunakan ketika...",
      options: [
        "Data berasal dari dua kelompok yang benar-benar independen",
        "Data berasal dari subjek yang sama, diukur sebelum dan sesudah suatu perlakuan",
        "Data bertipe kategorik",
        "Jumlah sampel sangat besar (di atas 1000)"
      ],
      answer: 1,
      pembahasan: "Paired t-test digunakan saat pengukuran dilakukan pada subjek yang sama pada dua kondisi berbeda, misalnya sebelum dan sesudah treatment."
    }
  ],

  // ---------- Pertemuan 13: Analisis Korelasi ----------
  13: [
    {
      question: "Nilai koefisien korelasi (r) berkisar antara...",
      options: ["0 sampai 1", "-1 sampai 1", "-100 sampai 100", "0 sampai 100"],
      answer: 1,
      pembahasan: "Koefisien korelasi Pearson (r) bernilai antara -1 (korelasi negatif sempurna) hingga +1 (korelasi positif sempurna)."
    },
    {
      question: "Jika nilai r = -0,85, maka dapat disimpulkan bahwa...",
      options: [
        "Tidak ada hubungan antara dua variabel",
        "Terdapat hubungan positif yang sangat kuat",
        "Terdapat hubungan negatif yang kuat antara dua variabel",
        "Salah satu variabel pasti menyebabkan variabel lainnya"
      ],
      answer: 2,
      pembahasan: "Nilai r mendekati -1 menunjukkan hubungan negatif yang kuat: ketika satu variabel naik, variabel lain cenderung turun. Perlu diingat, korelasi tidak selalu menunjukkan hubungan sebab-akibat."
    },
    {
      question: "Korelasi yang kuat antara dua variabel...",
      options: [
        "Selalu berarti satu variabel menyebabkan variabel lainnya",
        "Tidak selalu menunjukkan hubungan sebab-akibat (correlation is not causation)",
        "Hanya berlaku untuk data kategorik",
        "Membuktikan hipotesis penelitian secara otomatis"
      ],
      answer: 1,
      pembahasan: "Korelasi yang kuat hanya menunjukkan adanya hubungan/pola antara dua variabel, bukan bukti hubungan sebab-akibat."
    }
  ],

  // ---------- Pertemuan 14: Analisis Regresi Linear Sederhana ----------
  14: [
    {
      question: "Dalam persamaan regresi linear sederhana Y = a + bX, simbol 'b' menunjukkan...",
      options: [
        "Nilai Y saat X = 0 (intercept)",
        "Kemiringan (slope) garis regresi, yaitu perubahan Y untuk setiap satu satuan perubahan X",
        "Koefisien korelasi",
        "Rata-rata variabel Y"
      ],
      answer: 1,
      pembahasan: "b adalah slope/kemiringan garis regresi, menunjukkan seberapa besar perubahan variabel Y untuk setiap kenaikan satu satuan variabel X."
    },
    {
      question: "Dalam regresi linear sederhana, variabel yang diprediksi disebut...",
      options: ["Variabel bebas (independen)", "Variabel terikat (dependen)", "Variabel kontrol", "Variabel moderator"],
      answer: 1,
      pembahasan: "Variabel dependen (Y) adalah variabel yang nilainya diprediksi/dijelaskan berdasarkan variabel independen (X)."
    },
    {
      question: "Koefisien determinasi (R²) dalam regresi menunjukkan...",
      options: [
        "Jumlah data yang digunakan",
        "Persentase variasi variabel Y yang dapat dijelaskan oleh variabel X",
        "Nilai intercept garis regresi",
        "Kesalahan pengukuran data"
      ],
      answer: 1,
      pembahasan: "R² menunjukkan seberapa besar proporsi variasi Y yang dapat dijelaskan oleh model regresi terhadap X, dinyatakan dalam persentase (0-100%)."
    }
  ],

  // ---------- Pertemuan 15: Pengantar Regresi Linear Berganda & Review Materi ----------
  15: [
    {
      question: "Perbedaan utama regresi linear berganda dibanding regresi linear sederhana adalah...",
      options: [
        "Regresi berganda hanya bisa dipakai untuk data kategorik",
        "Regresi berganda melibatkan lebih dari satu variabel independen (X) untuk memprediksi Y",
        "Regresi berganda tidak memerlukan variabel dependen",
        "Regresi berganda tidak dapat dihitung nilai R²-nya"
      ],
      answer: 1,
      pembahasan: "Regresi linear berganda menggunakan dua atau lebih variabel independen untuk memprediksi satu variabel dependen, berbeda dengan regresi sederhana yang hanya menggunakan satu variabel independen."
    },
    {
      question: "Berikut ini yang merupakan pasangan ukuran pemusatan dan penyebaran data yang benar adalah...",
      options: [
        "Mean & Modus",
        "Median & Range",
        "Mean & Simpangan Baku",
        "Modus & Korelasi"
      ],
      answer: 2,
      pembahasan: "Mean adalah ukuran pemusatan, sedangkan simpangan baku adalah ukuran penyebaran data — keduanya sering digunakan bersama untuk merangkum karakteristik data."
    },
    {
      question: "Dalam statistika inferensia, tujuan utama pengujian hipotesis adalah...",
      options: [
        "Meringkas data sampel saja",
        "Membuat keputusan mengenai parameter populasi berdasarkan data sampel",
        "Menggambar histogram data",
        "Menghitung modus dan median"
      ],
      answer: 1,
      pembahasan: "Pengujian hipotesis adalah bagian dari statistika inferensia yang bertujuan mengambil keputusan tentang parameter populasi berdasarkan bukti dari data sampel."
    }
  ],

  // Pertemuan 16 = UAS: tidak ada soal latihan (minggu ujian)

};
