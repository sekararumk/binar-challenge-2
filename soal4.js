/*  implementasi arrow function
    inisialisasi variable regex
        if tipe data undefined {
            return Error tidak memiliki parameter
        } else if tipe data bukan string {
            return Error invalid data type
        } else if memenuhi karakter regex {
            return True
        } else {
            return False : tidak memenuhi karakter regex
        } 
*/

const isValidPassword = (givenPassword) => {
    const regex = new RegExp("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}");

    if ( typeof givenPassword === 'undefined' ) {
        return "ERROR : Bro where is the parameter?";
    } else if ( !givenPassword || typeof givenPassword !== 'string' ){
        return "ERROR : Invalid data type";
    } else if ( regex.test(givenPassword) ) {
        return "True";
    } else {
        return "False";
    }
}

// EXPECTED RESULT
// Ketika function tersebut dipanggil

console.log(isValidPassword('Meong2021')) // EXPECTED OUTPUT => True 
// (Karena memenuhi requirement, Meong2021 terdiri dari 8 hutuf, ada huruf besar, ada huruf kecil dan ada angka)
console.log(isValidPassword('meong2021')) // EXPECTED OUTPUT => False (Karena meong2021 tidak ada huruf besar)
console.log(isValidPassword('@eong')) // EXPECTED OUTPUT => False (Karena @eong tidak ada angka dan terdiri hanya 5 huruf)
console.log(isValidPassword('Meong2')) // EXPECTED OUTPUT => False (Karena Meong2 hanya 6 huruf)
console.log(isValidPassword(0)) // ERROR : Bukan sebuah tipe data string
console.log(isValidPassword()) // ERROR : Tidak memiliki parameter