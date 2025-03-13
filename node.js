const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
        cb(null, true);
    } else {
        cb(new Error("Only PDFs allowed!"), false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

app.use(express.static("public"));

app.post("/upload", upload.single("resume"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "Invalid file format. Upload only PDFs." });
    }
    res.json({ message: "Resume uploaded successfully!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
