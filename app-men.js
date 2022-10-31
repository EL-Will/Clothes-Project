
// let strProductsTotal = (localStorage.getItem('productsTotal'));
// if(strProductsTotal === null){
//     let arrProductsIndexAccount = [];
//     localStorage.setItem('productsTotal',JSON.stringify(arrProductsIndexAccount));
// }
// strProductsTotal = JSON.parse(localStorage.getItem('productsTotal'));
// let indexAcc = Number(localStorage.getItem('userLogin'));
// let idTotalItems = document.getElementById('items-count-total');
// idTotalItems.innerHTML = `${strProductsTotal[indexAcc]}`;

let strProductsTotal = Number(localStorage.getItem('productsTotal'));
let idTotalItems = document.getElementById('items-count-total');
idTotalItems.innerHTML = `${strProductsTotal}`;

let idSortBy = document.getElementById('sortBy');
idSortBy.addEventListener('click', functionDisplaySort);

let checkSortByOpen = false;

function functionDisplaySort() {
    if (checkSortByOpen === false) {
        let classDropdownOptions = document.getElementsByClassName('dropdown__options-list')[0];
        classDropdownOptions.style.transform = 'translateY(0%)';
        classDropdownOptions.style.visibility = 'visible';
        checkSortByOpen = true;
    }
    else {
        let classDropdownOptions = document.getElementsByClassName('dropdown__options-list')[0];
        classDropdownOptions.removeAttribute('style');
        checkSortByOpen = false;
    }
}

let menShoesProducts = [
    {
        sourceImg: './image/men-shoes/shoes1.webp',
        nameType: `Nike Air Force 1 '07 LV8`,
        sex: `Men's Shoes`,
        color: `3 Clours`,
        price: '3,239,000',
        numberPrice: 3239000,
        id: 0,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes2.webp',
        nameType: `Nike Air Force 1 React`,
        sex: `Men's Shoes`,
        color: `1 Clour`,
        price: '3,959,000',
        numberPrice: 3959000,
        id: 1,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes3.webp',
        nameType: `Nike Air Force 1 '07 Premium Vintage`,
        sex: `Men's Shoes`,
        color: `2 Clours`,
        price: '4,109,000',
        numberPrice: 4109000,
        id: 2,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes4.webp',
        nameType: `Nike Air Force 1 '07 LV8`,
        sex: `Men's Shoes`,
        color: `1 Clour`,
        price: '3,239,000',
        numberPrice: 3239000,
        id: 3,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes5.webp',
        nameType: `Nike Air Terrascape 97`,
        sex: `Men's Shoes`,
        color: `2 Clours`,
        price: '5,589,000',
        numberPrice: 5589000,
        id: 4,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes6.webp',
        nameType: `Nike Air Max 97`,
        sex: `Men's Shoes`,
        color: `1 Clour`,
        price: '5,279,000',
        numberPrice: 5279000,
        id: 5,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes7.webp',
        nameType: `Air Jordan 1 Zoom CMFT`,
        sex: `Shoes`,
        color: `5 Clours`,
        price: '4,109,000',
        numberPrice: 4109000,
        id: 6,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes8.jpg',
        nameType: `Nike Zoom Fly 5`,
        sex: `Men's Shoes`,
        color: `4 Clour`,
        price: '4,699,000',
        numberPrice: 4699000,
        id: 7,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes9.webp',
        nameType: `Nike Metcon 8MF`,
        sex: `Men's Training Shoes`,
        color: `1 Clours`,
        price: '3,829,000',
        numberPrice: 3829000,
        id: 8,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes10.webp',
        nameType: `Nike Air Zoom Pegasus 39`,
        sex: `Men's Road Running Shoes`,
        color: `7 Clour`,
        price: '3,519,000',
        numberPrice: 3519000,
        id: 9,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes11.webp',
        nameType: `Jordan Delta 3 Mid`,
        sex: `Men's Shoes`,
        color: `2 Clours`,
        price: '4,409,000',
        numberPrice: 4409000,
        id: 10,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes12.webp',
        nameType: `Nike Air Force 1'07 LV8`,
        sex: `Men's Shoes`,
        color: `2 Clour`,
        price: '3,239,000',
        numberPrice: 3239000,
        id: 11,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes13.webp',
        nameType: `Nike Air Zoom Alphafly NEXT%2`,
        sex: `Men's Road Racing Shoes`,
        color: `1 Clours`,
        price: '8,059,000',
        numberPrice: 8059000,
        id: 12,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes14.webp',
        nameType: `Jordan Series .06`,
        sex: `Men's Shoes`,
        color: `1 Clour`,
        price: '2,499,000',
        numberPrice: 2499000,
        id: 13,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes15.webp',
        nameType: `Air Jordan 1 Low SE`,
        sex: `Men's Shoes`,
        color: `1 Clours`,
        price: '3,239,000',
        numberPrice: 3239000,
        id: 14,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes16.webp',
        nameType: `Nike Air Force 1 '07 LV8 EMB`,
        sex: `Men's Shoes`,
        color: `1 Clour`,
        price: '3,089,000',
        numberPrice: 3089000,
        id: 15,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes17.webp',
        nameType: `Air Jordan 1 Mid SE`,
        sex: `Men's Shoes`,
        color: `1 Clours`,
        price: '3,829,000',
        numberPrice: 3829000,
        id: 16,
        favorite: false,
        bag: false,
    },
    {
        sourceImg: './image/men-shoes/shoes18.webp',
        nameType: `PG 6 EP`,
        sex: `Basketball Shoes`,
        color: `1 Clour`,
        price: '3,239,000',
        numberPrice: 3239000,
        id: 17,
        favorite: false,
        bag: false,
    }
]
let classMenShoes = document.getElementById('title-men-shoes');
classMenShoes.innerText = `Men's Shoes(${menShoesProducts.length})`;

