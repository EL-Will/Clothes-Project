let strProductsTotal = Number(localStorage.getItem('productsTotal'));
let idTotalItems = document.getElementById('items-count-total');
idTotalItems.innerHTML = `${strProductsTotal}`;

// let strProductsTotal = (localStorage.getItem('productsTotal'));
// if(strProductsTotal === null){
//     let arrProductsIndexAccount = [];
//     localStorage.setItem('productsTotal',JSON.stringify(arrProductsIndexAccount));
// }
// strProductsTotal = JSON.parse(localStorage.getItem('productsTotal'));
// let indexAcc = Number(localStorage.getItem('userLogin'));
// let idTotalItems = document.getElementById('items-count-total');
// idTotalItems.innerHTML = `${strProductsTotal[indexAcc]}`;

function menShoesProductsBag(sourceImg, nameType, price, sex, color, id, count) {

    menShoesProductBag.insertAdjacentHTML('beforeEnd',
        `
        <div class="flex-infor-price">
            <div class="box-img-infor-bag">
                <div class="flex-img-infor-bag">
                    <div class="box-img-bag">
                        <img src="${sourceImg}" alt="" class="img-fluid">
                    </div>
                    <div class="box-infor-bag">
                        <span class="format-P1-bag">${nameType}</span> <br>
                        <span class="format-P2-bag">${sex}</span> <br>
                        <span class="format-P3-bag">${color}</span> <br>
                        <div class="inline-size-bag">
                            <div class="format-P4-bag">
                                <span>Size</span>
                                <span>
                                    <select name="size" id="size${id}" class="size-bag" onChange="changeSize(this.id)">
                                        <option value="40">40</option>
                                        <option value="40.5">40.5</option>
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                        <option value="42.5">42.5</option>
                                        <option value="43">43</option>
                                    </select>
                                </span>
                            </div>
                            <div class="format-P5-bag flex-P5-bag">
                                <span>Quantity</span>
                                <span class="mrl-de"> <button type="button" class="decrease-quantity format-operator" id="decreaseBtn${id}" onClick="decrease(this.id)">-</button></span>
                                <span class="mrl-de" id="count_items${id}">${count}</span>
                                <span class="mrl-in"><button type="button" class="increase-quantity format-operator" id="increaseBtn${id}" onClick="increase(this.id)">+</button></span>
                            </div>
                        </div>
                        <button class="delete-btn mrt-40-delete" id="deleteBtn${id}" onClick="DeleteBtn(this.id)">
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px"
                                height="24px" fill="none">
                                <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5"
                                    d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="price-bag">
                <span id="price${id}">${price}</span><sup style="text-decoration: underline;">đ</sup>
            </div>
        </div>
            <div class="under-line">

            </div>
    `)
}


// Show all of product
let menShoesProductBag = document.getElementById('display-bag-item');

let strBagItems = localStorage.getItem('Bag');
let readBagItems;
if (strBagItems !== null) {
    readBagItems = JSON.parse(strBagItems);
    if (readBagItems.length > 0) {

        for (let i = 0; i < readBagItems.length; i++) {
            if (readBagItems[i].hasOwnProperty('count') === false) {
                readBagItems[i].count = 1;
            }
        }
        localStorage.setItem('Bag', (JSON.stringify(readBagItems)));
        menShoesProductBag.innerHTML = '';
        for (let i = 0; i < readBagItems.length; i++) {
            menShoesProductsBag(readBagItems[i].sourceImg, readBagItems[i].nameType, readBagItems[i].price, readBagItems[i].sex, readBagItems[i].color, i, readBagItems[i].count);
        }
        strBagItems = localStorage.getItem('Bag');
        readBagItems = JSON.parse(strBagItems);
        for (let i = 0; i < readBagItems.length; i++) {
            if (readBagItems[i].hasOwnProperty('size') === false) {
                let idSize = document.getElementById(`size${i}`).value;
                readBagItems[i].size = idSize;
            }
        }
        let Subtotal = 0;
        // let totalItems = 0;
        for (let i = 0; i < readBagItems.length; i++) {
            if (readBagItems[i].hasOwnProperty('totalPrice') === false) {
                readBagItems[i].totalPrice = readBagItems[i].numberPrice;
                Subtotal = Subtotal + readBagItems[i].totalPrice;
                // totalItems = totalItems + readBagItems[i].count;
            }
            else {
                Subtotal = Subtotal + readBagItems[i].totalPrice;
                let idPrice = document.getElementById(`price${i}`);
                idPrice.innerText = `${formatCash(readBagItems[i].totalPrice.toString())}`;
                // totalItems = totalItems + readBagItems[i].count;
            }
        }

        let idSubtotal = document.getElementById('sub-price');
        idSubtotal.innerText = `${formatCash(Subtotal.toString())}`;
        let idTotal = document.getElementById('total-price');
        idTotal.innerText = `${formatCash(Subtotal.toString())}`;
        localStorage.setItem('Bag', (JSON.stringify(readBagItems)));
    }
}

