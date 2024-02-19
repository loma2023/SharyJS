function ShowCategories() {
    let categories = []
    if (localStorage.categories != null) { categories = JSON.parse(localStorage.categories) }
    let element2 = "";
    for (let i = 0; i < categories.length; i++) {
        element2 += `
                <tr>
                    <td>${i}</td>
                    <td>${categories[i].name}</td>
                    <td><img src="${categories[i].photo}" alt=""></td>
                    <td >
                    <a onclick="Edit(id)" id="${i}" class="fa-solid fa-pen-to-square"></a>
                    <a onclick="AskSure(id)" id="${categories[i].id}" class="fa-solid fa-trash"></a>
                   </td>
                </tr>`
    }
    document.querySelector(".table-body").innerHTML = element2
}

function Edit(id) {
    let categories = []
    if (localStorage.categories != null) { categories = JSON.parse(localStorage.categories) }

    let txt = "/EditCategory/" + categories[id].id + "?_method=PUT"
    document.querySelector(".formCategory").action = txt

    document.querySelector(".Namecategory").value = categories[id].name

}

function AskSure(id) {
    let Msg = document.querySelector(".Msg-Box")
    Msg.id = id
    Msg.querySelector(".loader").style.display = "none"
    Msg.querySelector(".btn-oky").style.display = "grid"
    Msg.querySelector(".btn-oky").innerHTML = `<form action="/DeleteCategory/${id}?_method=DELETE" method="post"><button type="submit">نعم</button></form>
                                                <a onclick="Hide_Msg()">لا</a> `
    Msg.querySelector("i").classList.add("fa-trash")    
    Msg.querySelector("h1").innerText = "هل تريد حذف القسم ؟"
    Msg.classList.add("active")
}

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
    ShowCategories()
}
ShowCategories()
fetch_Products()
