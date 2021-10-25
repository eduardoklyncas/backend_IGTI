const Clients = require('../models/Clients');
const { update } = require('../models/User');
const User = require('../models/User');

module.exports = {

    async delete(req, res) {
        const { company_id } = req.params;
        const clients = await Clients.destroy({where: {id: company_id}});

        return res.json(clients);

    },

    async index(req, res) {
        const { company_id } = req.params;
        const clients = await Clients.findAll({where: {company_id: company_id}});

        return res.json(clients);
    },

    async getById(req, res) {
        const { company_id, item_id } = req.params; 
        const client = await Clients.findOne({where: {id: item_id}});

        return res.json(client)
    },

    async update(req, res) {
        const { company_id, item_id } = req.params;  
        const { name, email, telefone, rua, numero, bairro, complemento, cidade, estado } = req.body;

        const user = await User.findByPk(company_id);

        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        const client = await Clients.update({
            name,
            email,
            telefone,
            rua,
            numero,
            bairro,
            complemento,
            cidade,
            estado,
            company_id,
        }, { where: { id: item_id } });

        return res.json(client);

    },

    async store(req, res) {
        const { company_id } = req.params;
        const { name, email, telefone, rua, numero, bairro, complemento, cidade, estado } = req.body;

        const user = await User.findByPk(company_id);

        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        const client = await Clients.create({
            name,
            email,
            telefone,
            rua,
            numero,
            bairro,
            complemento,
            cidade,
            estado,
            company_id,
        });

        return res.json(client);
    }
};