const router = require('express').Router();
const {getCategories, updateCategory, deleteCategory, postCategory, getCategory} = require('../../controllers/categories.controller')

router.get('/', getCategories)
router.get('/:id', getCategory)
router.post('/', postCategory)
router.put('/:id',updateCategory)
router.delete('/:id', deleteCategory)
module.exports = router;

