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
const faiz = document.querySelector("#faiz");
// const sliders = document.querySelectorAll(".myinput");
const calckredit = document.querySelector(".calc-kredit");
const calch2 = document.querySelector(".calc-h2");
const calcgelir = document.querySelector(".calc-gelir");
const calcall = document.querySelector(".calc-all");
const firstbtn = document.querySelector("#firstbtn");
const secondbtn = document.querySelector("#secondbtn");
const precent = 10;


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

//progress inputlar
sliders.forEach(slider => {
    const min = parseInt(slider.min);
    const max = parseInt(slider.max);
    const value = parseInt(slider.value);

    slider.style.background = `linear-gradient(to right, #6f0bbb 0%, #6f0bbb ${(value - min) / (max - min) * 100}%, transparent ${(value - min) / (max - min) * 100}%, transparent 100%)`;
    slider.oninput = function() {
        this.style.background = `linear-gradient(to right, #6f0bbb 0%, #6f0bbb ${(this.value - this.min) / (this.max - this.min) * 100}%, transparent ${(this.value - this.min) / (this.max - this.min) * 100}%, transparent 100%)`;
    };
});

//buttonlarin activate-i
function activate() {

    if (flag == false) {
        // calcgelir.style.display = "block";
        // calckredit.style.display = "none";
        // calch2.style.display = "none";
        secondbtn.style.background = "#6f0bbb" 
        secondbtn.style.color = "#fff" 
        firstbtn.style.background = "#EFEFEF" 
        firstbtn.style.color = "#000" 
        flag = true;
    } else {
        // calcgelir.style.display = "none";
        // calckredit.style.display = "flex";
        // calch2.style.display = "block";
        secondbtn.style.background = "#EFEFEF" 
        secondbtn.style.color = "#000" 
        firstbtn.style.background = "#6f0bbb"
        firstbtn.style.color = "#fff" 
        flag = false;
    }
}

//accordionlari acir
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

function calc() {
    pricevalue.innerHTML = price.value;
    ayvalue.innerHTML = ay.value;
    plus()
}
function plus(arg) {
    if (arg == 0){
        price.value = +price.value - 100;
        pricevalue.innerHTML = price.value + ' AZN';
    } else if( arg == 1){
        price.value = +price.value + 100;
        pricevalue.innerHTML = price.value + ' AZN';
    } else if ( arg == 2){
        ay.value = +ay.value - 1;
        ayvalue.innerHTML = il + ay.value + ' ay';
    }else if ( arg == 3){
        ay.value = +ay.value + 1;
        ayvalue.innerHTML = il + ay.value + ' ay';
    }
    let i = +price.value / +ay.value;
    const result = i + ((i * precent) / 100);
    cavab.innerHTML = result.toFixed(0) + ' ₼'
    cavab1.innerHTML = result.toFixed(0) + ' ₼'
}
const select1 = document.querySelector("#sel1");
const sel2 = document.querySelector("#sel2");
const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");

function val() {
    let kod = '';
    if (select1.value == 'EUR') {
        if (sel2.value == 'GBP') {
            kod = (inp1.value * 0.8346).toFixed(2);
        } else if (sel2.value == 'EUR') {
            kod = inp1.value;
        } else {
            kod = (inp1.value * 1.8120).toFixed(2);
        }
    } else if (select1.value == 'AZN') {
        if (sel2.value == 'EUR') {
            kod = (inp1.value * 0.5402).toFixed(2);
        } else if (sel2.value == 'AZN') {
            kod = inp1.value;
        }
    } else if (select1.value == 'GBP') {
        if (sel2.value == 'AZN') {
            kod = (inp1.value * 2.1110).toFixed(2);
        } else if (sel2.value == 'EUR') {
            kod = (inp1.value * 1.1405).toFixed(2);
        } else {
            kod = inp1.value;
        }
    }
    inp2.innerHTML = kod;
    console.log(inp1.value);

}


// const sel1 = document.querySelector("#sel1");
// const sel2 = document.querySelector("#sel2");
// const inp1 = document.querySelector("#inp1");
// const inp2 = document.querySelector("#inp2");

// function valCalc() {
//     let kod = '';
//     if (sel1.value == 'EUR') {
//         if (sel2.value == 'GBP') {
//             kod = (inp1.value * 0.8346).toFixed(2);
//         } else if (sel2.value == 'EUR') {
//             kod = inp1.value;
//         }else{
//             kod  = (inp1.value * 1.8120).toFixed(2);
//         }
//     } 
//     else if (sel1.value == 'AZN') {
//         if (sel2.value == 'EUR') {
//           kod = (inp1.value * 0.5402).toFixed(2);
//         } else if (sel2.value == 'AZN') {
//             kod = inp1.value ;
//         }
//     }
//     else if(sel1.value == 'GBP'){
//         if (sel2.value == 'AZN') {
//             kod = (inp1.value * 2.1110).toFixed(2);
//         }else if(sel2.value == 'EUR'){
//             kod = (inp1.value * 1.1405).toFixed(2);
//         }else{
//             kod = inp1.value ;
//         }
//     }
//     inp2.innerHTML = kod
// }

