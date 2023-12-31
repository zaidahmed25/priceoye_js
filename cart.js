const cartdiv = document.querySelector("#cart_div")
const totalAmounts = document.querySelector('#total-amount');
const noitem = document.querySelector("#noitem")
const data = localStorage.getItem('cartarr')
const obj_data = JSON.parse(data)
render()

function render() {
    let totalAmount = 0;
    totalAmounts.innerHTML = ''
    if (obj_data.length > 0) {
        for (i = 0; i < obj_data.length; i++) {
            totalAmount = obj_data[i].price * obj_data[i].quantity
            cartdiv.innerHTML += `<div class="container">
            <img src="${obj_data[i].img}" alt="mobile image">
            <div class="specs">
            <h3>Brand : <span>${obj_data[i].brand}</span></h3>
            <h3>Model : <span>${obj_data[i].model}</span></h3>
            <h3>Ram : <span>${obj_data[i].ram}</span></h3>
            <h3>Rom : <span>${obj_data[i].rom}</span></h3>
            <h3>Camera : <span>${obj_data[i].camera}</span></h3>
            <h3>Price : <span>${obj_data[i].price}</span></h3>
            <h3>Quantity : <span>${obj_data[i].quantity}</span></h3>
            <h3>Total Price : <span>${obj_data[i].price * obj_data[i].quantity}</span></h3>
            <button class="cart-btn3" onclick="Decreased(${i})"><h3>-</h3></button>${obj_data[i].quantity}<button class="cart-btn3"  onclick="Increased(${i})"><h3>+</h3></button>
            <button class="cart-btn2" onclick="Delete(${i})">Delete</button>
            </div>`
            totalAmounts.innerHTML = `<span class="totalamount">Total Amount ${totalAmount}</span>`
        }
    } else {
        noitem.innerHTML = '<h3 class="itemnotfound-text">Items Not Found..</h3>'
    }

}


function Increased(index) {
    cartdiv.innerHTML = ""
    obj_data[index].quantity += 1
    render()
}
function Decreased(index) {
    cartdiv.innerHTML = ""
    obj_data[index].quantity -= 1
    if (obj_data[index].quantity === 0) {
        obj_data.splice(index, 1)

    }
    render()
}

function Delete(index) {
    cartdiv.innerHTML = ""
    obj_data.splice(index, 1)
    render()

}

function gotohome() {
    window.location = 'index.html'
}

window.onbeforeunload = function() {
    localStorage.setItem('cartarr' , JSON.stringify(obj_data));
};