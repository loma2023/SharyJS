function ShowData() {
    let Details = []
    if (localStorage.Details != null) { Details = JSON.parse(localStorage.Details) }
    let products = []
    if (localStorage.products != null) { products = JSON.parse(localStorage.products) }
    let element = ""; let timer = 0
    element += `
    <div class="Protect-photo">
        <img class="main-img" src="${products[Details.id].photo1}" alt="">
        <div class="photos">
            <img class="photo" src="${products[Details.id].photo1}" id="${products[Details.id].photo1}" alt="">
            <img class="photo" src="${products[Details.id].photo2}" id="${products[Details.id].photo2}" alt="">
            <img class="photo" src="${products[Details.id].photo3}" id="${products[Details.id].photo3}" alt="">
            <img class="photo" src="${products[Details.id].photo4}" id="${products[Details.id].photo4}" alt="">
            <img class="photo" src="${products[Details.id].photo5}" id="${products[Details.id].photo5}" alt="">
            <img class="photo" src="${products[Details.id].photo6}" id="${products[Details.id].photo6}" alt="">
            <img class="photo" src="${products[Details.id].photo7}" id="${products[Details.id].photo7}" alt="">
        </div>
    </div>
    <div class="Protect-info">
        <div class="ProdectName">
            <h1 class="big">${products[Details.id].name}</h1>
            <span class="new">new</span>
        </div>
        <div class="description">
            <h3 class="title">الوصف :</h3>
            <p class="text"> ${products[Details.id].Details} </p>
        </div>

        <div class="color-container">
            <h3 class="title">اللون :</h3>
            <div class="colors" id=""> 
                <span class="color" id="${products[Details.id].color1}"></span>
                <span class="color" id="${products[Details.id].color2}"></span>
                <span class="color" id="${products[Details.id].color3}"></span>
                <span class="color" id="${products[Details.id].color4}"></span>
                <span class="color" id="${products[Details.id].color5}"></span>
                <span class="color" id="${products[Details.id].color6}"></span>
                <span class="color" id="${products[Details.id].color7}"></span>
            </div>
        </div>

        <div class="size-weight-container">
            <h3 class="title">المقاس :</h3>
            <div class="sizes" id="">
                <span class="size">${products[Details.id].size1}</span>
                <span class="size">${products[Details.id].size2}</span>
                <span class="size">${products[Details.id].size3}</span>
                <span class="size">${products[Details.id].size4}</span>
                <span class="size">${products[Details.id].size5}</span>
                <span class="size">${products[Details.id].size6}</span>
                <span class="size">${products[Details.id].size7}</span>
            </div>
        </div>

        <div class="size-weight-container">
            <h3 class="title">الوزن :</h3>
            <div class="weights" id="">
                <span class="weight" id="${products[Details.id].price1}">${products[Details.id].weight1}</span>
                <span class="weight" id="${products[Details.id].price2}">${products[Details.id].weight2}</span>
                <span class="weight" id="${products[Details.id].price3}">${products[Details.id].weight3}</span>
                <span class="weight" id="${products[Details.id].price4}">${products[Details.id].weight4}</span>
                <span class="weight" id="${products[Details.id].price5}">${products[Details.id].weight5}</span>
                <span class="weight" id="${products[Details.id].price6}">${products[Details.id].weight6}</span>
                <span class="weight" id="${products[Details.id].price7}">${products[Details.id].weight7}</span>
            </div>
        </div>

        <div class="buy-price">
            <a class="buy" id="${Details.id}" onclick="Shopping(id)"><i class="fas fa-shopping-cart"></i>ADD TO CART</a>
            <div class="price">
                <i>KWD</i>
                <h1>${products[Details.id].main_price}</h1>
                <h4>${products[Details.id].old_price}  </h4>
            </div>
        </div>
    </div>`
    let section = document.querySelector(".Details")
    section.querySelector(".container").innerHTML = element
}
ShowData()

let colors = document.querySelectorAll(".color")
let sizes = document.querySelectorAll(".size")
let weights = document.querySelectorAll(".weight")
let photos = document.querySelectorAll(".photo")
let colorHide = 0
let sizeHide = 0
let weightHide = 0
let photoHide = 0

colors.forEach(color => {
    if (color.id === "") {
        color.style.display = "none"
        colorHide = colorHide + 1
    }
    color.addEventListener("click", colorchange)
});

function colorchange() {
    colors.forEach(color => { color.classList.remove("active"); this.classList.add("active") })
    document.querySelector(".colors").id = this.id
    document.documentElement.style.setProperty('--changeColor', this.id)
    if(this.id === "white"){
        document.documentElement.style.setProperty('--SpicalColor', "black")
    }
    if (this.id != "white") {
        document.documentElement.style.setProperty('--SpicalColor', "white")        
    }
}

