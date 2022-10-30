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

// ===================================================================================
let menShoesProductsUnlogin = [
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
let classMenShoesUnlogin = document.getElementById('title-men-shoes-unlogin');
classMenShoesUnlogin.innerText = `Men's Shoes(${menShoesProductsUnlogin.length})`;

let menShoesProduct_itemsUnlogin = document.getElementById('men-shoes-product_items_unlogin');

function showMenShoesProductsUnlogin(sourceImg, nameType, price, sex, color, id, favorite, bag) {
    menShoesProduct_itemsUnlogin.insertAdjacentHTML('beforeEnd',
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

// ==============================Show all of product==============================
menShoesProduct_itemsUnlogin.innerHTML = '';
for (let i = 0; i < menShoesProductsUnlogin.length; i++) {
    showMenShoesProductsUnlogin(menShoesProductsUnlogin[i].sourceImg, menShoesProductsUnlogin[i].nameType, menShoesProductsUnlogin[i].price, menShoesProductsUnlogin[i].sex, menShoesProductsUnlogin[i].color, i, menShoesProductsUnlogin[i].favorite, menShoesProductsUnlogin[i].bag);
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


function favoriteBtn(clicked_id) {
    let checkLogin = localStorage.getItem('boolLogin');
    
    if (checkLogin === 'false') {
        window.location.assign('./singin/index-singin.html')
    }
}
function bagBtn(clicked_id) {
   
    let checkLogin = localStorage.getItem('boolLogin');
    if (checkLogin === 'false') {
        window.location.assign('./singin/index-singin.html')
    }
}
//============== Sort by======================================
let idPriceLowHigh = document.getElementById('priceLowHigh');
idPriceLowHigh.addEventListener('click', sortLowToHigh);

let idPriceHighLow = document.getElementById('priceHighLow');
idPriceHighLow.addEventListener('click', sortHighToLow);
let highLowPriceProducts = [];
let lowHighPriceProducts = [];
function sortLowToHigh() {
    // console.log(ptrProducts);
    lowHighPriceProducts = quickSort(menShoesProductsUnlogin);
    menShoesProduct_itemsUnlogin.innerHTML = '';
    for (let i = 0; i < lowHighPriceProducts.length; i++) {
        showMenShoesProductsUnlogin(lowHighPriceProducts[i].sourceImg, lowHighPriceProducts[i].nameType, lowHighPriceProducts[i].price, lowHighPriceProducts[i].sex, lowHighPriceProducts[i].color, i, lowHighPriceProducts[i].favorite, lowHighPriceProducts[i].bag);
    }

}

function sortHighToLow() {
    highLowPriceProducts = quickSortHighToLow(menShoesProductsUnlogin);
    menShoesProduct_itemsUnlogin.innerHTML = '';
    for (let i = 0; i < highLowPriceProducts.length; i++) {
        showMenShoesProductsUnlogin(highLowPriceProducts[i].sourceImg, highLowPriceProducts[i].nameType, highLowPriceProducts[i].price, highLowPriceProducts[i].sex, highLowPriceProducts[i].color, i, highLowPriceProducts[i].favorite,highLowPriceProducts[i].bag);
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