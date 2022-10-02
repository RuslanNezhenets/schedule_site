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

    async update(req, res) {
        let {disciplineId, typeId, id} = req.body

        if(!id){
            throw new Error("не указан ID")
        }

        const updateLesson = await Lesson.update(
            {disciplineId, typeId, id}, {where: {id: id}}
        )
        return res.json(updateLesson)
    }

    async delete(req, res) {
        const {id} = req.params
        if(!id){
            throw new Error("не указан ID")
        }
        const deleteLesson = await Lesson.destroy({where: {id: id}});
        res.json(deleteLesson)
    }
}

module.exports = new LessonController()