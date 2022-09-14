const {Student} = require('../models/models')

class StudentController {
    async create(req, res) {
        const {surname, name, patronymic, telegramId} = req.body
        const student = await Student.create({surname, name, patronymic, telegramId})
        return res.json(student)
    }

    async getAll(req, res) {
        const student = await Student.findAll()
        return res.json(student)
    }

    async getOne(req, res) {
        const {id} = req.params
        const student = await Student.findOne({where: {id}})
        return res.json(student)
    }

}

module.exports = new StudentController()