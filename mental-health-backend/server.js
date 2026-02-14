const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MySQL (XAMPP)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // XAMPP default
  password: '',        // XAMPP default has empty password
  database: 'mental_health'
});

db.connect(err => {
  if (err) {
    console.log('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database!');
  }
});

// POST /mood
app.post('/mood', (req, res) => {
  const { full_name, mood_text } = req.body;

  let aiMessage = '';
  if (!mood_text) {
    aiMessage = "It's okay if you don't know how to feel yet. Take your time.";
  } else if (mood_text.toLowerCase().includes('sad')) {
    aiMessage = "I'm sorry you're feeling sad. Remember, you're not alone.";
  } else if (mood_text.toLowerCase().includes('happy')) {
    aiMessage = "That's great to hear! Keep that positive energy going.";
  } else {
    aiMessage = "Thank you for sharing your feelings. Take care of yourself.";
  }

  // Insert mood into database
  db.query(
    'INSERT INTO moods (full_name, mood_text) VALUES (?, ?)',
    [full_name, mood_text],
    (err, result) => {
      if (err) return res.status(500).json({ error: 'Database error' });

      // Return all moods for history
      db.query('SELECT * FROM moods ORDER BY id DESC', (err, rows) => {
        if (err) return res.status(500).json({ error: 'Database error' });

        res.json({
          ai_message: aiMessage,
          history: rows
        });
      });
    }
  );
});

// GET /moods
app.get('/moods', (req, res) => {
  db.query('SELECT * FROM moods ORDER BY id DESC', (err, rows) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(rows);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
