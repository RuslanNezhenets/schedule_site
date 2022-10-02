const Router = require('express')
const scheduleController = require('../controllers/scheduleController')
const router = new Router()

router.post('/', scheduleController.create)
router.get('/', scheduleController.getAll)
router.get('/:id', scheduleController.getOne)
router.put('/', scheduleController.update)
router.delete('/:id', scheduleController.delete)

module.exports = router