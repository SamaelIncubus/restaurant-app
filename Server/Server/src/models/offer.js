import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Offer = sequelize.define('offer', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    description: {
        type: Sequelize.TEXT
    },
    launch: {
        type: Sequelize.DATE
    },
    closing: {
        type: Sequelize.DATE
    },
    discount: {
        type: Sequelize.DOUBLE
    }
}, {
    timestamps: false, //Disable the field "createdAt", "updatedAt" in search 
    freezeTableName: true // Disable the modification of table names
});

export default Offer;