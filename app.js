// ******************* Static Code  **********************

let express = require('express')
let app = express()
let port = process.env.PORT || 2024
let mongoose = require('mongoose');
let methodOverride = require('method-override')
let moment = require('moment');
let bodyParser = require('body-parser');
let fs = require('fs');
let multer = require('multer');
let path = require("path");

let storage = multer.memoryStorage()
let upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "scratch")))
app.use(express.static(path.join(__dirname, "Uploads")))
app.use(methodOverride('_method'))

// ******************* Auto Refresh  **********************

// let livereload = require("livereload");
// let liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, 'public'));
// let connectLivereload = require("connect-livereload");
// app.use(connectLivereload());
// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });

// ******************* Connect With DB  **********************

mongoose.connect('mongodb+srv://eslamloma:eslamloma2891997aya@cluster0.usuu41v.mongodb.net/Shary?retryWrites=true&w=majority')
  .then(() => { app.listen(port, () => { console.log(`http://localhost:${port}/`) }) })
  .catch((err) => { res.render("error") });

// **************************************************************************************



// ******************* models مرتبط بالملفات التي في فولدر   **********************

let Category = require("./models/CategorySchema")
let City = require("./models/CitySchema")
let Item = require("./models/ItemSchema")
let Order = require("./models/OrderSchema")

// *******************  اكواد خاصه بفتح الصفحات  **********************

app.get('/', (req, res) => {
  Item.find()
    .then((result) => { res.render("index", { items: result }) })
    .catch((err) => { res.render("error") })
})

app.get('/AdminControl', (req, res) => {
  Order.find()
    .then((result) => { res.render("AdminControl", { Orders: result }) })
    .catch((err) => { res.render("error") })
})

app.get('/AddCategory', (req, res) => {
  Category.find()
    .then((result) => { res.render("AddCategory", { Categories: result }) })
    .catch((err) => { res.render("error") })
})

app.get('/AddCity', (req, res) => {
  City.find()
    .then((result) => { res.render("AddCity", { Cities: result }) })
    .catch((err) => { res.render("error") })
})

app.get('/AddItem', async (req, res) => {
  let MyCategories;
  await Category.find()
    .then((result) => { MyCategories = result })

  await Item.find()
    .then((result) => { res.render("AddItem", { items: result, Categories: MyCategories }) })
    .catch((err) => { res.render("error") })
})

app.get('/Categories', (req, res) => {
  Category.find()
    .then((result) => { res.render("Categories", { Categories: result }) })
    .catch((err) => { res.render("error") })
})

app.get('/Category', (req, res) => {
  res.render("Category")
})

app.get('/Shopping', (req, res) => {
  res.render("Shopping")
})

app.get('/Favorate', (req, res) => {
  res.render("Favorate")
})

app.get('/Details', (req, res) => {
  City.find()
    .then((result) => { res.render("Details", { Cities: result }) })
    .catch((err) => { res.render("error") })

})

app.get('/Confirm', (req, res) => {
  res.render("Confirm")
})

app.get('/ConfirmOrder', (req, res) => {
  res.render("ConfirmOrder")
})

// *******************  اكواد خاصه بارسال البيانات  **********************

app.post('/AddOrder', (req, res) => {
  let DataOrder = new Order(req.body);
  DataOrder.save()
    .then((result) => { res.redirect("ConfirmOrder"); })
    .catch(err => { console.log(err); });
});

