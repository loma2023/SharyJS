let ObjectOrders = document.querySelectorAll(".ObjectOrders")

localStorage.removeItem("Orders")

let Orders = []


let item1 = ""; let item2 = ""; let item3 = ""; let item4 = ""; let item5 = ""; let item6 = ""; let item7 = ""
let color1 = ""; let color2 = ""; let color3 = ""; let color4 = ""; let color5 = ""; let color6 = ""; let color7 = ""
let quantity1 = ""; let quantity2 = ""; let quantity3 = ""; let quantity4 = ""; let quantity5 = ""; let quantity6 = ""; let quantity7 = ""
let price1 = ""; let price2 = ""; let price3 = ""; let price4 = ""; let price5 = ""; let price6 = ""; let price7 = ""
let size1 = ""; let size2 = ""; let size3 = ""; let size4 = ""; let size5 = ""; let size6 = ""; let size7 = ""
let weight1 = ""; let weight2 = ""; let weight3 = ""; let weight4 = ""; let weight5 = ""; let weight6 = ""; let weight7 = ""

let NItem = document.querySelectorAll(".NItem")
NItem.forEach((item , i) => {
    if(i === 0){
        item1 = item.innerText
        quantity1 = document.querySelectorAll(".QItem")[i].innerText
        color1 = document.querySelectorAll(".CItem")[i].innerText
        size1 = document.querySelectorAll(".SItem")[i].innerText
        weight1 = document.querySelectorAll(".WItem")[i].innerText
        price1 = document.querySelectorAll(".PItem")[i].innerText
    }
    if(i === 1){
        item2 = item.innerText
        quantity2 = document.querySelectorAll(".QItem")[i].innerText
        color2 = document.querySelectorAll(".CItem")[i].innerText
        size2 = document.querySelectorAll(".SItem")[i].innerText
        weight2 = document.querySelectorAll(".WItem")[i].innerText
        price2 = document.querySelectorAll(".PItem")[i].innerText
    }
    if(i === 2){
        item3 = item.innerText
        quantity3 = document.querySelectorAll(".QItem")[i].innerText
        color3 = document.querySelectorAll(".CItem")[i].innerText
        size3 = document.querySelectorAll(".SItem")[i].innerText
        weight3 = document.querySelectorAll(".WItem")[i].innerText
        price3 = document.querySelectorAll(".PItem")[i].innerText
    }
    if(i === 3){
        item4 = item.innerText
        quantity4 = document.querySelectorAll(".QItem")[i].innerText
        color4 = document.querySelectorAll(".CItem")[i].innerText
        size4 = document.querySelectorAll(".SItem")[i].innerText
        weight4 = document.querySelectorAll(".WItem")[i].innerText
        price4 = document.querySelectorAll(".PItem")[i].innerText
    }
    if(i === 4){
        item5 = item.innerText
        quantity5 = document.querySelectorAll(".QItem")[i].innerText
        color5 = document.querySelectorAll(".CItem")[i].innerText
        size5 = document.querySelectorAll(".SItem")[i].innerText
        weight5 = document.querySelectorAll(".WItem")[i].innerText
        price5 = document.querySelectorAll(".PItem")[i].innerText
    }
    if(i === 5){
        item6 = item.innerText
        quantity6 = document.querySelectorAll(".QItem")[i].innerText
        color6 = document.querySelectorAll(".CItem")[i].innerText
        size6 = document.querySelectorAll(".SItem")[i].innerText
        weight6 = document.querySelectorAll(".WItem")[i].innerText
        price6 = document.querySelectorAll(".PItem")[i].innerText
    }
    if(i === 6){
        item7 = item.innerText
        quantity7 = document.querySelectorAll(".QItem")[i].innerText
        color7 = document.querySelectorAll(".CItem")[i].innerText
        size7 = document.querySelectorAll(".SItem")[i].innerText
        weight7 = document.querySelectorAll(".WItem")[i].innerText
        price7 = document.querySelectorAll(".PItem")[i].innerText
    }
})

