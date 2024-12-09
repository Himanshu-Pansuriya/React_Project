const mongoose = require('mongoose');

const makanSchema = new mongoose.Schema({
    imgSrc: String,
    sellRentType: String,
    propertyType: String,
    price: Number,
    title: String,
    location: String,
    area: String,
    bedrooms: Number,
    bathrooms: Number,
    contact: String
});

const Makan = mongoose.model('Makan', makanSchema);

module.exports = Makan;
