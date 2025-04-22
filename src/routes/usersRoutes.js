const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers'); 
const apiKeyMiddleware = require('../config/apiKey');

router.use(apiKeyMiddleware);

/**
  * @swagger
  * tags:
  *   name: users
  *   description: Gerenciamento de usuários
  */

/**
  * @swagger
  * /api/users:
  *   get:
  *     summary: Retorna todos os usuários
  *     tags: [users]
  *     responses:
  *       200:
  *         description: Lista de usuários
 */
router.get('/', usersControllers.getAllUsers);

/**
  * @swagger
  * /api/users/{id}:
  *   get:
  *     summary: Busca usuário por ID
  *     tags: [users]
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: integer
  *     responses:
  *       200:
  *         description: usuário encontrado
  *       404:
  *         description: usuário não encontrado
  */
router.get('/:id', usersControllers.getUserById);

/**
  * @swagger
  * /api/users:
  *   post:
  *     summary: Cria uma novo usuário
  *     tags: [users]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               name:
  *                 type: string
  *               founder:
  *                 type: string
  *     responses:
  *       201:
  *         description: usuário criado
  */
router.post('/', usersControllers.addUser);

/**
  * @swagger
  * /api/users/{id}:
  *   put:
  *     summary: Atualiza um usuário
  *     tags: [users]
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: integer
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               name:
  *                 type: string
  *               founder:
  *                 type: string
  *     responses:
  *       200:
  *         description: usuário atualizado
  */
router.put('/:id', usersControllers.updateUser);

/**
  * @swagger
  * /api/users/{id}:
  *   delete:
  *     summary: Deleta um usuário
  *     tags: [users]
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: integer
  *     responses:
  *       200:
  *         description: usuário deletado
  */
router.delete('/:id', usersControllers.deleteUser);

module.exports = router;
