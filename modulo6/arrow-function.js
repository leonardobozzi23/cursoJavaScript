//FORMA 1

function somar1(num1, num2) {
    return num1 + num2;
}

console.log(somar1(4, 6));

//FORMA 2

let somar2 = function (num1, num2) { return num1 + num2 };
console.log(somar2(4, 6));

//FORMA 3

let somar3 = somar1; //IGUAL A FORMA 2

console.log(somar3(4, 6));

//ARROW FUNCTION 

const somar4 = (num1, num2) => {
    return num1 + num2
};

console.log(somar4(4, 6));


/*
ATENÇÃO

caso a sua função tenha apenas um parametro de entrada e executa apenas em uma linha, voce pode simplificar 
ainda mais usando arrow function
*/

//O RETORNO É FEITO AUTOMATICO
const dobrar = valor => valor * 2;

console.log(dobrar(5));

function mensagem1() {
    console.log('leonardo bozzi');
}
mensagem1()

const msg = () => console.log('leonardo bozzi');

msg();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                //FORMA 1

function somar1(num1, num2) {
    return num1 + num2;
}

console.log(somar1(4, 6));

//FORMA 2

let somar2 = function (num1, num2) { return num1 + num2 };
console.log(somar2(4, 6));

//FORMA 3

let somar3 = somar1; //IGUAL A FORMA 2

console.log(somar3(4, 6));

//ARROW FUNCTION 

const somar4 = (num1, num2) => {
    return num1 + num2
};

console.log(somar4(4, 6));


/*
ATENÇÃO

caso a sua função tenha apenas um parametro de entrada e executa apenas em uma linha, voce pode simplificar 
ainda mais usando arrow function
*/

//O RETORNO É FEITO AUTOMATICO
const dobrar = valor => valor * 2;

console.log(dobrar(5));

function mensagem1() {
    console.log('leonardo bozzi');
}
mensagem1()

const msg = () => console.log('leonardo bozzi');

msg();