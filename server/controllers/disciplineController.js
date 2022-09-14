const {Discipline} = require('../models/models')

class DisciplineController {
    async create(req, res) {
        const {title, elective} = req.body
        const discipline = await Discipline.create({title, elective})
        return res.json(discipline)
    }

    async getAll(req, res) {
        const discipline = await Discipline.findAll()
        return res.json(discipline)
    }

    async getOne(req, res) {
        const {id} = req.params
        const discipline = await Discipline.findOne({where: {id}})
        return res.json(discipline)
    }

}

module.exports = new DisciplineController()