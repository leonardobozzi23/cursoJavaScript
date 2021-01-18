class Pessoa {
    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
//GETTclass Pessoa {
    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
//GETTERS E SETTERS
    get nome() {
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }
    //METODOS = FUNÇÃO, MAS COMO ESTA DENTRO DE UMA CLASSE, ELE VIRA UM MÉTODO, N SE USA O function
    falar(msg) {
        console.log(`${this.nome} esta falando ${msg}`);
    }
    comer() {
        console.log(`${this.nome} esta comendo...`);
    }
    beber() {
        console.log(`${this.nome} ${this._sobrenome} esta bebendo...`);
    }
}

class Carro {
    constructor(modelo) {
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    get marca() {
        return this._marca;
    }
    //A MARCA NAO TEM O SET POR SER UM VALOR FIXO!
    get modelo() {
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }
    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
}

