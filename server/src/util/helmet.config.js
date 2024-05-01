const cspConfig = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'",
      "'unsafe-eval'",
      "https://cdn.jsdelivr.net",
    ],
    styleSrc: ["'self'", "'unsafe-inline'", "https://maxcdn.bootstrapcdn.com"],
    imgSrc: ["'self'", "data:", "https://mdbootstrap.com"],
    fontSrc: [
      "'self'",
      "https://maxcdn.bootstrapcdn.com",
      "https://fonts.gstatic.com",
    ],
    objectSrc: ["'none'"],
    upgradeInsecureRequests: [],
  },
};
module.exports = cspConfig;
