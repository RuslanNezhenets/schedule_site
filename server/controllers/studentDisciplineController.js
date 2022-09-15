const {StudentDiscipline} = require('../models/models')

class StudentDisciplineController {
    async create(req, res) {
        const {studentId, disciplineId} = req.body

        let studentDiscipline = await StudentDiscipline.findOne({where: {studentId, disciplineId}})
        if(studentDiscipline)
            return res.status(400).json({message: "Вы уже выбрали эту дисциплину"})

        studentDiscipline = await StudentDiscipline.create({studentId, disciplineId})
        return res.json(studentDiscipline)
    }

    async getAll(req, res) {
        const studentDiscipline = await StudentDiscipline.findAll()
        return res.json(studentDiscipline)
    }

    async getOne(req, res) {
        const {id} = req.params
        const studentDiscipline = await StudentDiscipline.findOne({where: {id}})
        return res.json(studentDiscipline)
    }

    async update(req, res) {
        let {studentId, disciplineId, id} = req.body

        const studentDiscipline = await StudentDiscipline.findOne({where: {studentId, disciplineId}})
        if(studentDiscipline && studentDiscipline.id !== id)
            return res.status(400).json({message: "Вы уже выбрали эту дисциплину"})

        const updateStudentDiscipline = await StudentDiscipline.update(
            {studentId, disciplineId, id}, {where: {id: id}}
        )
        return res.json(updateStudentDiscipline)
    }

    async delete(req, res) {
        const {id} = req.params
        if(!id){
            throw new Error("не указан ID")
        }
        const deleteStudentDiscipline = await StudentDiscipline.destroy({where: {id: id}});
        res.json(deleteStudentDiscipline)
    }

}

module.exports = new StudentDisciplineController()