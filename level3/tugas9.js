/* soal 1
Database adalah kumpulan informasi yang disimpan di dalam komputer secara sistematik sehingga dapat diperiksa menggunakan suatu program komputer untuk memperoleh informasi dari basis data tersebut. Database adalah representasi kumpulan fakta yang saling berhubungan disimpan secara bersama sedemikian rupa dan tanpa pengulangan (redudansi) yang tidak perlu, untuk memenuhi berbagai kebutuhan.
SQL (Structured Query Language) adalah sebuah bahasa yang dipergunakan untuk mengakses data dalam basis data relasional. Bahasa ini secara de facto merupakan bahasa standar yang digunakan dalam manajemen basis data relasional. Saat ini hampir semua server basis data yang ada mendukung bahasa ini untuk melakukan manajemen datanya.
NoSQL singkatan dari Not Only SQL. NoSQL adalah sebuah konsep mengenai penyimpanan data non-relasional. Berbeda dengan model basis data relasional yang selama ini digunakan, NoSQL menggunakan beberapa metode yang berbeda-beda.
Perbedaan Database SQL (Relasional) VS Database NoSQL
a. Beban kerja yang optimal
- SQL, Database relasional didesain untuk aplikasi transaksional dan aplikasi pemrosesan transaksi online (online transaction processing, OLTP) yang sangat konsisten dan cocok digunakan untuk pemrosesan analisis online (online analytical processing, OLAP).
- NoSQL, Database nilai-kunci, dokumen, grafik, dan dalam memori NoSQL didesain untuk OLTP untuk sejumlah pola akses data yang menyertakan aplikasi latensi rendah.
b. Model data
- SQL, Model relasional menormalkan data menjadi tabel yang terdiri dari baris dan kolom.
-NoSQL, Database NoSQL menyediakan berbagai model data, antara lain dokumen, grafik, nilai kunci, dalam memori, dan pencarian
c. Performa
- SQL, Kinerja umumnya tergantung pada subsistem disk. Pengoptimalan kueri, indeks, dan struktur tabel sering kali diperlukan untuk mencapai kinerja puncak.
- NoSQL, Kinerja umumnya merupakan fungsi dari ukuran klaster perangkat keras, latensi jaringan, dan aplikasi panggilan.
*/

/*soal 2
pernah belajar, cuma baru belajar sql yakni menggunakan mysql phpmyadmin. kemudian di perkuliahan ada maktul manajemen basis data dengan oracle.
*/

/*soal 3
contoh query sql
 SELECT * FROM tbl_mahasiswa WHERE kode_prodi IN (’si, ‘ti’);
*/

/*soal 4
Koleksi berisi kumpulan dokumen atau data dalam format JSON. Kalau di SQL kita menyebutnya dengan record/baris.

Koleksi bisa dibuat dengan perintah:

db.createCollections("nama_koleksi")
atau bisa juga otomatis dibuat ketika kita melakukan insert data.
db.<koleksi>.insert(<data>)
Keterangan:

<koleksi> adalah nama koleksi yang akan dibuat;
<data> adalah data yang akan kita simpan dalam koleksi tersebut dengan format JSON.
Untuk menampilkan data yang sudah ditambahkan, kita bisa menggunakan method find():

db.<koleksi>.find()

*/