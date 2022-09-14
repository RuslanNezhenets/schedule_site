const Router = require('express')
const timetableController = require('../controllers/timetableController')
const router = new Router()

router.post('/', timetableController.create)
router.get('/', timetableController.getAll)
router.get('/:id', timetableController.getOne)

module.exports = router