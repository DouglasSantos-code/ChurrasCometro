// Carne - 250gr por pessoa  + de 6 horas - 400gr
// Frango - 150gr por pessoa + de 6 horas - 300gr
// Linguica - 150gr por pessoa + de 6 horas - 300gr
// Pao de alho - 150gr por pessoa + de 6 horas - 300gr
// Cerveja - 1200 ml por pessoa que bebem + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500m
// criancas valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let inputBebem = document.getElementById("bebem");
let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let bebem = inputBebem.value;

    if ((adultos.length == 0) || (criancas.length == 0) || (duracao.length == 0) || (bebem.length == 0)) {
        alert('[ERRO] Preencha todos os dados.')
    } else {

        let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
        let qdtTotalFrango = frangoPP(duracao) * adultos + (frangoPP(duracao) / 2 * criancas)
        let qdtTotalLinguica = linguicaPP(duracao) * adultos + (linguicaPP(duracao) / 2 * criancas)
        let qdtTotalPaoAlho = paoalhoPP(duracao) * adultos + (paoalhoPP(duracao) / 2 * criancas)
        let qdtTotalCerveja = cervejaPP(duracao) * bebem;
        let qdtTotalBebidas = bebidasPP(duracao) * (adultos - bebem) + (bebidasPP(duracao) / 2 * criancas);

        resultado.innerHTML = `<h3 class="result-info">Você vai precisar de:</h3>`
        resultado.innerHTML += `<div class="result-block"><img src="./images/carne.png"/><p>${qdtTotalCarne / 1000} Kg de Carne</p>
                                </div>`
        resultado.innerHTML += `<div class="result-block"><img src="./images/frango.png"/><p>${qdtTotalFrango / 1000} Kg de Frango</p>
                                </div>`
        resultado.innerHTML += `<div class="result-block"><img src="./images/linguica.png"/><p>${qdtTotalLinguica / 1000} Kg de Linguica</p>
                                </div>`
        resultado.innerHTML += `<div class="result-block"><img src="./images/pao.png"/><p>${qdtTotalPaoAlho / 1000} Kg de Pao de Alho</p>
                                </div>`
        resultado.innerHTML += `<div class="result-block"><img src="./images/cerveja.png"/><p>${Math.ceil(qdtTotalCerveja / 215)} Latas de    Cerveja</p>
                                </div>`
        resultado.innerHTML += `<div class="result-block"><img src="./images/refrigerante.png"/><p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de Bebidas 2L</p>
                                </div>`

    }
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 400;
    } else {
        return 250;
    }
}

function frangoPP(duracao) {
    if (duracao >= 6) {
        return 300;
    } else {
        return 150;
    }
}

function linguicaPP(duracao) {
    if (duracao >= 6) {
        return 300;
    } else {
        return 150;
    }
}

function paoalhoPP(duracao) {
    if (duracao >= 6) {
        return 300;
    } else {
        return 150;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2300;
    } else {
        return 1500;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}




