/*  menggunakan arrow function
        if dataAngka dan array {
            const secondLargestNumber {
                proses sorting angka dan me-return index ke-2
            } 
            return secondLargestNumber  
        } else {
            return error
        }

*/

const getAngkaTerbesarKedua = (dataAngka) => {
    if ( dataAngka && Array.isArray(dataAngka) ) {
        const secondLargestNumber = dataAngka.sort((a, b) => {
            return b - a;
          })[1];
        return secondLargestNumber;
    } else {
        return "ERROR : Invalid data type and Invalid parameter"
    }
}

// EXPECTED RESULT
// Ketika function tersebut dipanggil

const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka)) // EXPECTED OUTPUT : 8
console.log(getAngkaTerbesarKedua(0)) // EXPECTED OUTPUT : ERROR : Invalid data type
console.log(getAngkaTerbesarKedua()) // EXPECTED OUTPUT : ERROR : Tidak memiliki parameter