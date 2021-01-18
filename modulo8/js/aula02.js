let a = document.querySelector('.link');//seleciona o elemento pela classe

// console.log(a.innerText); 
// console.log(a.parentNode); //Imprime o Pai do elemento da variavel a

// console.log(a.parentNode.parentNode);//Recupera o elemento ancora, faz acesso ao pai do ancora,
//faz acesso ao pai do pai do ancora

// console.log(a.parentNode.parentNode.parentNode);
// console.log(a.parentNode.parentNode.parentNode.parentNode);//null

// console.log(a.parentNode.parentNode.firstChild);//head

// console.log(a.firstChild);

// console.log(a.parentNode.parentNode.lastChild);//body

//let a = document.querySelector('.link');//seleciona o elemento pela classe

// console.log(a.innerText); 
// console.log(a.parentNode); //Imprime o Pai do elemento da variavel a

// console.log(a.parentNode.parentNode);//Recupera o elemento ancora, faz acesso ao pai do ancora,
//faz acesso ao pai do pai do ancora

// console.log(a.parentNode.parentNode.parentNode);
// console.log(a.parentNode.parentNode.parentNode.parentNode);//null

// console.log(a.parentNode.parentNode.firstChild);//head

// console.log(a.firstChild);

// console.log(a.parentNode.parentNode.lastChild);//body

// console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild.nextSibling);
console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling);//vendo o irmao anterior do body