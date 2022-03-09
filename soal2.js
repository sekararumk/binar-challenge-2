/*
    menggunakan arrow function
    if tipe data Number {
        if habis dibagi 2 
          return GENAP
        if tidak habis dibagi 2 
          return GANJIL
    } 
    else {
        if tipe data undefined 
          return Error: Bro where is the parameter
    } else {
        return Error: Invalid data type
    }
*/

const checkTypeNumber = (givenNumber) => {
    if ( typeof givenNumber === 'number' ) {
      if ( givenNumber % 2 === 0 ) {
        return 'GENAP';
      } else if ( givenNumber % 2 === 1) {
        return 'GANJIL';
      }
    } else if ( typeof givenNumber === 'undefined') {
      return 'Error: Bro where is the parameter';
    } else {
      return 'Error: Invalid data type';
    }
  };

// EXPECTED RESULT
// Ketika function tersebut dipanggil

console.log(checkTypeNumber(10)) // OUTPUT yang keluar => GENAP
console.log(checkTypeNumber(3)) // OUTPUT yang keluar => GANJIL
console.log(checkTypeNumber("3")) // OUTPUT yang keluar => "Error : Invalid data type"
console.log(checkTypeNumber({})) // OUTPUT yang keluar => "Error : Invalid data type"
console.log(checkTypeNumber([])) // OUTPUT yang keluar => "Error : Invalid data type"
console.log(checkTypeNumber()) // OUTPUT yang keluar => "Error : Bro where is the parameter?"