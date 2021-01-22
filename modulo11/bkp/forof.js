/* Facilita o trabalho com coleções */

// let nome = 'Geek University';
// 
// for(let letra of nome){
    // console.log(letra);
// }

// let numeros = [1,2,3,4,5];

// for(numero of numeros){
//     console.log(numero * 2);
// }

// for( let indice in numeros){
//     console.log(`Indice: ${indice}, valor: ${numeros[indice]}`);
// }

let cursos = new Map([
    [1, 'JS'],
    [2, 'Php'],
    [3, 'sql'],
    [4, 'Python'],
    [5, 'Go'],
    [6, 'Ruby']
]);

// for(let curso of cursos){
//     console.log(`${curso[0]} - ${curso[1]}`);
// }

//Chave/Valor
for(let curso of cursos){
    console.log(curso);
}


//Somente a chave

// for(let chave of cursos.keys()){
//     console.log(chave);
// }

//Somente o valor

for(let valor of cursos.values()){
    console.log(valor)
}

//chave e valor

// for(let [chave, valor] of cursos.entries()){
    // console.log(`${chave} - ${valor}`)
// }

let conjunto = new Set([1, 2, 3, 4, 5, 6]);

for(numero of conjunto){
    console.log(numero);
}