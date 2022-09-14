const Router = require('express')
const TeacherLessonController = require('../controllers/TeacherLessonController')
const router = new Router()

router.post('/', TeacherLessonController.create)
router.get('/', TeacherLessonController.getAll)
router.get('/:id', TeacherLessonController.getOne)

module.exports = router