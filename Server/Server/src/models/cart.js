import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Cart = sequelize.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true 
    },
    sizing: {
        type: Sequelize.ENUM('small', 'normal', 'large')
    },
    extra: {
        type: Sequelize.TEXT
    },
    amount: {
        type: Sequelize.INTEGER
    },
    deliver: {
        type: Sequelize.INTEGER
    },
    product: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false, //Disable the field "createdAt", "updatedAt" in search 
    freezeTableName: true // Disable the modification of table names
});

export default Cart;