function splitId(str) {
    return Number(str.slice(11, str.length));
}

function splitIdDelete(str) {
    return Number(str.slice(9, str.length));
}
function splitIdSize(str) {
    return Number(str.slice(4, str.length));
}
function splitIdPrice(str) {
    return Number(str.slice(5, str.length));
}
function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}
function changeSize(clicked_id) {
    let id = splitIdSize(clicked_id);
    strBagItems = localStorage.getItem('Bag');
    readBagItems = JSON.parse(strBagItems);
    readBagItems[id].size = document.getElementById(`size${id}`).value;
    localStorage.setItem('Bag', (JSON.stringify(readBagItems)));
}
function findNameProduct(idNumber, arr) {
    let arrID = [];
    for (let i = 0; i < arr.length; i++) {
        arrID.push(arr[i].id)
    }
    return arrID.indexOf(idNumber);

}
function DeleteBtn(clicked_id) {

    let id = splitIdDelete(clicked_id);
    console.log(clicked_id);
    console.log(id);
    // let idDeleteBag = document.getElementById(`deleteBtn${id}`);
    strBagItems = localStorage.getItem('Bag');
    if (strBagItems !== null) {
        readBagItems = JSON.parse(strBagItems);
        delete readBagItems[id].count;
        readBagItems[id].bag = false;

        // change bag property in the favorite obj
        let checkArrFavorite = localStorage.getItem('Favorite');
        let arrFavorite;
        if (checkArrFavorite !== null) {
            arrFavorite = JSON.parse(localStorage.getItem('Favorite'));
        }
        if (arrFavorite.length > 0) {
            let idItems = findNameProduct(readBagItems[id].id, arrFavorite);

            if (idItems !== -1) {
                arrFavorite[idItems].bag = false
            }
        }
        localStorage.setItem('Favorite', (JSON.stringify(arrFavorite)));
        // =======================================
        readBagItems.splice(id, 1);
        localStorage.setItem('Bag', (JSON.stringify(readBagItems)));
        readBagItems = JSON.parse(localStorage.getItem('Bag'));
        menShoesProductBag.innerHTML = '';
        for (let i = 0; i < readBagItems.length; i++) {
            menShoesProductsBag(readBagItems[i].sourceImg, readBagItems[i].nameType, readBagItems[i].price, readBagItems[i].sex, readBagItems[i].color, i, readBagItems[i].count);
        }
        // Update Subtotal and Total price
        let Subtotal = 0;
        let totalItems = 0;
        for (let i = 0; i < readBagItems.length; i++) {
            Subtotal = Subtotal + readBagItems[i].totalPrice;
            let idPrice = document.getElementById(`price${i}`);
            idPrice.innerText = `${formatCash(readBagItems[i].totalPrice.toString())}`;
            totalItems = totalItems + readBagItems[i].count;
        }
        // strProductsTotal = (localStorage.getItem('productsTotal'));
        // indexAcc = Number(localStorage.getItem('userLogin'));
        // strProductsTotal[indexAcc] = totalItems;
        // localStorage.setItem('productsTotal', JSON.stringify(strProductsTotal));
        // let idTotalItems = document.getElementById('items-count-total');
        // idTotalItems. innerHTML = `${totalItems}`;

        localStorage.setItem('productsTotal', totalItems);
        strProductsTotal = Number(localStorage.getItem('productsTotal'));
        let idTotalItems = document.getElementById('items-count-total');
        idTotalItems.innerHTML = `${strProductsTotal}`;
        let idSubtotal = document.getElementById('sub-price');
        idSubtotal.innerText = `${formatCash(Subtotal.toString())}`;
        let idTotal = document.getElementById('total-price');
        idTotal.innerText = `${formatCash(Subtotal.toString())}`;
    }
}
function decrease(clicked_id) {
    let countItems;
    strBagItems = localStorage.getItem('Bag');
    if (strBagItems !== null) {
        readBagItems = JSON.parse(strBagItems);
        if (readBagItems.length > 0) {
            let idItems = splitId(clicked_id);
            countItems = readBagItems[idItems].count;
            if (countItems > 0) {
                countItems--;
                let idCountItems = document.getElementById(`count_items${idItems}`);
                idCountItems.innerText = `${countItems}`;
                readBagItems[idItems].count = countItems;

                let idPrice = document.getElementById(`price${idItems}`);
                let currentPrice = readBagItems[idItems].numberPrice;
                currentPrice = currentPrice * countItems;
                readBagItems[idItems].totalPrice = currentPrice;
                idPrice.innerText = `${formatCash(currentPrice.toString())}`;
                localStorage.setItem('Bag', (JSON.stringify(readBagItems)));
            }
            else {
                countItems = 0;
                let idCountItems = document.getElementById(`count_items${idItems}`);
                idCountItems.innerText = `${countItems}`;
                readBagItems[idItems].count = countItems;

                let idPrice = document.getElementById(`price${idItems}`);
                let currentPrice = readBagItems[idItems].numberPrice;
                currentPrice = currentPrice * countItems;
                readBagItems[idItems].totalPrice = currentPrice;
                idPrice.innerText = `${formatCash(currentPrice.toString())}`;

                localStorage.setItem('Bag', (JSON.stringify(readBagItems)));
            }
            // Update Subtotal and Total price
            let Subtotal = 0;
            let totalItems = 0;
            strBagItems = localStorage.getItem('Bag');
            readBagItems = JSON.parse(strBagItems);
            for (let i = 0; i < readBagItems.length; i++) {
                Subtotal = Subtotal + readBagItems[i].totalPrice;
                let idPrice = document.getElementById(`price${i}`);
                idPrice.innerText = `${formatCash(readBagItems[i].totalPrice.toString())}`;
                totalItems = totalItems + readBagItems[i].count;
            }
            // strProductsTotal = (localStorage.getItem('productsTotal'));
            // indexAcc = Number(localStorage.getItem('userLogin'));
            // strProductsTotal[indexAcc] = totalItems;
            // localStorage.setItem('productsTotal', JSON.stringify(strProductsTotal));
            // let idTotalItems = document.getElementById('items-count-total');
            // idTotalItems. innerHTML = `${totalItems}`;
            localStorage.setItem('productsTotal', totalItems);
            strProductsTotal = Number(localStorage.getItem('productsTotal'));
            let idTotalItems = document.getElementById('items-count-total');
            idTotalItems.innerHTML = `${strProductsTotal}`;
            let idSubtotal = document.getElementById('sub-price');
            idSubtotal.innerText = `${formatCash(Subtotal.toString())}`;
            let idTotal = document.getElementById('total-price');
            idTotal.innerText = `${formatCash(Subtotal.toString())}`;
        }
    }
}

