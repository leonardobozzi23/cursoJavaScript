/*
    o que são funções: Um elemento da programação que realiza uma AÇÃO
*/
//()<- ARGUMENTOS DE ENTRADA {}<-ESCOPO DA FUNÇÃO {blabla}<-O QUE A FUNÇÃO EXECUTA

function somar(num1, num2) {
    return num1 + num2;
}

//AÇÃO DELA É SOMAR OS DOIS NUMEROS

//podemos usar funções como se fosse qualquer outro tipo de dados

let res = somar(4, 6);
// console.log(res);

// console.log(somar(10, 5));

//Exemplo 1 - Funçoes funcionam como cidadões de primeira classe, podem ser usados como qualquer tipo de dado.

const executar = somar;

// console.log(executar(8, 7));

//Exemplo 2

function subtrair(num1, num2) {
    return num1 - num2;
}

function faz_algo(num1, num2, funcao) {
    return funcao(num1, num2);
}

// console.log(faz_algo(5, 7, somar));//nao estou usando o parenteses pelo fato de nao estar iniciando a função e /*
    o que são funções: Um elemento da programação que realiza uma AÇÃO
*/
//()<- ARGUMENTOS DE ENTRADA {}<-ESCOPO DA FUNÇÃO {blabla}<-O QUE A FUNÇÃO EXECUTA

function somar(num1, num2) {
    return num1 + num2;
}

//AÇÃO DELA É SOMAR OS DOIS NUMEROS

//podemos usar funções como se fosse qualquer outro tipo de dados

let res = somar(4, 6);
// console.log(res);

// console.log(somar(10, 5));

//Exemplo 1 - Funçoes funcionam como cidadões de primeira classe, podem ser usados como qualquer tipo de dado.

const executar = somar;

// console.log(executar(8, 7));

//Exemplo 2

function subtrair(num1, num2) {
    return num1 - num2;
}

function faz_algo(num1, num2, funcao) {
    return funcao(num1, num2);
}

// console.log(faz_algo(5, 7, somar));//nao estou usando o parenteses pelo fato de nao estar iniciando a função e sim passando a function como parametro
// console.log(faz_algo(5, 7, subtrair));

//Exemplo 3
//ELE VAI RETORNAR O PARAMETRO QUE RECEBER NA CONST.
function outra(funcao) {
    return funcao;
}

const ret = outra(subtrair);
// console.log(ret(8, 2));

/*
Cidadãos de primeira classe -> First Class Citizens
Higher-Order Function
*/

function message() {
    // console.log("Salve leo, monstro!");
}

message();//Executando uma função

let reto = message();
// console.log(reto);

let valores = [1, 3.4, true, somar];

for (let i = 0; i < valores.length; i++){
    console.log(typeof (valores[i]));
}