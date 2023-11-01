const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

// Define routes for your web pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'gallery.html'));
});

app.get('/orders', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'orders.html'));
});

// Define an API route for retrieving data
app.get('/api/data', (req, res) => {
    // You can replace this with actual data or connect to a database
    const apiData = {
        message: 'This is sample API data',
        timestamp: new Date()
    };
    res.json(apiData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
