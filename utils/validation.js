const joi = require("joi");

const registerValidator = joi.object({
  // pharmacyName: joi.string().required(),
  fullName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required().min(8),
  // registrationNumber: joi.string().required(),
  // location: joi.string().required(),
});

const loginValidator = joi.object({
  // pharmacyName: joi.string().required(),
  fullName: joi.string().required(),
  // email: joi.string().email().required(),
  password: joi.string().required().min(8),
  // registrationNumber: joi.string().required(),
});

module.exports = {
  registerValidator,
  loginValidator,
};
