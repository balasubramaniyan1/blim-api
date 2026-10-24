const authenticate = require('../auth')

module.exports = function login(request, response) {
  response.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*')
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (request.method === 'OPTIONS') {
    return response.status(204).end()
  }

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST, OPTIONS')
    return response.status(405).json({
      success: false,
      message: 'Method not allowed.',
    })
  }

  const body = request.body ?? {}
  const formData = typeof body === 'string' ? new URLSearchParams(body) : body
  const email = formData instanceof URLSearchParams ? formData.get('email') : formData.email
  const password = formData instanceof URLSearchParams ? formData.get('password') : formData.password

  const result = authenticate(email, password)
  return response.status(result.status).json(result.body)
}
