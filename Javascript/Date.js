let simdi = new Date();
sonuc = simdi;

//get

sonuc = simdi.getDate();
sonuc = simdi.getFullYear();
sonuc = simdi.getMonth();
sonuc = simdi.getDay();
sonuc = simdi.getTime();
sonuc = simdi.getHours();
sonuc = simdi.getMinutes();
sonuc = simdi.getSeconds();

//set

sonuc = simdi.setDate(15);
sonuc = simdi.setFullYear(2025);
sonuc = simdi.setMonth(5);
sonuc = simdi.getTime();
sonuc = simdi.setHours(15);
sonuc = simdi.setMinutes(30);
sonuc = simdi.setSeconds(53);

let dogumTarihi = new Date(1990, 5, 15);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

console.log(sonuc);
