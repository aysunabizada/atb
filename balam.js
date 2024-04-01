const bars = document.querySelector(".bars");
const fax = document.querySelector(".fax");
const hiddenbars = document.querySelector(".hiddenbars");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const price = document.querySelector("#price");
const pricevalue = document.querySelector("#pricevalue");
const ay = document.querySelector("#ay");
const ayvalue = document.querySelector("#ayvalue");
const cavab = document.querySelector(".cavab");
const cavab1 = document.querySelector(".cavab1");
const faiz = document.querySelector("#faiz-mobile");
const faiz1 = document.querySelector("#faiz-desktop");
// const sliders = document.querySelectorAll(".myinput");
const calckredit = document.querySelector(".calc-kredit");
const calch2 = document.querySelector(".calc-h2");
const calcgelir = document.querySelector(".calc-gelir");
const calcall = document.querySelector(".calc-all");
const firstbtn = document.querySelector("#firstbtn");
const secondbtn = document.querySelector("#secondbtn");
const percent = 10;

let flag = false;
// burger menyunu acir
function OpenBars() {
    if (flag == false) {
        hiddenbars.style.display = "block";
        // hiddenbars.style.transform = "translateX(0)";
        main.style.display = "none";
        footer.style.display = "none";
        fax.style.display = "block";
        bars.style.display = "none";
        flag = true;
    } else {
        hiddenbars.style.display = "none";
        // hiddenbars.style.transform = "translateX(-100%)";
        fax.style.display = "none";
        bars.style.display = "block";
        main.style.display = "block";
        footer.style.display = "block";
        flag = false;
    }
}

//progress inputlar
// sliders.forEach(slider => {
//     const min = parseInt(slider.min);
//     const max = parseInt(slider.max);
//     const value = parseInt(slider.value);

//     slider.style.background = `linear-gradient(to right, #6f0bbb 0%, #6f0bbb ${(value - min) / (max - min) * 100}%, transparent ${(value - min) / (max - min) * 100}%, transparent 100%)`;
//     slider.oninput = function() {
//         this.style.background = `linear-gradient(to right, #6f0bbb 0%, #6f0bbb ${(this.value - this.min) / (this.max - this.min) * 100}%, transparent ${(this.value - this.min) / (this.max - this.min) * 100}%, transparent 100%)`;
//     };
// });
// ay.style.background = `linear-gradient(to right, #6f0bbb 0%, #6f0bbb ${(ay.value - ay.min) / (ay.max - ay.min) * 100}%, transparent ${(ay.value - ay.min) / (ay.max - ay.min) * 100}%, transparent 100%)`;
// ay.oninput = function() {
//     this.style.background = `linear-gradient(to right, #6f0bbb 0%, #6f0bbb ${(this.value - this.min) / (this.max - this.min) * 100}%, transparent ${(this.value - this.min) / (this.max - this.min) * 100}%, transparent 100%)`;
// };
// price.style.background = `linear-gradient(to right, #6f0bbb 0%, #6f0bbb ${(price.value - price.min) / (price.max - price.min) * 100}%, transparent ${(price.value - price.min) / (price.max - price.min) * 100}%, transparent 100%)`;
// price.oninput = function() {
//     this.style.background = `linear-gradient(to right, #6f0bbb 0%, #6f0bbb ${(this.value - this.min) / (this.max - this.min) * 100}%, transparent ${(this.value - this.min) / (this.max - this.min) * 100}%, transparent 100%)`;
// };



// buttonlarin activate-i
function activate() {
    if (flag == false){
        calcgelir.style.display = "block";
        calckredit.style.display = "none";
        calch2.style.display = "none";
        secondbtn.style.background = "#6f0bbb" 
        secondbtn.style.color = "#fff" 
        firstbtn.style.background = "#EFEFEF" 
        firstbtn.style.color = "#000" 
        flag = true;
    } else{
        calcgelir.style.display = "none";
        calckredit.style.display = "flex";
        calch2.style.display = "block";
        secondbtn.style.background = "#EFEFEF" 
        secondbtn.style.color = "#000" 
        firstbtn.style.background = "#6f0bbb"
        firstbtn.style.color = "#fff" 
        flag =  false;
    }
}

