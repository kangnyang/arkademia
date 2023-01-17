/*
Array adalah tipe data yang berisi kumpulan dari nilai atau tipe data lain. Nilai di dalam array disebut dengan elemen, dan setiap elemen memiliki ‘nomor urut’ yang dikenal dengan istilah index.
Objek dalam Javascript didefinisikan sebagai mutable properties collection, yang artinya adalah sekumpulan properti (ciri khas) yang dapat berubah nilainya. Karena nilai-nilai selain tipe data dasar merupakan objek, maka pada Javascript sebuah Array adalah objek. Fungsi adalah objek. Regular expression juga adalah objek. Segala tipe buatan pengembang tentunya juga adalah objek.

*/

let hobi = ['futsal', 'main pes', 'badminton'];
let saya = { nama: 'maman mansyur', umur: '21', alamat: 'kp pasir kiara rt/rw 02/05 desa karyajaya kec. bayongbong kab garut ', hobi };

const sekolah = [{
    namaSekolah: "sdn karyajaya2",
    jurusan: undefined,
    tahunMasuk: 2005,
    tahunKeluar: 2011
}, {
    namaSekolah: "smpn 3 byb",
    jurusan: undefined,
    tahunMasuk: 2011,
    tahunKeluar: 2014
}, {
    namaSekolah: "smk al-mukhtariyah",
    jurusan: "administrasi perkantoran",
    tahunMasuk: 2014,
    tahunKeluar: 2017
}, {
    namaSekolah: "universitas kebangsaan bandung",
    jurusan: "teknik informatika",
    tahunMasuk: 2017,
    tahunKeluar: 2021
}];

const jawaban = " di dalam bahasa javascript tanda kutip satu dan tanda kutip dua mempunyai fungsi yang sama sebagai tanda string. tetapi dalam penggunaanya bila variabel tersebut sudah menggunakan ceklis satu maka di dalamnya tidak boleh di masukan lagi tanda ceklis satu, tapi harus menggunakan tanda ceklis dua sebagai pembeda kecuali menggunakan tambahan lain supaya bisa memasukin tanda ceklis satu meskipun di apit oleh tanda ceklis satu untuk pertanda string nya.";