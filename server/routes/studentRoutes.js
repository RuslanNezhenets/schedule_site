const Router = require('express')
const studentController = require('../controllers/studentController')
const router = new Router()

router.post('/', studentController.create)
router.get('/', studentController.getAll)
router.get('/:id', studentController.getOne)

module.exports = router