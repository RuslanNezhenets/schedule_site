const Router = require('express')
const TeacherLessonController = require('../controllers/teacherLessonController')
const router = new Router()

router.post('/', TeacherLessonController.create)
router.get('/', TeacherLessonController.getAll)
router.get('/:id', TeacherLessonController.getOne)
router.put('/', TeacherLessonController.update)
//router.delete('/:id', TeacherLessonController.delete)


module.exports = router