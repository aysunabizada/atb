const bars = document.querySelector(".bars");
const fax = document.querySelector(".fax");
const hiddenbars = document.querySelector(".hiddenbars");
const price = document.querySelector("#price");
const pricevalue = document.querySelector("#pricevalue");
const ay = document.querySelector("#ay");
const ayvalue = document.querySelector("#ayvalue");
const cavab = document.querySelector("#cavab");
const faiz = document.querySelector("#faiz");
const sliders = document.querySelectorAll(".myinput");
const precent = 10;

const calckredit = document.querySelector(".calc-kredit");
const calch2 = document.querySelector(".calc-h2");
const calcgelir = document.querySelector(".calc-gelir");
const calcall = document.querySelector(".calc-all");
const firstbtn = document.querySelector("#firstbtn");
const secondbtn = document.querySelector("#secondbtn");


let flag = false;
// burger menyunu acir
function OpenBars() {
    if (flag == false) {
        hiddenbars.style.display = "block";
        fax.style.display = "block";
        bars.style.display = "none";
        flag = true;

    } else {
        hiddenbars.style.display = "none";
        fax.style.display = "none";
        bars.style.display = "block";
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
        calcgelir.style.display = "block";
        calckredit.style.display = "none";
        calch2.style.display = "none";
        secondbtn.style.background = "#6f0bbb" 
        secondbtn.style.color = "#fff" 
        firstbtn.style.background = "#EFEFEF" 
        firstbtn.style.color = "#000" 
        flag = true;
    } else {
        calcgelir.style.display = "none";
        calckredit.style.display = "flex";
        calch2.style.display = "block";
        secondbtn.style.background = "#EFEFEF" 
        secondbtn.style.color = "#000" 
        firstbtn.style.background = "#6f0bbb"
        firstbtn.style.color = "#fff" 
        flag = false;
    }
}
function deactivate() {
    if (flag == false) {
        calcgelir.style.display = "block";
        calckredit.style.display = "none";
        calch2.style.display = "none";
        secondbtn.style.background = "#6f0bbb" 
        secondbtn.style.color = "#fff" 
        firstbtn.style.background = "#EFEFEF" 
        firstbtn.style.color = "#000" 
        flag = true;
    } else {
        calcgelir.style.display = "none";
        calckredit.style.display = "flex";
        calch2.style.display = "block";
        secondbtn.style.background = "#EFEFEF" 
        secondbtn.style.color = "#000" 
        firstbtn.style.background = "#6f0bbb"
        firstbtn.style.color = "#fff" 
        flag = false;
    }
}

//faiz kalkulyator
function calc() {
    pricevalue.innerHTML = price.value + ' AZN'
    ayvalue.innerHTML = ay.value +' ay'
    heysafla()
}

function heysafla() {
    let i = price.value / ay.value
    const resul = i + ((i * precent) / 100)
    cavab.innerHTML = resul.toFixed(0) + '₼'
}
calc();

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

