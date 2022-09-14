const {TimeTable} = require('../models/models')

class TimetableController {
    async create(req, res) {
        const {start, end} = req.body
        const timeTable = await TimeTable.create({start, end})
        return res.json(timeTable)
    }

    async getAll(req, res) {
        const timeTable = await TimeTable.findAll()
        return res.json(timeTable)
    }

    async getOne(req, res) {
        const {id} = req.params
        const timeTable = await TimeTable.findOne({where: {id}})
        return res.json(timeTable)
    }

}

module.exports = new TimetableController()