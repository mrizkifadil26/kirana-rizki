const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
    const to = req.query.to || 'World';
    const filePath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.sendFile(filePath);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;