for (let i = 0; i < ObjectOrders.length; i++) {
    let Data = ObjectOrders[i].querySelectorAll("span")
    let obj = {
        id: Data[0].innerText,
        name: Data[1].innerText,
        email: Data[2].innerText,
        phone: Data[3].innerText,
        city: Data[4].innerText,
        village: Data[5].innerText,
        street: Data[6].innerText,
        home: Data[7].innerText,
        description: Data[8].innerText,
        notes: Data[9].innerText,
        subtotal: Data[10].innerText,
        delivery: Data[11].innerText,
        total: Data[12].innerText,

        item1: item1,
        item2: item2,
        item3: item3,
        item4: item4,
        item5: item5,
        item6: item6,
        item7: item7,
        quantity1: quantity1,
        quantity2: quantity2,
        quantity3: quantity3,
        quantity4: quantity4,
        quantity5: quantity5,
        quantity6: quantity6,
        quantity7: quantity7,
        price1: price1,
        price2: price2,
        price3: price3,
        price4: price4,
        price5: price5,
        price6: price6,
        price7: price7,
        color1: color1,
        color2: color2,
        color3: color3,
        color4: color4,
        color5: color5,
        color6: color6,
        color7: color7,
        size1: size1,
        size2: size2,
        size3: size3,
        size4: size4,
        size5: size5,
        size6: size6,
        size7: size7,
        weight1: weight1,
        weight2: weight2,
        weight3: weight3,
        weight4: weight4,
        weight5: weight5,
        weight6: weight6,
        weight7: weight7,
    }
    Orders.push(obj)
    localStorage.setItem("Orders", JSON.stringify(Orders))
}
ShowOrders()


function ShowOrders() {
    let Orders = []
    if (localStorage.Orders != null) { Orders = JSON.parse(localStorage.Orders) }
    let element2 = "";
    for (let i = 0; i < Orders.length; i++) {
        element2 += `
                <tr>
                    <td>${i}</td>
                    <td>${Orders[i].name}</td>
                    <td>${Orders[i].email}</td>
                    <td>${Orders[i].phone}</td>
                    <td>${Orders[i].city}</td>
                    <td>${Orders[i].total}</td>
                    <td>
                    <a onclick="AskSure(id)" id="${Orders[i].id}" class="fa-solid fa-trash"></a>
                    <a onclick="showDataOrder(id)" id="${i}" class="fa-solid fa-eye"></a>
                   </td>
                </tr>`
    }
    document.querySelector(".table-body").innerHTML = element2
}

function AskSure(id) {
    let Msg = document.querySelector(".Msg-Box")
    Msg.id = id
    Msg.querySelector(".loader").style.display = "none"
    Msg.querySelector(".btn-oky").style.display = "grid"
    Msg.querySelector(".btn-oky").innerHTML = `<form action="/DeleteOrder/${id}?_method=DELETE" method="post"><button type="submit">نعم</button></form>
                                                 <a onclick="Hide_Msg()">لا</a> `
    Msg.querySelector("i").classList.add("fa-trash")
    Msg.querySelector("h1").innerText = "هل تريد حذف الطلب ؟"
    Msg.classList.add("active")

}

