import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'postgres', //Database name
    'postgres', //User name
    'pableras666', //Password
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 3000,
            idle: 10000
        },
        logging: false //Disable messages
    }
)