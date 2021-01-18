//array é um container de dados que permite que voce guarde dados dentro.

//o indice sempre começa em 0 e acaba em n-1, sendo n o valor total de dados no array

//array contendo 5 elementos (ou posições) -> n = 5
//[0][1][2][3][4] <- isso são indices! posição do elemento no array

//valores em um array
//[12]['bozzi'][36][true][60]

//DETALHES SOBRE ARRAYS

/*
-possuem tamanho infinito*
-podemos colocar qualquer tipo de dados, mas o recomendado é não misturar!

*cada elemento aloca espaço em memória, entao a limitação vai da maquina
*/

//Forma 1

var alunos = new Array('Leonardo', 'Ricardo', 'Cristina', 'Sofia', 'Maria');
//var alunos = ['Leonardo', 'Ricardo', 'Cristina', 'Sofia', 'Maria'];
// console.log(alunos);

//Forma 2 [recome//array é um container de dados que permite que voce guarde dados dentro.

//o indice sempre começa em 0 e acaba em n-1, sendo n o valor total de dados no array

//array contendo 5 elementos (ou posições) -> n = 5
//[0][1][2][3][4] <- isso são indices! posição do elemento no array

//valores em um array
//[12]['bozzi'][36][true][60]

//DETALHES SOBRE ARRAYS

/*
-possuem tamanho infinito*
-podemos colocar qualquer tipo de dados, mas o recomendado é não misturar!

*cada elemento aloca espaço em memória, entao a limitação vai da maquina
*/

//Forma 1

var alunos = new Array('Leonardo', 'Ricardo', 'Cristina', 'Sofia', 'Maria');
//var alunos = ['Leonardo', 'Ricardo', 'Cristina', 'Sofia', 'Maria'];
// console.log(alunos);

//Forma 2 [recomendada]

var notas = [1, 2, 3, 4, 6, 1];
// console.log(notas);

//Criando um array vazio

var dados = [];
// console.log(dados);

//fazendo acesso ao valor de um indice

// console.log(notas[2]);

//Alterando o valor a partir do indice

notas[2] = 12;
// console.log(notas);

// Atenção ao acessar um valor com um indice que não existe

notas[9] = 10; //Não existe
// console.log(notas);

if(notas[6] == undefined){
    notas[6] = 54;
}

// console.log(notas[6]);//54
// console.log(notas[7]);//undefined
// console.log(notas[8]);//undefined
// console.log(notas[9]);// 10

// console.log(notas[6] == undefined); //false


// Inserindo elementos no final do array


var nomes = ['Paula', 'Maria', 'Julia'];

// console.log(nomes);

nomes.push('Vanessa') //Insere o valor no final do array

// console.log(nomes);

//Tamanho do array
// console.log(nomes.length);

var tam = nomes.length;

// console.log(tam);

//Ordenar os dados de um array

var alunos = ['Vera', 'Lucia', 'Pedro', 'Fernanda', 'Mario', 'Ana', 'Carla'];
// console.log(alunos);

alunos.sort(); //Ordena um array de strings
// console.log(alunos);

var precos = [123.55, 42.27, 546.99, 23.12];
//ordena os dois elementos fazendo o 1º - o 2º e retorna o menor entre eles (FUNÇÃO LAMBDA)
precos.sort(function (a, b) { return a - b });
// console.log(precos);

var idades = [5, 1, 8, 12, 44, 78];
idades.sort(function (a, b) { return a - b });
// console.log(idades);

//deletar dados de um array

delete idades[3];
// console.log(idades)


idades[3] = 12;
// console.log(idades);

// idades.splice(3, 1)//A partir do indice 3 delete 1 elemento
// console.log(idades);

// idades.splice(3, 0, 56, 89) //A partir do indice 3 não delete nenhum numero, mas adicione 56 e 89!
// console.log(idades);

// idades.splice(3,1,23); //A partir do indice 3 deleta 1 e adiciona 23
// console.log(idades);
//idades[3] = 23;

//Iterar em um array

for (var i = 0; i < idades.length; i++){
    // console.log(idades[i]);
}

// idades.pop(); //Removendo elementos da última posição do array
// console.log(idades);

// var ret = idades.pop();
// console.log(ret);
// console.log(idades);

//Removendo o primeiro elemento de um array

// idades.shift();
// console.log(idades);

// var ret = idades.shift();
// console.log(ret);
// console.log(idades);

// Inserindo elementos no inicio de uma array

// idades.unshift(99);
// console.log(idades);

// Retorna um novo array a partir do indice informado

// var novo = idades.slice(3);
// console.log(novo);

// var novo = idades.slice(1, 2); //A partir do indice 1, pegue até o indice 2, sem inclui-lo
// console.log(novo);

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares); //concatena os dois arrays
// console.log(rest);

rest = impares.concat(pares);
// console.log(rest);

//Ordenando
rest.sort(function (a, b) { return a - b });
// console.log(rest);

//MATRIZ 4X4 = 4 LINHAS E 4 COLUNAS

var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

/*
    [ 
        [1,   2,  3,  4], linha 0
        [5,   6,  7,  8], linha 1
        [9,  10, 11, 12], linha 2
        [13, 14, 15, 16]  linha 3
    ]
*/

console.log(tabuleiro[0][0]);// LINHA 0 COLUNA 0 -> 1
console.log(tabuleiro[2][2]); // LINHA 2 COLUNA 2 -> 11