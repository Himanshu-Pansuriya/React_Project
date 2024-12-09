const mongoose = require('mongoose');
const express = require("express");
const Makan = require("./makanSchema.js");
const bodyParser = require("body-parser");
const cors = require('cors');

mongoose.connect("mongodb+srv://Himanshu_Pansuriya:Him2164@atlascluster.bpnu5lp.mongodb.net/demo", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected");

        const app = express();

        app.use(cors());

        app.use(express.json());

        app.use(bodyParser.urlencoded({ extended: false }));

        app.get('/Makan', async (req, res) => {
            const makan = await Makan.find();
            console.log("get darshan");
            res.send(makan);
        });

        app.get('/Makan/:id', async (req, res) => {
            const makan = await Makan.findOne({ _id: req.params.id });
            res.send(makan);
        });

        app.delete('/Makan/:id', async (req, res) => {
            const makan = await Makan.findOne({ _id: req.params.id });
            await makan.deleteOne();
            res.send(makan);
        });

        app.post('/Makan', async (req, res) => {
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
                wowDelay: req.body.wowDelay,
            });

            await makan.save();
            console.log("post darshan");
            res.send(makan);
        });

        app.patch('/Makan/:id', async (req, res) => {
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
            makan.wowDelay = req.body.wowDelay;

            await makan.save();
            res.send(makan);
        });

        app.listen(3032, () => {
            console.log("server started @ 3032");
        });
    });


