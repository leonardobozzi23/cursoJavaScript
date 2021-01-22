import api from './api';

class App{
    //Construtor
    constructor(){
        //Lista de repositorios
        this.repositorios = [];

        //Recuperrar o form
        this.formulario = document.querySelector('form');

        //recuperar a lista
        this.lista = document.querySelector('.list-group')

        //Metodo para registrar os eventos do formulario
        this.registrarEventos();
    }

    registrarEventos(){
        this.formulario.onsubmit = evento => this.adicionarRepositorio(evento);
    }

    async adicionarRepositorio(evento){
        //evita que o formulario recarregue a página
        evento.preventDefault();

        //recuperar o valor do input 

        let input = this.formulario.querySelector('input[id=repositorio]').value;

        //se o input vier vazio sai do app
        if(input.length === 0){
            return; //return sempre sai da função
        }

        //Ativa o carregamento
        this.apresentarBuscando();

        try{
            let response = await api.get(`/repos/${input}`);

            // console.log(response);
    
            let { name, description, html_url, owner: {avatar_url}} = response.data;
    
            //Adiciona o repositorio na lista
            this.repositorios.push({
                nome: name,
                descricao: description,
                avatar_url,
                link: html_url
            });
    
            //renderizar a tela
            this.renderizarTela();
        }catch(erro){
            //limpar buscando
            this.lista.removeChild(document.querySelector('.list-group-item-warning'));

            //limpar erro existente

            let er = this.lista.querySelector('.list-group-item-danger');
            if(er !== null){
                this.lista.removeChild(er);
            }
            //<li>
            let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item list-group-item-danger');
            let txtErro = document.createTextNode(`o repositório ${input} não existe`);
            li.appendChild(txtErro)
            this.lista.appendChild(li);
        }
    }

    apresentarBuscando(){
        //<li>
        let li = document.createElement('li');
        let input = this.formulario.querySelector('input[id=repositorio]').value;
        li.setAttribute('class', 'list-group-item list-group-item-warning');
        let txtBuscando = document.createTextNode(`Aguarde, buscando o repositório ${input}...`);
        li.appendChild(txtBuscando)
        this.lista.appendChild(li);
    }

    renderizarTela(){
        //Limpar o conteúdo de lista
        this.lista.innerHTML = '';

        //Percorrer toda a lista de repositorios e criar os elementos
        this.repositorios.forEach(repositorios => {
            //<li>
            let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item list-group-item-action');;

            //<img>
            let img = document.createElement('img');
            img.setAttribute('src', repositorios.avatar_url);
            li.appendChild(img);

            //<strong>
            let strong = document.createElement('strong');
            let txtNome = document.createTextNode(repositorios.nome);
            strong.appendChild(txtNome);
            li.appendChild(strong);

            //<p>
            let p = document.createElement('p');
            let txtDescription = document.createTextNode(repositorios.descricao);
            p.appendChild(txtDescription);
            li.appendChild(p);

            //<a>
            let a = document.createElement('a');
            a.setAttribute('target', '_blank');
            a.setAttribute('href',  repositorios.link);
            let txtA = document.createTextNode('Acessar');
            a.appendChild(txtA);
            li.appendChild(a);

            //adicionar li como filho da ul
            this.lista.appendChild(li);

            //limpar o conteudo do input
            this.formulario.querySelector('input[id=repositorio').value = '';

            //Adiciona o foco no input
            this.formulario.querySelector('input[id=repositorio]').focus();
        })
    }
}

new App();

