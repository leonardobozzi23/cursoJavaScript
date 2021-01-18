// //USO DO VAR, LET E CONST

// var numero = 42;
// // console.log(numero);

// //A VARIAVEL JA FOI DECLARADA ENTAO PODEMOS REESCREVER ASSIM
// numero = numero + 18;
// // console.log(numero);

// //LET

// let outro_numero = 42;
// // console.log(outro_numero);

// outro_numero = outro_numero + 18;
// // console.log(outro_numero);

// let nome = 'Leonardo';
// // console.log(nome);

// nome = 'Bozzi';
// // console.log(nome);

// //LET é a forma mais moderna, evita erros no programa, mantem um escopo local, enquanto a var mantem um escopo global


// // for (var i = 0; i < 5; i++){
// //     var valor = i * 3;
// //     // console.log(valor);
// // }


// for (let i = 0; i < 5; i++){
//     let valor = i * 3;
//     console.log(valor);
// }

// console.log(valor);//ReferenceError
// //USO DO VAR, LET E CONST

// var numero = 42;
// // console.log(numero);

// //A VARIAVEL JA FOI DECLARADA ENTAO PODEMOS REESCREVER ASSIM
// numero = numero + 18;
// // console.log(numero);

// //LET

// let outro_numero = 42;
// // console.log(outro_numero);

// outro_numero = outro_numero + 18;
// // console.log(outro_numero);

// let nome = 'Leonardo';
// // console.log(nome);

// nome = 'Bozzi';
// // console.log(nome);

// //LET é a forma mais moderna, evita erros no programa, mantem um escopo local, enquanto a var mantem um escopo global


// // for (var i = 0; i < 5; i++){
// //     var valor = i * 3;
// //     // console.log(valor);
// // }


// for (let i = 0; i < 5; i++){
//     let valor = i * 3;
//     console.log(valor);
// }

// console.log(valor);//ReferenceError
// console.log(i);//ReferenceError

// //O ERRO É POR QUE LET DECLARA A VARIAVEL LOCALMENTE, APENAS NO ESCOPO DE USO DELA( {} )!

var numero = 80;
// console.log(numero);

var numero = 32;
// console.log(numero);

//RUIM PARA O PROGRAMA! USE O LET PARA CONSEGUIR MAIS SEGURANÇA, EM CASOS DE PROGRAMAS N REDECLARAMOS A VARIAVEL

//CONST - CONSTANTES

const taxa = 1.44;

// console.log(taxa);

let res = 45 * taxa;
// console.log(res);

// taxa = 5; //ELE NÃO VAI PERMITIR, NÃO SE PODE ALTERAR O VALOR DE UMA CONSTANTE

//VAI SER ALTERADO? LET! NÃO VAI? CONST

//Constante x Mutação
const curso = {nome: 'Programação em JS'};
// console.log(curso.nome);

//Não posso alterar o valor de uma constante

// curso = 43; //ERRO

//podemos realizar mutação em dados contidos na constante

curso.nome = 'Programação em Python';//MUTAÇÃO
// console.log(curso);


/*
DICAS DE COMO DECLARAR VARIAVEIS EM JS

A Variavel poderá ser alterada? Se sim use Let
A variavel será constante? Se sim se const
*/

const valor = 5;

// se for mudar ao decorrer do programa, mude a const

for (let i = 0; i < valor; i++){
    console.log(valor - i);
}