app.post('/AddItem', upload.fields([{ name: 'MainImg' }, { name: 'SmallImg1' }, { name: 'SmallImg2' },
{ name: 'SmallImg3' }, { name: 'SmallImg4' }, { name: 'SmallImg5' }, { name: 'SmallImg6' }]), async (req, res, next) => {
  let FnSmallImg1 = ""; let FnSmallImg2 = ""; let FnSmallImg3 = "";
  let FnSmallImg4 = ""; let FnSmallImg5 = ""; let FnSmallImg6 = ""

  if (req.files.SmallImg1) { FnSmallImg1 = { data: req.files.SmallImg1[0].buffer, contentType: req.files.SmallImg1[0].mimetype } } else { FnSmallImg1 = { data: "", contentType: "" } }
  if (req.files.SmallImg2) { FnSmallImg2 = { data: req.files.SmallImg2[0].buffer, contentType: req.files.SmallImg2[0].mimetype } } else { FnSmallImg2 = { data: "", contentType: "" } }
  if (req.files.SmallImg3) { FnSmallImg3 = { data: req.files.SmallImg3[0].buffer, contentType: req.files.SmallImg3[0].mimetype } } else { FnSmallImg3 = { data: "", contentType: "" } }
  if (req.files.SmallImg4) { FnSmallImg4 = { data: req.files.SmallImg4[0].buffer, contentType: req.files.SmallImg4[0].mimetype } } else { FnSmallImg4 = { data: "", contentType: "" } }
  if (req.files.SmallImg5) { FnSmallImg5 = { data: req.files.SmallImg5[0].buffer, contentType: req.files.SmallImg5[0].mimetype } } else { FnSmallImg5 = { data: "", contentType: "" } }
  if (req.files.SmallImg6) { FnSmallImg6 = { data: req.files.SmallImg6[0].buffer, contentType: req.files.SmallImg6[0].mimetype } } else { FnSmallImg6 = { data: "", contentType: "" } }

  let obj = {
    NameItem: req.body.NameItem,
    main_price: req.body.main_price,
    old_price: req.body.old_price,
    details: req.body.details,
    select_categry: req.body.select_categry,
    status1: req.body.status1,
    status2: req.body.status2,
    color1: req.body.color1,
    color2: req.body.color2,
    color3: req.body.color3,
    color4: req.body.color4,
    color5: req.body.color5,
    color6: req.body.color6,
    color7: req.body.color7,
    size1: req.body.size1,
    size2: req.body.size2,
    size3: req.body.size3,
    size4: req.body.size4,
    size5: req.body.size5,
    size6: req.body.size6,
    size7: req.body.size7,
    weight1: req.body.weight1,
    weight2: req.body.weight2,
    weight3: req.body.weight3,
    weight4: req.body.weight4,
    weight5: req.body.weight5,
    weight6: req.body.weight6,
    weight7: req.body.weight7,
    price1: req.body.price1,
    price2: req.body.price2,
    price3: req.body.price3,
    price4: req.body.price4,
    price5: req.body.price5,
    price6: req.body.price6,
    price7: req.body.price7,
    MainImg:{data: req.files.MainImg[0].buffer,contentType: req.files.MainImg[0].mimetype},
    SmallImg1: FnSmallImg1,
    SmallImg2: FnSmallImg2,
    SmallImg3: FnSmallImg3,
    SmallImg4: FnSmallImg4,
    SmallImg5: FnSmallImg5,
    SmallImg6: FnSmallImg6,
  }

  await Item.create(obj)
    .then((result) => { res.redirect("/AddItem"); })
    .catch(err => { res.render("error"); });
});

app.post('/AddCategory', upload.single('image'), async (req, res, next) => {
  let obj = {
    Namecategory: req.body.Namecategory,
    image: {
      data: req.file.buffer,
      contentType: req.file.mimetype
    }
  }
  await Category.create(obj)
    .then((result) => { res.redirect("/AddCategory"); })
    .catch(err => { res.render("error"); });
});

app.post('/AddCity', (req, res) => {
  let DataCity = new City(req.body);
  DataCity.save()
    .then((result) => { res.redirect("AddCity"); })
    .catch(err => { res.render("error"); });
});

// *******************  اكواد خاصه بتعديل البيانات  **********************

