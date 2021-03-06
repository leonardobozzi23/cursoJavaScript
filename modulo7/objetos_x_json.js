/*
    JSON - Javascript Object Notation
    API - Application Interface
*/

const curso = {
    nome: 'Programacao JS',
    horas: 27,
    preco() {
        return this.horas * 0.67
    }
}

// console.log(curso); //OBJETO JS - é mais completo, pode usar função e etc
// console.log(typeof(curso));
// // console.log(curso.preco());

// //Convertendo Objeto JS para JSON

// const json = JSON.stringify(curso);

// console.log(json);//JSON - é mais simples, é texto
// console.log(typeof(json));

// //Convertendo de JSON para objeto JS
// const obj = JSON.parse(json);

// console.log(obj);
// console.log(typeof(obj));

// const json_errado = "{'nome': 'JAVASCRIPT', 'preco': 27.99}"
const json_corrigido = '{"nome": "JAVASCRIPT", "preco": 27.99}'


console.log(json_corrigido);
console.log(typeof (json_corrigido));

const novo_obj = JSON.parse(json_corrigido);

console.log(novo_obj);
console.log(typeof (novo_obj));                                                                                         /*
    JSON - Javascript Object Notation
    API - Application Interface
*/

const curso = {
    nome: 'Programacao JS',
    horas: 27,
    preco() {
        return this.horas * 0.67
    }
}

// console.log(curso); //OBJETO JS - é mais completo, pode usar função e etc
// console.log(typeof(curso));
// // console.log(curso.preco());

// //Convertendo Objeto JS para JSON

// const json = JSON.stringify(curso);

// console.log(json);//JSON - é mais simples, é texto
// console.log(typeof(json));

// //Convertendo de JSON para objeto JS
// const obj = JSON.parse(json);

// console.log(obj);
// console.log(typeof(obj));

// const json_errado = "{'nome': 'JAVASCRIPT', 'preco': 27.99}"
const json_corrigido = '{"nome": "JAVASCRIPT", "preco": 27.99}'


console.log(json_corrigido);
console.log(typeof (json_corrigido));

const novo_obj = JSON.parse(json_corrigido);

console.log(novo_obj);
console.log(typeof (novo_obj));