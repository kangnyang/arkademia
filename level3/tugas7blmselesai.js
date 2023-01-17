//tugas 1
// let result = '';

// function segitiga(num) {

//     for (let i = 1; i <= num; i++) {
//         for (let j = 0; j < i; j++) {
//             result += '*';
//         }
//         result += "\n";

//     }
//     console.log(result);
// }
// segitiga(10);

//tugas2




//tugas3 membuat ketentuan lulus atau tidak

function grade(nilai) {
    if (nilai < 65) {
        console.log('maka anda TIDAK LULUS');
    } else {
        console.log('maka anda LULUS')
    }
}
grade(70);

let nilai = [50, 70, 90];

function tambahArray(arr) {
    nilai.push(arr);
    console.log(nilai);
}
tambahArray(40);
tambahArray(30);
tambahArray(100);