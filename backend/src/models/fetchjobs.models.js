const pool = require("../config/db");

const fetchAllJobs = async () => {
  const query = `
  select 
	  jobs.*,
    companies.name
  from jobs
  left join companies on jobs.company_id = companies.id;
  `;

  const [rows] = await pool.execute(query);

  return rows;
};

module.exports = fetchAllJobs;
