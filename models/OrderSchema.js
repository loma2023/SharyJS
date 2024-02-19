const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// ============================== < xxx Schema >  ===================================

const OrderSchema = new Schema({
    Name: String,
    Email: String,
    Phone: String,
    City: String,
    Home: String,
    Street: String,
    Village: String,
    Description: String,
    Notes: String,
    SubTotal: String,
    Dilevery: String,
    Total: String,
    Notes: String,
    NItem: Array,
    QItem: Array,
    CItem: Array,
    SItem: Array,
    WItem: Array,
    PItem: Array,
    

},
    { timestamps: true }
);
// ============================== < xxx model >  ===================================

const Order = mongoose.model("Order", OrderSchema);

// ============================== < xxx export >  ===================================
module.exports = Order;
