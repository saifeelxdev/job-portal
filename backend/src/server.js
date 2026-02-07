require("dotenv").config();
const connectMongo = require("./config/mongodb");
const app = require("./app");
const { checkDatabaseConnection } = require("./config/db.health");
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await checkDatabaseConnection(); //verify DB access
    await connectMongo();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(
      "Server not started due to database conenction issue:",
      error,
    );
    process.exit(1);
  }
})();
