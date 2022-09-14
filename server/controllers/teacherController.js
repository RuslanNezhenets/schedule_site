const {Teacher} = require('../models/models')

class TeacherController {
    async create(req, res) {
        let {surname, name, patronymic, phone, email, telegram} = req.body

        if(!surname){
            return res.status(400).json({message: "Фамилия не может отсутствовать"})
        }
        if(!name){
            return res.status(400).json({message: "Имя не может отсутствовать"})
        }
        if(!patronymic){
            return res.status(400).json({message: "Отчество не может отсутствовать"})
        }

        if(phone && await Teacher.findOne({where: {phone}})){
                return res.status(400).json({message: "Преподаватель с таким номером уже существует"})
        } else if (!phone) {
            phone = null
        }
        if(email && await Teacher.findOne({where: {email}})){
            return res.status(400).json({message: "Преподаватель с таким email уже существует"})
        } else if (!email){
            email = null
        }
        if(telegram && await Teacher.findOne({where: {telegram}})){
            return res.status(400).json({message: "Преподаватель с таким telegram уже существует"})
        } else if (!telegram){
            telegram = null
        }

        const teacher = await Teacher.create({surname, name, patronymic, phone, email, telegram})
        return res.json(teacher)
    }

    async getAll(req, res) {
        const teachers = await Teacher.findAll()
        return res.json(teachers)
    }

    async getOne(req, res) {
        const {id} = req.params
        const teachers = await Teacher.findOne({where: {id}})
        return res.json(teachers)
    }

    async update(req, res) {
        let {surname, name, patronymic, phone, email, telegram, id} = req.body
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

        if(phone && (await Teacher.findAll({where: {phone}})).length > 0){
            return res.status(400).json({message: "Преподаватель с таким номером уже существует"})
        } else if (!phone) {
            phone = null
        }
        if(email && (await Teacher.findAll({where: {email}})).length > 0){
            return res.status(400).json({message: "Преподаватель с таким email уже существует"})
        } else if (!email){
            email = null
        }
        if(telegram && ((await Teacher.findAll({where: {telegram, [Op.ne]: id}})).length > 1 ||
            Teacher.findOne({where: {telegram}}).id !== id)){
            return res.status(400).json({message: "Преподаватель с таким telegram уже существует"})
        } else if (!telegram){
            telegram = null
        }

        const updateTeacher = await Teacher.update(
            {surname, name, patronymic, phone, email, telegram, id}, {where: {id: id}}
        )
        return res.json(updateTeacher)
    }

    async delete(req, res) {
        const {id} = req.params
        if(!id){
            throw new Error("не указан ID")
        }
        const deleteTeacher = await Teacher.destroy({where: {id: id}});
        res.json(deleteTeacher)
    }
}

module.exports = new TeacherController()