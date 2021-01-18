//PARAMETROS DE ENTRADA E RETORNO

function calcular_idade(ano_nascimento) {
    const data = new Date();

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_idade_2(ano_nascimento) {
    const data = new Date();
    const idade = data.getUTCFullYear() - ano_nascimento
    console.log(idade);
}
// let d = new Date();
// console.log(d.getFullYear());

let ret = calcular_idade(1999);
// console.log(ret);

// calcular_idade_2(1998);

const data = new Date();

console.log('data completa: ' + data);

console.log('ano: ' + data.getFullYear());
console.log('mês: ' + data.getMonth()); // 0 para janeiro, 1 para fevereiro e assim vai...
//fique esperto

function//PARAMETROS DE ENTRADA E RETORNO

function calcular_idade(ano_nascimento) {
    const data = new Date();

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_idade_2(ano_nascimento) {
    const data = new Date();
    const idade = data.getUTCFullYear() - ano_nascimento
    console.log(idade);
}
// let d = new Date();
// console.log(d.getFullYear());

let ret = calcular_idade(1999);
// console.log(ret);

// calcular_idade_2(1998);

const data = new Date();

console.log('data completa: ' + data);

console.log('ano: ' + data.getFullYear());
console.log('mês: ' + data.getMonth()); // 0 para janeiro, 1 para fevereiro e assim vai...
//fique esperto

function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(4, 6));//10
console.log(somar(4));//NaN
console.log(somar(4, 6, 8));//10
console.log(somar(4, 6, 8, 3, 2, 1, 19));//10



