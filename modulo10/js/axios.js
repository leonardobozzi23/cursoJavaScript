let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

btn.onclick = function(){
    //Limpar a div
    div.innerHTML = '';

    //Criar o span
    let spanNome = document.createElement('span');

    //Criar a variavel nome
    let txtNome = '';

    //Recuperar o input
    let github_user = document.querySelector('input[name=github_user]').value;

    //Limpando o input
    let input = document.querySelector('input[name=github_user]');
    input.value = '';

    //GET, POST, PUT, DELETE
    axios.get(`https://api.github.com/users/${github_user}`)
        .then(function(response){
            if(response.data.name !== null){
                txtNome = document.createTextNode(response.data.name);

                let img = document.createElement('img');

                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);
            }else{
                txtNome = document.createTextNode('O usuário encontrado não possui nome.');
            }
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
        .catch(function(error){
            txtNome = document.createTextNode('Não foi possivel realizar a requisição');

            //Adiciona o texto ao span e o span a div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        });
}