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
function vasarol(zoldseg) {

}


// 4. feladat
function torolEsemeny() {

}