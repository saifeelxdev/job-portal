const asyncHandler = require("../utils/asyncHandler");
const {
  registerUser,
  registerRecruiter,
  loginUser,
} = require("../services/auth.service");

const registerController = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, password, role } = req.body;
  const ALLOWED_ROLES = ["candidate", "recruiter"];

  if (!ALLOWED_ROLES.includes(role)) {
    return res.status(400).json({
      success: false,
      message: "Invalid role",
    });
  }

  const user = await registerUser({ name, email, password, role });
  if (role === "recruiter") {
    await registerRecruiter({ name, email, password });
  }
  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: user,
  });
});

const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const result = await loginUser({ email, password });

  res.status(200).json({
    success: true,
    message: "Login successful",
    data: result,
  });
});

module.exports = {
  registerController,
  loginController,
};
