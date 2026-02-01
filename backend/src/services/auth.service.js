const AppError = require("../utils/appError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SALT_ROUNDS = 10;
const {
  createUser,
  findUserByEmail,
  createRecruiter,
} = require("../models/user.model");
const { findRecruiterByEmail } = require("../models/recruiter.model");

const registerUser = async ({ name, email, password, role }) => {
  if (!name || !email || !password) {
    throw new AppError("Name, email and password are required", 400);
  }

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new AppError("User already exists", 409);
  }

  const password_hash = await bcrypt.hash(password, SALT_ROUNDS);

  const userId = await createUser({
    name,
    email,
    password_hash,
    role,
  });

  return { id: userId, name, email, role };
};

const registerRecruiter = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw new AppError("Name, email and password are required", 400);
  }

  const password_hash = await bcrypt.hash(password, SALT_ROUNDS);

  const userId = await createRecruiter({
    name,
    email,
    password_hash,
  });

  return { id: userId, name, email };
};

const loginUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new AppError("Email and password are required.", 400);
  }

  email = email.toLowerCase().trim();

  const user = await findUserByEmail(email);

  if (!user) {
    throw new AppError("User doesn't exist", 404);
  }

  const isMatch = await bcrypt.compare(password, user.password_hash);

  if (!isMatch) {
    throw new AppError("Invalid email or password", 401);
  }

  const recruiter = await findRecruiterByEmail(email);

  const role = recruiter ? "recruiter" : "candidate";

  const payload = {
    sub: user.id,
    role,
  };

  if (role === "recruiter") {
    payload.recruiterId = recruiter.id;
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

  const responseUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    role,
  };

  if (role === "recruiter") {
    responseUser.recruiterId = recruiter.id;
  }
  return {
    token,
    user: responseUser,
  };
};

module.exports = {
  registerUser,
  registerRecruiter,
  loginUser,
};
