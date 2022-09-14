const Router = require('express')
const lessonController = require('../controllers/lessonController')
const router = new Router()

router.post('/', lessonController.create)
router.get('/', lessonController.getAll)
router.get('/:id', lessonController.getOne)

module.exports = router