let checkArrFavorite = localStorage.getItem('Favorite');
let checkArrBag = localStorage.getItem('Bag');
console.log(checkArrBag);
if (checkArrFavorite !== null && checkArrBag === null) {
    let temporaryArrFavorite = JSON.parse(checkArrFavorite);
    if (temporaryArrFavorite.length !== 0) {
        let temporaryArrProducts = []
        for (let i = 0; i < menShoesProducts.length; i++) {
            temporaryArrProducts.push(menShoesProducts[i].id);
        }
        for (let i = 0; i < temporaryArrFavorite.length; i++) {
            let index = temporaryArrProducts.indexOf(temporaryArrFavorite[i].id);

            menShoesProducts.splice(index, 1, temporaryArrFavorite[i]);
        }
    }
}
else if (checkArrFavorite === null && checkArrBag !== null) {
    let temporaryArrBag = JSON.parse(checkArrBag);
    console.log(temporaryArrBag);
    if (temporaryArrBag.length !== 0) {
        let temporaryArrProducts = []
        for (let i = 0; i < menShoesProducts.length; i++) {
            temporaryArrProducts.push(menShoesProducts[i].id);
        }
        for (let i = 0; i < temporaryArrBag.length; i++) {
            let index = temporaryArrProducts.indexOf(temporaryArrBag[i].id);

            menShoesProducts.splice(index, 1, temporaryArrBag[i]);
        }
    }
}
else if (checkArrFavorite !== null && checkArrBag !== null) {
    let temporaryArrFavorite = JSON.parse(checkArrFavorite);
    let temporaryArrBag = JSON.parse(checkArrBag);
    if (temporaryArrFavorite.length !== 0 && temporaryArrBag.length === 0) {
        let temporaryArrProducts = []
        for (let i = 0; i < menShoesProducts.length; i++) {
            temporaryArrProducts.push(menShoesProducts[i].id);
        }
        console.log('bag', temporaryArrBag);
        console.log('favo', temporaryArrFavorite);
        for (let i = 0; i < temporaryArrFavorite.length; i++) {
            let index = temporaryArrProducts.indexOf(temporaryArrFavorite[i].id);

            menShoesProducts.splice(index, 1, temporaryArrFavorite[i]);
        }
    }
    else if (temporaryArrFavorite.length === 0 && temporaryArrBag.length !== 0) {
        let temporaryArrProducts = []
        for (let i = 0; i < menShoesProducts.length; i++) {
            temporaryArrProducts.push(menShoesProducts[i].id);
        }
        console.log('bag', temporaryArrBag);
        console.log('favo', temporaryArrFavorite);
        for (let i = 0; i < temporaryArrBag.length; i++) {
            let index = temporaryArrProducts.indexOf(temporaryArrBag[i].id);

            menShoesProducts.splice(index, 1, temporaryArrBag[i]);
        }
    }
    else if (temporaryArrFavorite.length !== 0 && temporaryArrBag.length !== 0) {
        let temporaryArrProducts = [];
        for (let i = 0; i < menShoesProducts.length; i++) {
            temporaryArrProducts.push(menShoesProducts[i].id);
        }
        let temporaryF = [];
        let temporaryB = [];
        let temporaryArrFB = [];
        for (let i = 0; i < temporaryArrFavorite.length; i++) {
            temporaryF.push(temporaryArrFavorite[i].id)
        }
        for (let i = 0; i < temporaryArrBag.length; i++) {
            temporaryB.push(temporaryArrBag[i].id)
        }
        let temporaryFB = new Set(temporaryF.concat(temporaryB));
        for (key of temporaryFB) {
            temporaryArrFB.push(key);
        }
        console.log(temporaryF);
        console.log(temporaryB);
        console.log(temporaryArrFB);
        for (let i = 0; i < temporaryArrFB.length; i++) {
            if (temporaryF.indexOf(temporaryArrFB[i]) !== -1 && temporaryB.indexOf(temporaryArrFB[i]) !== -1) {
                let index = temporaryArrProducts.indexOf(temporaryArrFB[i]);
                console.log(index);
                menShoesProducts[index].favorite = true;
                menShoesProducts[index].bag = true;
            }
            else if (temporaryF.indexOf(temporaryArrFB[i]) !== -1 && temporaryB.indexOf(temporaryArrFB[i]) === -1) {
                let index = temporaryArrProducts.indexOf(temporaryArrFB[i]);
                menShoesProducts[index].favorite = true;
                menShoesProducts[index].bag = false;
            }
            else if (temporaryF.indexOf(temporaryArrFB[i]) === -1 && temporaryB.indexOf(temporaryArrFB[i]) !== -1) {
                let index = temporaryArrProducts.indexOf(temporaryArrFB[i]);
                menShoesProducts[index].favorite = false;
                menShoesProducts[index].bag = true;
            }
        }

    }
}
let ptrProducts = JSON.parse(JSON.stringify(menShoesProducts));

