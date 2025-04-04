const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./connect'); 

const app = express();

const PORT = 3002;

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/review', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'review.html'));
});

app.post('/submit-review', (req, res) => {
  
  console.log(req.body); 

  const { name, email, rating, review } = req.body;

  const query = `INSERT INTO reviews (name, email, rating, review) VALUES (?, ?, ?, ?)`;

  db.query(query, [name, email, rating, review], (err, result) => {
    if (err) {
      console.log('Error inserting data:', err);
      res.status(500).json({ message: "Error submitting your review. Please try again." });
    } else {
      console.log('Review added successfully');
      res.json({ message: "Your review has been submitted successfully!" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
