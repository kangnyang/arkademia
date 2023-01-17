function arkademy(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0) {
            console.log('arka');
        } else if (i % 5 == 0) {
            console.log('demy');
        } else if (i % 5 == 0 && i % 3 == 0) {
            console.log('arkademy');
        } else
            console.log(i);
    }
}
arkademy(5);

//tugas2
let kata=['p','u','r','w','a','k','a','r','t','a'];

function ubahKata(){

    
}

//tugas3
function cekParameter(param) {
    if (typeof param == 'string') {
        return console.log('parameter ' + param + ' adalah string');
    } else if (typeof param == 'number') {
        return console.log('parameter ' + param + ' adalah number');

    } else if (typeof param == 'object') {
        return console.log('parameter ' + param + ' adalah objeck');
    } else if (typeof param == 'boolean') {
        return console.log('parameter ' + param + ' adalah bolean');
    } else if (Array.isArray(param)) {
        return console.log('parameter ' + param + ' adalah array');
    } else {
        return console.log('memasukan kata yang salah');
    }
}
cekParameter(3)