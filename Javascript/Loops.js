let sayilar = [1, 4, 5, 8, 4, 3, 12, 5, 3, 5];
let toplam = 0;
for (let i = 0; i < sayilar.length; i++) {
  toplam += sayilar[i];
}

console.log(toplam);

for (let index in sayilar) {
  console.log(index);
}

for (let sayi in sayilar) {
  console.log(sayi);
}

let user = {
  name: "Emre",
  username: "emrecan",
  password: "12345",
  email: "emre@erpa.com",
};

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}


let sayilar2 = [1, 5, 7, 15, 3, 25, 12, 24];

let urunler = [
  "iphone 12",
  "samsung s22",
  "iphone 13",
  "samsung s23",
  "samsung s20",
];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.

for (let num of sayilar2) {
  console.log(num * num);
}

for (let num of sayilar2) {
  console.log(Math.pow(num, 2));
}


// 2- sayilar listesindeki hangi sayılar 5' in katıdır?

for (let num in sayilar2) {
  if (num % 5 == 0) {
    console.log(num);
  }
}

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.

let sum = 0;
for (let num of sayilar2) {
  if (num % 2 == 0) {
    sum += num;
  }
}
console.log(sum);



// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

for (let i = 0; i < urunler.length; i++) {
  urunler[i] = urunler[i].toUpperCase();
  console.log(urunler[i]);
}

// 5- urunler listesinde samsung geçen kaç ürün vardır?

for (let i = 0; i < urunler.length; i++) {
  if (urunler[i].toLowerCase().includes("samsung") == true) {
    console.log(urunler[i]);
  }
}


let ogrenciler = [
  { ad: "yiğit", soyad: "bilgi", notlar: [60, 70, 60] },
  { ad: "ada", soyad: "bilgi", notlar: [80, 70, 80] },
  { ad: "çınar", soyad: "turan", notlar: [10, 20, 60] },
];

// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

for (let ogrenci of ogrenciler) {
    let toplamNot = ogrenci.notlar.reduce((acc, not) => acc + not, 0);
    let notOrtalamasi = toplamNot / ogrenci.notlar.length;
    let basariDurumu = notOrtalamasi >= 50 ? "Geçti" : "Kaldı";
  
    console.log(`${ogrenci.ad} ${ogrenci.soyad}: Not Ortalaması - ${notOrtalamasi.toFixed(2)}, Başarı Durumu - ${basariDurumu}`);
  }

// tüm öğrencilerin not ortalaması kaçtır?

let toplamNot = ogrenciler.reduce((acc, ogrenci) => {
    return acc + ogrenci.notlar.reduce((acc, not) => acc + not, 0);
  }, 0);
  
  let notOrtalamasi = toplamNot / (ogrenciler.length * ogrenciler[0].notlar.length);
  console.log(notOrtalamasi);
