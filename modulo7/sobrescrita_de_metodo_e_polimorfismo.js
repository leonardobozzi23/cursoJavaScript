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
    get cpclass Funcao{
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
    //SOBRESCRITA DE MÉTODO, ESTAMOS SOBRESCREVENDO UM MÉTODO EXISTENTE NA CLASSE PAI
    imprimir_dados() {
        super.imprimir_dados();//ELE PEGA O QUE ESTA NA SUPER CLASSE E INCREMENTA A DESSA
        console.log(`Registro: ${this.registro} \nSalário: ${this.funcao.salario}`);
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

const prog = new Funcao('Programador', 5987.44);
const f1 = new Funcionario('Paula', 'Fernandes', 'paula@gmail.com', '444.567.554-33', prog, 'F21WFH');
const c1 = new Cliente('Carlos', 'Silveira', 'carlos@gmail.com', '343.324.422-55', 32424.44);

f1.imprimir_dados(); //Pessoa
c1.imprimir_dados(); //Pessoa


/*
    Sobrescrita de método - OverWrite

    - Polimorfismo = 2 objetos do mesmo tipo tendo comportamentos diferentes
*/