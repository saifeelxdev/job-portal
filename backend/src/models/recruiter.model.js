const pool = require("../config/db");

const findRecruiterByEmail = async (email) => {
  const [rows] = await pool.execute(
    `
            SELECT * FROM companies WHERE email = ? LIMIT 1
        `,
    [email],
  );
  return rows.length ? rows[0] : null;
};

module.exports = {
  findRecruiterByEmail,
};
