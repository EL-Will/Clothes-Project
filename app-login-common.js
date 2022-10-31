
// let strProductsTotal = (localStorage.getItem('productsTotal'));
// if(strProductsTotal === null){
//     let arrProductsIndexAccount = [0];
//     localStorage.setItem('productsTotal',JSON.stringify(arrProductsIndexAccount));
// }
// strProductsTotal = JSON.parse(localStorage.getItem('productsTotal'));
// let indexAcc = Number(localStorage.getItem('userLogin'))
// if(indexAcc !== strProductsTotal.length){
//     strProductsTotal.push(0);
// }
// let idTotalItems = document.getElementById('items-count-total');
// idTotalItems.innerHTML = `${strProductsTotal[indexAcc]}`;

let strProductsTotal = Number(localStorage.getItem('productsTotal'));
let idTotalItems = document.getElementById('items-count-total');
idTotalItems.innerHTML = `${strProductsTotal}`;

