const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Login = require("./loginpageSchema");

mongoose
  .connect(
    "mongodb+srv://Himanshu_Pansuriya:Him2164@atlascluster.bpnu5lp.mongodb.net/demo",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");

    const app = express();

    app.use(cors());

    app.use(express.json());

    app.use(bodyParser.urlencoded({ extended: false }));

    app.get("/login", async (req, res) => {
      const login = await Login.find();
      res.send(login);
    });

    app.get("/login/:id", async (req, res) => {
      const login = await Login.findOne({ _id: req.params.id });
      res.send(login);
    });

    app.delete("/login/:id", async (req, res) => {
      const login = await Login.findOne({ _id: req.params.id });
      await login.deleteOne();
      res.send(login);
    });

    app.delete("/signup/:name", async (req, res) => {
      const login = await Login.findOne({ _id: req.params.name });
      await login.deleteOne();
      res.send(login);
    });

    app.get("/signup", async (req, res) => {
      const login = await Login.find();
      res.send(login);
    });

    // Signup route
    app.post("/signup", async (req, res) => {
      try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        let user = await Login.findOne({ email });
        if (user) {
          return res.status(400).json({ error: "User already exists" });
        }

        // Create a new user with the provided details
        user = new Login({ name, email, password, role });
        await user.save();

        return res.status(201).json({ message: "Signup successful", user });
      } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ error: "An error occurred during signup" });
      }
    });

    // Login route
    app.post("/login", async (req, res) => {
      try {
        const { email, password, role } = req.body;

        // Check if user exists
        let user = await Login.findOne({ email });
        if (!user) {
          return res.status(401).json({ error: "Invalid credentials" });
        }

        // Validate password
        if (user.password !== password) {
          return res.status(401).json({ error: "Invalid credentials" });
        }

        // Check if the role sent from the client matches the user's role
        if (user.role !== role) {
          return res.status(401).json({ error: "Invalid role" });
        }

        // Login successful
        return res.json({ message: "Login successful", user });
      } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "An error occurred during login" });
      }
    });

    app.patch("/signup/:id", async (req, res) => {
      const login = await Login.findOne({ _id: req.params.id });
      login.name = req.body.name;
      login.email = req.body.email;
      login.password = req.body.password;
      login.role = req.body.role;
      await login.save();
      res.send(login);
    });

    app.patch("/login/:id", async (req, res) => {
      const login = await Login.findOne({ _id: req.params.id });
      login.name = req.body.name;
      login.email = req.body.email;
      login.password = req.body.password;
      login.role = req.body.role;
      await login.save();
      res.send(login);
    });

    app.listen(3045, () => {
      console.log("Server started @3045");
    });
  });