app.put("/EditItem/:id", upload.fields([{ name: 'MainImg' }, { name: 'SmallImg1' }, { name: 'SmallImg2' },
{ name: 'SmallImg3' }, { name: 'SmallImg4' }, { name: 'SmallImg5' }, { name: 'SmallImg6' }]), async (req, res, next) => {
  let FnSmallImg1 = ""; let FnSmallImg2 = ""; let FnSmallImg3 = "";
  let FnSmallImg4 = ""; let FnSmallImg5 = ""; let FnSmallImg6 = ""

  if (req.files.SmallImg1) { FnSmallImg1 = { data: req.files.SmallImg1[0].buffer, contentType: req.files.SmallImg1[0].mimetype } } else { FnSmallImg1 = { data: "", contentType: "" } }
  if (req.files.SmallImg2) { FnSmallImg2 = { data: req.files.SmallImg2[0].buffer, contentType: req.files.SmallImg2[0].mimetype } } else { FnSmallImg2 = { data: "", contentType: "" } }
  if (req.files.SmallImg3) { FnSmallImg3 = { data: req.files.SmallImg3[0].buffer, contentType: req.files.SmallImg3[0].mimetype } } else { FnSmallImg3 = { data: "", contentType: "" } }
  if (req.files.SmallImg4) { FnSmallImg4 = { data: req.files.SmallImg4[0].buffer, contentType: req.files.SmallImg4[0].mimetype } } else { FnSmallImg4 = { data: "", contentType: "" } }
  if (req.files.SmallImg5) { FnSmallImg5 = { data: req.files.SmallImg5[0].buffer, contentType: req.files.SmallImg5[0].mimetype } } else { FnSmallImg5 = { data: "", contentType: "" } }
  if (req.files.SmallImg6) { FnSmallImg6 = { data: req.files.SmallImg6[0].buffer, contentType: req.files.SmallImg6[0].mimetype } } else { FnSmallImg6 = { data: "", contentType: "" } }

  let obj = {
    NameItem: req.body.NameItem,
    main_price: req.body.main_price,
    old_price: req.body.old_price,
    details: req.body.details,
    select_categry: req.body.select_categry,
    status1: req.body.status1,
    status2: req.body.status2,
    color1: req.body.color1,
    color2: req.body.color2,
    color3: req.body.color3,
    color4: req.body.color4,
    color5: req.body.color5,
    color6: req.body.color6,
    color7: req.body.color7,
    size1: req.body.size1,
    size2: req.body.size2,
    size3: req.body.size3,
    size4: req.body.size4,
    size5: req.body.size5,
    size6: req.body.size6,
    size7: req.body.size7,
    weight1: req.body.weight1,
    weight2: req.body.weight2,
    weight3: req.body.weight3,
    weight4: req.body.weight4,
    weight5: req.body.weight5,
    weight6: req.body.weight6,
    weight7: req.body.weight7,
    price1: req.body.price1,
    price2: req.body.price2,
    price3: req.body.price3,
    price4: req.body.price4,
    price5: req.body.price5,
    price6: req.body.price6,
    price7: req.body.price7,
    MainImg:{data: req.files.MainImg[0].buffer,contentType: req.files.MainImg[0].mimetype},
    SmallImg1: FnSmallImg1,
    SmallImg2: FnSmallImg2,
    SmallImg3: FnSmallImg3,
    SmallImg4: FnSmallImg4,
    SmallImg5: FnSmallImg5,
    SmallImg6: FnSmallImg6,
  }
  
  await Item.updateOne({ _id: req.params.id }, obj, req.body)
    .then((result) => { res.redirect("/AddItem"); })
    .catch(err => { res.render("error"); });
});

app.put("/EditCategory/:id", upload.single('image'), async (req, res, next) => {
  let obj = {
    Namecategory: req.body.Namecategory,
    image: {
      data: req.file.buffer,
      contentType: req.file.mimetype
    }
  }
  await Category.updateOne({ _id: req.params.id }, obj, req.body)
    .then((result) => { res.redirect("/AddCategory"); })
    .catch(err => { res.render("error"); });
});

app.put("/EditCity/:id", (req, res) => {
  City.updateOne({ _id: req.params.id }, req.body)
    .then((result) => { res.redirect("/AddCity"); })
    .catch(err => { res.render("error"); });
});

// *******************  اكواد خاصه بحذف البيانات  **********************

app.delete("/DeleteOrder/:id", (req, res) => {
  Order.deleteOne({ _id: req.params.id })
    .then((result) => { res.redirect("/AdminControl"); })
    .catch(err => { res.render("error"); });
});

app.delete("/DeleteItem/:id", (req, res) => {
  Item.deleteOne({ _id: req.params.id })
    .then((result) => { res.redirect("/AddItem"); })
    .catch(err => { res.render("error"); });
});

app.delete("/DeleteCategory/:id", (req, res) => {
  Category.deleteOne({ _id: req.params.id })
    .then((result) => { res.redirect("/AddCategory"); })
    .catch(err => { res.render("error"); });
});

app.delete("/DeleteCity/:id", (req, res) => {
  City.deleteOne({ _id: req.params.id })
    .then((result) => { res.redirect("/AddCity"); })
    .catch(err => { res.render("error"); });
});

// *******************  اكواد خاصه اذا كان مسار الصفحه خطأ  **********************
app.use((req, res, next) => { res.status(404).render("error") })