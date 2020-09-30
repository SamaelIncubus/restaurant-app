import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Deliver = sequelize.define('deliver', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    price: {
        type: Sequelize.DOUBLE
    },
    deliverman: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
    },
    day: {
        type: Sequelize.DATE
    },
    direction: {
        type: Sequelize.TEXT
    },
    client: {
        type: Sequelize.INTEGER
    },
    store: {
        type: Sequelize.INTEGER
    },
    offer: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false, //Disable the field "createdAt", "updatedAt" in search 
    freezeTableName: true // Disable the modification of table names
});

export default Deliver;