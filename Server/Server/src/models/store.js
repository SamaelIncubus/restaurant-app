import Sequelize, { BOOLEAN } from 'sequelize';
import { sequelize } from '../database/database';

const Store = sequelize.define('store', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true 
    },
    direction: {
        type: Sequelize.TEXT
    },
    phone: {
        type: Sequelize.INTEGER
    },
    arrival: {
        type: Sequelize.ARRAY(Sequelize.TIME)
    },
    leaving: {
        type: Sequelize.ARRAY(Sequelize.TIME)
    }
}, {
    timestamps: false, //Disable the field "createdAt", "updatedAt" in search
    freezeTableName: true // Disable the modification of table names
});

export default Store;