//CLOSURE = O ESCOPO DA FUNÇÃO
// let xuxa = 'global'; //PODE SER ACESSADA GLOBALMENTE NO PROGRAMADA

// function imprimir() {
//     console.log(xuxa);//PODE SER ACESSADA LOCALMENTE NO BLOCO/CONTEXTO
// }

// function outra() {
//     let xuxa = 'local';
//     imprimir();
//     console.log(xuxa); //??
// }
// //variavel local tem precedencia em comparação a variavel global.
// outra();

//NOVO EXEMPLO

let variavel = 'global';

function externa() {
    let variavel = 'local';//esta no msm escopo que a função interna. TEM PRECEDENCIA!
        function interna() {
            return variavel; //local
        }
    return interna;
}

let executa = externa();

console.log(executa());//local

/*
    Estamos estudando closures (que é o contexto léxico de uma função)

    Existe uma linguagem de programação chamada Clojure.
*/                                                                                                                                                                                                                //CLOSURE = O ESCOPO DA FUNÇÃO
// let xuxa = 'global'; //PODE SER ACESSADA GLOBALMENTE NO PROGRAMADA

// function imprimir() {
//     console.log(xuxa);//PODE SER ACESSADA LOCALMENTE NO BLOCO/CONTEXTO
// }

// function outra() {
//     let xuxa = 'local';
//     imprimir();
//     console.log(xuxa); //??
// }
// //variavel local tem precedencia em comparação a variavel global.
// outra();

//NOVO EXEMPLO

let variavel = 'global';

function externa() {
    let variavel = 'local';//esta no msm escopo que a função interna. TEM PRECEDENCIA!
        function interna() {
            return variavel; //local
        }
    return interna;
}

let executa = externa();

console.log(executa());//local

/*
    Estamos estudando closures (que é o contexto léxico de uma função)

    Existe uma linguagem de programação chamada Clojure.
*/