const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS for frontend requests
app.use(cors());

app.get('/rehab-list', (req, res) => {
  const results = [];
  const filePath = 'C:/Users/shash/Downloads/hospital_data.csv';

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
      // Example Business Rule: Only return facilities in California
      if (data['Provider State'] === 'CA') {
        results.push({
          name: data['Facility Name'],
          address: `${data['Address']}, ${data['City']}, ${data['Provider State']}`,
          phone: data['Phone Number']
        });
      }
    })
    .on('end', () => {
      res.json(results);
    })
    .on('error', (err) => {
      res.status(500).send('Error reading CSV: ' + err.message);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
