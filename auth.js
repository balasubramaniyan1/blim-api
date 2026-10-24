const demoUsers = [
  { email: 'blimmet.demo@example.com', password: 'Blimmet123!' },
  { email: 'hello@blimmet.test', password: 'Welcome123!' },
  { email: 'test@test.com', password: 'test@123' },
  { email: 'test1@test.com', password: 'test1234' },
]

function authenticate(email, password) {
  if (typeof email !== 'string' || typeof password !== 'string') {
    return {
      status: 400,
      body: {
        success: false,
        message: 'Email and password are required.',
      },
    }
  }

  const normalizedEmail = email.trim().toLowerCase()
  const user = demoUsers.find(
    (demoUser) => demoUser.email === normalizedEmail && demoUser.password === password,
  )

  if (!user) {
    return {
      status: 401,
      body: {
        success: false,
        message: 'You are not a registered user. Check your email and password.',
      },
    }
  }

  return {
    status: 200,
    body: {
      success: true,
      message: 'Login successful.',
      user: { email: user.email },
    },
  }
}

module.exports = authenticate
