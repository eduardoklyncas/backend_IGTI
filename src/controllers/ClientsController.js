const Clients = require('../models/Clients');
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