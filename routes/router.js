const express = require('express');
const router = express.Router();
const controller = require('../controller/BahiaController');

router.get('/', controller.main);
router.get('/blog', controller.blog);
router.get('/single-blog', controller.singleblog);
router.get('/contact', controller.contact);
router.get('/login', controller.login);
router.get('/tracking', controller.tracking);
router.get('/cout', controller.cout);
router.get('/shopping', controller.shopping);
router.get('/confirm', controller.confirm);
router.get('/elements', controller.elements);
router.get('/category', controller.category);
router.get('/details', controller.details);

module.exports = router;