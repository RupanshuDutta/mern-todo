const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("./conn/conn");
const auth = require("./routes/auth");
const list = require("./routes/list");

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "frontend", "dist")));

// Routes
app.use("/api/v1", auth);
app.use("/api/v2", list);

// Serve the frontend for any other route
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

// Start the server
app.listen(1000, () => {
    console.log("Server Started on port 1000");
});
