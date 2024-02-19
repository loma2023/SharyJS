function ShowCity() {
    let City = []
    if (localStorage.City != null) { City = JSON.parse(localStorage.City) }
    let element = "";
    for (let i = 0; i < City.length; i++) {
        element += `
                <tr>
                    <td>${i}</td>
                    <td>${City[i].name}</td>
                    <td>${City[i].price}</td>
                    <td >
                    <a onclick="Edit(id)" id="${i}" class="fa-solid fa-pen-to-square"></a>
                    <a onclick="AskSure(id)" id="${City[i].id}" class="fa-solid fa-trash"></a>
                   </td>
                </tr>`
    }
    document.querySelector(".table-body").innerHTML = element
}


function Edit(id) {
    let City = []
    if (localStorage.City != null) { City = JSON.parse(localStorage.City) }
    let txt = "/EditCity/" + City[id].id + "?_method=PUT"
    document.querySelector(".formCity").action = txt

    document.querySelector(".NameCity").value = City[id].name
    document.querySelector(".price-delivery").value = City[id].price
}

function AskSure(id) {
    let Msg = document.querySelector(".Msg-Box")
    Msg.id = id
    Msg.querySelector(".loader").style.display = "none"
    Msg.querySelector(".btn-oky").style.display = "grid"
    Msg.querySelector(".btn-oky").innerHTML = `<form action="/DeleteCity/${id}?_method=DELETE" method="post"><button type="submit">نعم</button></form>
                                      <a onclick="Hide_Msg()">لا</a> `
    Msg.querySelector("i").classList.add("fa-trash")
    Msg.querySelector("h1").innerText = "هل تريد حذف المنطقة ؟"

    Msg.classList.add("active")
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
    ShowCity()
}

fetch_Products()