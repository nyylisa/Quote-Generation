# Voilà
Ny Lisa

## Brief Description
This is a web application that fetches a new inspirational quote with a button click and allows users to contribute their own quotes via a simple form. The project is built using Next.js for both the frontend and backend, with Drizzle ORM for database interactions and PostgreSQL as the database.
## Setup Instructions
To get this project up and running on your local machine, follow these steps:

Clone the repository:
```
git clone https://github.com/nyylisa/Quote-Generation
cd <Quote-Generation>
```
Install dependencies:
```
npm install
```
## Set up your database:

- Create a PostgreSQL database.

- Create a .env file in the root directory.

- Add your database connection string to the .env file:
```
DATABASE_URL="postgresql://user:password@host:port/database_name"
```
Run the development server:
```
npm run dev
```
The application will be accessible at http://localhost:3000.

## Architecture Explanation
How it Works
### Fetching a Quote:

- Frontend: The user clicks the "Get Another Quote" button on the page.tsx. This triggers a fetch request to the backend API route.

- Backend: The request is handled by a Next.js API route (e.g., /api/quotes). This route uses Drizzle ORM to query the PostgreSQL database. It retrieves a random quote and sends it back as a JSON response.

- Frontend: The frontend receives the JSON response, updates its state, and displays the new quote and author on the page.

### Adding a Quote:

- Frontend: The user clicks the "Add Your Quote" button, which opens a modal. They fill out a form with a quote and their name.

- Backend: When the user submits the form, the frontend makes a POST request to a different API route (e.g., /api/quotes/add). This route uses Drizzle ORM to insert the new quote into the quotes table in the PostgreSQL database.

- Backend: The API responds with a success message, and the frontend closes the modal.

Web Deployment link: https://quote-generation-mocha.vercel.app/
