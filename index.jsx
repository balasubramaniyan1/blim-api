const express = require('express')
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const demoUsers = [
  { email: 'blimmet.demo@example.com', password: 'Blimmet123!' },
  { email: 'hello@blimmet.test', password: 'Welcome123!' },
  { email: 'test@test.com', password:'test@123'},
  { email: 'test1@test.com', password:'test1234'},

]

app.post('/login', (request, response) => {
  const { email, password } = request.body ?? {}

  if (typeof email !== 'string' || typeof password !== 'string') {
    return response.status(400).json(false)
  }

  const normalizedEmail = email.trim().toLowerCase()
  const user = demoUsers.find(
    (demoUser) => demoUser.email === normalizedEmail && demoUser.password === password,
  )

  return response.json(Boolean(user))
})

app.listen(PORT, () => {
  console.log(`Demo login API listening at http://localhost:${PORT}`)
})