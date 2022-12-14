// ornek 1
/* console.log("javascript practice ilk ders başladı");
console.warn("uyarı amaçlı kullanılır");
console.error("hata mesajı taşır"); */

// ornek 2
//alert("bu bir uyari mesajıdır");
//console.log(confirm("emin misiniz"));

// ornek 3
/* let uzunKenar = prompt("uzun kenarı giriniz");
let kisaKenar = prompt("kısa kenarı giriniz");
let alan = Number(uzunKenar) * Number(kisaKenar);
console.log(`Dikdörtgenin alanı : ${alan} dır`);
alert(`Dikdörtgenin alanı : ${alan} dır`); */

// ornek 4
/* let pi = 3.14;
console.log(typeof pi);
let deger = true;
console.log(typeof deger);
let deger2 = "osman";
console.log(typeof deger2); */

// ornek 5
/* let ad1 = "Ali";
let ad2 = "Oya";
let ad3 = "Can";
let ad4 = null;
let ad5 = "";
let ad6 = undefined;

console.log(ad1 && ad2 && ad3); //  Can
console.log(ad1 && ad2 && ad4 && ad3); //  null
console.log(ad4 || ad5 || ad2 || ad6); //  Oya
console.log(ad4 || ad5 || false || undefined); //  undefined */

// ornek 6
/* let x = 40;
let y = "30";

console.log(x == "40"); //true
console.log(y === 30n); // false
console.log(y !== 30n); // true
console.log(x > y + 10); // false 40 < 3010
console.log(x < y + 10); //true */

// ornek 7
/* const sayi = 254;

const birler = sayi % 10;
const onlar = Math.floor(sayi / 10) % 10;
const yuzler = Math.floor(sayi / 100) % 10;
console.log(birler);
console.log(onlar);
console.log(yuzler);
const toplam = birler + onlar + yuzler;
console.log(`${sayi} sayisinin rakamlar toplami : ${toplam}`); */

// ornek 8
/* let a = 5;
let b = --a; // b=4 a=4
let c = b++; // c=4 b=5
console.log(a, b, c); // 4 5 4 */

//Örnek-9
/* const sayi1 = 5;
const sayi2 = -7;
const isim = "John";
const sifir = 0;
const hic = null;
const bos = "";
const tanimsiz = undefined;
const sayiDegil = NaN;
console.log(Boolean(sayi1)); // true
console.log(
  Boolean(bos), // false
  Boolean(hic), // false
  Boolean(sifir), // false
  Boolean(tanimsiz), // false
  Boolean(sayiDegil) // false
); */

//Örnek 10
/* let isim = prompt("Lütfen isminizi giriniz");
if (!isim) {
  alert("İsminizi girmediniz");
} else {
  alert(`Hoşgeldiniz Sayın ${isim}`);
} */

//Örnek 11
let giris = true;
let cikis = false;
console.log(!giris || cikis || giris); //true
console.log(!giris || cikis); //false
console.log(((giris && cikis) || !cikis) && !giris); // false
