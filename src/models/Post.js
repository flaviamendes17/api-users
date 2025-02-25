const { v4: uuid4 } = require('uuid');

    class Post {
        constructor(idUsuario, url_imagem,curtidas, comentarios, compartilhamentos){
            this.id = uuid4();
            this.idUsuario = idUsuario;
            this.url_imagem = url_imagem;
            this.curtidas = curtidas;
            this.comentarios = comentarios;
            this.compartilhamentos = compartilhamentos;
        }
    }

module.exports = Post;