const phones = [
    {
        brand: "Samsung",
        img: "./assets/samsung.jpg",
        model: "Z Fold",
        ram: 12,
        rom: 265,
        camera: "12 MP",
        price : 599999 ,
    },
    {
        brand: "Xiomi",
        img: "./assets/xiaomi2.jpg",
        model: "Mi 12 Pro",
        ram: 12,
        rom: 256,
        camera: "50 MP",
        price: 208999 ,
    },
    {
        brand: "Infinix",
        img: "./assets/infinix.jpg",
        model: "Note 12 Vip",
        ram: 8,
        rom: 256,
        camera: "108 MP",
        price : 54999 ,
    },
    {
        brand: "Tecno",
        img: "./assets/tecno.jpg",
        model: "Camon 18",
        ram: 8,
        rom: 256,
        camera: "64 MP",
        price: 29999 ,
    },
    {
        brand: "Apple Iphone",
        img: "./assets/iphone2.jpg",
        model: "14 Pro Max",
        ram: 6,
        rom: 512,
        camera: "48 MP",
        price: 565999 ,
    },
    {
        brand: "Oppo",
        img: "./assets/oppo.jpg",
        model: "Reno 6 Pro",
        ram: 12,
        rom: 256,
        camera: "64 MP",
        price: 119999 ,
    },
    {
        brand: "Vivo",
        img: "./assets/vivo.jpg",
        model: "X80",
        ram: 12,
        rom: 256,
        camera: "50 MP",
        price: 169999 ,
    },
];


let div = document.querySelector("#div");

for (i = 0; i < phones.length; i++) {
    div.innerHTML += `<div class="container">
<img src="${phones[i].img}" alt="mobile image">
<div class="specs">
<h3>Brand : <span>${phones[i].brand}</span></h3>
<h3>Model : <span>${phones[i].model}</span></h3>
<h3>Ram : <span>${phones[i].ram}</span></h3>
<h3>Rom : <span>${phones[i].rom}</span></h3>
<h3>Camera : <span>${phones[i].camera}</span></h3>
<h3>Price : <span>${phones[i].price}</span></h3>
</div>

<button class="btn" onclick="AddToCart(${i})">Add To Cart</button>
</div>`;
}



const ArrayOfCart = []
function AddToCart(index) {
    if (ArrayOfCart.includes(phones[index]) === true) {
        console.log('Item Agai Hai');
    }
    else {
        ArrayOfCart.push(phones[index]);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Item Added',
            showConfirmButton: false,
            timer: 1500
        })
    }
    console.log('cartArr:', ArrayOfCart);
}