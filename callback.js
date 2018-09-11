/**
 * Contoh Callback sederhana
 */

 // function tampilkan(callback) {
//     var txt = callback('erdi');
//     console.log(txt);
// }

// tampilkan((res) => {
//     return "Halo " + res
// });

/**
 * Contoh asynchronous/ Promise 
 */

storage = {
    get: function() {
        // tertunda
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('ini adalah hasil promise');
            }, 5000);
        });
    }
}

console.log('start di sini');

storage.get().then((res) => {
    console.log(res);
});

console.log('selesai');

