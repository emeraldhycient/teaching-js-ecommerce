let qty = 1;

const qty_holder = document.getElementById("qty_holder");


const decreaseQty = () => {
    if (qty > 1) {
        qty = qty - 1
        qty_holder.innerText = qty
    }
    return
}


const increaseQty = () => {
    qty = qty + 1
    qty_holder.innerText = qty
}

let productcontainer = document.querySelector("#productcontainer");

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(products => { printProducts(products.products) })
    .catch(err => console.log(err))





function printProducts(data) {
    data.map(product => {
        console.log(product.title)
        productcontainer.innerHTML += `<div class="h-fit pb-4 shadow">
                    <div class="h-fit bg-white">
                        <img src="${product.thumbnail}" class="h-36 w-full rounded-t" alt="">
                    </div>
                    <div class="mt-3 px-3">
                        <h5 class="text-[16px] font-light">${product.title} </h5>
                        <h6 class="text-[22px] font-semibold">₦${product.price}</h6>
                        <div class="flex justify-between items-center my-3">
                            <h3>QTY</h3>
                            <div class="flex">
                                <div class="bg-amber-50 px-5 py-2 rounded" onclick="decreaseQty()" id="minusbtn">
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <div class="w-12 text-center" id="qty_holder">1</div>
                                <div class="bg-amber-50 px-5 py-2 rounded" onclick="increaseQty()" id="plusbtn">
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div class="mt-2 flex justify-between items-center">
                            <div class="flex">
                               ${product.rating}
                            </div>
                            <button class="bg-amber-500 text-white rounded-sm px-2 py-2 text-sm">Add to Cart</button>
                        </div>
                    </div>
                </div>`
    })

}



const menuToggler = document.querySelector("#menuToggler")
const menu = document.querySelector("#menu")

menuToggler.addEventListener("click", () => {
    if (menu.style.display !== "none") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
})








