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








