Book Store Project using MERN Stack
This is a full-stack web application for a book store built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can browse through a collection of books, search for specific titles, view details of each book, add them to their cart for purchase, create new books, edit existing books, and delete books.

Features
Show Books: Browse through a collection of books using cards and tables.
Create New Books: Add new books to the collection.
Edit Existing Books: Modify details of existing books.
Delete Books: Remove books from the collection.
Show Description: View detailed description of each book.
Installation
Clone the repository to your local machine:

git clone https://github.com/yourusername/book-store.git
Navigate to the project directory:

cd book-store
Install dependencies for both frontend and backend:

npm install
cd ./frontend
npm install
Create a .env file in the root directory of the project:

PORT=3000
mongoDBURL=your_mongodb_url
Replace your_mongodb_url with the URL of your MongoDB database.

Change the axios url in frontend/src/pages

https://book-store-b8k4.onrender.com replace this with http://localhost:3000 in all files in frontend/src/pages 

Start the server:

npm run dev
Start the client:

cd frontend
npm run dev
Open your browser and navigate to http://localhost:5173 to view the application.

Usage
As a user, you can browse through the collection of books using cards and tables, view detailed descriptions of each book, and add them to your cart for purchase.
If you are an admin, you can access the admin panel by logging in with your credentials. From there, you can manage books by creating new ones, editing existing ones, or deleting books.
Technologies Used
MongoDB
Express.js
React.js
Node.js