function increase(clicked_id) {
    let countItems;
    strBagItems = localStorage.getItem('Bag');
    if (strBagItems !== null) {

        readBagItems = JSON.parse(strBagItems);
        if (readBagItems.length > 0) {
            console.log('OK');
            let idItems = splitId(clicked_id);
            console.log('id', idItems);
            countItems = readBagItems[idItems].count;
            console.log(countItems);
            countItems++;
            let idCountItems = document.getElementById(`count_items${idItems}`);
            idCountItems.innerText = `${countItems}`;
            readBagItems[idItems].count = countItems;

            let idPrice = document.getElementById(`price${idItems}`);
            let currentPrice = readBagItems[idItems].numberPrice;
            currentPrice = currentPrice * countItems;
            readBagItems[idItems].totalPrice = currentPrice;
            idPrice.innerText = `${formatCash(currentPrice.toString())}`;
            localStorage.setItem('Bag', (JSON.stringify(readBagItems)));
        }
        // Update Subtotal and Total price
        let Subtotal = 0;
        let totalItems = 0;
        strBagItems = localStorage.getItem('Bag');
        readBagItems = JSON.parse(strBagItems);
        for (let i = 0; i < readBagItems.length; i++) {
            Subtotal = Subtotal + readBagItems[i].totalPrice;
            let idPrice = document.getElementById(`price${i}`);
            idPrice.innerText = `${formatCash(readBagItems[i].totalPrice.toString())}`;
            totalItems = totalItems + readBagItems[i].count;
        }
        // strProductsTotal = (localStorage.getItem('productsTotal'));
        // indexAcc = Number(localStorage.getItem('userLogin'));
        // strProductsTotal[indexAcc] = totalItems;
        // localStorage.setItem('productsTotal', JSON.stringify(strProductsTotal));
        // let idTotalItems = document.getElementById('items-count-total');
        // idTotalItems. innerHTML = `${totalItems}`;
        localStorage.setItem('productsTotal', totalItems);
        strProductsTotal = Number(localStorage.getItem('productsTotal'));
        let idTotalItems = document.getElementById('items-count-total');
        idTotalItems.innerHTML = `${strProductsTotal}`;
        let idSubtotal = document.getElementById('sub-price');
        idSubtotal.innerText = `${formatCash(Subtotal.toString())}`;
        let idTotal = document.getElementById('total-price');
        idTotal.innerText = `${formatCash(Subtotal.toString())}`;
    }
}

