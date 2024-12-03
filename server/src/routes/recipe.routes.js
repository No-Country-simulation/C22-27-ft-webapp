const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe.controller');
const authorization = require("../middlewares/authorization.middleware.js");
const checkToken = require('../middlewares/checkTocken.middleware.js');

router.get('/',checkToken, authorization("admin") , recipeController.getAllRecipe);
router.post('/', checkToken, authorization("doctor") ,recipeController.createRecipe);
router.get('/:recipeId',checkToken, authorization("admin", "doctor") , recipeController.getRecipeById);

module.exports = router;