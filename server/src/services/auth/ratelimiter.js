const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per windowMs
  message: { error: "Too many requests, please try again later" },
  keyGenerator: (req, res) => {
    return req.clientIp; // NOTE middleware request-ip
  },
});

module.exports = rateLimiter;
