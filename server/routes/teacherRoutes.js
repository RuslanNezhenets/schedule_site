const Router = require('express')
const teacherController = require('../controllers/teacherController')
const router = new Router()

router.post('/', teacherController.create)
router.get('/', teacherController.getAll)
router.get('/:id', teacherController.getOne)
router.put('/', teacherController.update)
router.delete('/:id', teacherController.delete)

module.exports = router