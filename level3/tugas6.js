/*
 Fungsi Loop digunakan untuk mengeksekusi suatu baris kode berulang-ulang sesuai dengan kondisi yang diberikan.

*/
//for
console.log('contoh perulangan 0-10');
for (let satu = 0; satu <= 10; satu++) {
    console.log("contoh perulangan : " + satu);

}

//for in..

let nama = {
    namaDepan: 'Codelatte ',
    namaBelakang: 'Indonesia ',
};
for (i in nama) {
    console.log(i + ' : ' + nama[i]);
}

// for of
let mobil = ['mercendese', ' agya', 'terios'];
let x;
for (x of mobil) {
    console.log(x + '\n');
}

//while
// let ulangi = confirm("Apakah anda mau mengulang?");
// let counter = 0;

// while (ulangi) {
//     let jawab = confirm("Apakah anda mau mengulang?")
//     counter++;
//     if (jawab == false) {
//         ulangi = false;
//     }
// }

// document.write("Perulangan sudah dilakuakn sebanyak " + counter + " kali");


//do while
// let ulangi = confirm("Apakah anda mau mengulang?");;
// let counter = 0;

// do {
//     counter++;
//     ulangi = confirm("Apakah anda mau mengulang?");
// } while (ulangi)

// console.log("Perulangan sudah dilakuakn sebanyak " + counter + " kali");

// //tugas 2
// function loop(num) {
//     for (let i = 0; i < num; i++) {
//         console.log(i);
//     }
// }
// loop(7);

//tugas 3
function cekGanjilGenap(angka) {
    if (angka % 2 == 0) {
        console.log(angka + ' merupakan bilangan genap');
    } else {
        console.log(angka + ' merupakan bilangan ganjil');
    }
}
cekGanjilGenap(9);

//tugas 4
var i = 1;

function deretGanjilGenap(number) {
    while (i < number) {
        if (i % 2 == 0) {
            console.log(i + ' merupakan bilangan genap');
        } else {
            console.log(i + ' merupakan bilangan ganjil');
        }
        i++;
    }

}
deretGanjilGenap(7);

//tugas5
const kegiatan = [
    ['shalat subuh', 4], //0
    ['shalat dzuhur', 12], //1
    ['shalat ashar', 15], //2
    ['shalat maghrib', 18], //3
    ['shalat isya', 19]
];

for (let i = 0; i < kegiatan.length; i++) {

    // console.log('[' + i + ',' + j + '] = ' + kegiatan[i][j]);
    console.log('pada pukul ' + kegiatan[i][1] + ' saya ' + kegiatan[i][0]);

}