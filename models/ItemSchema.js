const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ============================== < xxx Schema >  ===================================

const ItemSchema = new Schema({
    NameItem: String,
    main_price: String,
    old_price: String,
    details: String,
    select_categry: String,
    status1: String,
    status2: String,
    color1: String,
    color2: String,
    color3: String,
    color4: String,
    color5: String,
    color6: String,
    color7: String,
    size1: String,
    size2: String,
    size3: String,
    size4: String,
    size5: String,
    size6: String,
    size7: String,
    weight1: String,
    weight2: String,
    weight3: String,
    weight4: String,
    weight5: String,
    weight6: String,
    weight7: String,
    price1: String,
    price2: String,
    price3: String,
    price4: String,
    price5: String,
    price6: String,
    price7: String,
    MainImg:{
        data: Buffer,
        contentType: String
    },
    SmallImg1:{
        data: Buffer,
        contentType: String
    },
    SmallImg2:{
        data: Buffer,
        contentType: String
    },
    SmallImg3:{
        data: Buffer,
        contentType: String
    },
    SmallImg4:{
        data: Buffer,
        contentType: String
    },
    SmallImg5:{
        data: Buffer,
        contentType: String
    },
    SmallImg6:{
        data: Buffer,
        contentType: String
    },

},
    { timestamps: true }
);
// ============================== < xxx model >  ===================================

const Item = mongoose.model("Item", ItemSchema);

// ============================== < xxx export >  ===================================

module.exports = Item;
