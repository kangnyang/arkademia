/*
ada beberapa cara membuat function di java 
1. dengan menuliskan , function namaFungsi(parameter){ isi dari fungsi};
2. dengan  ekspresion,  let namaFungsi= function(parameter ) { isi dari fungsi};

*/
function salam(nama) {
    console.log(' hallo ' + nama + ' selamat pagi!');
}
salam('Maman Mansyur');

function tambah(bilanganPertama, bilanganKedua) {
    let hasil = bilanganPertama + bilanganKedua;
    return console.log('hasil dari ' + bilanganPertama + ' + ' + bilanganKedua + ' adalah ' + hasil);
}
tambah(78, 2);



let penjelasanArrowFunction = () => {
    console.log('Arrow function adalah sintak penulisan fungsi yang bisa dibilang lebih singkat, menggunakan token baru yaitu “=>”, fungsi yang dideklarasikan menggunakan panah ini bersifat anonim. Mirip lambda arrow operator di bahasa lain. Dengan arrow function kita bisa menulis fungsi tanpa menggunakan kata kunci “function”, “return”, dan kurung kurawal');
}
penjelasanArrowFunction();

let perkalian = (bilanganPertama, bilanganKedua) => {
    let hasil2 = bilanganPertama * bilanganKedua;
    console.log('hasil dari ' + bilanganPertama + ' x ' + bilanganKedua + ' adalah ' + hasil2);
}
perkalian(2, 4);