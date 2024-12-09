const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const cors = require('cors');
const router = express.Router();
const Contact = require("./contactSchema");

mongoose.connect("mongodb+srv://Himanshu_Pansuriya:Him2164@atlascluster.bpnu5lp.mongodb.net/demo",{})
.then(()=>{
    console.log("connected");

        router.use(cors());

        router.use(express.json());

        router.use(bodyParser.urlencoded({ extended: false }));

        router.get('/contact',async (req,res)=>{
            const contact = await Contact.find();
            res.send(contact)
        });

        router.get('/contact/:id', async (req, res) => {
            const contact = await Contact.findOne({ _id: req.params.id });
            res.send(contact);
        });

        router.delete('/contact/:id', async (req, res) => {
            const contact = await Contact.findOne({ _id: req.params.id });
            await contact.deleteOne();
            res.send(contact);
        });

        router.post('/contact', async (req, res) => {
            const contact = new Contact({
                name : req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                message: req.body.message,
            });

            await contact.save();
            res.send(contact);
        });

        router.patch('/contact/:id', async (req, res) => {
            const contact = await Contact.findOne({ _id: req.params.id });
            login.name = req.body.name;
            login.phone = req.body.phone;
            login.email = req.body.email;
            login.message = req.body.message;
            await contact.save();
            res.send(contact);
        });

        router.listen(3040,()=>{
            console.log("Server started @3040");
        })
});