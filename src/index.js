const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Define a route
app.get('/', (req, res) => {
    const to = req.query.to || 'World';
    res.render('index', { to });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});