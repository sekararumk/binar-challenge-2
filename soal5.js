/*  menggunakan arrow function
    membuat object kosong
        if tipe data string {
            melakukan split personName

            if panjang nama = 3 {
                namaObject adalah firstName, middleName, lastName yang diisi array dari name
            } else if panjang nama = 2 {
                namaObject adalah firstName dan lastName yang diisi array dari name, lalu middleName = null
            } else if panjang nama = 1 {
                namaObject adalah firstName yang diisi array dari name, lalu middleName dan lastName = null
            } else {
                return error input melebihi 3 kata
            }
        } else {
            return error data type bukan string
        }
        return nameObject 
*/

const getSplitName = (personName) => {
    let nameObject = [];

    if ( typeof personName === 'string' ){
        const name = personName.split(" ")

        if ( name.length === 3 ){
            nameObject = {
                firstName : name[0],
                middleName : name[1],
                lastName : name[2]
            }
        } 
        else if( name.length === 2 ) {
            nameObject = {
                firstName : name[0],
                middleName : null,
                lastName : name[1]
            }
        } 
        else if( name.length === 1 ){
            nameObject = {
                firstName : name[0],
                middleName : null,
                lastName : null
            }
        } 
        else {
            return "ERROR : This function is only for 3 characters name";
        }
    } else {
        return "ERROR : Invalid data type";
    }
    return nameObject;
}

// EXPECTED RESULT
// Ketika function tersebut dipanggil

console.log(getSplitName('Aldi Daniela Pranata'));
// EXPECTED OUTPUT
// {firstName : 'Aldi', middleName : 'Daniela', lastName : 'Pranata'}

console.log(getSplitName('Dwi Kuncoro'));
// EXPECTED OUTPUT
// {firstName : 'Dwi', middleName : null, lastName : 'Kuncoro'}

console.log(getSplitName('Aurora'));
// EXPECTED OUTPUT
// {firstName : 'Aurora', middleName : null, lastName : null}

console.log(getSplitName('Aurora Areliya Sukma Darma'));
// EXPECTED OUTPUT
// Error : This function is only for 3 characters name

console.log(getSplitName(0));
// EXPECTED OUTPUT
// ERROR : Bukan sebuah tipe data string