if (colorHide === 7) {
    document.querySelector(".color-container").style = "display:none;"
    document.querySelector(".colors").id = "none"
}

sizes.forEach(size => {
    if (size.innerText === "") {
        size.style.display = "none"
        sizeHide = sizeHide + 1
    }
    size.addEventListener("click", sizechange)
});

function sizechange() {
    sizes.forEach(size => { size.classList.remove("active"); this.classList.add("active") })
    document.querySelector(".sizes").id = this.innerText
}

if (sizeHide === 7) {
    document.querySelectorAll(".size-weight-container")[0].style = "display:none;"
    document.querySelector(".sizes").id = "none"
}

weights.forEach(weight => {
    if (weight.innerText === "") {
        weight.style.display = "none"
        weightHide = weightHide + 1
    }
    weight.addEventListener("click", weightchange)
});

function weightchange() {
    weights.forEach(weight => { weight.classList.remove("active"); this.classList.add("active") })
    document.querySelector(".weights").id = this.innerText
    let buy_price = document.querySelector(".buy-price")
    buy_price.querySelector("h1").innerText = this.id
}



if (weightHide === 7) {
    document.querySelectorAll(".size-weight-container")[1].style = "display:none;"
    document.querySelector(".weights").id = "none"
}

photos.forEach(photo => {
    if (photo.id == "") {
        photo.style.display = "none"
        photoHide = photoHide + 1
    }
    photo.addEventListener("click", () => {
        document.querySelector(".main-img").src = photo.src
    })
});

if (photoHide === 6) {
    document.querySelector(".photos").style = "display:none;"
    document.querySelector(".photos").id = "none"
}


function MyCity() {
    let select = document.querySelector(".Parent-select-city select").value

    if (select === "") {
        CompleteData(txt = "يرجي تحديد المنطقة")
        return
    }

    let obj = {
        id: select,
    }

    localStorage.setItem("MyCity", JSON.stringify(obj))
    remove_me()
}

function remove_me() {
    document.querySelector(".Parent-select-city").style.top = "-1000%"

}



function fetch_Products() {
    let ObjectCities = document.querySelectorAll(".ObjectCities")

    localStorage.removeItem("City")

    let City = []
    for (let i = 0; i < ObjectCities.length; i++) {
        let Data = ObjectCities[i].querySelectorAll("span")
        let obj = {
            id: Data[0].innerText,
            name: Data[1].innerText,
            price: Data[2].innerText,
        }
        City.push(obj)
        localStorage.setItem("City", JSON.stringify(City))
    }
}

fetch_Products()

let City = []
if (localStorage.City != null) { City = JSON.parse(localStorage.City) }
let element = "";
for (let i = 0; i < City.length; i++) {
    element += `
    <option value="${i}">${City[i].name}</option>
    `
}
document.querySelector(".Parent-select-city select").innerHTML += element





function Shopping(id) {
    let Shopping = []
    if (localStorage.Shopping != null) { Shopping = JSON.parse(localStorage.Shopping) }

    let products = []
    if (localStorage.products != null) { products = JSON.parse(localStorage.products) }
    
    let Details = []
    if (localStorage.Details != null) { Details = JSON.parse(localStorage.Details) }

    if (products[Details.id].status1 === "غير متوفر") { CompleteData(txt = "هذا الصنف غير متوفر"); return }

    if (localStorage.MyCity == null) {
        document.querySelector(".Parent-select-city").style.top = "0"
        return
    }

    let color = document.querySelector(".colors").id;
    let size = document.querySelector(".sizes").id;
    let weight = document.querySelector(".weights").id;
    let buy_price = document.querySelector(".buy-price")

    for (let i = 0; i < Shopping.length; i++) { if (Shopping[i].id === id) { CompleteData(txt = "تم اضافة الصنف من قبل"); return } }

    if (color === "") { CompleteData(txt = "اختار اللون"); return }

    if (size === "") { CompleteData(txt = "اختار المقاس"); return }

    if (weight === "") { CompleteData(txt = "اختار الوزن"); return }

    let obj = {
        id: Details.id,
        name: products[Details.id].name,
        img: products[Details.id].photo1,
        price: buy_price.querySelector("h1").innerText,
        color: color,
        size: size,
        weight: weight,
        quantity: 1,
    }

    Shopping.push(obj)
    localStorage.setItem("Shopping", JSON.stringify(Shopping))
    document.querySelector(".buy").innerHTML = `
    <i class="fas fa-check"></i>تم اضافة المنتج</a>
    `
    notificationss()

}
