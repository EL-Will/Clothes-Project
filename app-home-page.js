
const products = [
    {
        sourceImg: './image/shoes/shoe1.webp',
        nameType: 'Nike Air Force 1 High SE',
        price: '3,699,000',
        sex: `Women's Shoes`
    },
    {
        sourceImg: './image/shoes/shoe2.webp',
        nameType: `Nike Air Force 1 '07 LV8`,
        price: '3,239,000',
        sex: `Men's Shoes`
    },
    {
        sourceImg: './image/shoes/shoe3.webp',
        nameType: 'Nike Force 1 Low SE',
        price: '1,909,000',
        sex: `Younger Kids' Shoes`
    },
    {
        sourceImg: './image/shoes/shoe4.webp',
        nameType: 'Nike Air Force 1 React',
        price: '3,959,000',
        sex: `Men's Shoes`
    },
    {
        sourceImg: './image/shoes/shoe5.webp',
        nameType: 'Nike Air Force 1 High SE',
        price: '3,699,000',
        sex: `Women's Shoes`
    },

    {
        sourceImg: './image/shoes/shoe6.webp',
        nameType: 'Nike Air Force 1 High SE',
        price: '3,699,000',
        sex: `Women's Shoes`
    },
    {
        sourceImg: './image/shoes/shoe7.webp',
        nameType: 'Nike Force 1 Low SE',
        price: '1,529,000',
        sex: `Baby/Toddler Shoes`
    },
    {
        sourceImg: './image/shoes/shoe8.webp',
        nameType: `Nike Air Force 1 Mid'07 LV8`,
        price: '3,519,000',
        sex: `Men's Shoes`
    },
    {
        sourceImg: './image/shoes/shoe9.webp',
        nameType: 'Nike Air Force 1 LE',
        price: '2,039,000',
        sex: `Older Kids' Shoes`
    },
    {
        sourceImg: './image/shoes/shoe10.webp',
        nameType: `Nike Air Force 1 '07`,
        price: '2,649,000',
        sex: `Men's Shoes`
    }
]

let product_items = document.getElementById('product_items');

function showProducts(sourceImg, nameType, price, sex ,index) {
    product_items.insertAdjacentHTML('beforeEnd',
        `
        <li>
        <div class="box-product-infor">
          <div style="width:100%; height:100%">
            <img src="${sourceImg}" alt="shoe${index}">
          </div>
          <div class="mr-top-bt">
            <div class="infor1">
              <span>${nameType}</span>
              <span style="color:black">${price}<sup style="text-decoration: underline;">đ</sup></span>
            </div>
            <div class="infor2">
              <span style="color: rgb(145, 143, 143)">${sex}</span>
            </div>
          </div>
        </div>
      </li>
    `)
}

// function showProducts(sourceImg, nameType, price, sex) {
//     product_items.insertAdjacentHTML('beforeEnd',
//         `
//     <div class="box-img-infor-product">
//         <img src="${sourceImg}" alt="shoe1" class="img-fluid">
//             <div class="box-infor-product">
//                 <div class="shoe-type-price">
//                     <span>${nameType}</span>
//                     <span style="color:black">${price}<sup style="text-decoration: underline;">đ</sup></span>
//                 </div>
//                 <span style="color: rgb(145, 143, 143)">${sex}</span>
//             </div>
//     </div>
//     `)
// }

// Show all of product
product_items.innerHTML = '';
for (let i = 0; i < products.length; i++) {
    showProducts(products[i].sourceImg, products[i].nameType, products[i].price, products[i].sex,i);
}
product_items.insertAdjacentHTML('beforeEnd',
`
<li class="buffer"></li>

`)
var left = document.querySelector('.grid-aligned');
var right = document.querySelector('.grid-aligned');


left.addEventListener('scroll', ()=>{
    if(left.scrollLeft !==0 && left.scrollLeft !== 2968){
        document.getElementById("prev-btn").disabled = false;
        document.getElementById("next-btn").disabled = false;
    }
    else if(left.scrollLeft === 2968 ){
        document.getElementById("next-btn").disabled = true;
    }
    else if(left.scrollLeft === 0){
        document.getElementById("prev-btn").disabled = true;
    }
    
})

if(left.scrollLeft === 0 && right.scrollLeft === 0){
    document.getElementById("prev-btn").disabled = true;
    document.getElementById("next-btn").disabled = false;
}
else{
    document.getElementById("prev-btn").disabled = false;
    document.getElementById("next-btn").disabled = true;
}
function Scrolll(){
    
    if(left.scrollLeft === 430){
        left.scrollBy(-430,0);
    }
    else{
        left.scrollBy(-423,0);
    }
}

function Scrollr(){
    
    console.log('right');
    if(left.scrollLeft === 0){
        right.scrollBy(430,0);
    }
    else{
        right.scrollBy(423,0);
    }
}