function showDataOrder(id) {
    let Orders = []
    if (localStorage.Orders != null) { Orders = JSON.parse(localStorage.Orders) }
    let itemhide2 = ""; let itemhide3 = ""; let itemhide4 = ""
    let itemhide5 = ""; let itemhide6 = ""; let itemhide7 = "";

    if (Orders[id].item2 === "") { itemhide2 = "none" }
    if (Orders[id].item3 === "") { itemhide3 = "none" }
    if (Orders[id].item4 === "") { itemhide4 = "none" }
    if (Orders[id].item5 === "") { itemhide5 = "none" }
    if (Orders[id].item6 === "") { itemhide6 = "none" }
    if (Orders[id].item7 === "") { itemhide7 = "none" }

    document.querySelector("body").innerHTML += `
    <div class="CustomerOrder active">
    <div class="yyyy">
    <i class="fas fa-xmark" onclick="remove_me()"></i>
        <div class="dataCustomer">
            <div class="cart-total">
                <h3> الاسم : <span class="Name">${Orders[id].name}</span></h3>
                <h3> البريد : <span class="Email">${Orders[id].email}</span></h3>
                <h3> الهاتف : <span class="Phone">${Orders[id].phone}</span></h3>
                <h3> المنطقة : <span class="City">${Orders[id].city}</span></h3>
                <h3> القطعه : <span class="village">${Orders[id].village}</span></h3>
            </div>
            <div class="cart-total">
                <h3> الشارع : <span class="Email">${Orders[id].street}</span></h3>
                <h3> المنزل : <span class="Home">${Orders[id].home}</span></h3>
                <h3> وصف اضافي : <span class="Description">${Orders[id].description}</span></h3>
                <h3> ملاحظات : <span class="Notes">${Orders[id].notes}</span></h3>
            </div>
        </div>

        <div class="parent-table">
            <table class="MyTable">
                <thead class="table-head">
                    <tr>
                        <td>اسم الصنف</td>
                        <td>الكمية</td>
                        <td>اللون</td>
                        <td>المقاس</td>
                        <td>الوزن</td>
                        <td>السعر</td>
                    </tr>
                </thead>
                <tbody class="table-body">
                    <tr>
                        <td>${Orders[id].item1}</td>
                        <td>${Orders[id].quantity1}</td>
                        <td>${Orders[id].color1}</td>
                        <td>${Orders[id].size1}</td>
                        <td>${Orders[id].weight1}</td>
                        <td>${Orders[id].price1}</td>
                    </tr>
                    <tr style= "display:${itemhide2}">
                        <td>${Orders[id].item2}</td>
                        <td>${Orders[id].quantity2}</td>
                        <td>${Orders[id].color2}</td>
                        <td>${Orders[id].size2}</td>
                        <td>${Orders[id].weight2}</td>
                        <td>${Orders[id].price2}</td>
                    </tr>
                    <tr style= "display:${itemhide3}">
                        <td>${Orders[id].item3}</td>
                        <td>${Orders[id].quantity3}</td>
                        <td>${Orders[id].color3}</td>
                        <td>${Orders[id].size3}</td>
                        <td>${Orders[id].weight3}</td>
                        <td>${Orders[id].price3}</td>
                    </tr>
                    <tr style= "display:${itemhide4}">
                        <td>${Orders[id].item4}</td>
                        <td>${Orders[id].quantity4}</td>
                        <td>${Orders[id].color4}</td>
                        <td>${Orders[id].size4}</td>
                        <td>${Orders[id].weight4}</td>
                        <td>${Orders[id].price4}</td>
                    </tr>
                    <tr style= "display:${itemhide5}">
                        <td>${Orders[id].item5}</td>
                        <td>${Orders[id].quantity5}</td>
                        <td>${Orders[id].color5}</td>
                        <td>${Orders[id].size5}</td>
                        <td>${Orders[id].weight5}</td>
                        <td>${Orders[id].price5}</td>
                    </tr>
                    <tr style= "display:${itemhide6}">
                        <td>${Orders[id].item6}</td>
                        <td>${Orders[id].quantity6}</td>
                        <td>${Orders[id].color6}</td>
                        <td>${Orders[id].size6}</td>
                        <td>${Orders[id].weight6}</td>
                        <td>${Orders[id].price6}</td>
                    </tr>
                    <tr style= "display:${itemhide7}">
                        <td>${Orders[id].item7}</td>
                        <td>${Orders[id].quantity7}</td>
                        <td>${Orders[id].color7}</td>
                        <td>${Orders[id].size7}</td>
                        <td>${Orders[id].weight7}</td>
                        <td>${Orders[id].price7}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="cart-total">
            <h3> الاجمالي : <span class="Name">${Orders[id].subtotal}</span></h3>
            <h3> التوصيل : <span class="Email">${Orders[id].delivery}</span></h3>
            <h3> الاجمالي : <span class="Phone">${Orders[id].total}</span></h3>
        </div>

    </div>
</div>`
}

function remove_me() {
    document.querySelector(".CustomerOrder").remove()
}
