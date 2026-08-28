const express = require("express");
const path = require("path");

const app = express();

// Port dari hosting atau 3000 untuk lokal
const PORT = process.env.PORT || 3000;

// Folder public sebagai static files
app.use(express.static(path.join(__dirname)));

// Route utama
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});