// function activate(arg) {
//     if (arg == 1){
//         secondbtn.style.background = "#EFEFEF";
//         secondbtn.style.color = "#000";
//         calch2.style.display = "block";
//         firstbtn.style.background = "#6f0bbb";
//         firstbtn.style.color = "#fff";
//         calckredit.innerHTML = `
//                         <div class="calculator">
//                             <div class="calc-mebleg">
//                                 <button id="minus" onclick="plus(0)">-</button>
//                                 <div class="cm-text">
//                                     <p>hansı məbləğ arzunu reallaşdırar?</p>
//                                     <span id="pricevalue">5000 AZN</span>
//                                 </div>
//                                 <button id="plus" onclick="plus(1)">+</button> 
//                                 <input class="myinput" type="range" min="300" max="40000" value="5000" oninput="calc()" id="price">
//                             </div>
//                             <div class="cm-number">
//                                 <p>300</p>
//                                 <p>40 000</p>
//                             </div> <br>
//                             <div class="calc-mebleg">
//                                 <button id="minus" onclick="plus(2)">-</button>
//                                 <div class="cm-text">
//                                     <p>müddəti seçin</p>
//                                     <span id="ayvalue">12 ay</span>
//                                 </div>
//                                 <button id="plus" onclick="plus(3)">+</button> 
//                                 <input class="myinput" type="range" min="3" max="48" value="12" oninput="calc()" id="ay">
//                             </div>
//                             <div class="cm-number">
//                                 <p>3 ay</p>
//                                 <p>48 ay</p>
//                             </div> <br>
//                             <div class="sifaris">
//                                 <button> </button>
//                                 <p>"sifariş" düyməsini basaraq <a href="">müraciət qaydaları</a> ilə razılaşmış olursunuz</p>
//                             </div>
//                         </div>
//                         <div class="bizimteklif-mobil">
//                             <div class="bt-center">
//                                 <div class="div">
//                                     <span>faiz dərəcəsi</span>
//                                     <h2 id="faiz" class="txtpurple">11%</h2>
//                                 </div> <hr>
//                                 <div class="div">
//                                     <span>aylıq ödəniş</span>
//                                     <h2 class="cavab txtpurple">442 ₼</h2>
//                                 </div> <hr>
//                             </div>
//                             <div class="btn-sifaris  bgpurple btns2">sifariş</div>
//                         </div>
//                         <div class="bizimteklif">
//                             <h2>bizim <br>təklif</h2>
//                             <div class="bt-center">
//                                 <div class="div">
//                                     <span>faiz dərəcəsi</span>
//                                     <h2 id="faiz">11%</h2>
//                                 </div>
//                                 <div class="div2">
//                                     <span>aylıq ödəniş</span>
//                                     <h2 class="cavab1">442 ₼</h2>
//                                 </div>
//                             </div>
//                             <div class="btn-sifaris bgpurple btns2">sifariş</div>
//                         </div>`
//     } else if ( arg ==  2){
//         const salam = document.querySelector("#salam")
//         console.log('mimiiiii');
        // secondbtn.style.background = "#6f0bbb";
        // calch2.style.display = "none";
        // secondbtn.style.color = "#fff" ;
        // firstbtn.style.background = "#EFEFEF"; 
        // firstbtn.style.color = "#000" ;
//         calckredit.innerHTML = ' '
//         salam.innerHTML = `
//                     <h2 class="p50">əmanət üzrə gəliri hesablayın</h2>
//                     <div class="table flex-column">
//                         <div class="flex-row">
//                             <div class="select-part1">
//                                 <select id="slcval">
//                                     <option value="">valyuta</option>
//                                     <option value="">AZN</option>
//                                     <option value="">USD</option>
//                                 </select>
//                                 <select id="slcmuddet">
//                                     <option value="">müddət</option>
//                                     <option value="">12</option>
//                                     <option value="">24</option>
//                                     <option value="">36</option>
//                                 </select>
//                             </div> <br>
//                             <div class="select-part1">
//                                 <select id="slcode">
//                                     <option value="">faizlərin ödənilməsi</option>
//                                     <option value="">müddətin sonunda</option>
//                                     <option value="">aylıq ödəniş</option>
//                                 </select>
//                                 <input type="text" placeholder="məbləğ (min. 1000 AZN/USD)*" id="slcinput">
//                             </div>
//                             <div class="deposit txtpurple borpurp">
//                                 <p>faizlər - aylıq</p>
//                                 <span id="">0%</span> <span>0 AZN</span>
//                             </div>
//                         </div>
//                         <button class="sifaris-et bgpurple">sifariş et</button>
//                     </div>`
//     }
// }

