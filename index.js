const express = require("express");
const path = require("path");

const app = express();

// ===============================
// STATIC FILES
// ===============================
app.use(express.static(__dirname));

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/asset", express.static(path.join(__dirname, "asset")));

// ===============================
// ROUTES
// ===============================

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "admin-dashboard.html"));
});

app.get("/student", (req, res) => {
    res.sendFile(path.join(__dirname, "student-dashboard.html"));
});

app.get("/teacher", (req, res) => {
    res.sendFile(path.join(__dirname, "teacher-dashboard.html"));
});

// Sertifikat
app.get("/sertifikat.html", (req, res) => {
    res.sendFile(path.join(__dirname, "sertifikat.html"));
});

// ===============================
// EXPORT UNTUK VERCEL
// ===============================
module.exports = app;

// ===============================
// LOCAL SERVER
// ===============================
if (require.main === module) {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server berjalan di http://localhost:${PORT}`);
    });
}