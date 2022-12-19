//Kullanıcıya ürün ve fiyat bilgisi girdirelim, 1500 TL ile bu üründen kaç adet
// alabileceğini ekrana yazdıralım.(Do While kullanarak yapalım)
let urunLi = document.querySelector("#urun");
let fiyatLi = document.querySelector("#fiyat");
let mesaj = document.querySelector("#mesaj");
document.querySelector("#hesapla").addEventListener("click", () => {
  let urun = urunLi.value;
  let fiyat = Number(fiyatLi.value);

  let sayac = 0;
  let toplam = 0;

  do {
    toplam = sayac * fiyat;
    if (toplam > 1500) {
      toplam -= fiyat;
      sayac--;
      break;
    }
    sayac++;
  } while (toplam <= 1500);

  mesaj.innerHTML = `${urun} adlı üründen ${toplam} tl ödeyerek ${sayac} tane alabilirsiniz`;
});
