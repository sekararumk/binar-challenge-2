/*  menggunakan arrow function
        if dataAngka dan array {
            const secondLargestNumber {
                set untuk menghilangkan dataAngka duplikat dan mengurutkannya kemudian reverse dataAngka dengan mengambil index ke-2
            return secondLargestNumber 
        } else {
            return error
        }
*/

const getAngkaTerbesarKedua = ( dataAngka) =>{
    if( dataAngka ){
        const secondLargestNumber = [...new Set(dataAngka.sort().reverse())];
    return secondLargestNumber[1];
    }else{
        return "Error: Invalid data type and Invalid parameter"
    }
}

// EXPECTED RESULT
// Ketika function tersebut dipanggil

const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka)) // EXPECTED OUTPUT : 8
console.log(getAngkaTerbesarKedua(0)) // EXPECTED OUTPUT : ERROR : Invalid data type
console.log(getAngkaTerbesarKedua()) // EXPECTED OUTPUT : ERROR : Tidak memiliki parameter