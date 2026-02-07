const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MondoDB connected.");
  } catch (err) {
    console.error("MongoDB connection Failed: ", err.message);
  }
};

module.exports = connectMongo;
