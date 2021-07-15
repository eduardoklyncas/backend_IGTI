const { Model, DataTypes } = require('sequelize');

class Clients extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            telefone: DataTypes.STRING,
            rua: DataTypes.STRING,
            numero: DataTypes.INTEGER,
            bairro: DataTypes.STRING,
            complemento: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, {foreignKey: 'company_id', as: 'company'})
    }
}

module.exports = Clients;