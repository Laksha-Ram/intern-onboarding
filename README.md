# Intern Onboarding
TEST-README-UPDATE

## Day - 1
**Frontend vs Backend**

Frontend is the part of a web application that users interact with directly, such as buttons, forms, and pages.
Backend handles the logic, data processing, and communication with databases and servers.

**Request–Response Lifecycle**

1. The browser sends a request to the server.
2. The server receives and processes the request.
3. The server sends a response back.
4. The browser displays the response to the user.

**Example**

When a user opens a website, the browser requests the page, the server processes it, and the response is shown as a webpage.

## Day 2 – JavaScript Basics

This script demonstrates core JavaScript fundamentals including variables,
functions, arrays, objects, error handling, and asynchronous programming
using promises and async/await.

## Day 3 – Node.js & Express Basics

**What I built**

A basic Express server with three GET endpoints to understand routes and request/response handling.

**How to run**

1. Install dependencies
   npm install
2. Start server
   node index.js
3. Open in browser
   http://localhost:3000

**Endpoints**

- GET /health
  - Purpose: simple health check to confirm server is running
  - Response: "Server is healthy 💚"

- GET /hello
  - Purpose: test route to return a greeting message
  - Response: "Hello from my first Express server 👋"

- GET /time
  - Purpose: return current server time
  - Response: "Current time is <time>"

## Day 4 – API Design & Data Handling

**Endpoints**

- POST /add-user  
  Adds a user using name and email sent as JSON.

- GET /users  
  Returns all stored users.

**Data Storage**

User data is stored in an in-memory array. Data resets when the server restarts.

## Day 5 – Git Discipline

**Focus:** Professional Git workflow

**Work Done:**
- Improved code readability using documentation comments
- Worked on a feature branch instead of directly on the base branch

**Key Learnings:**
- Writing meaningful commit messages
- Creating feature branches
- Raising pull requests for code review

**Implementation:**
- Branch: `feature/refactor-readability`
- One clean commit made
- Pull request opened to `master` with no logic changes

**Outcome:**
- Clean commit history
- Pull request successfully created

## Day 6 – React & Next.js Fundamentals

**Focus:** Modern frontend structure using Next.js

**Work Done**
- Created a Next.js application using `create-next-app`
- Used the Pages Router for file-based routing
- Built three pages:
  - Home (`/`)
  - About (`/about`)
  - Contact (`/contact`)
- Created a reusable `Navbar` component and reused it across pages
- Ran and tested the application locally using `npm run dev`

**Key Learnings**
- Understanding Next.js project structure
- File-based routing using the `pages` directory
- Creating and reusing React components
- Basic frontend navigation using `next/link`

**Outcome**
- Fully working multi-page Next.js frontend
- Clean and understandable frontend code structure

## Day 7 – Frontend & Backend Integration

**What I worked on**
- Integrated the Next.js frontend with the Express backend.
- Connected the frontend to the backend `/health` API endpoint.

**How the integration works**
- The backend Express server runs on `http://localhost:5000`.
- It exposes a `/health` endpoint that returns a status message.
- The Next.js frontend runs on `http://localhost:3000`.
- The frontend uses `fetch()` to call the backend API and display the response.

**Key concepts learned**
- Running frontend and backend as separate processes.
- Client–server communication using HTTP.
- Using environment variables (`NEXT_PUBLIC_API_BASE`) instead of hardcoding URLs.

**Outcome**
- Frontend successfully displays live data received from the backend API.

## Day 8 – AWS Fundamentals (S3)

Worked on understanding AWS at a high level and used Amazon S3 for static file hosting.

### What I did
- Created an AWS Free Tier account
- Created an S3 bucket
- Uploaded a static HTML file
- Configured public access using a bucket policy
- Verified access using a public URL

### What I learned
Amazon S3 is an object storage service that can be used to store and serve static files without managing any servers.

### Live S3 URL
https://laksha-day8-s3-demo.s3.ap-southeast-2.amazonaws.com/index.html

## Day 9 – Frontend Deployment (Vercel)

### Objective
Deploy the Next.js frontend application to Vercel and make it accessible via a production URL.

### Work Done
- Created and structured a Next.js frontend inside `Frontend-Next.js`
- Implemented basic routing using `pages/`:
  - `/` (Home)
  - `/about`
  - `/contact`
- Added reusable `Navbar` component for navigation
- Configured Vercel project with correct **Root Directory**
- Resolved initial build and 404 issues caused by incorrect build context
- Successfully deployed frontend to Vercel (Production)

### Key Learnings
- How Vercel handles monorepos and root directories
- Importance of correct framework detection (Next.js)
- Debugging build failures using Vercel Build Logs
- Understanding 404 issues caused by misconfigured deployments

### Deployment Link
🔗 https://intern-onboarding-61x7.vercel.app/

### Status
Completed

