const {TeacherLesson} = require('../models/models')

class TeacherLessonController {
    async create(req, res) {
        const {teacherId, lessonId, link} = req.body
        const teacherLesson = await TeacherLesson.create({teacherId, lessonId, link})
        return res.json(teacherLesson)
    }

    async getAll(req, res) {
        const teacherLesson = await TeacherLesson.findAll()
        return res.json(teacherLesson)
    }

    async getOne(req, res) {
        const {id} = req.params
        const teacherLesson = await TeacherLesson.findOne({where: {id}})
        return res.json(teacherLesson)
    }

    async update(req, res) {
        let {teacherId, lessonId, link, id} = req.body

        if(!id){
            throw new Error("не указан ID")
        }

        const updateTeacherLesson = await TeacherLesson.update(
            {teacherId, lessonId, link, id}, {where: {id: id}}
        )
        return res.json(updateTeacherLesson)
    }
}

module.exports = new TeacherLessonController()