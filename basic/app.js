const urun = document.querySelector("#urun");
const tutar = document.querySelector("#tutar");
const temizle = document.querySelector("#btnTemizle");
const ekle = document.querySelector("#btnEkle");
const urunList = document.querySelector("#urunList");
const topTutarYaz = document.querySelector("#topTutar");

let topTutar = 0;

//Ürün listesi ve toplam tutar alanlarını gizleme
let urunDurumu = null;
if (urunDurumu == null) {
    document.getElementById('urunListRow').style.display = 'none';
    document.getElementById('topTutarRow').style.display = 'none';
}

//Temizleme fonksiyonu
const functionTemizle = () => {
    urun.value = '';
    tutar.value = '';
}

//Alert
const controller = document.querySelector('ion-alert-controller');

function handleButtonClick() {
    controller.create({
        header: 'Uyarı',
        message: 'Lütfen boşlukları doldurun.',
        buttons: ['Tamam']
    }).then(alert => {
        alert.present();
    });
}

//Ekle butonu
ekle.addEventListener('click', () => {
    const eklenenUrun = urun.value;
    const eklenenTutar = tutar.value;
    if (eklenenUrun.trim().length <= 0 || eklenenTutar <= 0 || eklenenTutar.trim().length <= 0) {
        handleButtonClick();
    } else {
        document.getElementById('urunListRow').style.display = 'block';
        document.getElementById('topTutarRow').style.display = 'block';
        const yeniUrun = document.createElement('ion-item');
        yeniUrun.textContent = eklenenUrun + ":" + eklenenTutar + "TL";

        urunList.appendChild(yeniUrun);

        topTutar += +eklenenTutar;
        topTutarYaz.textContent = topTutar + "TL";
        functionTemizle();
    }


});

//Temizle Butonu
temizle.addEventListener('click', () => {
    functionTemizle();
});