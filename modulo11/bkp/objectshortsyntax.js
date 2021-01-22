const nome = 'Programação em Javascript';
const preco = 'R$: 27,99';
const horas = 25;

// const curso = {
//     nome: nome,
//     preco: preco,
//     instrutor: 'Leozao',
//     carga_horaria: horas,
// };


//Caso o seu atributo tenha o mesmo nome que o da variavel, passa-se assim

const curso = {
    nome,
    preco,
    instrutor: 'Leozao',
    carga_horaria: horas,
}

console.log(curso);