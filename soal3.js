/*  implementasi arrow function
    inisialisasi variable regex
        if tipe data undefined {
            return Error tidak memiliki parameter
        } else if tipe data bukan string {
            return invalid data type
        } else if memenuhi karakter regex{
            return Valid
        } else if tidak memenuhi karakter (tanpa @){
            return Error invalid input
        } else {
            return Invalid
        }
    }
*/

const checkEmail = (email) => {
    let regex = new RegExp("[A-Za-z0-9 _ \-\.]+[@][A-Za-z0-9]+[\.][A-za-z\.]+");

    if ( typeof email === 'undefined' ) {
        return "ERROR : Bro where is the parameter?";
    } else if ( typeof email !== 'string' ) {
            return "ERROR : Invalid data type";
    } else if ( regex.test(email) ) {
        return "VALID";
    } else if (!/[A-Za-z0-9 _ \-\.]+[@]/.test(email)) {
        return "ERROR : Invalid input. Use @ (Ex : @binar.com)";
    } else {
        return "INVALID";
    }
}

// EXPECTED RESULT
// Ketika function tersebut dipanggil

console.log(checkEmail('apranata@binar.co.id')) // OUTPUT yang keluar => "VALID"
console.log(checkEmail('apranata@binar.com')) // OUTPUT yang keluar => "VALID"
console.log(checkEmail('apranata@binar')) // OUTPUT yang keluar => "INVALID"
console.log(checkEmail('apranata')) // ERROR : Format email harus menggunakan @
console.log(checkEmail(3322)) // ERROR : Bukan sebuah tipe data string
console.log(checkEmail()) // ERROR : Tidak memiliki parameter