let strProductsTotal = Number(localStorage.getItem('productsTotal'));
let idTotalItems = document.getElementById('items-count-total');
idTotalItems. innerHTML = `${strProductsTotal}`;

let menShoesProduct_items = document.getElementById('men-shoes-product_items');

function showmenShoesProductsFavorite(sourceImg, nameType, price, sex, color, id) {
    menShoesProduct_items.insertAdjacentHTML('beforeEnd',
        `
    <div class="men-shoes-box-img-infor-product">
        <img src="${sourceImg}" alt="shoes" class="img-fluid" style="z-index: -1;">
        <div class="box-favorite">
            <button class="favorite-btn fill--favorite" type="button" id="favoriteBtn${id}" onClick="favoriteBtn(this.id)" >
                <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                    <path
                        d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                    </path>
                </svg>
            </button>
        </div>
        <div class="men-shoes-box-infor-product">
            <span>${nameType}</span>
            <br>
            <span style="color: rgb(145, 143, 143)">${sex}</span>
            <br>
            <span style="color: rgb(145, 143, 143)">${color}</span>
            <br>
            <span style="color:black">${price}<sup style="text-decoration: underline;">đ</sup></span>   
        </div>
    </div>
    `)
}

// Show all of product
let checkingArrFavorite = localStorage.getItem('Favorite');
if (checkingArrFavorite !== null) {
    let menShoesProductsFavorite = JSON.parse(localStorage.getItem('Favorite'));
    menShoesProduct_items.innerHTML = '';
    for (let i = 0; i < menShoesProductsFavorite.length; i++) {
        showmenShoesProductsFavorite(menShoesProductsFavorite[i].sourceImg, menShoesProductsFavorite[i].nameType, menShoesProductsFavorite[i].price, menShoesProductsFavorite[i].sex, menShoesProductsFavorite[i].color, i);
    }
}

function splitId(str) {
    return Number(str.slice(11, str.length));
}
function findNameProduct(idNumber, arr) {
    let arrID = [];
    for (let i = 0; i < arr.length; i++) {
        arrID.push(arr[i].id)
    }
    return arrID.indexOf(idNumber);

}
function favoriteBtn(clicked_id) {
    let idFavorite = document.getElementById(clicked_id);
    let boolFavorite = idFavorite.classList.toggle('fill--favorite');
    let id = splitId(clicked_id);

    let arrFavorite = JSON.parse(localStorage.getItem('Favorite'));
    arrFavorite[id].favorite = false;
    // change bag property in the favorite obj
    let checkArrBag = localStorage.getItem('Bag');
    let arrBag;
    if(checkArrBag !== null){
        arrBag= JSON.parse(localStorage.getItem('Bag'));
    }
    if(arrBag.length > 0){
        let idItems = findNameProduct(arrFavorite[id].id, arrBag);
        
        if(idItems !== -1){
            arrBag[idItems].favorite = false
        }
    }
    localStorage.setItem('Bag', (JSON.stringify(arrBag)));
    // =======================================
    arrFavorite.splice(id, 1);
    let strFavorite = JSON.stringify(arrFavorite);
    localStorage.setItem('Favorite', strFavorite);
    let menShoesProductsFavorite = JSON.parse(localStorage.getItem('Favorite'));
    menShoesProduct_items.innerHTML = '';
    for (let i = 0; i < menShoesProductsFavorite.length; i++) {
        showmenShoesProductsFavorite(menShoesProductsFavorite[i].sourceImg, menShoesProductsFavorite[i].nameType, menShoesProductsFavorite[i].price, menShoesProductsFavorite[i].sex, menShoesProductsFavorite[i].color, i);
    }
}