// const knex = require("knex")({
//     client: "pg",
//     connection: {
//         host: process.env.DB_HOST,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_DATABASE,
//         port: 5432,
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
// });

const knex = require("knex")({
    client: "pg",
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'post17gres',
        database: 'sangue_laranja',
        port: 5432
    }
});

module.exports = knex;