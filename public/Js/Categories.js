document.querySelector("header")
    .querySelector(".right").querySelectorAll("a")[2].classList.add("hover")

function ShowData() {
    let categories = []
    if (localStorage.categories != null) { categories = JSON.parse(localStorage.categories) }
    let element = "";
    for (let i = 0; i < categories.length; i++) {
        element += `
            <a onclick="GoToCate(id)" class="Cart" id="${i}">
                <img src="${categories[i].photo}" alt="">
                <h1>${categories[i].name}</h1>
            </a>`
    }
    let section = document.querySelector(".Categories")
    section.querySelector(".container").innerHTML = element
}

function ShowData2() {
    let products = []
    if (localStorage.products != null) { products = JSON.parse(localStorage.products) }
    let element = "";
    for (let i = 0; i < products.length; i++) {
        let available = "";
        if (products[i].status1 === "متوفر") { available = "none" }

        element += `
                <div class="cart">
                <div class="available" style="display:${available}"><span>غير متوفر<span></div>
                    <img src="${products[i].photo1}" alt="">
                    <h1>${products[i].name}</h1>
                    <div class="price1">
                        <i>KWD</i>
                        <h3>${products[i].main_price}</h3>
                        <h4>${products[i].old_price}</h4>
                    </div>
                    <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                    </div>  
                    <div class="icons" id="${i}">
                        <a class="fas fa-shopping-cart" onclick="Details(id)" id="${i}"></a>
                        <a class="fas fa-heart" onclick="Favorate(event)"></a>
                    </div>                  
                </div>`

    }
    let section = document.querySelector(".products")
    section.querySelector(".container").innerHTML = element
}

function GoToCate(id) {
    let categories = []
    if (localStorage.categories != null) { categories = JSON.parse(localStorage.categories) }
    let category = []

    let obj = {
        name: categories[id].name,
    }
    category.push(obj)
    localStorage.setItem("category", JSON.stringify(category))
    location.href = "Category"
}

ShowData();
ShowData2()


function fetch_Products() {
    let ObjectCategories = document.querySelectorAll(".ObjectCategories")

    localStorage.removeItem("categories")

    let categories = []

    for (let i = 0; i < ObjectCategories.length; i++) {
        let Data = ObjectCategories[i].querySelectorAll("span")
        let obj = {
            id: Data[0].innerText,
            name: Data[1].innerText,
            photo: Data[2].innerText,
        }
        categories.push(obj)
        localStorage.setItem("categories", JSON.stringify(categories))
    }
    ShowData()
}
fetch_Products()