/*
 Cara menggunakan statement percabangan if/else dalam javascript tidak jauh berbeda dengan bahasa pemrograman lainnya, karena sama – sama digunakan untuk pembuatan keputusan dua-arah.
 Fungsi if digunakan untuk menyaring ekspresi yang berada di dalam kurung, untuk ekspresi yang bernilai benar atau true, maka blok statemen yang ada setelah kurung kurawal pembuka akan dieksekusi, sebaliknya, jika kondisi tidak terpenuhi blok statemen setelah else akan dieksekusi.

*/

function cekParameter(x) {
    if (x) {
        return " ini parameternya " + x;
    } else {
        return " tidak ada parameter";
    }
}
cekParameter(5);

function salam(jam) {
    if (jam <= 10) return " selamat pagi!";
    else if (jam >= 11 && jam <= 14) return "selamat siang!";
    else if (jam >= 15 && jam <= 18) return "selamat sore!";
    else if (jam >= 19 && jam <= 24) return " selamat malam!";
    else return "jam salah/tidak ada";

}

/*
Perbandingan dengan menggunakan simbol == hanya akan membandingkan nilai saja. Sedangkan yang menggunakan === akan membandingkan dengan tipe data juga.
Operator != adalah kebalikan dari operator ==, dan akan menghasilkan nilai true jika hasil operasi 2 buah variabel yang dibandingkan tidak memiliki nilai yang sama.Jika operator != tidak mempertimbangkan tipe data, maka operator !== hanya akan false jika operator yang dibandingkan memiliki nilai yang sama dan juga tipe data yang sama. 
Manakah yang sebaiknya digunakan untuk perbandingan? tergantung kebutuhan , bila kita ingin menyamakan tanpa melihat tipe datanya ,maka gunakan == tapi bila ingin spesifikasi maka gunakna ===.

*/