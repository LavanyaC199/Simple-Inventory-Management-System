// server.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// ---------- Middleware ----------
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ---------- MongoDB Atlas Connection ----------
mongoose
  .connect(
    "mongodb+srv://lavanyanasc_db_user:Lavanya%401000@cluster0.zlndyfh.mongodb.net/inventoryDB?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ---------- Item Schema ----------
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

// ---------- Routes ----------
app.get("/", (req, res) => {
  res.send("Inventory API is Running");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is healthy and running",
  });
});

app.post("/items", async (req, res) => {
  try {
    const { name, quantity, price } = req.body;

    const newItem = new Item({ name, quantity, price });
    await newItem.save();

    res.status(201).json({
      message: "Item added successfully",
      item: newItem,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ---------- 404 Handler ----------
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ---------- Start Server ----------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
