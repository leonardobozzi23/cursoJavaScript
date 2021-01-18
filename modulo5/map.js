//Aprendendo a utilizar o MAP //Utilizamos o MAP para aplicar transformações em um Array.

var valores = [2, 4, 6, 8, 10];
console.log(valores);


//O Map mapeia cada indice do array original e repassar um novo valor!
var dobro = valores.map(function (valor) {
    return valor * 2;
});
//O Map gera um novo array de mesmo tamanho do original
// console.log(dobro);

function dobrar(valor) {
    return valor * 2
}

dobro = valores.map(dobrar);
// console.log(dobro);

//ENCADEAR MAPS PARA REALIZAR MULTIP//Aprendendo a utilizar o MAP //Utilizamos o MAP para aplicar transformações em um Array.

var valores = [2, 4, 6, 8, 10];
console.log(valores);


//O Map mapeia cada indice do array original e repassar um novo valor!
var dobro = valores.map(function (valor) {
    return valor * 2;
});
//O Map gera um novo array de mesmo tamanho do original
// console.log(dobro);

function dobrar(valor) {
    return valor * 2
}

dobro = valores.map(dobrar);
// console.log(dobro);

//ENCADEAR MAPS PARA REALIZAR MULTIPLAS TRANSFORMAÇÕES

function soma_4(valor){
    return valor + 4;
}

function dividir_por_5(valor) {
    return valor / 5;
}

var resultado = valores.map(dobrar).map(soma_4).map(dividir_por_5);
console.log(resultado);

/*
Passo 1 -> Dobrar = [ 4, 8, 12, 16, 20];
Passo 2 -> soma_4 = [8, 12, 16, 20, 24];
Passo 3 -> dividir_por_5 = [1.6, 2.4, 3.2, 4, 4.8];
*/

//Diferença de forEach e map -> O MAP GERA UM NOVO ARRAY, O FOREACH NAO!!!!

//forEach é uma estrutura de repetição que itera sobre os elementos do Array original
//O Map gera um novo array para as iterações