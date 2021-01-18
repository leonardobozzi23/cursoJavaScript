//Ajax (XMLHttpRequest) - Asynchronous Javascript and XML

let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');

btn.onclick = function(){
    //Limpar o conteúdo da div
    div.innerHTML = '';

    //Instanciando um objeto Ajax
    let ajax = new XMLHttpRequest();

    //ajax.readyState aqui vale 0

    //Abrir uma conexão
    ajax.open('GET', `https://api.github.com/users/${input.value}`);

    //ajax.readyState aqui vale 1
    //Enviar a requisição
    ajax.send(null); //Passando null por que nessa função se envia dados, e o get não faz esse trabalho

    ajax.onreadystatechange = function(){
        //Criar um elemento span
        let spanNone = document.createElement('span');

        //Criar a variavel nome
        let txtNome = '';

        /*
        ajax.readyState

        Status:

        0 -> Antes da conexão ser aberta
        1 -> Após abrir a conexão
        2 -> headers (cabeçalhos) foram recebidos 
        3 -> Carregando o corpo da requisição
        4 -> O conteúdo (dados) está pronto para uso
        */

        /*
        ajax.status

        200 -> Tudo ok com a requisição
        404 -> Não foi encontrado

        */

        if(ajax.readyState === 4){
            if(ajax.status === 200){
                //Transformar os dados JSON para array
                usuario = JSON.parse(ajax.responseText);

                //Se o usuário possui nome
                if(usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');

                    div.appendChild(img);
                }else{
                    txtNome = document.createTextNode(`O usuário ${input.value} não tem nome`)
                }
                //Adiciona o texto ao span e o span na div
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);
                //Limpar o input
                input.value = '';
            }else{
                txtNome = document.createTextNode(`Não encontrei o usuário ${input.value}`);
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);
            }
        }
    }
}