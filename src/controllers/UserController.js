const User = require('../models/User');
const { Op } = require('sequelize');


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

    async login(req, res) {
        const {email, password} = req.body;

          const user = await User.findOne({ where: {email: email}});

        let resp = {};
          if (user && user.dataValues.password === password) {
              resp.id = user.dataValues.id;
              resp.name = user.dataValues.name;
              resp.status = true;
          } else {
              resp.status = false;
          }

          return res.json(resp);
    }
};