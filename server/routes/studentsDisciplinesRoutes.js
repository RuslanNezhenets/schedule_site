const Router = require('express')
const studentDisciplineController = require('../controllers/studentDisciplineController')
const router = new Router()

router.post('/', studentDisciplineController.create)
router.get('/', studentDisciplineController.getAll)
router.get('/:id', studentDisciplineController.getOne)
router.put('/', studentDisciplineController.update)
router.delete('/:id', studentDisciplineController.delete)

module.exports = router