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
        main.style.display = "none";
        footer.style.display = "none";
        fax.style.display = "block";
        bars.style.display = "none";
        flag = true;
    } else {
        hiddenbars.style.display = "none";
        fax.style.display = "none";
        bars.style.display = "block";
        main.style.display = "block";
        footer.style.display = "block";
        flag = false;
    }
}

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

let faiz0 = 11
function calc() {
    pricevalue.innerHTML = price.value;
    faiz0 = (ay.value == 13) ? faiz0 + 2 :
            (ay.value == 24) ? 14 :
            (ay.value == 36) ? 15 :
            (ay.value == 48) ? 16 :
            (ay.value < 13) ? 11 :
            faiz0;

    faiz1.innerHTML = faiz0 + '%';
    let i = +price.value / +ay.value;
    const result = i + ((i * percent) / 100);

    ayvalue.innerHTML = ay.value + ' ay';
    pricevalue.innerHTML = price.value + ' AZN';
    cavab1.innerHTML = result.toFixed(0) + ' ₼';
    plus(arg);
}

function plus(arg) {
    price.value = (arg === 0) ? +price.value - 100 :
                (arg === 1) ? +price.value + 100 :
                price.value;
    pricevalue.innerHTML = price.value + ' AZN';

    ay.value = (arg === 2) ? +ay.value - 1 :
                (arg === 3) ? +ay.value + 1 :
                ay.value;
    ayvalue.innerHTML = ay.value + ' ay';

    faiz0 = (ay.value == 13) ? faiz0 + 2 :
            (ay.value == 24) ? 14 :
            (ay.value == 36) ? 15 :
            (ay.value == 48) ? 16 :
            (ay.value < 13) ? 11 :
            faiz0;
    faiz.innerHTML = faiz0 + '%';

    let i = +price.value / +ay.value;
    const result = i + ((i * percent) / 100);
    cavab.innerHTML = result.toFixed(0) + ' ₼';
}

// emanet uzre geliri hesablayan
const slcval = document.querySelector("#slcval");
const slcmuddet = document.querySelector("#slcmuddet");
const slcode = document.querySelector("#slcode");
const slcinp = document.querySelector("#slcinp");
const ayliq = document.querySelector("#ayliq");
const faizlik = document.querySelector("#faizlik");

function ayliqHesabla() {
    let faiz = 0;
    let ay = '';
    let valyutaName = 'AZN';
    valyutaName = (slcval.value == 'AZN') ? ' AZN' : ' USD';

    faiz = (slcval.value == 'AZN') ?
        (slcmuddet.value == '12' && slcode.value == 0) ? 5.5 :
        (slcmuddet.value == '12' && slcode.value == 1) ? 5 :
        (slcmuddet.value == '24' && slcode.value == 0) ? 6.5 :
        (slcmuddet.value == '24' && slcode.value == 1) ? 6 :
        (slcmuddet.value == '36' && slcode.value == 0) ? 9 :
        (slcmuddet.value == '36' && slcode.value == 1) ? 8 :
        faiz :
        (slcmuddet.value == '12' && slcode.value == 0) ? 0.1 :
        faiz;

    ay = (+slcinp.value * faiz) / 1000;
    faizlik.innerHTML = faiz + '%' + '-';
    ayliq.innerHTML = ay + valyutaName;
}


// valyuta kalkulyatoru
const select1 = document.querySelector("#select1");
const sel2 = document.querySelector("#sel2");
const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");

function val() {
    let kod = ''
    kod = (select1.value == 'EUR') ?
        (sel2.value == 'GBP') ? (inp1.value * 0.8346).toFixed(2) :
        (sel2.value == 'EUR') ? inp1.value :
        (inp1.value * 1.8120).toFixed(2) :
        (select1.value == 'AZN') ?
        (sel2.value == 'EUR') ? (inp1.value * 0.5402).toFixed(2) :
        (sel2.value == 'AZN') ? inp1.value :
        kod :
        (select1.value == 'GBP') ?
        (sel2.value == 'AZN') ? (inp1.value * 2.1110).toFixed(2) :
        (sel2.value == 'EUR') ? (inp1.value * 1.1405).toFixed(2) :
        inp1.value :
        kod;
    inp2.innerHTML = kod;
}
