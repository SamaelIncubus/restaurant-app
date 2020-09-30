import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Client = sequelize.define('client', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    email: {
        type: Sequelize.TEXT
    },
    name: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.TEXT
    },
    photo:{
        type: Sequelize.TEXT
    },
    direction: {
        type: Sequelize.TEXT
    },
    phone: {
        type: Sequelize.INTEGER
    },
    admin:{
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false, //Disable the field "createdAt", "updatedAt" in search 
    freezeTableName: true // Disable the modification of table names
});

export default Client;