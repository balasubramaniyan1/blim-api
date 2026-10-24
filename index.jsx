const express = require('express')
const cors = require("cors")
const authenticate = require('./auth')
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.post('/login', (request, response) => {
  const { email, password } = request.body ?? {}
  const result = authenticate(email, password)
  return response.status(result.status).json(result.body)
})

app.listen(PORT, () => {
  console.log(`Demo login API listening at http://localhost:${PORT}`)
})

// CRITICAL: Export the app instance for Vercel
module.exports = app;
