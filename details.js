
let query = location.search

let params = new URLSearchParams(query);

let productid = params.get("productid")

fetch(`https://dummyjson.com/products/${productid}`)
    .then(res => res.json())
    .then(product => { printProduct(product) })
    .catch(err => console.log(err))



let productcontainer = document.querySelector("#productcontainer");


function printProduct(data) {
        productcontainer.innerHTML += `<div class="col-span-6 w-full">
                <img src="${data?.thumbnail}" class="h-[170px] md:h-[300px] w-full" alt="">
                <div class="overflow-auto flex flex-wrap mt-2">
                    <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" class="h-[70px] w-[100px] mr-2"
                        alt="">
                    <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" class="h-[70px] w-[100px] mr-2"
                        alt="">
                    <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" class="h-[70px] w-[100px] mr-2"
                        alt="">
                </div>
            </div>
            <div class="col-span-6">
                <h5 class="text-[20px] font-semibold mb-3">${data?.title}</h5>
                <h6 class="text-[16px] font-light mb-3">${data?.description}</h6>
                <h6 class="text-[22px] font-semibold mb-3">$${data?.price}</h6>
                <button class="bg-[#FEB0A9] text-white rounded-sm px-2 py-2 text-sm">Add to Cart</button>
            </div>`

}

