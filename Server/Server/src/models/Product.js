import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true 
    },
    name: {
        type: Sequelize.TEXT
    },
    allergens: {
        type: Sequelize.ARRAY(Sequelize.BOOLEAN)
    },
    price: {
        type: Sequelize.ARRAY(Sequelize.DOUBLE)
    },
    information: {
        type: Sequelize.ARRAY(Sequelize.DOUBLE)
    },
    photo: {
        type: Sequelize.TEXT
    },
    category: {
        type: Sequelize.ENUM('drink', 'dessert', 'snack', 'meal')
    },
    description: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false, //Disable the field "createdAt", "updatedAt" in search
    freezeTableName: true // Disable the modification of table names
}
);

export default Product;