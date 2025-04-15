const express = require("express");
const router = express.Router();
const postController = require("../controllers/postControllers");

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
  *     tags: [post]
  *     responses:
  *       200:
  *         description: Lista de posts
  */
router.get('/',postController.getAllPosts);

/**
  * @swagger
  * /api/post/{id}:
  *   get:
  *     summary: Busca usuário por ID
  *     tags: [posts]
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
router.get('/:id',postController.getPostById);


 /**
  * @swagger
  * /api/post:
  *   post:
  *     summary: Cria uma nova usuário
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
  *         description: usuário criada
  */
router.post('/',postController.addPost);


 /**
  * @swagger
  * /api/post/{id}:
  *   put:
  *     summary: Atualiza uma usuário
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
router.put('/:id', postController.updatePost);

/**
  * @swagger
  * /api/post/{id}:
  *   delete:
  *     summary: Deleta um post
  *     tags: [post]
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
router.delete('/:id', postController.deletePost);
router.get('/:id/posts', postController.getPostById);

module.exports = router;
