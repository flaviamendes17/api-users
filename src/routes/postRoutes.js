const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/postControllers'); 

/**
  * @swagger
  * tags:
  *   name: posts
  *   description: Gerenciamento de posts
  */

/**
  * @swagger
  * /api/post:
  *   get:
  *     summary: Lista todos os posts
  *     tags: [posts]
  *     parameters:
  *       - in: query
  *         name: name
  *         schema:
  *           type: string
  *         description: Filtro por nome
  */
router.get('/', postControllers.getAllPosts);

/**
  * @swagger
  * /api/post/{id}:
  *   get:
  *     summary: Busca post por ID
  *     tags: [posts]
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: integer
  *     responses:
  *       200:
  *         description: post encontrada
  *       404:
  *         description: post não encontrada
  */
router.get('/:id', postControllers.getPostById);


/**
  * @swagger
  * /api/post:
  *   post:
  *     summary: Cria um novo post
  *     tags: [posts]
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
  *         description: post criado
  */
router.post('/', postControllers.addPost);


/**
  * @swagger
  * /api/post/{id}:
  *   put:
  *     summary: Atualiza uma post
  *     tags: [posts]
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
  *         description: post atualizado
  */
router.put('/:id', postControllers.updatePost);

/**
  * @swagger
  * /api/post/{id}:
  *   delete:
  *     summary: Deleta um post
  *     tags: [posts]
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: integer
  *     responses:
  *       200:
  *         description: post deletado
  */
router.delete('/:id', postControllers.deletePost);

module.exports = router;
