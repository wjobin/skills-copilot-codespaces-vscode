// Create web server
const express = require('express')
const app = express()
const port = 3000

// Create a comment
app.post('/comment', (req, res) => {
  res.send('Comment created')
})

// Read a comment
app.get('/comment', (req, res) => {
  res.send('Comment read')
})

// Update a comment
app.put('/comment', (req, res) => {
  res.send('Comment updated')
})

// Delete a comment
app.delete('/comment', (req, res) => {
  res.send('Comment deleted')
})

app.listen(port, () => {
  console.log(`Comment service listening at http://localhost:${port}`)
})