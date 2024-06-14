let isLoggedin = true;

if (isLoggedin) {
  console.log("Uygulamaya giriş yapıldı.");
} else {
  console.log("İşlem yok");
}

let mezuniyet = "üniversite";
let yas = 20;

if (yas >= 18 && (mezuniyet == "üniversite" || mezuniyet == "lise")) {
  console.log("ehliyet alabilir.");
} else {
  console.log("ehliyet alamaz.");
}

let ad = "Emre";
let soyad = "Aşık";
let sehir = "Ankara";

let mesaj =
  "Benim adım" +
  ad +
  " ve soyadım " +
  soyad +
  ". " +
  sehir +
  "'de yaşıyorum." +
  "Emekliliğe" +
  (65 - yas) +
  "yıl kaldı.";

//backtick option+, & alt gr+,
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}\'de yaşıyorum. Emekliliğe ${
  65 - yas
} yılım kaldı.`;

let emeklilik =
  65 - yas > 0
    ? "Emekliliğe " + (65 - yas) + " yıl kaldı"
    : " Zaten emekli oldunuz.";
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir} 'de yaşıyorum. ${emeklilik}`;

console.log(mesaj);
