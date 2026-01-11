require('dotenv').config();

const app = require('./app'); 
const { checkDatabaseConnection } = require('./config/db.health');
const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await checkDatabaseConnection(); //verify DB access
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.error('Server not started due to database conenction issue:', error);
        process.exit(1);
    }
})();



