# Blimmet API

Express API for Blimmet sign-in. All API endpoints use the `/api` prefix.

## Login endpoint

`POST /api/login`

Request content type: `application/json`

```json
{
  "email": "blimmet.demo@example.com",
  "password": "Blimmet123!"
}
```

Successful response (`200`):

```json
{
  "success": true,
  "message": "Login successful.",
  "user": {
    "email": "blimmet.demo@example.com"
  }
}
```

Invalid credentials return `401` with `success: false`; missing or invalid
credentials return `400` with `success: false`.

## Run locally

From this directory, install dependencies and start the server:

```sh
npm install
npm run dev
```

The local endpoint is `http://localhost:3000/api/login`. The Vite development
server proxies `/api` requests to this backend.

## Deploy to Vercel

Import the repository and set the Vercel project root directory to `Backend`.
Vercel uses `vercel.json` to route requests to the Express app exported by
`index.js`. The deployed login endpoint is
`https://<your-deployment-domain>/api/login`.

If the frontend is hosted separately, set its `VITE_API_URL` environment
variable to the backend deployment origin (for example,
`https://<your-deployment-domain>`), without a trailing slash.

## Demo account warning

The credentials in `auth.js` are hard-coded demo accounts with plain-text
passwords. This implementation is for local/testing use only; do not use real
accounts or passwords in production.
