//Kullanıcının girdiği iki adet sayının OKEK'ini bulup mesaj olarak yazdırın.
const sayi1El = document.querySelector("#sayi1");
const sayi2El = document.querySelector("#sayi2");
const mesaj = document.querySelector("#sonuc");

document.querySelector("#hesapla").addEventListener("click", () => {
  let sayi1 = Number(sayi1El.value);
  let sayi2 = Number(sayi2El.value);

  if (sayi1 > sayi2) {
    let temp = sayi1;
    sayi1 = sayi2;
    sayi2 = temp;
  }

  for (let i = sayi2; i <= sayi1 * sayi2; i++) {
    if (i % sayi1 == 0 && i % sayi2 == 0) {
      mesaj.innerHTML = `<b>${sayi1} ve ${sayi2} nin ekoku: ${i}</b>`;
      break;
    }
  }
});
