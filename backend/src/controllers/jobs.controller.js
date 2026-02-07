const asyncHandler = require("../utils/asyncHandler");
const { createJob, createJobDetails } = require("../models/jobs.models");
const jobController = asyncHandler(async (req, res) => {
  const {
    title,
    jobType,
    location,
    status,
    deadline,
    description,
    salary,
    requirements,
    experienceLevel,
    remoteType,
  } = req.body;
  const recruiterId = req.user.recruiterId;
  if (!recruiterId) {
    return res.status(401).json({
      success: false,
      message: "Recruiter does not exist",
    });
  }

  const jobId = await createJob({
    recruiterId,
    title,
    jobType,
    location,
    status: "open",
    deadline,
  });

  const jobDetailsId = await createJobDetails({
    recruiterId,
    description,
    requirements: requirements.split(","),
    salary,
    experienceLevel,
    remoteType,
  });
  console.log(jobDetailsId);
  return res.status(201).json({
    success: true,
    message: "Job Created Succesfully",
    data: { jobId, jobDetailsId },
  });
});

module.exports = { jobController };
