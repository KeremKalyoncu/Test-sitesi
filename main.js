const baslaButonu = document.getElementById('baslaButonu');
const baslaButonu2 = document.getElementById('baslaButonu2');
const soruEkrani = document.getElementById('soruEkrani');
const baslangicEkrani = document.getElementById('baslangicEkrani');
const soruText = document.querySelector('.soru');
const secenekler = document.querySelectorAll('.secenek');
const bilgiKutusu = document.querySelector('.bilgi-kutusu');
const bilgilendirme = document.getElementById('bilgilendirme');
const ipucu = document.getElementById('ipucu1');
const ipucu2 = document.getElementById('ipucu2');
let myAudio = document.querySelector('#audio')
let myAudio2 = document.querySelector('#audio2')

const sorular = [
  {
    soru: "Dünyadaki en büyük tatlı su gölü hangisidir?",
    cevaplar: ["Hazar Denizi", "Superior Gölü", "Victoria Gölü", "Tuz Gölü"],
    dogruCevap: 1,
    ipucu: "Bu göl, Kuzey Amerika'da yer alır ve en büyük tatlı su gölü olarak bilinir."
  },
  {
    soru: "Hangi gezegen 'Yüzükler Gezegeni' olarak bilinir?",
    cevaplar: ["Satürn", "Neptün", "Jüpiter", "Uranüs"],
    dogruCevap: 0,
    ipucu: "Bu gezegen, en belirgin halkaları ile tanınır."
  },
  {
    soru: "İnsan vücudunda en fazla bulunan element hangisidir?",
    cevaplar: ["Oksijen", "Karbon", "Hidrojen", "Azot"],
    dogruCevap: 2,
    ipucu: "Bu element, suyun ve dolayısıyla vücudun büyük bir kısmını oluşturur."
  },
  {
    soru: "Hangi gezegenin yüzeyinde en yüksek dağ bulunur?",
    cevaplar: ["Mars", "Venüs", "Jüpiter", "Uranüs"],
    dogruCevap: 0,
    ipucu: "Bu gezegen Olympus Mons adlı dev bir dağa ev sahipliği yapar."
  },
  {
    soru: "Hangi organ vücutta en fazla kanı depolar?",
    cevaplar: ["Karaciğer", "Akciğer", "Kalp", "Dalak"],
    dogruCevap: 3,
    ipucu: "Bu organ, kanın büyük bir kısmını depolayabilen bir organ olarak bilinir."
  },
  {
    soru: "Hangi matematiksel formül, bir dairenin çevresini hesaplamada kullanılır?",
    cevaplar: ["Çevre = 2πr", "Çevre = πr²", "Çevre = 2r", "Çevre = πd"],
    dogruCevap: 0,
    ipucu: "Bu formül, dairenin çevresini hesaplamak için yarıçapı kullanır."
  },
  {
    soru: "İnsan vücudundaki en büyük organ hangisidir?",
    cevaplar: ["Cilt", "Karaciğer", "Kalp", "Akciğer"],
    dogruCevap: 0,
    ipucu: "Bu organ, vücudu dış etkenlerden koruyan ve en geniş yüzey alanına sahip olandır."
  },
  {
    soru: "Hangi gezegen 'Gece ve Gündüz' gezegeni olarak bilinir?",
    cevaplar: ["Venüs", "Mars", "Jüpiter", "Satürn"],
    dogruCevap: 0,
    ipucu: "Bu gezegenin uzun süreli gece ve gündüz dönemleri vardır."
  },
  {
    soru: "Hangi organ, insana tat alma duyusunu sağlar?",
    cevaplar: ["Dudaklar", "Dil", "Burn", "Ağız"],
    dogruCevap: 1,
    ipucu: "Bu organ, tat reseptörlerini içerir ve yiyeceklerin tatlarını algılar."
  },
  {
    soru: "Hangi gezegen 'Yıldızların Kraliçesi' olarak bilinir?",
    cevaplar: ["Venüs", "Mars", "Neptün", "Jüpiter"],
    dogruCevap: 0,
    ipucu: "Bu gezegen, gece gökyüzünde oldukça parlak bir şekilde görünür."
  },
  {
    soru: "Hangi gezegen 'Gözyaşı Gezegeni' olarak bilinir?",
    cevaplar: ["Uranüs", "Neptün", "Venüs", "Satürn"],
    dogruCevap: 1,
    ipucu: "Bu gezegen, mavi renkli atmosferi nedeniyle bu şekilde adlandırılmıştır."
  },
  {
    soru: "En uzun insan kemiği hangisidir?",
    cevaplar: ["Kafatası", "Femur (Uyluk kemiği)", "Kaval Kemiği", "Omurga"],
    dogruCevap: 1,
    ipucu: "Bu kemik, bacakta yer alır ve uzunluğu nedeniyle en uzun insan kemiği olarak bilinir."
  },
  {
    soru: "Hangi gezegen en yüksek volkanlara sahiptir?",
    cevaplar: ["Venüs", "Mars", "Jüpiter", "Satürn"],
    dogruCevap: 1,
    ipucu: "Bu gezegen, Olympus Mons adlı dev volkan ile tanınır."
  },
  {
    soru: "Hangi gezegen 'Kırmızı Gezegen' olarak bilinir?",
    cevaplar: ["Venüs", "Mars", "Jüpiter", "Satürn"],
    dogruCevap: 1,
    ipucu: "Bu gezegenin yüzeyi demir oksitten dolayı kırmızı görünür."
  },
  {
    soru: "Dünyanın en büyük okyanusu hangisidir?",
    cevaplar: ["Pasifik Okyanusu", "Atlantik Okyanusu", "Hint Okyanusu", "Arktik Okyanusu"],
    dogruCevap: 0,
    ipucu: "Bu okyanus, yüzölçümü bakımından en geniş okyanustur."
  },
  {
    soru: "Bir atomun çekirdeğinde bulunan pozitif yüklü parçacıklara ne denir?",
    cevaplar: ["Elektron", "Nötron", "Proton", "Foton"],
    dogruCevap: 2,
    ipucu: "Bu parçacıklar, atomun çekirdeğinde bulunur ve pozitif yük taşır."
  },
  {
    soru: "Hangi gezegenin atmosferinde en yüksek rüzgar hızları görülür?",
    cevaplar: ["Uranüs", "Venüs", "Neptün", "Jüpiter"],
    dogruCevap: 2,
    ipucu: "Bu gezegen, atmosferindeki güçlü rüzgarları ile bilinir."
  },
  {
    soru: "Mona Lisa tablosunun yazarının gerçek adı nedir?",
    cevaplar: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Caravaggio"],
    dogruCevap: 0,
    ipucu: "Bu sanatçı, aynı zamanda \"Son Akşam Yemeği\" tablosunun da yaratıcısıdır."
  },
  {
    soru: "Dünyanın en büyük denizi hangisidir?",
    cevaplar: ["Karadeniz", "Akdeniz", "Hazar Denizi", "Kızıl Deniz"],
    dogruCevap: 2,
    ipucu: "Bu deniz, yüzölçümü bakımından en geniş iç denizdir."
  },
  {
    soru: "Hangi element elektronegatiflik açısından en yüksektir?",
    cevaplar: ["Flor", "Oksijen", "Klor", "Azot"],
    dogruCevap: 0,
    ipucu: "Bu element, kimyasal bağlarda en yüksek çekme kapasitesine sahiptir."
  },
  {
    soru: "Hangi gezegen 'Doğum Günü Gezegeni' olarak bilinir?",
    cevaplar: ["Uranüs", "Neptün", "Jüpiter", "Venüs"],
    dogruCevap: 0,
    ipucu: "Bu gezegenin eğik ekseni nedeniyle ilginç bir rotasyon hareketi vardır."
  },
  {
    soru: "Newton'un ikinci hareket kanunu nedir?",
    cevaplar: ["F = ma (Kuvvet eşittir kütle çarpı ivme)", "F = mv", "F = m/g", "F = m/a"],
    dogruCevap: 0,
    ipucu: "Bu formül, bir cismin üzerine etki eden kuvvetin, cismin kütlesi ve ivmesi ile nasıl ilişkili olduğunu açıklar."
  },
  {
    soru: "Hangi element en bol bulunan gazdır?",
    cevaplar: ["Karbondioksit", "Oksijen", "Azot", "Helyum"],
    dogruCevap: 3,
    ipucu: "Bu gaz, atmosferin büyük bir kısmını oluşturur ve balonlarda sıkça kullanılır."
  },
  {
    soru: "Bir dik üçgenin hipotenüsü hesaplanırken kullanılan teorem nedir?",
    cevaplar: ["Pizza Teoremi", "Trigonometri Teoremi", "Pisagor Teoremi", "Pitagoras Teoremi"],
    dogruCevap: 2,
    ipucu: "Bu teorem, dik üçgenlerde kenar uzunlukları arasındaki ilişkiyi tanımlar."
  },
  {
    soru: "Fransa Devrimi'nin hangi yılı genellikle başlangıç yılı olarak kabul edilir?",
    cevaplar: ["1790", "1792", "1804", "1789"],
    dogruCevap: 3,
    ipucu: "Bu tarih, Bastille Hapishanesi'nin düşüşünü temsil eder."
  },
  {
    soru: "Dünyanın en büyük çölü hangisidir?",
    cevaplar: ["Sahra Çölü", "Gobi Çölü", "Kalahari Çölü", "Yıldız Çölü"],
    dogruCevap: 0,
    ipucu: "Bu çöl, Afrika'nın kuzeyinde yer alır ve en büyük sıcak çöl olarak bilinir."
  },
  {
    soru: "Hangi programlama dili genellikle web geliştirme için kullanılır?",
    cevaplar: ["Python", "Ruby", "JavaScript", "PHP"],
    dogruCevap: 2,
    ipucu: "Bu dil, tarayıcıda çalışan etkileşimli öğeleri oluşturmak için kullanılır."
  },
  {
    soru: "\"Savaş ve Barış\" adlı romanın yazarı kimdir?",
    cevaplar: ["Vlad", "Anton Çehov", "Leo Tolstoy", "Victor Hugo"],
    dogruCevap: 2,
    ipucu: "Bu roman, Rus edebiyatının önemli eserlerinden biridir."
  },
  {
    soru: "İnsan vücudundaki en büyük organ nedir?",
    cevaplar: ["Kalın Bağırsak", "Karaciğer", "Cilt", "Akciğer"],
    dogruCevap: 2,
    ipucu: "Bu organ, vücudu dış etkenlerden koruyan ve en büyük yüzey alanına sahip olan organdır."
  },
  {
    soru: "Güneş Sistemi'ndeki en büyük gezegen hangisidir?",
    cevaplar: ["Dünya", "Mars", "Jüpiter", "Uranüs"],
    dogruCevap: 2,
    ipucu: "Bu gezegen, devasa boyutlarıyla bilinir ve halkalar içermez."
  },
  {
    soru: " Son Akşam Yemeği,  tablosunun sanatçısı kimdir?",
    cevaplar: ["Messi", "Raphael", "Leonardo da Vinci", "Michelangelo"],
    dogruCevap: 2,
    ipucu: "Bu sanatçı, aynı zamanda \"Mona Lisa\" tablosunun da yaratıcısıdır."
  },
  {
    soru: "Bir ülkenin ekonomik performansını ölçen göstergelerden biri nedir?",
    cevaplar: ["Vergi Oranı", "İşsizlik oranı", "Gayri Safi Yurtiçi Hasıla (GSYİH)", "Enflasyon oranı"],
    dogruCevap: 2,
    ipucu: "Bu gösterge, bir ülkenin toplam ekonomik üretim değerini ölçer."
  },
  {
    soru: "Düşünüyorum, öyleyse varım , sözü kime aittir?",
    cevaplar: ["Ronaldo Luís Nazário de Lima", "Friedrich Nietzsche", "René Descartes", "Immanuel Kant"],
    dogruCevap: 2,
    ipucu: "Bu filozof, varoluşun temelini düşünceye dayandırır."
  },
  {
    soru: "Bir dikdörtgenin alanını hesaplamak için kullanılan formül nedir?",
    cevaplar: ["Uzunluk x Genişlik", "Yükseklik x Genişlik", "Uzunluk x Hacim", "Yükseklik x Uzunluk"],
    dogruCevap: 0,
    ipucu: "Bu formül, dikdörtgenin yüzey alanını hesaplamak için kullanılır."
  },
  {
    soru: "Su molekülü hangi iki elementten oluşur?",
    cevaplar: ["Karbon ve oksijen", "Oksijen ve azot", "Oksijen ve hidrojen", "Azot ve hidrojen"],
    dogruCevap: 2,
    ipucu: "Bu elementler suyun kimyasal bileşenlerini oluşturur."
  },
  {
    soru: "Işık hızının vakumda yaklaşık değeri nedir?",
    cevaplar: ["300,000 km/s", "150,000 km/s", "300,000 km/s", "400,000 km/s"],
    dogruCevap: 2,
    ipucu: "Işık hızının bu değeri, bilimsel hesaplamalarda sıkça kullanılır."
  },
  {
    soru: "Roma İmparatorluğu'nun çöküş yılı nedir?",
    cevaplar: ["476", "533", "476", "410"],
    dogruCevap: 2,
    ipucu: "Bu yıl, Batı Roma İmparatorluğu'nun sonunu işaret eder."
  },
  {
    soru: "Dünyanın en yüksek dağ zirvesi hangisidir?",
    cevaplar: ["Everest Dağı", "Kilimanjaro", "Everest Dağı", "McKinley Dağı"],
    dogruCevap: 2,
    ipucu: "Bu dağ, Himalaya Dağları'nda yer alır ve deniz seviyesinden en yüksek noktadır."
  },
  {
    soru: "Hangi dil genellikle sistem programlaması için kullanılır?",
    cevaplar: ["Python", "JavaScript", "C", "Ruby"],
    dogruCevap: 2,
    ipucu: "Bu dil, düşük seviyeli işlem ve bellek yönetimi için uygundur."
  },
  {
    soru: "\"Madame Bovary\" adlı romanın yazarı kimdir?",
    cevaplar: ["Victor Hugo", "Emile Zola", "Gustave Flaubert", "Marcel Proust"],
    dogruCevap: 2,
    ipucu: "Bu yazar, romanın gerçekçilik akımının öncülerindendir."
  },
  {
    soru: "İnsan vücudunda en fazla bulunan element hangisidir?",
    cevaplar: ["Oksijen", "Karbon", "Hidrojen", "Azot"],
    dogruCevap: 0,
    ipucu: "Bu element, suyun ve dolayısıyla vücudun büyük bir kısmını oluşturur."
  },
  {
    soru: "Güneş'in enerjisinin kaynağı nedir?",
    cevaplar: ["Nükleer füzyon", "Kimyasal yanma", "Nükleer füzyon", "Manyetik enerji"],
    dogruCevap: 2,
    ipucu: "Bu süreç, hidrojen atomlarının birleşerek helyum oluşturmasıyla enerji açığa çıkarır."
  },
  {
    soru: "Albert Einstein'ın ünlü enerji eşdeğerlik formülü nedir?",
    cevaplar: ["E = mc²", "E = mv²", "E = mc²", "E = mc/v"],
    dogruCevap: 2,
    ipucu: "Bu formül, enerji ve kütle arasındaki ilişkiyi ifade eder."
  },
  {
    soru: "Hangi gezegen halkalarıyla ünlüdür?",
    cevaplar: ["Satürn", "Jüpiter", "Uranüs", "Neptün"],
    dogruCevap: 0,
    ipucu: "Bu gezegenin halkaları, güneş sistemimizdeki en belirgin halkalardır."
  },
  {
    soru: "DNA'nın çift sarmal yapısını kim keşfetmiştir?",
    cevaplar: ["Watson ve Crick", "Darwin", "Mendel", "Newton"],
    dogruCevap: 0,
    ipucu: "Bu iki bilim insanı, DNA'nın yapısını 1953 yılında keşfetmiştir."
  },
  {
    soru: "Hangi organ insan vücudunda kanı pompalar?",
    cevaplar: ["Karaciğer", "Beyin", "Kalp", "Akciğer"],
    dogruCevap: 2,
    ipucu: "Bu organ, dolaşım sisteminin merkezi olarak kanı vücuda dağıtır."
  },
  {
    soru: "Dünyanın en derin okyanusu hangisidir?",
    cevaplar: ["Pasifik Okyanusu", "Atlantik Okyanusu", "Hint Okyanusu", "Arktik Okyanusu"],
    dogruCevap: 0,
    ipucu: "Bu okyanus, Mariana Çukuru'na ev sahipliği yapar."
  },
  {
    soru: "Hangi bilim insanı yerçekimi kanunlarını keşfetmiştir?",
    cevaplar: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    dogruCevap: 0,
    ipucu: "Bu bilim insanı, elma düşerken yerçekimi kuvvetini fark etmiştir."
  },
  ];

