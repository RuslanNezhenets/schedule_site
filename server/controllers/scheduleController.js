const {Schedule} = require('../models/models')

class ScheduleController {
    async create(req, res) {
        const {week, day, lessonId, timeTableId} = req.body
        const schedule = await Schedule.create({week, day, lessonId, timeTableId})
        return res.json(schedule)
    }

    async getAll(req, res) {
        const schedule = await Schedule.findAll()
        return res.json(schedule)
    }

    async getOne(req, res) {
        const {id} = req.params
        const schedule = await Schedule.findOne({where: {id}})
        return res.json(schedule)
    }

    async update(req, res) {
        let {week, day, lessonId, timeTableId, id} = req.body

        if(!id){
            throw new Error("не указан ID")
        }

        const updateSchedule = await Schedule.update(
            {week, day, lessonId, timeTableId, id}, {where: {id: id}}
        )
        return res.json(updateSchedule)
    }

    async delete(req, res) {
        const {id} = req.params
        if(!id){
            throw new Error("не указан ID")
        }
        const deleteSchedule = await Schedule.destroy({where: {id: id}});
        res.json(deleteSchedule)
    }

}

module.exports = new ScheduleController()