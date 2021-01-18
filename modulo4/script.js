var cliente = {
    nome: "Maria",
    email: "maria@gmail.com",
    telefone: "+55 11 99496432",
    rua: "Rua da maria",
    numero: 23,
    bairro: "Pinheiros",
    cidade: "São Paulo",
    uf: "SP"
}

console.log("O(a) cliente " + cliente.nome + " mvar cliente = {
    nome: "Maria",
    email: "maria@gmail.com",
    telefone: "+55 11 99496432",
    rua: "Rua da maria",
    numero: 23,
    bairro: "Pinheiros",
    cidade: "São Paulo",
    uf: "SP"
}

console.log("O(a) cliente " + cliente.nome + " mora em " + cliente.cidade + ", " + cliente.uf);

function impares(){
  var int1 = 2;
  var int2 = 12;
  
  for(int1; int1 < int2; int1++){
      if(int1 % 2 != 0){
        console.log(int1);
    }
  }
}

impares();

function nivel() {
    var funcionario = 1;

    if (funcionario <= 2) {
        console.log("JUNIOR");
    } else if (funcionario >= 3 && funcionario <= 5) {
        console.log("PLENO");
    } else if (funcionario >= 6) {
        console.log("SENIOR");
    }
}

nivel();
