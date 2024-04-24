const { body } = require("express-validator");

// ANCHOR - validate user data when he is register
const validationUserDate = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("name must be t least 3 characters"),
  body("location")
    .trim()
    .notEmpty()
    .withMessage("Please provide us with your current location"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).{8,}$/
    )
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, one number"
    ),
];

// ANCHOR - validate user data when he edit your profile
const validateUserDataProfile = (req, res, next) => {
  if (req.body.name || req.body.name == "") {
    return body("name")
      .trim()
      .notEmpty()
      .withMessage("Name can't be empty")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters")(req, res, next);
  } else if (req.body.email || req.body.email == "") {
    return body("email").isEmail().withMessage("Invalid email format")(
      req,
      res,
      next
    );
  } else if (req.body.password || req.body.password == "") {
    return body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
      )
      .withMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )(req, res, next);
  } else if (req.body.location || req.body.location == "") {
    body("location")
      .trim()
      .notEmpty()
      .withMessage("Please provide us with your current location")(
      req,
      res,
      next
    );
  } else {
    next();
  }
};

module.exports = { validationUserDate, validateUserDataProfile };
