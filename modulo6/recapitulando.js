console.log(somar(4, 6));

// function somar(num1, num2) {
//     return num1 + num2;
// }//ISSO SO FUNCIONA PQ O JS JOGA AS FUNÇÕES ESCRITAS DE FORMAR **LITERAL** PARA O INICIO DA EXECUÇÃO

let somar = function (v1, v2) { return v1 + v2 };//AQUI N FUNCIONA, ELE SO FAZ O HOISTING SE A DECLARAÇÃO FOR LITERAL
//COM FUNCAO LAMBDA N FUNCIONA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      console.log(somar(4, 6));

// function somar(num1, num2) {
//     return num1 + num2;
// }//ISSO SO FUNCIONA PQ O JS JOGA AS FUNÇÕES ESCRITAS DE FORMAR **LITERAL** PARA O INICIO DA EXECUÇÃO

let somar = function (v1, v2) { return v1 + v2 };//AQUI N FUNCIONA, ELE SO FAZ O HOISTING SE A DECLARAÇÃO FOR LITERAL
//COM FUNCAO LAMBDA N FUNCIONA