var cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de dados',
    'Programação com Django Framework',
    'Programação em JavaScript'
]

// console.log(cursos);
// console.log(cursos.length);

//definir uma função

function imprimir(curso, indice, array) {
    console.log(indice + ' - ' + curso);
    console.log(array)
}

// cursos.forEach(imprimir);

// Utilização de uma função anonima (Lambda/callback) e template string
//forEach = para cada
cursos.forEach(function (curso, indice) {
    console.log(`${indice} - ${curso}`);
});//Declarando e executando a função dentro do próprio forEach

for (var i = 0; i < cursos.length; i++){
    console.log(i + ' - ' + cursos[i]);
}                                                                                                                                                                                                                                                                                                                                                                         var cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de dados',
    'Programação com Django Framework',
    'Programação em JavaScript'
]

// console.log(cursos);
// console.log(cursos.length);

//definir uma função

function imprimir(curso, indice, array) {
    console.log(indice + ' - ' + curso);
    console.log(array)
}

// cursos.forEach(imprimir);

// Utilização de uma função anonima (Lambda/callback) e template string
//forEach = para cada
cursos.forEach(function (curso, indice) {
    console.log(`${indice} - ${curso}`);
});//Declarando e executando a função dentro do próprio forEach

for (var i = 0; i < cursos.length; i++){
    console.log(i + ' - ' + cursos[i]);
}