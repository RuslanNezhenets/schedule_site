const {Lesson} = require('../models/models')

class LessonController {
    async create(req, res) {
        const {disciplineId, typeId} = req.body
        const lesson = await Lesson.create({disciplineId, typeId})
        return res.json(lesson)
    }

    async getAll(req, res) {
        const lesson = await Lesson.findAll()
        return res.json(lesson)
    }

    async getOne(req, res) {
        const {id} = req.params
        const lesson = await Lesson.findOne({where: {id}})
        return res.json(lesson)
    }

}

module.exports = new LessonController()