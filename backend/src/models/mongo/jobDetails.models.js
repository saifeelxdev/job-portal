const mongoose = require("mongoose");

const jobDetailsSchema = new mongoose.Schema(
  {
    recruiterId: {
      type: Number,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: [String],
      default: [],
    },
    salary: {
      min: Number,
      max: Number,
    },
    experienceLevel: {
      type: String,
      enum: ["junior", "mid", "senior"],
    },
    remoteType: {
      type: String,
      enum: ["onsite", "remote", "hybrid"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("JobDetails", jobDetailsSchema);
