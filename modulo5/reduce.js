/*
    É UMA ESTRUTURA DE REPETIÇÃO UTILIZADA EM CONJUNTO COM MAP OU FILTER
*/

var precos = [4.66,3.78,9.78, 1.34, 5.32]
console.log(precos);
var soma = 0;

for (var i = 0; i < precos.length; i++){
    soma = soma + precos[i];
}

// console.log(soma);
var soma = 0;

precos.forEach(function(valor){
     soma += valor; //soma + soma = valor
})

// console.log(soma);

//REDUCE

function somar(anterior, atual) {
    return anterior + atual;
}

var ret = precos.reduce(somar);
// console.log(ret);

/*
 COMO FUNCIONA O REDUCE
[4.66,3.78,9.78, 1.34, 5.32]

PRIMEIRA EXECUÇÃO:
    -Pega os dois primeiros valores [indice 0 e indice 1], soma e retorna este valor;
NAS DEMAIS EXECUÇÕES:
    -Pega o retorno da execução anterior e calcula com o proximo valor (indice 2...);

    1 -> 4.66 + 3.78 = 8.44
    2 -> 8.44 + 9.78 = 18.22
    3 -> 18.22 + 1.34 = 19.56
    4 -> 19.56 + 5.32 = 24.88

*/

//MAP/REDUCE

function adicionar_taxa(valor) {
    return valor + 5;
}

var ret = precos.map(adicionar_taxa).reduce(somar);
// console.log(ret);

// Exemplo filter/map//*
    É UMA ESTRUTURA DE REPETIÇÃO UTILIZADA EM CONJUNTO COM MAP OU FILTER
*/

var precos = [4.66,3.78,9.78, 1.34, 5.32]
console.log(precos);
var soma = 0;

for (var i = 0; i < precos.length; i++){
    soma = soma + precos[i];
}

// console.log(soma);
var soma = 0;

precos.forEach(function(valor){
     soma += valor; //soma + soma = valor
})

// console.log(soma);

//REDUCE

function somar(anterior, atual) {
    return anterior + atual;
}

var ret = precos.reduce(somar);
// console.log(ret);

/*
 COMO FUNCIONA O REDUCE
[4.66,3.78,9.78, 1.34, 5.32]

PRIMEIRA EXECUÇÃO:
    -Pega os dois primeiros valores [indice 0 e indice 1], soma e retorna este valor;
NAS DEMAIS EXECUÇÕES:
    -Pega o retorno da execução anterior e calcula com o proximo valor (indice 2...);

    1 -> 4.66 + 3.78 = 8.44
    2 -> 8.44 + 9.78 = 18.22
    3 -> 18.22 + 1.34 = 19.56
    4 -> 19.56 + 5.32 = 24.88

*/

//MAP/REDUCE

function adicionar_taxa(valor) {
    return valor + 5;
}

var ret = precos.map(adicionar_taxa).reduce(somar);
// console.log(ret);

// Exemplo filter/map/reduce

function preco_maior_que_4(valor) {
    return valor > 4;
}

ret = precos.filter(preco_maior_que_4).map(adicionar_taxa).reduce(somar);

console.log(ret);