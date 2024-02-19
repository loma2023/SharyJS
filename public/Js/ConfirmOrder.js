let info = []
if (localStorage.info != null) { info = JSON.parse(localStorage.info) }

let MyCity = []
if (localStorage.MyCity != null) { MyCity = JSON.parse(localStorage.MyCity) }

let City = []
if (localStorage.City != null) { City = JSON.parse(localStorage.City) }

let myform = document.querySelector(".form_COrder")

document.querySelector(".Name").innerText = info.name;
document.querySelector(".Email").innerText = info.email;
document.querySelector(".Phone").innerText = info.phone;
let pricee = parseFloat(City[MyCity.id].price)
document.querySelector(".Delivery").innerText = pricee.toFixed(2);


ShowOrder()
function ShowOrder() {
    let Shopping = []
    if (localStorage.Shopping != null) { Shopping = JSON.parse(localStorage.Shopping) }

    let element = "";
    let inputs = ""
    for (let i = 0; i < Shopping.length; i++) {
        let color = Shopping[i].color
        let size = Shopping[i].size
        let weight = Shopping[i].weight
        if (color === "none") { color = "" }
        if (weight === "none") { weight = "" }
        if (size === "none") { size = "" }

        inputs +=`
        <input name="NItem" type="text" value="${Shopping[i].name}" style="display: none;">
        <input name="QItem" type="text" value="${Shopping[i].quantity}" style="display: none;">
        <input name="CItem" type="text" value="${color}" style="display: none;">
        <input name="SItem" type="text" value="${size}" style="display: none;">
        <input name="WItem" type="text" value="${weight}" style="display: none;">
        <input name="PItem" type="text" value="${Shopping[i].price}" style="display: none;">
        `

        element += `
                <tr>
                    <td>${Shopping[i].name}</td>
                    <td>${Shopping[i].quantity}</td>
                    <td>${color}</td>
                    <td>${size}</td>
                    <td>${weight}</td>
                    <td>${Shopping[i].price}</td>
                </tr>`
    }
    document.querySelector(".table-body").innerHTML = element
    myform.innerHTML += inputs
    myform.innerHTML += `<button  class="btn">تأكيد الطلب</button>`
}




total()
function total() {
    let Shopping = []
    if (localStorage.Shopping != null) { Shopping = JSON.parse(localStorage.Shopping) }
    let total = 0;
    for (let i = 0; i < Shopping.length; i++) {
        total = total + (parseFloat(Shopping[i].price) * parseFloat(Shopping[i].quantity))
    }
    let Delivery = document.querySelector(".Delivery").innerText

    document.querySelector(".SubTotal").innerText = total.toFixed(2)
    document.querySelector(".Total").innerText = (total + parseFloat(Delivery)).toFixed(2)
    
    myform.querySelectorAll("input")[9].value =  total.toFixed(2);
    myform.querySelectorAll("input")[10].value =  Delivery;
    myform.querySelectorAll("input")[11].value =  (total + parseFloat(Delivery)).toFixed(2);

    if (total == 0) {
        document.querySelector(".cart-total").style.display = "none"
    } else {
        document.querySelector(".cart-total").style.display = ""
    }
}


myform.querySelectorAll("input")[0].value =  info.name;
myform.querySelectorAll("input")[1].value =  info.email;
myform.querySelectorAll("input")[2].value =  info.phone;
myform.querySelectorAll("input")[3].value =  info.city;
myform.querySelectorAll("input")[4].value =  info.home;
myform.querySelectorAll("input")[5].value =  info.street;
myform.querySelectorAll("input")[6].value =  info.village;
myform.querySelectorAll("input")[7].value =  info.description;
myform.querySelectorAll("input")[8].value =  info.notes;
