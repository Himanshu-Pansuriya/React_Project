const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Makan = require("./makanSchema.js");
const Login = require("./loginpageSchema");
const Contact = require("./contactSchema");

mongoose
  .connect(
    "mongodb+srv://Himanshu_Pansuriya:Him2164@atlascluster.bpnu5lp.mongodb.net/demo",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected");

    const app = express();

    app.use(cors());

    app.use(express.json());

    app.use(bodyParser.urlencoded({ extended: false }));

    app.get("/Makan", async (req, res) => {
      const makan = await Makan.find();
      console.log("get darshan");
      res.send(makan);
    });

    app.get("/Makan/:id", async (req, res) => {
      const makan = await Makan.findOne({ _id: req.params.id });
      res.send(makan);
    });

    app.delete("/Makan/:id", async (req, res) => {
      const makan = await Makan.findOne({ _id: req.params.id });
      await makan.deleteOne();
      res.send(makan);
    });

    app.post("/Makan", async (req, res) => {
      const makan = new Makan({
        imgSrc: req.body.imgSrc,
        sellRentType: req.body.sellRentType,
        propertyType: req.body.propertyType,
        price: req.body.price,
        title: req.body.title,
        location: req.body.location,
        area: req.body.area,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        contact: req.body.contact,
      });

      await makan.save();
      console.log("post darshan");
      res.send(makan);
    });

    app.patch("/Makan/:id", async (req, res) => {
      const makan = await Makan.findOne({ _id: req.params.id });
      makan.imgSrc = req.body.imgSrc;
      makan.sellRentType = req.body.sellRentType;
      makan.propertyType = req.body.propertyType;
      makan.price = req.body.price;
      makan.title = req.body.title;
      makan.location = req.body.location;
      makan.area = req.body.area;
      makan.bedrooms = req.body.bedrooms;
      makan.bathrooms = req.body.bathrooms;
      makan.contact = req.body.contact,
      makan.wowDelay = req.body.wowDelay;

      await makan.save();
      res.send(makan);
    });

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

    app.delete("/signup/:id", async (req, res) => {
      const login = await Login.findOne({ _id: req.params.id });
      await login.deleteOne();
      res.send(login);
    });

    app.get("/signup", async (req, res) => {
      const login = await Login.find();
      res.send(login);
    });

    app.get("/signup/:id", async (req, res) => {
      const login = await Login.findOne({ _id: req.params.id });
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

    app.get('/contact', async (req, res) => {
      const contact = await Contact.find();
      res.send(contact);
  });

  app.get('/contact/:id', async (req, res) => {
      const contact = await Contact.findOne({ _id: req.params.id });
      res.send(contact);
  });

  app.delete('/contact/:id', async (req, res) => {
      const contact = await Contact.findOne({ _id: req.params.id });
      await contact.deleteOne();
      res.send(contact);
  });

  app.post('/contact', async (req, res) => {
      const contact = new Contact({
          name: req.body.name,
          phone: req.body.phone,
          email: req.body.email,
          message: req.body.message,
      });

      await contact.save();
      res.send(contact);
  });

  app.patch('/contact/:id', async (req, res) => {
      const contact = await Contact.findOne({ _id: req.params.id });
      contact.name = req.body.name;
      contact.phone = req.body.phone;
      contact.email = req.body.email;
      contact.message = req.body.message;
      await contact.save();
      res.send(contact);
  });

    app.listen(3032, () => {
      console.log("server started @ 3032");
    });
  });
