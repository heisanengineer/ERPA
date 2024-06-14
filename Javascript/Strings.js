let kursAdi = "Javascript String Metotları";

let sonuc = " ";

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[0];
sonuc = kursAdi.slice(0, 10);
sonuc = kursAdi.substring(0, 10);
sonuc = kursAdi.replace("String", "Metin");
sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();
sonuc = kursAdi.indexOf("Metotları");
sonuc = kursAdi.split(" ")[2];

let url = "https://emredev.com";

// Url Kaç Karakterlidir?
sonuc = url.length;

//Kurs adı kaç kelimeden oluşur ?
sonuc = kursAdi.split(" ").length;

//url https ile mi başlıyor ?

sonuc = url.startsWith("https");

if (url.startsWith("https")) {
  console.log("Doğru");
} else {
  console.log("Yanlış");
}

sonuc = url.startsWith("https")
  ? "https ile başlıyor."
  : "https ile başlamıyor";

//Kurs adı içerisinde string kelimesi var mı ?

sonuc = kursAdi.toLowerCase();
sonuc = sonuc.split(" ");
sonuc = sonuc.includes("string");

//url ve kurs adını birleştirerek https://emredev.com/javascript-string-metotları urlsini oluştur.

sonuc = url + " " + kursAdi;
sonuc = sonuc.toLowerCase();
sonuc = sonuc.replaceAll(" ", "-");
sonuc = sonuc.replaceAll("ı", "i");
sonuc = `${url}/${kursAdi
  .replaceAll("ı", "i")
  .replaceAll(" ", "-")
  .toLowerCase()}`;

console.log(sonuc);
