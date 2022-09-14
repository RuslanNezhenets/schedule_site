const Router = require('express')
const disciplineController = require('../controllers/disciplineController')
const router = new Router()

router.post('/', disciplineController.create)
router.get('/', disciplineController.getAll)
router.get('/:id', disciplineController.getOne)
router.put('/', disciplineController.update)
router.delete('/:id', disciplineController.delete)

module.exports = router