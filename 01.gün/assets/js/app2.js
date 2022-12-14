const renk1 = document.querySelector(".red");
const renk2 = document.querySelector(".white");
const renk3 = document.querySelector(".blue");
const renk4 = document.querySelector(".black");
const yanlis = document.querySelector("#yanlis");

renk1.innerHTML = "KIRMIZI";
renk2.innerHTML = "BEYAZ";
renk3.innerHTML = "MAVI";
renk4.innerHTML = "SIYAH";

let yanlisHali = `<div class="kutu">
<div class="red">SIYAH</div>
<div class="white">KIRMIZI</div>
<div class="blue">BEYAZ</div>
<div class="black">MAVI</div>
</div>`;

yanlis.innerHTML = `<h1  style="text-align:center;color:red">RENKLER-YANLIS HALİ</h1> ${yanlisHali}`;
console.log(~5);
