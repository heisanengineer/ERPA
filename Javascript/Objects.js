//objeler, diziler ve tanimlar ic ice kullanilabilir
let user = {
  ad: "Emre",
  soyad: "ASIK",
  adres: {
    Mahalle: "Goksu Mahallesi",
    Cadde: "5350. Cadde",
    sehir: "Ankara",
    ilce: "Eryaman",
  },
  hobiler: ["sinema", "spor"],
};

let user2 = {
  ad: "Mehmet",
  soyad: "ASIK",
  adres: {
    Mahalle: "Elvankent",
    Cadde: "1543. Cadde",
    sehir: "Ankara",
    ilce: "Etimesgut",
  },
  hobiler: ["sinema", "spor"],
};

let kullanicilar = [user, user2];

sonuc = user.ad;
sonuc = user["ad"];

console.log(user.adres.Mahalle);
console.log(user.adres);
console.log(user.hobiler[0]);

console.log(kullanicilar[0].adres.ilce);
console.log(kullanicilar[1]);
