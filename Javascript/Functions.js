function selamlama(msg){
    console.log(msg);
}

selamlama("merhaba");

//------

function yasHesapla(dogumYili)
{
    return new Date().getFullYear()-dogumYili;
}

let yasAhmet = yasHesapla(1985);
let yasMehmet = yasHesapla(1987);

console.log(yasAhmet);
console.log(yasMehmet);

//----

function emekliligeKacYilKaldi(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let kalanSene = 65 - yas;
    if(kalanSene > 0){
        console.log(`${isim}, Emekli olmaniza ${kalanSene} yil kaldi.`);
    }else {
        console.log("Zaten emekli oldunuz.");
    }
}

emekliligeKacYilKaldi(1993,"Emre");

//----

// 1- Kendisine gonderilen kelimeyi belirtilen kez ekranda yazdiran fonksiyon

function kelimeYazdir(kelime, adet){
    for(let i=0;i<adet;i++)
        {
            console.log(kelime);
        }
}

kelimeYazdir("Merhaba",5);

//----

// 2- Dikdortgenin alani ve cevresini hesaplayan fonksiyonu yaz

function alanCevreHesapla(kisa,uzun)
{
    let alan = kisa * uzun;
    let cevre =(kisa+uzun)*2;

    return `alan: ${alan} cevre: ${cevre}`;
}

let sonuc = alanCevreHesapla(7,10);
console.log(sonuc);

//----

//3- Yazi-Tura uygulamasi fonksiyon kullanarak yaz

function yaziTuraAt(){
let random = Math.random();

if(random<0.5){
    console.log("Yazi")
}else
{
    console.log("Tura");
}
console.log(random);
}

yaziTuraAt();