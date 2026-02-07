const pool = require("../config/db");
const JobDetails = require("../models/mongo/jobDetails.models");

const createJob = async ({
  recruiterId,
  title,
  jobType,
  location,
  status,
  deadline,
}) => {
  const [result] = await pool.execute(
    `
      INSERT INTO jobs (company_id, title, job_type, location, status, application_deadline)
      VALUES (?, ?, ?, ?, ?, ?)
    `,
    [recruiterId, title, jobType, location, status, deadline],
  );

  return result.insertId;
};

const createJobDetails = async ({
  recruiterId,
  description,
  requirements,
  salary,
  experienceLevel,
  remoteType,
}) => {
  console.log(
    recruiterId,
    description,
    requirements,
    salary,
    experienceLevel,
    remoteType,
  );
  const jobDetails = await JobDetails.create({
    recruiterId,
    description,
    requirements,
    salary,
    experienceLevel,
    remoteType,
  });

  return jobDetails;
};
module.exports = { createJob, createJobDetails };
