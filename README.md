# Intern Onboarding

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
