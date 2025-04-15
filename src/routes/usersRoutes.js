const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/usersControllers');

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
  *     summary: Lista todos os usuários
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
  *         description: usuário encontrada
  *       404:
  *         description: usuário não encontrada
  */
router.get('/:id', usersControllers.getUserById);


 /**
  * @swagger
  * /api/users:
  *   post:
  *     summary: Cria uma nova usuário
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
  *         description: usuário criada
  */
router.post('/', usersControllers.addUser);


 /**
  * @swagger
  * /api/users/{id}:
  *   put:
  *     summary: Atualiza uma usuário
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
  *         description: usuário atualizada
  */
router.put('/:id', usersControllers.updateUser);

/**
  * @swagger
  * /api/users/{id}:
  *   delete:
  *     summary: Deleta uma usuário
  *     tags: [users]
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: integer
  *     responses:
  *       200:
  *         description: usuário deletada
  */
router.delete('/:id', usersControllers.deleteUser);
router.get('/:id/posts', usersControllers.getPostsByUserId);

module.exports = router;
