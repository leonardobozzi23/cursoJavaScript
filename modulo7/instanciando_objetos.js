class Pessoa {
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

//INSTANCIAÇÃO DE OBJETOS - FORMA 1

// const curso = new Object();
// curso.nome = 'Javascript';
// curso.preco = 27.99;

// console.log(curso);

// curso['qtd_alunos'] = 999;

// console.log(curso);

// delete curso['qtd_alunos'];
// delete curso['preco'];

// console.log(curso);

//UM OBJETO É UMA COLEÇÃO DE PARES, CHAVES E VALORES.

////INSTANCIAÇÃO DE OBJETOS - FORMA 2 - Objeto Literal

const programa = {
    nome: 'Photoshop',
    preco: 8999.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'da paz, 45',
            bairro: 'nova lima',
            cidade: 'são paulo'
        },
        filiais: [
            {cidade: 'Rio'},
            {cidade: 'Recife'},
        ],
    },
}

// console.log(programa);
// console.log(programa.nome);//Photoshop
// console.log(programa.fabricante.nome);//Adobe
// console.log(programa.fabricante.filiais.length);//2

// console.log(programa['fabricante']['filiais'].length);

// programa.nome = 'PlayStation OS';
// console.log(programa.nome);//PlayStation OS
// console.log(programa);


// delete programa.fabricante.filiais;
// console.log(programa.fabricante.filiais);//UNDEFINED
// console.log(programa.fabricante.filiais.length);//TypeError

////INSTANCIAÇÃO DE OBJETOS - FORMA 3 - Objeto Literal

// const pessoa = {};

// console.log(typeof (pessoa));

// pessoa.nome = 'Angelina';

// console.log(pessoa);

//INSTANCIAÇÃO DE OBJETOS - FORMA 4 - Função Construtora

// function lampada(cor) {
//     this.cor = cor;
// }

// const l1 = new lampada('Branca');

// console.log(l1);

// console.log(typeof(l1));

//INSTANCIAÇÃO DE OBJETOS - FORMA 4 - Objeto a partir das nossas classes

// const p1 = new Pessoa('Leonardo', 'Bozzi');
// console.log(p1);
// console.log(typeof(p1));
// console.log(p1.nome);//funcao get
// console.log(p1.sobrenome);//funcao get

// p1.nome = 'Xuxa';
// console.log(p1);

// p1.falar('FALA FIOTE, C TA BÃO?');//AGORA USAMOS O PARENTESES POR QUE NAO É MAIS UM GETTER, E SIM UM MÉTODO COMUM
// p1.comer();
// p1.beber();

const civic = new Carro("Civic");

civic.imprimir();                                                                                                                 class Pessoa {
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

//INSTANCIAÇÃO DE OBJETOS - FORMA 1

// const curso = new Object();
// curso.nome = 'Javascript';
// curso.preco = 27.99;

// console.log(curso);

// curso['qtd_alunos'] = 999;

// console.log(curso);

// delete curso['qtd_alunos'];
// delete curso['preco'];

// console.log(curso);

//UM OBJETO É UMA COLEÇÃO DE PARES, CHAVES E VALORES.

////INSTANCIAÇÃO DE OBJETOS - FORMA 2 - Objeto Literal

const programa = {
    nome: 'Photoshop',
    preco: 8999.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'da paz, 45',
            bairro: 'nova lima',
            cidade: 'são paulo'
        },
        filiais: [
            {cidade: 'Rio'},
            {cidade: 'Recife'},
        ],
    },
}

// console.log(programa);
// console.log(programa.nome);//Photoshop
// console.log(programa.fabricante.nome);//Adobe
// console.log(programa.fabricante.filiais.length);//2

// console.log(programa['fabricante']['filiais'].length);

// programa.nome = 'PlayStation OS';
// console.log(programa.nome);//PlayStation OS
// console.log(programa);


// delete programa.fabricante.filiais;
// console.log(programa.fabricante.filiais);//UNDEFINED
// console.log(programa.fabricante.filiais.length);//TypeError

////INSTANCIAÇÃO DE OBJETOS - FORMA 3 - Objeto Literal

// const pessoa = {};

// console.log(typeof (pessoa));

// pessoa.nome = 'Angelina';

// console.log(pessoa);

//INSTANCIAÇÃO DE OBJETOS - FORMA 4 - Função Construtora

// function lampada(cor) {
//     this.cor = cor;
// }

// const l1 = new lampada('Branca');

// console.log(l1);

// console.log(typeof(l1));

//INSTANCIAÇÃO DE OBJETOS - FORMA 4 - Objeto a partir das nossas classes

// const p1 = new Pessoa('Leonardo', 'Bozzi');
// console.log(p1);
// console.log(typeof(p1));
// console.log(p1.nome);//funcao get
// console.log(p1.sobrenome);//funcao get

// p1.nome = 'Xuxa';
// console.log(p1);

// p1.falar('FALA FIOTE, C TA BÃO?');//AGORA USAMOS O PARENTESES POR QUE NAO É MAIS UM GETTER, E SIM UM MÉTODO COMUM
// p1.comer();
// p1.beber();

const civic = new Carro("Civic");

civic.imprimir();