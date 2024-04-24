const fs = require("fs");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      path.join(__dirname, "..", "..", "public", "browser", "assets", "image")
    );
  },
  filname: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const originalExtension = path.extname(file.originalname);
    const uniqueFilename = `${uniqueSuffix}${originalExtension}`;
    cb(null, uniqueFilename);
  },
});
function handleFile(req, res, next) {
  if (!req.file) {
    next();
    return;
  }

  // Check file size (max 5 MB)
  if (req.file.size > 5 * 1024 * 1024) {
    fs.unlinkSync(
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "browser",
        "assets",
        "image",
        req.file.filename
      )
    ); // Delete the file
    return res
      .status(400)
      .json({ errors: [{ msg: "File size exceeds the limit (5MB)" }] });
  }

  // Check file type (allow only images)
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
  const ext = path.extname(req.file.originalname).toLowerCase();
  if (!allowedExtensions.includes(ext)) {
    fs.unlinkSync(
      path.join(
        __dirname,
        "..",
        "..",
        "public",
        "browser",
        "assets",
        "image",
        req.file.filename
      )
    ); // Delete the file
    return res.status(400).json({
      errors: [{ path: "file", msg: "Only image files are allowed" }],
    });
  }
  next();
}

const upload = multer({ storage: storage });

module.exports = { handleFile, upload };
