const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle GET request to root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/store-data', (req, res) => {
    const { name, email } = req.body;
    console.log('Received data:', req.body);

    // Read the existing data from the JSON file
    fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data.json:', err);
            return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }

        // Parse the existing data and add the new data
        const jsonData = JSON.parse(data);
        jsonData.push({ name, email });

        // Write the updated data back to the JSON file
        fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing to data.json:', err);
                return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
            }

            // Respond with success and redirect
            res.json({ status: 'success', data: req.body });
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
