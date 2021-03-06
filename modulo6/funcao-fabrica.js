/*
    Função fabrica também conhecida como function factory (UMA FABRICA DE OBJETOS).
*/

function fabricar_curso(n, p) {
    const desconto = 0.90;
    return {
        nome: n,
        preco: (p * desconto).toFixed(2)
    }
}

console.log(fabricar_curso('PHP', 27.99));
console.log(fabricar_curso('REACT', 35.99));

cursos = []

for (let i = 0; i < 5; i++){
    cursos.push(fabricar_curso(`Curso ${i + 1}`, `${19.99 + i * 3}`));
}

console.log(cursos);

//function factory = UMA FUNÇÃO QUE AO SER EXECUTADA DEVOLVE UM OBJETO JS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   /*
    Função fabrica também conhecida como function factory (UMA FABRICA DE OBJETOS).
*/

function fabricar_curso(n, p) {
    const desconto = 0.90;
    return {
        nome: n,
        preco: (p * desconto).toFixed(2)
    }
}

console.log(fabricar_curso('PHP', 27.99));
console.log(fabricar_curso('REACT', 35.99));

cursos = []

for (let i = 0; i < 5; i++){
    cursos.push(fabricar_curso(`Curso ${i + 1}`, `${19.99 + i * 3}`));
}

console.log(cursos);

//function factory = UMA FUNÇÃO QUE AO SER EXECUTADA DEVOLVE UM OBJETO JS