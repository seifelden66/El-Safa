const router = require('express').Router();
const {getCategories, updateCategory, deleteCategory, postCategory} = require('../../controllers/categories.controller')

router.get('/', getCategories)
router.get('/:id', getCategories)
router.post('/', postCategory)
router.put('/:id',updateCategory)
router.delete('/:id', deleteCategory)
module.exports = router;

