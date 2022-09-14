const {Student} = require('../models/models')

class StudentController {
    async create(req, res) {
        let {surname, name, patronymic, telegramId} = req.body

        if(!surname){
            return res.status(400).json({message: "Фамилия не может отсутствовать"})
        }
        if(!name){
            return res.status(400).json({message: "Имя не может отсутствовать"})
        }
        if(!patronymic){
            return res.status(400).json({message: "Отчество не может отсутствовать"})
        }

        if(telegramId && await Student.findOne({where: {telegramId}})){
            return res.status(400).json({message: "Преподаватель с таким telegram уже существует"})
        } else if (!telegramId){
            telegramId = null
        }

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

    async update(req, res) {
        let {surname, name, patronymic, telegramId, id} = req.body

        if(!id){
            throw new Error("не указан ID")
        }
        if(!surname){
            return res.status(400).json({message: "Фамилия не может отсутствовать"})
        }
        if(!name){
            return res.status(400).json({message: "Имя не может отсутствовать"})
        }
        if(!patronymic){
            return res.status(400).json({message: "Отчество не может отсутствовать"})
        }
        if(!telegramId){
            return res.status(400).json({message: "Нужно указать телеграм студента"})
        }

        const updateStudent = await Student.update(
            {surname, name, patronymic, telegramId, id}, {where: {id: id}}
        )
        return res.json(updateStudent)
    }

    async delete(req, res) {
        const {id} = req.params
        if(!id){
            throw new Error("не указан ID")
        }
        const deleteStudent = await Student.destroy({where: {id: id}});
        res.json(deleteStudent)
    }

}

module.exports = new StudentController()