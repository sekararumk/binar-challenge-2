/*  Inisialisasi variabel rupiah dengan Intl.NumberFormat()
    Inisialisasi objek getInfoPenjualan dengan menampilkan infoPenjualan
    Inisialisasi infoPenulis dengan array kosong
    Inisialisasi totalTerjual = 0 untuk mencari total terjual
    Menghitung total keuntungan 
    Menghitung total modal
    Menghitung total terjual
    Mencari buku terlaris dengan if item.totalTerjual > infoPenjualan.totalTerjual maka produkBukuTerlaris = namaProduk 
    Mencari total buku yang terjual setiap penulis dan disimpan di infoPenulis
    Mencari penulis dengan total buku yang paling banyak terjual
    return 
*/

const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];
  
  const idrCurrency = (number) => {
      return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
      }).format(number);
  };
  
  const getInfoPenjualan = (dataPenjualan) => {
      const infoPenjualan = {
          totalKeuntungan: 0,
          totalModal: 0,
          totalJual: 0,
          totalTerjual: 0,
          produkBukuTerlaris: "",
          penulisBukuTerlaris: "",
          
      };
  
      const infoPenulis = [];
      let totalTerjual = 0;

      dataPenjualan.forEach((item) => {
          // Total keuntungan
          infoPenjualan.totalKeuntungan += item.hargaJual * item.totalTerjual - (item.totalTerjual + item.sisaStok) * item.hargaBeli;

          // Total modal
          infoPenjualan.totalModal += item.hargaBeli * (item.totalTerjual + item.sisaStok);

          // Total jual
          infoPenjualan.totalJual += item.hargaJual * item.totalTerjual;
  
          // Mencari produk buku terlaris
          if (item.totalTerjual > infoPenjualan.totalTerjual) {
              infoPenjualan.produkBukuTerlaris = item.namaProduk;
              infoPenjualan.totalTerjual = item.totalTerjual;
          }

          // Cek total buku terjual setiap penulis
          if (infoPenulis[item.penulis]) {
              infoPenulis[item.penulis] += item.totalTerjual;
          } else {
              infoPenulis[item.penulis] = item.totalTerjual;
          } 
          // Mencari penulis dengan buku terlaris pada infoPenulis
          for (var penulis in infoPenulis) {
            if (infoPenulis[penulis] > totalTerjual) {
                penulisBukuTerlaris = penulis;
                totalTerjual = infoPenulis[penulis];
            }
        }
      });
      return {
          totalKeuntungan: idrCurrency(infoPenjualan.totalKeuntungan),
          totalModal: idrCurrency(infoPenjualan.totalModal),
          persentaseKeuntungan: ((infoPenjualan.totalKeuntungan / infoPenjualan.totalModal) * 100 ).toFixed(2) + '%',
          produkBukuTerlaris: infoPenjualan.produkBukuTerlaris, // Produk buku terlaris adalah Garis Waktu
          penulisBukuTerlaris, // Penulis buku terlaris adalah Tere Liye karena memiliki 2 produk buku
          
      };
  };
  console.log(getInfoPenjualan(dataPenjualanNovel));

