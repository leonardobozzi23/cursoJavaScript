const curso = {
    nome: 'Javascript',
    horas: 25,
    preco: 27.99
}

// console.log(curso);
// console.log(typeof (curso));

// console.log(Object.keys(curso));

// console.log(Object.values(curso));

// console.log(Object.entries(curso));

// Object.entries(curso).forEach(par => {
//     console.log(`${par[0]}: ${par[1]}`);
// })

//DESCONTRUINDO
// Object.entries(curso).forEach(([chave, valor]) => {
//     console.log(`${chave}: ${valor}`);
// })

// curso.nome = 'Criar APIs com DJANGO';
// console.log(curso);

//ACRESCENTAR UM ATRIBUTO QUE NAO PODE SER MODIFICADO
// Object.defineProperty(curso, 'publicacao', {
//     enumerable: true,//APARECE NA IMPRESSÃO DO OBJETO, COMO FALSE NÃO APARECE
//     wconst curso = {
    nome: 'Javascript',
    horas: 25,
    preco: 27.99
}

// console.log(curso);
// console.log(typeof (curso));

// console.log(Object.keys(curso));

// console.log(Object.values(curso));

// console.log(Object.entries(curso));

// Object.entries(curso).forEach(par => {
//     console.log(`${par[0]}: ${par[1]}`);
// })

//DESCONTRUINDO
// Object.entries(curso).forEach(([chave, valor]) => {
//     console.log(`${chave}: ${valor}`);
// })

// curso.nome = 'Criar APIs com DJANGO';
// console.log(curso);

//ACRESCENTAR UM ATRIBUTO QUE NAO PODE SER MODIFICADO
// Object.defineProperty(curso, 'publicacao', {
//     enumerable: true,//APARECE NA IMPRESSÃO DO OBJETO, COMO FALSE NÃO APARECE
//     writable: false,//pode ser sobrescrito ou não, FALSE = NÃO, TRUE = SIM
//     value: '07/12/2019'
// });

// console.log(curso)
// console.log(curso.publicacao)


// const outro = {};

// Object.defineProperty(outro, '', {

// })

// Object.freeze(curso);//CONGELAR PARA NÃO SER MODIFICADO

// curso.nome = 'COBOL';
// console.log(curso.nome)

const usuarios = [
    {
        nome: 'Leonardo',
        empresa: 'Welfare'
    },
    {
        nome: 'Caio',
        empresa: 'DOK'
    },
    {
        nome: 'Alex',
        empresa: 'Carmo'
    }
];

// console.log(usuarios);

// console.table(usuarios);

console.table(curso);