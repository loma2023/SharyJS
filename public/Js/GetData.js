
document.querySelector("header")
    .querySelector(".right").querySelectorAll("a")[3].classList.add("hover")

function fetch_Products() {
    let ObjectProducts = document.querySelectorAll(".ObjectProducts")

    localStorage.removeItem("products")

    let products = []

    // =================================================
    for (let i = 0; i < ObjectProducts.length; i++) {
        let Data = ObjectProducts[i].querySelectorAll("span")
        let obj = {
            id: Data[0].innerText,
            name: Data[1].innerText,
            Details: Data[2].innerText,
            main_price: Data[3].innerText,
            old_price: Data[4].innerText,
            price1: Data[5].innerText,
            price2: Data[6].innerText,
            price3: Data[7].innerText,
            price4: Data[8].innerText,
            price5: Data[9].innerText,
            price6: Data[10].innerText,
            price7: Data[11].innerText,
            photo1: Data[12].innerText,
            photo2: Data[13].innerText,
            photo3: Data[14].innerText,
            photo4: Data[15].innerText,
            photo5: Data[16].innerText,
            photo6: Data[17].innerText,
            photo7: Data[18].innerText,
            color1: Data[19].innerText,
            color2: Data[20].innerText,
            color3: Data[21].innerText,
            color4: Data[22].innerText,
            color5: Data[23].innerText,
            color6: Data[24].innerText,
            color7: Data[25].innerText,
            size1: Data[26].innerText,
            size2: Data[27].innerText,
            size3: Data[28].innerText,
            size4: Data[29].innerText,
            size5: Data[30].innerText,
            size6: Data[31].innerText,
            size7: Data[32].innerText,
            weight1: Data[33].innerText,
            weight2: Data[34].innerText,
            weight3: Data[35].innerText,
            weight4: Data[36].innerText,
            weight5: Data[37].innerText,
            weight6: Data[38].innerText,
            weight7: Data[39].innerText,
            categories: Data[40].innerText,
            status1: Data[41].innerText,
            status2: Data[42].innerText,
        }
        products.push(obj)
        localStorage.setItem("products", JSON.stringify(products))
    }

    if (document.title === "Shary") { ShowData() }
    else if (document.title === "اضافة صنف") { ShowItems() }
}

fetch_Products()

// //////////////////////////////////////////////////////////////////////////////////

function ShowData() {
    let products = []
    if (localStorage.products != null) { products = JSON.parse(localStorage.products) }
    let element = "";
    let nuProdect = 0
    for (let i = 0; i < products.length; i++) {
        let available = "";
        if (products[i].status1 === "متوفر") { available = "none" }

        if (products[i].status2 === "الاكثر مبيعاً") {
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
            nuProdect = nuProdect + 1
        }
    }

    let section = document.querySelector(".products")
    section.querySelector(".container").innerHTML = element
    if (nuProdect === 0) {
        section.style.display = "none"
    }
}

if (document.title === "Shary") { ShowData() }

