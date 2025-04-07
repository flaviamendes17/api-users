const Post = require('../models/Post');
const lista = require('../data/postListInstance');

const post1 = new Post(1, "https://www.google.com", 10, 5, 2);
lista.addPost(post1);

const router = {
    getAllPosts: (req, res) => {
        try {
            res.json(lista.getAllPosts());
        } catch (error) {
            res.status(404).json({ message: "Erro ao buscar os posts", error });
        }
    },
    
    getPostById: (req, res) => {
        try {
            res.json(lista.getPostById(req.params.id));
        } catch (error) {
            res.status(404).json({ message: "Post não encontrado", error });
        }
    },

    addPost: (req, res) => {
        try {
            const { idUsuario, url_imagem, curtidas, comentarios, compartilhamentos } = req.body;
            if (!idUsuario || !url_imagem || !curtidas || !comentarios || !compartilhamentos) {
                throw new Error("Todos os campos são obrigatórios");
            }
            const newPost = new Post(idUsuario, url_imagem, curtidas, comentarios, compartilhamentos);
            lista.addPost(newPost);
            res.status(201).json(newPost);
        } catch (error) {
            res.status(400).json({ message: error.message, error });
        }
    },

    updatePost: (req, res) => {
        try {
            res.json(lista.updatePost(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar o post", error });
        }
    },

    deletePost: (req, res) => {
        lista.deletePost(req.params.id);
        res.status(200).json({ message: "Post deletado com sucesso", IdDeletado: req.params.id });
    }
}

module.exports = router;