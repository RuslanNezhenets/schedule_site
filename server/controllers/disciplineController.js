const {Discipline} = require('../models/models')

class DisciplineController {
    async create(req, res) {
        const {title, elective} = req.body

        if(!title){
            return res.status(400).json({message: "Введите название дисциплины"})
        }

        if(title && await Discipline.findOne({where: {title}})){
            return res.status(400).json({message: "Дисциплина с таким названием уже существует"})
        }

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

    async update(req, res) {
        let {title, elective, id} = req.body

        if(!id){
            throw new Error("не указан ID")
        }
        if(!title){
            return res.status(400).json({message: "Введите название дисциплины"})
        }

        const discipline = await Discipline.findOne({where: {title}})
        if(discipline && discipline.id !== id){
            return res.status(400).json({message: "Дисциплина с таким названием уже существует"})
        }

        const updateDiscipline = await Discipline.update(
            {title, elective, id}, {where: {id: id}}
        )
        return res.json(updateDiscipline)
    }

    async delete(req, res) {
        const {id} = req.params
        if(!id){
            throw new Error("не указан ID")
        }
        const deleteDiscipline = await Discipline.destroy({where: {id: id}});
        res.json(deleteDiscipline)
    }

}

module.exports = new DisciplineController()