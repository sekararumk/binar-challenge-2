//  menggunakan reduce untuk mengeksekusi setiap elemen pada array 

const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

// EXPECTED RESULT
// Ketika function tersebut dipanggil dengan variabel dataPenjualanPakAldi
const hitungTotalPenjualan = (dataPenjualan) => {
      return dataPenjualan.reduce((result, item) => {
        return result + item.totalTerjual;
      }, 0);
};

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));

// EXPECTED OUTPUT => 307
// 307 dari mana? dari setiap value propertu 'totalTerjual', yaitu 90 + 37 + 90 + 90