const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (isNaN(userId) || userId <= 0) {
    return res.status(400).send({ error: 'Invalid user ID' });
  }
  // ... database query or other operation using userId ...
  // Add error handling for database errors
  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: 'Database error' });
    }
    if (!result.length) {
        return res.status(404).send({ error: 'User not found' });
    }
    res.send(result[0]);
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));