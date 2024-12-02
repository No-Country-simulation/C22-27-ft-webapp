const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe.controller');

router.get('/', recipeController.getAllRecipe);
router.post('/', recipeController.createRecipe);
// router.get('/:id', recipeController.updatePatient);



module.exports = router;