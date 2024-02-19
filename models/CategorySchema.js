const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// ============================== < xxx Schema >  ===================================

const CategorySchema = new Schema({
    Namecategory: String,
    image: {
        data: Buffer,
        contentType: String
    }
},
    { timestamps: true }
);

// ============================== < xxx model >  ===================================

const Category = mongoose.model("Category", CategorySchema);

// ============================== < xxx export >  ===================================
module.exports = Category;
