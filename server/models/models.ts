import { Pool } from 'pg';
require('dotenv').config()
// const PG_URI = process.env.PG_URI
const PG_URI = process.env.PG_URI || 'postgres://duluawzw:MOw-ZfIGBppwOHxuqOK6-NYSAWpAh6kg@jelani.db.elephantsql.com/duluawzw';

const pool = new Pool ({
    connectionString: PG_URI
});


module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text,params, callback);
    },
}