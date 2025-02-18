const User = require('../models/User');
const UserList = require('../models/UserList');

const lista = new UserList();

//opcional, adicionar usuarios fixos.

lista.addUser(new User('Flavia', 'flavia@gmail.com', '17'));

const router = {
    getAllUsers: (req, res) => {
        res.json(lista.getAllUsers());
    }
};


module.exports = router;