let currentSoruIndex = 0;
let ipucutut = "";

baslaButonu.addEventListener('click', () => {
    baslangicEkrani.style.display = 'none';
    soruEkrani.style.display = 'block';
    gosterSoru();
});

baslaButonu2.addEventListener('click', () => {
    baslangicEkrani.style.display = 'none';
    soruEkrani.style.display = 'block';
    bilgilendirme.textContent = "";
    ipucu.textContent = "";
    
    gosterSoru();
});

ipucu2.addEventListener('click', () => {
   ipucu.textContent = ipucutut;
});

function gosterSoru() {
    const randomSoru = sorular[Math.floor(Math.random() * sorular.length)];
    soruText.textContent = randomSoru.soru;
    ipucutut = randomSoru.ipucu;
    secenekler.forEach((secenek, index) => {
        secenek.textContent = randomSoru.cevaplar[index];
       
        secenek.addEventListener('click', () => {
            if (index === randomSoru.dogruCevap) {
                secenek.style.backgroundColor = 'green';
                bilgilendirme.textContent = "Doğru cevap!";
                myAudio.volume = 0;
                myAudio2.volume = 1;
                myAudio2.play();
            } else {
                secenek.disabled = true ;
                secenek.style.backgroundColor = 'red';
                bilgilendirme.textContent = "Yanlış cevap. İyi Düşünün...";
                myAudio.volume = 1;
                myAudio2.volume = 0;
                myAudio.play();
            }
            
        });
        secenek.disabled = false;
        secenek.style.backgroundColor = 'white';
    });
    
}