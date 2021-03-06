//Criando uma função construtora

function Pessoa(n, s, raca = 'Humano') {
    //ATRIBUTOS PRIVADOS SO CONSEGUIMOS FAZER USSO DENTRO DA FUNÇÃO CONSTRUTORA

    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    //ATRIBUIÇÃO PUBLICA DA FUNÇÃO CONSTRUTORA
    this.raca = raca;

    //metodo privado so conseguimos fazer uso dentro da função construtora

    let imprimir_dados = function () {
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`);
    }

    this.fazer_aniversario = function () {
        idade += 1;
        imprimir_dados();
    }
    this.getIdade = function(){
        return idade;
    }
}
//INSTANCIANDO UM OBJETO
const angelina = new Pessoa("Angelina", "Feminino");

console.log(angelina);
console.log(angelina.peso);//PRIVADO
console.log(angelina.raca);//PUBLICO

angelina.fazer_aniversario();//PUBLICO
angelina.fazer_aniversario();//PUBLICO


//Instanciar um novo objeto

const felicity = new Pessoa("Felicity", "Feminino");

felicity.fazer_aniversario();
console.log(felicity.getIdade());

console.log(typeof (Pessoa));//Function
console.log(typeof (felicity));//Object                                                                                                                                                                                                                                                       //Criando uma função construtora

function Pessoa(n, s, raca = 'Humano') {
    //ATRIBUTOS PRIVADOS SO CONSEGUIMOS FAZER USSO DENTRO DA FUNÇÃO CONSTRUTORA

    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    //ATRIBUIÇÃO PUBLICA DA FUNÇÃO CONSTRUTORA
    this.raca = raca;

    //metodo privado so conseguimos fazer uso dentro da função construtora

    let imprimir_dados = function () {
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`);
    }

    this.fazer_aniversario = function () {
        idade += 1;
        imprimir_dados();
    }
    this.getIdade = function(){
        return idade;
    }
}
//INSTANCIANDO UM OBJETO
const angelina = new Pessoa("Angelina", "Feminino");

console.log(angelina);
console.log(angelina.peso);//PRIVADO
console.log(angelina.raca);//PUBLICO

angelina.fazer_aniversario();//PUBLICO
angelina.fazer_aniversario();//PUBLICO


//Instanciar um novo objeto

const felicity = new Pessoa("Felicity", "Feminino");

felicity.fazer_aniversario();
console.log(felicity.getIdade());

console.log(typeof (Pessoa));//Function
console.log(typeof (felicity));//Object