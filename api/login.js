const demoUsers = [
  { email: 'blimmet.demo@example.com', password: 'Blimmet123!' },
  { email: 'hello@blimmet.test', password: 'Welcome123!' },
  { email: 'test@test.com', password: 'test@123' },
  { email: 'test1@test.com', password: 'test1234' },
]

module.exports = function login(request, response) {
  response.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*')
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (request.method === 'OPTIONS') {
    return response.status(204).end()
  }

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST, OPTIONS')
    return response.status(405).json({ message: 'Method not allowed.' })
  }

  const { email, password } = request.body ?? {}
  if (typeof email !== 'string' || typeof password !== 'string') {
    return response.status(400).json(false)
  }

  const normalizedEmail = email.trim().toLowerCase()
  const isValidUser = demoUsers.some(
    (user) => user.email === normalizedEmail && user.password === password,
  )

  return response.status(200).json(isValidUser)
}
