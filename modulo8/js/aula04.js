// let itexto = document.getElementById('produto');

// console.log(itexto);

// let spans = document.getElementsByTagName('span');
// console.log(spans);

// let eles = document.getElementsByClassName('texto');

// console.log(eles);

//Ler valores

// console.log(spans[0].textContent);
// console.log(spans[1].innerHTML);

//Alterar valores

// spans[0].textContent = 'Javascript ';
// spans[1].innerHTML = ' melhor que python';

// let span = document.getElementsByTagName('span')[0];
//// let itexto = document.getElementById('produto');

// console.log(itexto);

// let spans = document.getElementsByTagName('span');
// console.log(spans);

// let eles = document.getElementsByClassName('texto');

// console.log(eles);

//Ler valores

// console.log(spans[0].textContent);
// console.log(spans[1].innerHTML);

//Alterar valores

// spans[0].textContent = 'Javascript ';
// spans[1].innerHTML = ' melhor que python';

// let span = document.getElementsByTagName('span')[0];
// console.log(span.innerHTML);

// span.style.textTransform = 'uppercase';

// let inp = document.querySelector('input');//busca pela tag
// let eles = document.querySelector('.texto');//busca pela classe, mostra o primeiro elemento com ela
// let eles2 = document.querySelectorAll('.texto');//busca pela classe, mostra o todos os elementos com ela
// console.log(eles2);

// let div1 = document.querySelector('#div1');
// let imp = document.querySelector('input[name=produto]');
// console.log(imp);

//ex1
// let btn = document.querySelector('button.btn');

// btn.onclick = function () {
//     alert('Botao clicado...');
// }

// ex2

let btn = document.querySelector('button.btn');

let inp = document.querySelector('input[name=produto]');

btn.onclick = function () {
    alert(`temos o texto ${inp.value}`)
}
