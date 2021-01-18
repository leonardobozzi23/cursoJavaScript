const cursos = ['Programação', 'JS', 'Python', 'PHP', 'CSS', 'HTML', 'MySQL']

function apresentar(curso, indice) {
    // console.log(`${indice + 1} - ${curso}`);
}

// cursos.forEach(apresentar);//AQUI TA OCORRENDO O CALLBACK

// cursos.forEach(function(curso, indice){
//     console.log(`${indice + 1} - ${curso}`);
// })

// cursos.forEach((curso, indice) => {
//     console.log(`${indice + 1} - ${curso}`);
// })

//SEMPRE QUE OCORRE UM EVENTO NA QUAL UMA FUNÇÃO É EXECUTADA, ESTA OCORRENDO UM CALLBACK
//CALLBACK É PASSAR A FUNÇÃO COMO PARAMETRO ONDE OUTRA FUNÇÃO QUE USARA ELA COMO EVENTO

const precos = [23.55, 78.23, 899.43, 12.89, 5.23, 67.45];

let menores = [];

// for (let p in precos) {
//     if(precos[p] < 50){
//         menores.push(precos[p]);
//     }const cursos = ['Programação', 'JS', 'Python', 'PHP', 'CSS', 'HTML', 'MySQL']

function apresentar(curso, indice) {
    // console.log(`${indice + 1} - ${curso}`);
}

// cursos.forEach(apresentar);//AQUI TA OCORRENDO O CALLBACK

// cursos.forEach(function(curso, indice){
//     console.log(`${indice + 1} - ${curso}`);
// })

// cursos.forEach((curso, indice) => {
//     console.log(`${indice + 1} - ${curso}`);
// })

//SEMPRE QUE OCORRE UM EVENTO NA QUAL UMA FUNÇÃO É EXECUTADA, ESTA OCORRENDO UM CALLBACK
//CALLBACK É PASSAR A FUNÇÃO COMO PARAMETRO ONDE OUTRA FUNÇÃO QUE USARA ELA COMO EVENTO

const precos = [23.55, 78.23, 899.43, 12.89, 5.23, 67.45];

let menores = [];

// for (let p in precos) {
//     if(precos[p] < 50){
//         menores.push(precos[p]);
//     }
// }

// for (let i = 0; i < precos.length; i++) {
//     if (precos[i] < 50) {
//         menores.push(precos[i]);
//     }
// }

// console.log(menores);

//FORMA 1

// menores = precos.filter((preco) => { return preco < 50 });

// console.log(menores);


