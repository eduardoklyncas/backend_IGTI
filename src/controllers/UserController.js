const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },


    async store(req, res) {
        const {name, email, password} = req.body;

        const user = await User.create({ name, email, password });

        return res.json(user);
    },

    async login(req,res) {
        const {email, password} = req.body;
        const user = await User.findOne({  where: {
            [Op.and]: [
              { email: email },
              { password: password }
            ]
          }});

          return res.json(user);
    }
};