let menShoesProduct_items = document.getElementById('men-shoes-product_items');

function showMenShoesProducts(sourceImg, nameType, price, sex, color, id, favorite, bag) {
    if (favorite === false && bag === false) {
        menShoesProduct_items.insertAdjacentHTML('beforeEnd',
            `
    <div class="men-shoes-box-img-infor-product">
        <img src="${sourceImg}" alt="shoes" class="img-fluid" style="z-index: -1;">
        <div class="box-favorite">
            <button class="favorite-btn" type="button" id="favoriteBtn${id}" onClick="favoriteBtn(this.id)">
                <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                    <path
                        d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                    </path>
                </svg>
            </button>
        </div>
        <div class="box-bag">
            <button class="bag-btn" type="button" id="bagBtn${id}" onClick="bagBtn(this.id)">
                <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24"role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5"
                        d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
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
    else if (favorite === true && bag === true) {
        menShoesProduct_items.insertAdjacentHTML('beforeEnd',
            `
            <div class="men-shoes-box-img-infor-product">
                <img src="${sourceImg}" alt="shoes" class="img-fluid" style="z-index: -1;">
                <div class="box-favorite">
                    <button class="favorite-btn fill--favorite" type="button" id="favoriteBtn${id}" onClick="favoriteBtn(this.id)">
                        <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                            <path
                                d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="box-bag">
                    <button class="bag-btn fill--bag" type="button" id="bagBtn${id}" onClick="bagBtn(this.id)">
                        <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24"role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
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
    else if (favorite === true && bag === false) {
        menShoesProduct_items.insertAdjacentHTML('beforeEnd',
            `
            <div class="men-shoes-box-img-infor-product">
                <img src="${sourceImg}" alt="shoes" class="img-fluid" style="z-index: -1;">
                <div class="box-favorite">
                    <button class="favorite-btn fill--favorite" type="button" id="favoriteBtn${id}" onClick="favoriteBtn(this.id)">
                        <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                            <path
                                d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="box-bag">
                    <button class="bag-btn" type="button" id="bagBtn${id}" onClick="bagBtn(this.id)">
                        <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24"role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
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
    else if (favorite === false && bag === true) {
        menShoesProduct_items.insertAdjacentHTML('beforeEnd',
            `
            <div class="men-shoes-box-img-infor-product">
                <img src="${sourceImg}" alt="shoes" class="img-fluid" style="z-index: -1;">
                <div class="box-favorite">
                    <button class="favorite-btn" type="button" id="favoriteBtn${id}" onClick="favoriteBtn(this.id)">
                        <svg height="18px" width="18px" fill="#111" viewBox="0 0 25 32">
                            <path
                                d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="box-bag">
                    <button class="bag-btn fill--bag" type="button" id="bagBtn${id}" onClick="bagBtn(this.id)">
                        <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24"role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
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

}

// Show all of product
menShoesProduct_items.innerHTML = '';
for (let i = 0; i < ptrProducts.length; i++) {
    showMenShoesProducts(ptrProducts[i].sourceImg, ptrProducts[i].nameType, ptrProducts[i].price, ptrProducts[i].sex, ptrProducts[i].color, i, ptrProducts[i].favorite, ptrProducts[i].bag);
}

let fixedNavbar = document.getElementsByClassName('men-shoes-slidebar')[0];

let positionNvabar1 = document.querySelector('.pos-logo1');
let positionNvabar2 = document.querySelector('.pre-header2');
let positionNvabar3 = document.querySelector('.format-text-title');

const moveNavbar1 = (e) => {
    // let fixedNavbar = document.getElementsByClassName('men-shoes-slidebar')[0];
    if (!e[0].isIntersecting) {
        fixedNavbar.style.marginTop = '-100px';
        fixedNavbar.style.position = 'fixed';
    }
    else {
        fixedNavbar.removeAttribute('style');
    }

}
const moveNavbar2 = (e) => {
    // let fixedNavbar = document.getElementsByClassName('men-shoes-slidebar')[0];
    if (!e[0].isIntersecting) {
        fixedNavbar.style.marginTop = '-200px';
        fixedNavbar.style.position = 'fixed';
    }
    else {
        fixedNavbar.removeAttribute('style');
    }

}
const moveNavbar3 = (e) => {
    // let fixedNavbar = document.getElementsByClassName('men-shoes-slidebar')[0];
    if (!e[0].isIntersecting) {
        fixedNavbar.style.marginTop = '-250px';
        fixedNavbar.style.position = 'fixed';
    }
    else {
        fixedNavbar.removeAttribute('style');
    }

}



moveNavbarIntersectionObs1 = new IntersectionObserver(moveNavbar1);
moveNavbarIntersectionObs1.observe(positionNvabar1);
moveNavbarIntersectionObs2 = new IntersectionObserver(moveNavbar2);
moveNavbarIntersectionObs2.observe(positionNvabar2);
moveNavbarIntersectionObs3 = new IntersectionObserver(moveNavbar3);
moveNavbarIntersectionObs3.observe(positionNvabar3);

// Favorite

function splitId(str) {
    return Number(str.slice(11, str.length));
}
function splitIdBag(str) {
    return Number(str.slice(6, str.length));
}
function findNameProduct(idNumber, arr) {
    let arrID = [];
    for (let i = 0; i < arr.length; i++) {
        arrID.push(arr[i].id)
    }
    return arrID.indexOf(idNumber);

}

function favoriteBtn(clicked_id) {
    let checkLogin = localStorage.getItem('boolLogin');
    checkArrFavorite = localStorage.getItem('Favorite');
    checkArrBag = localStorage.getItem('Bag');
    if (checkLogin === 'true') {
        let idFavorite = document.getElementById(clicked_id);
        let boolFavorite = idFavorite.classList.toggle('fill--favorite');
        let id = splitId(clicked_id);
        if (checkArrFavorite === null) {
            ptrProducts[id].favorite = true;
            console.log(ptrProducts[id]);
            let arrFavorite = [];
            arrFavorite.push(ptrProducts[id]);
            let strFavorite = JSON.stringify(arrFavorite);
            localStorage.setItem('Favorite', strFavorite);
        }
        else {
            let arrFavorite = JSON.parse(localStorage.getItem('Favorite'));
            let arrBag;
            if (checkArrBag !== null) {
                arrBag = JSON.parse(localStorage.getItem('Bag'));
            }
            if (boolFavorite === true) {
                ptrProducts[id].favorite = true;
                console.log(ptrProducts[id]);
                arrFavorite.push(ptrProducts[id]);
            }
            else {
                ptrProducts[id].favorite = false;
                if (arrBag.length > 0) {
                    id = findNameProduct(ptrProducts[id].id, arrBag);
                    if (id !== -1) {
                        arrBag[id].favorite = false
                    }
                }
                console.log(ptrProducts[id]);
                id = findNameProduct(ptrProducts[id].id, arrFavorite)
                // console.log(id);
                arrFavorite.splice(id, 1);
            }
            let strFavorite = JSON.stringify(arrFavorite);
            localStorage.setItem('Favorite', strFavorite);
            localStorage.setItem('Bag', (JSON.stringify(arrBag)));
        }
    }
    else {
        window.location.assign('./singin/index-singin.html')
    }
}
function bagBtn(clicked_id) {

    let checkLogin = localStorage.getItem('boolLogin');
    checkArrBag = localStorage.getItem('Bag');
    checkArrFavorite = localStorage.getItem('Favorite');
    if (checkLogin === 'true') {
        let idBag = document.getElementById(clicked_id);
        let boolBag = idBag.classList.toggle('fill--bag');
        let id = splitIdBag(clicked_id);

        if (checkArrBag === null) {
            //=========== Update to Bag Items=============================
            // strProductsTotal = JSON.parse(localStorage.getItem('productsTotal'));
            // indexAcc = Number(localStorage.getItem('userLogin'));
            // let numProductsTotal = strProductsTotal[indexAcc];
            // numProductsTotal = numProductsTotal +1;
            // strProductsTotal[indexAcc] = numProductsTotal;
            // localStorage.setItem('productsTotal',JSON.stringify(strProductsTotal));
            // let idTotalItems = document.getElementById('items-count-total');
            // idTotalItems.innerHTML = `${numProductsTotal}`;

            strProductsTotal = Number(localStorage.getItem('productsTotal'));
            strProductsTotal = strProductsTotal + 1;
            let idTotalItems = document.getElementById('items-count-total');
            idTotalItems.innerHTML = `${strProductsTotal}`;
            localStorage.setItem('productsTotal', strProductsTotal)
            //=============================================================
            ptrProducts[id].bag = true;

            let arrBag = [];
            arrBag.push(ptrProducts[id]);
            let strBag = JSON.stringify(arrBag);
            localStorage.setItem('Bag', strBag);
        }
        else {
            let arrFavorite;
            if (checkArrFavorite !== null) {
                arrFavorite = JSON.parse(localStorage.getItem('Favorite'));
            }
            let arrBag = JSON.parse(localStorage.getItem('Bag'));
            if (boolBag === true) {
                //=========== Update to Bag Items=============================
                // strProductsTotal = JSON.parse(localStorage.getItem('productsTotal'));
                // indexAcc = Number(localStorage.getItem('userLogin'));
                // let numProductsTotal = strProductsTotal[indexAcc];
                // numProductsTotal = numProductsTotal +1;
                // strProductsTotal[indexAcc] = numProductsTotal;
                // localStorage.setItem('productsTotal',JSON.stringify(strProductsTotal));
                // let idTotalItems = document.getElementById('items-count-total');
                // idTotalItems.innerHTML = `${numProductsTotal}`;

                strProductsTotal = Number(localStorage.getItem('productsTotal'));
                strProductsTotal = strProductsTotal + 1;
                let idTotalItems = document.getElementById('items-count-total');
                idTotalItems.innerHTML = `${strProductsTotal}`;
                localStorage.setItem('productsTotal', strProductsTotal)
                //=============================================================
                ptrProducts[id].bag = true;
                // console.log(ptrProducts[id]);
                arrBag.push(ptrProducts[id]);
            }
            else {
                //=========== Update to Bag Items=============================
                // strProductsTotal = JSON.parse(localStorage.getItem('productsTotal'));
                // indexAcc = Number(localStorage.getItem('userLogin'));
                // let numProductsTotal = strProductsTotal[indexAcc];
                // if (numProductsTotal > 0) {
                //     numProductsTotal = numProductsTotal - 1;
                // }
                // strProductsTotal[indexAcc] = numProductsTotal;
                // localStorage.setItem('productsTotal',JSON.stringify(strProductsTotal));
                // let idTotalItems = document.getElementById('items-count-total');
                // idTotalItems.innerHTML = `${numProductsTotal}`;

                strProductsTotal = Number(localStorage.getItem('productsTotal'));
                if (strProductsTotal > 0) {
                    strProductsTotal = strProductsTotal - 1;
                }
                let idTotalItems = document.getElementById('items-count-total');
                idTotalItems.innerHTML = `${strProductsTotal}`;
                localStorage.setItem('productsTotal', strProductsTotal)
                //=============================================================
                ptrProducts[id].bag = false;
                if (arrFavorite.length > 0) {
                    id = findNameProduct(ptrProducts[id].id, arrFavorite);

                    if (id !== -1) {
                        arrFavorite[id].bag = false
                    }
                }
                console.log(ptrProducts[id]);
                id = findNameProduct(ptrProducts[id].id, arrBag)
                console.log(id);

                if (arrBag[id].hasOwnProperty('count') == true) {
                    delete arrBag[id].count;
                }
                arrBag.splice(id, 1);
            }
            let strBag = JSON.stringify(arrBag);
            localStorage.setItem('Bag', strBag);
            localStorage.setItem('Favorite', (JSON.stringify(arrFavorite)));
        }
    }
    else {
        window.location.assign('./singin/index-singin.html')
    }
}
// Sort by
let idPriceLowHigh = document.getElementById('priceLowHigh');
idPriceLowHigh.addEventListener('click', sortLowToHigh);

let idPriceHighLow = document.getElementById('priceHighLow');
idPriceHighLow.addEventListener('click', sortHighToLow);
let highLowPriceProducts = [];
let lowHighPriceProducts = [];
function sortLowToHigh() {
    // console.log(ptrProducts);
    lowHighPriceProducts = quickSort(ptrProducts);
    // console.log(lowHighPriceProducts);
    ptrProducts = JSON.parse(JSON.stringify(lowHighPriceProducts));
    menShoesProduct_items.innerHTML = '';
    for (let i = 0; i < ptrProducts.length; i++) {
        showMenShoesProducts(ptrProducts[i].sourceImg, ptrProducts[i].nameType, ptrProducts[i].price, ptrProducts[i].sex, ptrProducts[i].color, i, ptrProducts[i].favorite, ptrProducts[i].bag);
    }

}

function sortHighToLow() {
    highLowPriceProducts = quickSortHighToLow(ptrProducts);
    ptrProducts = JSON.parse(JSON.stringify(highLowPriceProducts));
    menShoesProduct_items.innerHTML = '';
    for (let i = 0; i < ptrProducts.length; i++) {
        showMenShoesProducts(ptrProducts[i].sourceImg, ptrProducts[i].nameType, ptrProducts[i].price, ptrProducts[i].sex, ptrProducts[i].color, i, ptrProducts[i].favorite, ptrProducts[i].bag);
    }
}

let quickSort = (arr) => {

    if (arr.length < 2) return arr;

    // *** lấy phần tử cuối của 'arr' làm 'pivot'
    const pivotIndex = arr.length - 1;
    const pivot = arr[pivotIndex].numberPrice;
    const valuePivot = arr[pivotIndex];
    const left = [];
    const right = [];

    let currentItem;
    let allCurrentItem;
    // *** 'i < pivotIndex' => chúng ta sẽ không loop qua 'pivot' nữa
    for (let i = 0; i < pivotIndex; i++) {
        currentItem = arr[i].numberPrice;
        allCurrentItem = arr[i];
        // console.log(i, allCurrentItem);
        if (currentItem <= pivot) {
            left.push(allCurrentItem);
        } else {
            right.push(allCurrentItem);
        }
    }

    return [...quickSort(left), valuePivot, ...quickSort(right)];
}

let quickSortHighToLow = (arr) => {

    if (arr.length < 2) return arr;

    // *** lấy phần tử cuối của 'arr' làm 'pivot'
    const pivotIndex = arr.length - 1;
    const pivot = arr[pivotIndex].numberPrice;
    const valuePivot = arr[pivotIndex];
    const left = [];
    const right = [];

    let currentItem;
    let allCurrentItem;
    // *** 'i < pivotIndex' => chúng ta sẽ không loop qua 'pivot' nữa
    for (let i = 0; i < pivotIndex; i++) {
        currentItem = arr[i].numberPrice;
        allCurrentItem = arr[i];

        if (currentItem <= pivot) {
            left.push(allCurrentItem);
        } else {
            right.push(allCurrentItem);
        }
    }

    return [...quickSortHighToLow(right), valuePivot, ...quickSortHighToLow(left)];
}
