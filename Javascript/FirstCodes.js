var urunAdi = "iphone 13";
let urunfiyat = 15000;

console.log(typeof urunAdi);
console.log(typeof urunfiyat);

let sayi1 = "10";
let sayi2 = "20";
let sayi3 = 30;
let sayi4 = 40;
let isim = "Emre";
let soyad = "Can";

let sinavNotu = 70;
let basarilimi = sinavNotu >= 50;
console.log(sayi1 + sayi2);

console.log(Number(sayi1) + Number(sayi2));

console.log(sayi3.toString() + sayi4.toString());

console.log(isim + " " + soyad);

console.log(basarilimi);

let ogr1_ad = "İrem";
let ogr1_soyad = "Bilgi";
let ogr1_dogumTarihi = "2010";
let ogr1_matematik1 = 70;
let ogr1_matematik2 = 70;
let ogr1_matematik3 = 80;
let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) / 3;

console.log(parseFloat(ogr1_ortalama));
console.log(ogr1_ortalama >= 50);

let ogr2_ad = "Emre";
let ogr2_soyad = "Soy";
let ogr2_dogumTarihi = "2012";
let ogr2_matematik1 = 40;
let ogr2_matematik2 = 40;
let ogr2_matematik3 = 50;
let ogr2_ortalama = (ogr2_matematik1 + ogr2_matematik2 + ogr2_matematik3) / 3;

console.log(parseFloat(ogr2_ortalama));
console.log(ogr2_ortalama >= 50);

let sunakiYil = new Date().getFullYear();

let ogr1_yas = sunakiYil - parseInt(ogr1_dogumTarihi);
let ogr2_yas = sunakiYil - parseInt(ogr2_dogumTarihi);
console.log(ogr1_yas);
console.log(ogr2_yas);
