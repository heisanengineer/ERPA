let ogrenciler = ["Emre","Yanke","Polat"];

sonuc = ogrenciler.length;
sonuc =ogrenciler.toString();
sonuc = ogrenciler.join("Ahmet");


sonuc = ogrenciler.pop(); // son eleman silinir ve 1 kereye mahsus geri dondurulur
sonuc = ogrenciler.shift(); // poptan farki ilk elemani siler
sonuc = ogrenciler.unshift("Mehmet"); // Dizinin basina eleman eklemeye yarar
sonuc = ogrenciler.push("Ahmet"); // Dizinin sonuna eleman eklemeye yarar

let markalar1 = ["Opel","Citroen"];
let markalar2 = ["MG","BYD"];
let markalar3 = ["Mercedes","BMW"];

sonuc = markalar1.splice(0,1,markalar2); //splice 0 dan basla 1 eleman sil sonra markalar2 elemanlarini ekle
console.log(sonuc);
console.log(markalar1);

//Dizi metot sorulari
let sonuc = " ";
// 1- "Elma, Armut, Muz, Cilek" Elemanlarina sahip bir dizi olustur

let meyveler = ["Elma", "Armut", "Muz", "Cilek"];

// 2- Dizi kac elemanlidir

console.log(meyveler.length);

// Dizinin ilk ve son elemani

sonuc = meyveler.pop();
console.log(sonuc);
sonuc = meyveler.shift();
console.log(sonuc);

//Elma dizinin bir elemani midir
meyveler = ["Elma", "Armut", "Muz", "Cilek"];
sonuc = (meyveler.indexOf("Elma") > -1 ) ? "Evet elemanidir" : "Hayir elemani degildir";

console.log (sonuc);

console.log(meyveler.includes("Elma"));

//Dizinin sonuna Kiraz ekleyiniz
sonuc = meyveler.push("Kiraz"); 

console.log (sonuc);

//Dizinin son iki elemanini sil

sonuc = meyveler.splice(0,meyveler.length-2);
sonuc = meyveler.splice(meyveler.length-2,2);

console.log (sonuc);

// Dizi elemanlarinin yaslarini hesaplayiniz

let ogrenciler1 = [
    ["Yigit Bilgi","2010"],
    ["Ada Bilgi","2012"],
    ["Ahmet Turan", "2009"]
];

let dogumTarihi = new Date(2024,6,14);

sonuc = (dogumTarihi.getFullYear() - parseInt(ogrenciler1[0][1]));
console.log(ogrenciler1[0][0] + "'s age: "+ sonuc);
sonuc = (dogumTarihi.getFullYear() - parseInt(ogrenciler1[1][1]));
console.log(ogrenciler1[1][0] + "'s age: "+ sonuc);
sonuc = (dogumTarihi.getFullYear() - parseInt(ogrenciler1[2][1]));
console.log(ogrenciler1[2][0] + "'s age: "+ sonuc);
