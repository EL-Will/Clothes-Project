if(localStorage.getItem('boolLogin') === 'true'){
    let userName = document.getElementById('id-account');
    let index = Number(localStorage.getItem('userLogin'));
    let arrUser = JSON.parse(localStorage.getItem('User'));
    let uName = arrUser[index].username;
    userName.innerText=`Hi, ${uName}`
}
// let strProductsTotal = Number(localStorage.getItem('productsTotal'));
// let idTotalItems = document.getElementById('items-count-total');
// idTotalItems. innerHTML = `${strProductsTotal}`;