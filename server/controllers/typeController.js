const {Type} = require('../models/models')

class TypeController {
    async create(req, res) {
        const {title} = req.body
        const type = await Type.create({title})
        return res.json(type)
    }

    async getAll(req, res) {
        const type = await Type.findAll()
        return res.json(type)
    }

    async getOne(req, res) {
        const {id} = req.params
        const type = await Type.findOne({where: {id}})
        return res.json(type)
    }

}

module.exports = new TypeController()