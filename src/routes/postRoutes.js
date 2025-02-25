const express = require('express');

const router = express.Router();

const postControllers = require('../controllers/postControllers');

router.get('/', postControllers.getAllPosts);
router.post('/', postControllers.addPost); 
router.get('/:id', postControllers.getPostById); 
router.put('/:id', postControllers.updatePost); 
router.delete('/:id', postControllers.deletePost); 

module.exports = router;
