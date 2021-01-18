/*
funcionario: 
    nome, 
    sobrenome, 
    email,
    cpf,
    funcao, 
    registro

cliente: 
    nome,
    sobrenome,
    email,
    cpf,
    renda

funcoes: 
    descricao, 
    salario
*/

class Funcao{
    constructor(descricao,salario){
        this._descricao = descricao;
        this._salario = salario;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(descricao) {
        this._descricao = descricao
    }
    get salario() {
        return this._salario;
    }
    set salario(salario) {
        this._salario = salario
    }
}

class Pessoa{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }
    get nome(){
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }
    get email(){
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get/*
funcionario: 
    nome, 
    sobrenome, 
    email,
    cpf,
    funcao, 
    registro

cliente: 
    nome,
    sobrenome,
    email,
    cpf,
    renda

funcoes: 
    descricao, 
    salario
*/

class Funcao{
    constructor(descricao,salario){
        this._descricao = descricao;
        this._salario = salario;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(descricao) {
        this._descricao = descricao
    }
    get salario() {
        return this._salario;
    }
    set salario(salario) {
        this._salario = salario
    }
}

class Pessoa{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }
    get nome(){
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }
    get email(){
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get cpf(){
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }

    //Métodos extras

    get nome_completo(){
        return this._nome + ' ' + this._sobrenome;
    }
    set nome_completo(nome_completo) {
        nome_completo = nome_completo.split(' ');//A STRING VIRA UM ARRAY AQUI, SEPARANDO O TEXTO PELO ESPAÇO
        this._nome = nome_completo.shift();//ELE COLOCA CADA PARAMETRO EM UMA 'VARIAVEL', REMOVE E RETORNA O ELEMENTO DA POSIÇÃO 0 DO ARRAY
        this._sobrenome = nome_completo.join(' ');//PEGA O RESTANTE DO ARRAY E SEPARA CADA ELEMENTO COM ESPAÇO, FORMANDO UMA STRING
    }
    imprimir_dados() {
        console.log(`${this._nome} ${this._sobrenome}`);
    }
}

class Funcionario extends Pessoa{
    constructor(nome, sobrenome, email, cpf, funcao, registro) {
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }
    get funcao(){
        return this._funcao;
    }
    set funcao(funcao) {
        this._funcao = funcao;
    }
    get registro(){
        return this._registro;
    }
    set registro(registro) {
        this._registro = registro;
    }
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda) {
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }
    get renda(){
        return this._renda;
    }
    set renda(renda) {
        this._renda = renda;
    }
}

// const c1 = new Cliente('Leonardo', 'Bozzi', 'leo@leo.com', '232.324.432-54', 1726.23);
// const c2 = new Cliente('Nome', 'Sobrenome', 'email@email.com', 'cpf.cpf.cpf-cpf', 1321);

// console.log(c1);
// console.log(c1.nome_completo);
// console.log(c2.nome_completo);

// c1.nome_completo = "Chama Fio";

// console.log(c1);

// c2.imprimir_dados();

const programador = new Funcao('programador', 4899.99);
const suporte = new Funcao('Suporte', 1899.99);

// console.log(programador);
// console.log(suporte);

const f1 = new Funcionario('Leonardo', 'Silva', 'leo@gmail.com', '143.3213.321.32', programador, 'g1341f');
const f2 = new Funcionario('Anderson', 'Silva', 'spider@gmail.com', '143.333.333.32', programador, 'asd41f');

console.log(f1);
console.log(f2);
console.log(f1.funcao.salario);

f1.imprimir_dados();
