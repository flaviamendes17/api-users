const User = require('../models/User');
const UserList = require('../models/UserList');
const listaPosts = require('../data/postListInstance'); // Corrigido para usar a instância correta de PostList

const lista = new UserList();

//opcional, adicionar usuarios fixos.

lista.addUser(new User('Flavia', 'flavia@gmail.com', '17'));

const router = {
    getAllUsers: (req, res) => {
        res.json(lista.getAllUsers());
    },

    getUserById: (req, res) => {
        try {
            res.json(lista.getUserById(req.params.id));
        } catch (error) {
            res.status(404).json({ message: "Usuário não encontrado", error });
        }
    },

    addUser: (req, res) => {
        try {
            const { name, email, age } = req.body;
            if (!name || !email || age === undefined) {
                throw new Error("Todos os campos são obrigatórios");
            }
            const newUser = new User(name, email, age);
            lista.addUser(newUser);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message, error });
        }
    },

    updateUser: (req, res) => {
        try {
            res.json(lista.updateUser(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar o usuário", error });
        }
    },

    deleteUser: (req, res) => {
        lista.deleteUser(req.params.id);
        res.status(200).json({ message: "Usuário deletado com sucesso", IdDeletado: req.params.id });
    },

    getPostsByUserId: (req, res) => {
        try {
            const userId = req.params.id;
            const posts = listaPosts.getPostById(userId); 
            res.json(posts);
        } catch (error) {
            res.status(404).json({ message: "Erro ao buscar os posts do usuário", error });
        }
    }
};

module.exports = router;