// activate(1);

//accordionlar
var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }

// nagd krediti hesablayan
let faiz0 = 11; 
function calc() {
    pricevalue.innerHTML = price.value;
    // ayvalue.innerHTML = ay.value;
    

    if (ay.value == 13) faiz0 += 2
    else if (ay.value == 24) faiz0 =  14;
    else if (ay.value == 36) faiz0= 15;
    else if (ay.value == 48) faiz0 = 16;
    else if (ay.value < 13) faiz0 = 11;
    faiz1.innerHTML = faiz0 + '%';
    let i = +price.value / +ay.value;
    const result = i + ((i * percent) / 100);

    ayvalue.innerHTML = ay.value + ' ay';
    pricevalue.innerHTML = price.value + ' AZN';
    cavab1.innerHTML = result.toFixed(0) + ' ₼'
    plus(arg)
}

function plus(arg) {
    // let faiz0 = 11; 
    if (arg == 0){
        price.value = +price.value - 100;
        pricevalue.innerHTML = price.value + ' AZN';
    } else if( arg == 1){
        price.value = +price.value + 100;
        pricevalue.innerHTML = price.value + ' AZN';
    } else if ( arg == 2){
        ay.value = +ay.value - 1;
        ayvalue.innerHTML = ay.value + ' ay';
    }else if ( arg == 3){
        ay.value = +ay.value + 1;
        ayvalue.innerHTML = ay.value + ' ay';
    }

    if (ay.value == 13) faiz0 += 2
    else if (ay.value == 24) faiz0 =  14;
    else if (ay.value == 36) faiz0= 15;
    else if (ay.value == 48) faiz0 = 16;
    else if (ay.value < 13) faiz0 = 11;
    faiz.innerHTML = faiz0 + '%';

    let i = +price.value / +ay.value;
    const result = i + ((i * percent) / 100);
    cavab.innerHTML = result.toFixed(0) + ' ₼'
}

// emanet uzre geliri hesablayan
const slcval = document.querySelector("#slcval");
const slcmuddet = document.querySelector("#slcmuddet");
const slcode = document.querySelector("#slcode");
const slcinp = document.querySelector("#slcinp");
const ayliq = document.querySelector("#ayliq");
const faizlik = document.querySelector("#faizlik");

function ayliqHesabla(){
    let faiz = 0;
    let ay = '';
    let valyutaName = 'AZN';
    if (slcval.value == 'AZN') {
        valyutaName = ' AZN'
        if (slcmuddet.value == '12' && slcode.value == 0) faiz = 5.5
        else if (slcmuddet.value == '12' && slcode.value == 1) faiz = 5
        else if (slcmuddet.value == '24' && slcode.value == 0) faiz = 6.5
        else if (slcmuddet.value == '24' && slcode.value == 1) faiz = 6 
        else if (slcmuddet.value == '36' && slcode.value == 0) faiz = 9 
        else if (slcmuddet.value == '36' && slcode.value == 1) faiz = 8 
        ay = +slcinp.value * faiz 
    } 
    else if (slcval.value == 'USD') {
        valyutaName = ' USD'
        if (slcmuddet.value == '12' && slcode.value == 0) faiz = 0.1
        ay = +slcinp.value * faiz
    } 
    faizlik.innerHTML = faiz + '%' + '-';
    ayliq.innerHTML = ay + valyutaName
}


// valyuta kalkulyatoru
const select1 = document.querySelector("#select1");
const sel2 = document.querySelector("#sel2");
const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");

function val() {
    let kod = '';
    if (select1.value == 'EUR') {
        if (sel2.value == 'GBP') kod = (inp1.value * 0.8346).toFixed(2);
        else if (sel2.value == 'EUR') kod = inp1.value;
        else kod = (inp1.value * 1.8120).toFixed(2);
    } 
    else if (select1.value == 'AZN') {
        if (sel2.value == 'EUR') kod = (inp1.value * 0.5402).toFixed(2);
        else if (sel2.value == 'AZN') kod = inp1.value;
    } 
    else if (select1.value == 'GBP') {
        if (sel2.value == 'AZN') kod = (inp1.value * 2.1110).toFixed(2);
        else if (sel2.value == 'EUR') kod = (inp1.value * 1.1405).toFixed(2);
        else kod = inp1.value;
    }
    inp2.innerHTML = kod;
}