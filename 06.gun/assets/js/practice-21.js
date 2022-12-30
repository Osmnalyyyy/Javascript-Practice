const urunler = [
  { urun_id: "KL111", urun_adi: "Klavye", fiyat: 250 },
  { urun_id: "MN111", urun_adi: "Monitör", fiyat: 2250 },
  { urun_id: "MS111", urun_adi: "Mouse", fiyat: 150 },
  { urun_id: "PR111", urun_adi: "Printer", fiyat: 1250 },
  { urun_id: "SC111", urun_adi: "Tarayıcı", fiyat: 750 },
  { urun_id: "HP111", urun_adi: "Hoparlör", fiyat: 450 },
];

const urunlerYukle = () => {
  let satirlar = "";
  for (const urun of urunler) {
    satirlar += `<tr>
        <td>${urun.urun_id}</td>
        <td>${urun.urun_adi}</td>
        <td>${urun.fiyat}</td>
        </tr>`;
  }

  document.querySelector("#tblSatislar tbody").innerHTML = satirlar;
};

document.querySelector("#tblSatislar tbody tr").forEach((satir) => {
  satir.addEve;
});

urunlerYukle();
