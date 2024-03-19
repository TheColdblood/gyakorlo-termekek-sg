import { GYUMOLCSOK } from "./adatok.js";

const vasarolt = [];


// 1. feladat
function letrehozTablazat(lista) {
    let txt = "<table>"
    for (let index = 0; index < lista.length; index++) {
        txt += `
        
            <tr>
                <td>${lista[index].nev}</td>
                <td>${lista[index].tomeg}</td>
                <td>${lista[index].ar}</td>
            </tr>
        `
    }
    txt += "</table>"
    return txt
}

const tablaELEM = document.getElementById("feladat_1");
tablaELEM.innerHTML = letrehozTablazat(GYUMOLCSOK);


// 2. feladat
function osszesit(lista) {
    let sum = 0;
    for (let index = 0; index < lista.length; index++) {
        sum += lista[index].tomeg;
    }
    return sum;
}

const osszSulyELEM = document.getElementById("feladat_2");
osszSulyELEM.innerHTML = `<p>A gyümölcsök súlya összesen: ${osszesit(GYUMOLCSOK)} g</p>`;


// 3. feladat
/* <!-- 3. feladat  -->
    <!-- Ha a feladat_1-ben lévő táblázat egyik elemére kattintunk -->
    <!-- Az aktuális elem neve jelenjen meg a  feladat_3 elemben -->

    <!-- Egy elemet csak egyszer tudjunk beletenni a megvásárolt listába -->
    <!-- A megvásárolt termékeket a vasarolt []-ben tárold el és ez alapján jelenítsd meg az elemek nevét -->
    <!-- Valamint a torles elemre helyezzük rá a hide osztályt --> */
function vasarol(zoldseg) {
    
}

const vasarolELEM = document.querySelectorAll("feladat_1 .td")
vasarolELEM.addEventListener("click", vasarol)

const vasaroltELEM = document.getElementById("feladat_3");
vasaroltELEM.innerHTML = `<p></p>`

// 4. feladat
function torolEsemeny() {

}