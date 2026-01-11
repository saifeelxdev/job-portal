require('dotenv').config();
const mysql = require('mysql2/promise');

async function initDB() {
    let connection;

    try {
        //connect without specifying database
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT
        });

        console.log('Connected to the database server.');

        //2. create database
        await connection.query(
            `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};`
        );
        console.log('database ensured.');

        //3. use database
        await connection.query(`USE ${process.env.DB_NAME};`);

        //4. create users table
        await connection.query(
            `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                role ENUM('user', 'admin') DEFAULT 'user',

                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

                UNIQUE KEY uk_users_email (email)
            );`
        );
    } catch (error) {
        console.error('Error initializing database:', error);
        process.exit(1);
    } finally {
        if (connection) {
            await connection.end();
        }
        process.exit(0);
    }
}

initDB();
