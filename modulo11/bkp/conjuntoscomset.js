/*
    -Conjuntos não aceitam repetição de valores;
    -Conjuntos não são indexados;
*/
//declaração de conjunto
let cursos = new Set();

//adicionando valores ao conjunto

cursos.add('Programação em JS');
cursos.add('Programação com o framework React');

//adicionar valores concatenados

cursos.add('Programação em Python').add('Programação em Ruby').add('Programação em GoLang');

//O add retorna todo o conjunto
cursos.add('Programação em PHP').add('Banco de Dados');

// console.log(cursos);

// acessando o tamanho do conjunto
// console.log(cursos.size);

// console.log(cursos.has('Banco de Dados'));

//Deletar elementos de um conjunto
//o delete retorna true or false
// let ret = cursos.delete('Banco de Dados');

// console.log(ret);

let frutas = ['Manga', 'Uva', 'Jaca', 'Uva'];

let frutas_unicas = new Set(frutas);

console.log(frutas_unicas);
