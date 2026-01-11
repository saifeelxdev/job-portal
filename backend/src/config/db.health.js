const pool = require('./db');

const checkDatabaseConnection = async () => {
    try {
        await pool.query("SELECT 1");
        console.log("Database connected.");
    } catch (error) {
        console.error("Database connection failed: ", error);
        process.exit(1);
    }
};

module.exports = {
    checkDatabaseConnection
}