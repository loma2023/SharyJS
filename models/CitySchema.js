const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// ============================== < xxx Schema >  ===================================

const CitySchema = new Schema({
    NameCity: String,
    PriceDelivery: Number
},
    { timestamps: true }
);

// ============================== < xxx model >  ===================================

const City = mongoose.model("City", CitySchema);

// ============================== < xxx export >  ===================================
module.exports = City;
