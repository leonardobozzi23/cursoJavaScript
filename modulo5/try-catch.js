// console.log(nome); //ReferenceError
// //Programa parou aqui

// console.log('Oi...');

// console.log(4.oi()); //SyntaxError


//Tratamos erros com try/catch
// try {   
//     console.log(nome);
// } catch (e) {
//     console.log('não é possivel imprimir nome');
// }

//catch ->(e) console.log(e.// console.log(nome); //ReferenceError
// //Programa parou aqui

// console.log('Oi...');

// console.log(4.oi()); //SyntaxError


//Tratamos erros com try/catch
// try {   
//     console.log(nome);
// } catch (e) {
//     console.log('não é possivel imprimir nome');
// }

//catch ->(e) console.log(e.name); console.log(e.message); //Mostra o que está errado 

//Lançando erros

function dividir(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        throw ("Os valores devem ser positivos"); //Lançando uma excessão (erro)
    } else {
        return num1 / num2;
    }
}
    

try {
    let ret = dividir(8, 1);   
    console.log(ret);
} catch (e) {
    console.log('nao foi possivel dividir');
} finally {
    console.log('Vamos continuar...'); //finally sempre vai ser executado!
}