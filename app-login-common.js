let strProductsTotal = Number(localStorage.getItem('productsTotal'));
let idTotalItems = document.getElementById('items-count-total');
idTotalItems.innerHTML = `${strProductsTotal}`;