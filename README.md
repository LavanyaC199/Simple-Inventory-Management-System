# Simple-Inventory-Management-System

Simple Inventory Management Backend
📌 Project Overview
This project is a Simple Inventory Management System Backend built using Node.js, Express.js, and MongoDB (Atlas). It provides REST APIs to manage inventory items and demonstrates backend fundamentals such as routing, middleware, database connection, and API testing using Postman.
This project is created as part of a Backend Assignment.
________________________________________
🛠️ Technologies Used
•	Node.js – JavaScript runtime environment
•	Express.js – Backend framework for building APIs
•	MongoDB Atlas – Cloud NoSQL database
•	Mongoose – ODM library for MongoDB
•	Nodemon – Development tool for auto-restarting server
•	Postman – API testing tool
________________________________________
📂 Project Structure
Simple Inventory Backend/
│
├── server.js          # Main server file
├── package.json       # Project configuration and dependencies
├── node_modules/      # Installed dependencies
└── README.md          # Project documentation
________________________________________
⚙️ How the Project Works
This section explains the server.js code in a simple and clear way so that anyone can understand how the backend works.
1️ Server Setup
•	Express server is created and runs on port 3000.
•	JSON middleware is used to handle request bodies.
•	A custom logger middleware logs request method and URL.
________________________________________
2️  MongoDB Connection
•	The project connects to MongoDB Atlas using Mongoose.
•	A database named inventoryDB is used.
•	Connection status is logged in the terminal.
________________________________________
3️  Data Model (Item)
An Item schema is created using Mongoose with the following fields:
•	name (String)
•	quantity (Number)
•	price (Number)
Each inventory item is stored as a document in MongoDB.
________________________________________
4️ API Endpoints
🔹 GET /
•	Checks whether the API is running.
•	Response:
Inventory API is Running
________________________________________
🔹 GET /health
•	Checks server health status.
•	Response:
{
  "status": "OK",
  "message": "Server is healthy and running"
}
________________________________________
🔹 POST /items
•	Adds a new item to the inventory.
•	Request Body:
{
  "name": "Laptop",
  "quantity": 5,
  "price": 55000
}
•	Response:
{
  "message": "Item added successfully",
  "item": { ... }
}
________________________________________
🔹 GET /items
•	Fetches all items from the inventory.
•	Response:
[
  {
    "name": "Laptop",
    "quantity": 5,
    "price": 55000
  }
]
________________________________________
5️ error Handling
•	If a user accesses an invalid route, a 404 JSON response is returned:
{
  "error": "Route not found"
}
________________________________________
🧠 Code Explanation (server.js)
1️  Importing Required Modules
const express = require("express");
const mongoose = require("mongoose");
•	express is used to create the backend server and APIs.
•	mongoose is used to connect Node.js with MongoDB and define schemas.
________________________________________
2️ Creating Express App and Port
const app = express();
const PORT = 3000;
•	app is the Express application instance.
•	The server runs on port 3000.
________________________________________
3️ Middleware
app.use(express.json());
•	This middleware converts incoming JSON data into JavaScript objects.
•	Required for handling POST request bodies.
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
•	Custom middleware to log HTTP method and URL.
•	next() passes control to the next middleware or route.
________________________________________
4️⃣ MongoDB Atlas Connection
mongoose.connect("<MongoDB_Atlas_URL>")
•	Connects the backend to MongoDB Atlas cloud database.
•	On success, it logs "MongoDB Atlas connected".
•	On failure, it logs the error message.
________________________________________
5️  Mongoose Schema and Model
const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
});
•	Defines the structure of an inventory item.
•	Each item has a name, quantity, and price.
const Item = mongoose.model("Item", itemSchema);
•	Creates a model to interact with the items collection in MongoDB.
________________________________________
6️  Routes
GET /
app.get("/", (req, res) => {
  res.send("Inventory API is Running");
});
•	Checks whether the API is running.
GET /health
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is healthy" });
});
•	Used to check server health status.
POST /items
app.post("/items", async (req, res) => { ... });
•	Adds a new item to the database.
•	Uses request body data and saves it in MongoDB.
GET /items
app.get("/items", async (req, res) => { ... });
•	Retrieves all inventory items from MongoDB.
________________________________________
7 404 Error Handling Middleware
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});
•	Handles invalid routes.
•	Returns a proper JSON error message.
________________________________________
8️     Starting the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
•	Starts the server and listens on port 3000.
________________________________________
▶️ How to Run the Project
Step 1: Install dependencies
npm install
Step 2: Start the server
npm run dev
Step 3: Server Output
MongoDB Atlas connected
Server running on http://localhost:3000
________________________________________
🧪 API Testing
•	All APIs are tested using Postman.
•	Requests include GET and POST methods.
•	Screenshots or Postman collection can be submitted.
________________________________________
✅ Conclusion
This project demonstrates how to:
•	Build REST APIs using Express.js
•	Connect Node.js backend to MongoDB Atlas
•	Create models using Mongoose
•	Test APIs using Postman
It fulfills all the requirements of the backend assignment.
________________________________________
✨ End of README

