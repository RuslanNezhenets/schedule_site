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

}

module.exports = new ScheduleController()