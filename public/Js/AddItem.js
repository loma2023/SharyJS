

function fetch_Categories() {
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
}

fetch_Categories()

let categories = []
if (localStorage.categories != null) { categories = JSON.parse(localStorage.categories) }
let element = "";
for (let i = 0; i < categories.length; i++) {
    element += `
    <option value="${categories[i].name}">${categories[i].name}</option>
    `
}
document.querySelector(".select-categry").innerHTML += element

function toggelcolor() {
    document.querySelectorAll(".parent-toggel")[0].classList.toggle("active")
    document.querySelector(".color-div").classList.toggle("activecolumn")
}
function toggelsize() {
    document.querySelectorAll(".parent-toggel")[1].classList.toggle("active")
    document.querySelector(".size-div").classList.toggle("activecolumn")
}
function toggelweight() {
    document.querySelectorAll(".parent-toggel")[2].classList.toggle("active")
    document.querySelector(".weight-div").classList.toggle("activecolumn")
}

function ShowItems() {
    let products = []
    if (localStorage.products != null) { products = JSON.parse(localStorage.products) }
    let element2 = "";
    for (let i = 0; i < products.length; i++) {
        element2 += `
                <tr>
                    <td>${i}</td>
                    <td>${products[i].name}</td>
                    <td>${products[i].main_price}</td>
                    <td>${products[i].Details}</td>
                    <td>${products[i].categories}</td>
                    <td>${products[i].status1}</td>
                    <td >
                    <a onclick="Edit(id)" id="${i}" class="fa-solid fa-pen-to-square"></a>
                    <a onclick="AskSure(id)" id="${products[i].id}" class="fa-solid fa-trash"></a>
                    <a onclick="Details(id)" id="${i}" class="fa-solid fa-eye"></a>
                   </td>
                </tr>`
    }
    document.querySelector(".TableProdects").innerHTML = element2
}


function Edit(id) {
    let products = []
    if (localStorage.products != null) { products = JSON.parse(localStorage.products) }

    let txt = "/EditItem/" + products[id].id + "?_method=PUT"
    document.querySelector(".formItem").action = txt

    document.querySelector(".NameItem").value = products[id].name
    document.querySelector(".details").value = products[id].Details
    document.querySelector(".main-price").value = products[id].main_price
    document.querySelector(".old-price").value = products[id].old_price
    document.querySelector(".select-categry").value = products[id].categories
    document.querySelector(".status1").value = products[id].status1
    document.querySelector(".status2").value = products[id].status2

    document.querySelectorAll(".img-item")[0].src = products[id].photo1
    document.querySelectorAll(".img-item")[0].id = products[id].photo1
    document.querySelectorAll(".img-item")[1].src = products[id].photo2
    document.querySelectorAll(".img-item")[2].src = products[id].photo3
    document.querySelectorAll(".img-item")[3].src = products[id].photo4
    document.querySelectorAll(".img-item")[4].src = products[id].photo5
    document.querySelectorAll(".img-item")[5].src = products[id].photo6
    document.querySelectorAll(".img-item")[6].src = products[id].photo7

    let colors = document.querySelector(".color-div")
    colors.querySelectorAll("select")[0].value = products[id].color1
    colors.querySelectorAll("select")[1].value = products[id].color2
    colors.querySelectorAll("select")[2].value = products[id].color3
    colors.querySelectorAll("select")[3].value = products[id].color4
    colors.querySelectorAll("select")[4].value = products[id].color5
    colors.querySelectorAll("select")[5].value = products[id].color6
    colors.querySelectorAll("select")[6].value = products[id].color7

    let sizes = document.querySelector(".size-div")
    sizes.querySelectorAll("input")[0].value = products[id].size1
    sizes.querySelectorAll("input")[1].value = products[id].size2
    sizes.querySelectorAll("input")[2].value = products[id].size3
    sizes.querySelectorAll("input")[3].value = products[id].size4
    sizes.querySelectorAll("input")[4].value = products[id].size5
    sizes.querySelectorAll("input")[5].value = products[id].size6
    sizes.querySelectorAll("input")[6].value = products[id].size7

    let weights = document.querySelector(".weight-div")
    weights.querySelectorAll(".weight-in")[0].value = products[id].weight1
    weights.querySelectorAll(".weight-in")[1].value = products[id].weight2
    weights.querySelectorAll(".weight-in")[2].value = products[id].weight3
    weights.querySelectorAll(".weight-in")[3].value = products[id].weight4
    weights.querySelectorAll(".weight-in")[4].value = products[id].weight5
    weights.querySelectorAll(".weight-in")[5].value = products[id].weight6
    weights.querySelectorAll(".weight-in")[6].value = products[id].weight7

    weights.querySelectorAll(".price-in")[0].value = products[id].price1
    weights.querySelectorAll(".price-in")[1].value = products[id].price2
    weights.querySelectorAll(".price-in")[2].value = products[id].price3
    weights.querySelectorAll(".price-in")[3].value = products[id].price4
    weights.querySelectorAll(".price-in")[4].value = products[id].price5
    weights.querySelectorAll(".price-in")[5].value = products[id].price6
    weights.querySelectorAll(".price-in")[6].value = products[id].price7

}

function AskSure(id) {
    let Msg = document.querySelector(".Msg-Box")
    Msg.id = id
    Msg.querySelector(".loader").style.display = "none"
    Msg.querySelector(".btn-oky").style.display = "grid"
    Msg.querySelector(".btn-oky").innerHTML = `<form action="/DeleteItem/${id}?_method=DELETE" method="post"><button type="submit">نعم</button></form>
                                      <a onclick="Hide_Msg()">لا</a> `
    Msg.querySelector("i").classList.add("fa-trash")
    Msg.querySelector("h1").innerText = "هل تريد حذف الصنف ؟"

    Msg.classList.add("active")
}

