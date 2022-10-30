function login() {
    let checkLogin = localStorage.getItem('boolLogin');
    if (checkLogin === "true") {
        console.log(1111);
        sessionStorage.setItem('firstAccess', "false");
        window.location.assign("index-login.html");
    }
    else {
        console.log(2222);
        sessionStorage.setItem('firstAccess', "false");
        window.location.assign("index.html");
    }
}

let checkFistaccess = sessionStorage.getItem('firstAccess');
if (checkFistaccess === null) {
    sessionStorage.setItem('firstAccess', "true");
    login();
}
else {
    let checkFistaccess = sessionStorage.getItem('firstAccess');
    if (checkFistaccess === "true") {
        login();
    }
    else {
    }
}

function checkLogout(){
    let checkLogin = localStorage.getItem('boolLogin');
    if (checkLogin === 'false'){
        window.location.assign('index.html');

    }
}

function statusLogin(){
    let checkLogin = localStorage.getItem('boolLogin');
    if (checkLogin === 'true'){
        window.location.assign('index-login.html');
    }
}

function functionVisualSearch() {
    let visualSearch = document.getElementById('visual-search').value;
    let clearBtn = document.getElementsByClassName('pre-clear-search')[0];
    if (visualSearch !== "" && clearBtn.className.indexOf('pre-clear-search-show') == -1) {
        clearBtn.className = clearBtn.className.replace(' pre-clear-search-hide', '')
        clearBtn.className += ' pre-clear-search-show';
        // let getClearBtn = document.getElementById('clear-btn');
        // getClearBtn.addEventListener('click', functionClear);
    }
    if (visualSearch === "" && clearBtn.className.indexOf('pre-clear-search-hide') == -1) {
        clearBtn.className = clearBtn.className.replace(' pre-clear-search-show', '')
        clearBtn.className += ' pre-clear-search-hide';
    }
}
let clickSearch = false;
function clearSearch() {
    document.getElementById('visual-search').value = '';
    let visualSearch = document.getElementById('visual-search').value;
    let clearBtn = document.getElementsByClassName('pre-clear-search')[0];
    if (visualSearch === "" && clearBtn.className.indexOf('pre-clear-search-hide') == -1) {
        clearBtn.className = clearBtn.className.replace(' pre-clear-search-show', '')
        clearBtn.className += ' pre-clear-search-hide';
    }
}

function catchClickEvent() {
    clickSearch = true;
    let classNvabarFrame = document.getElementsByClassName('nvabar-frame')[0];
    classNvabarFrame.style.display = 'none';

    let classHeader = document.getElementsByClassName('pre-1-header')[0];
    if (classHeader.className.indexOf('vs-is-open') == -1) {
        classHeader.className += ' vs-is-open';
    }

    let classBoxMen = document.getElementsByClassName('box-men')[0];
    classBoxMen.style.display = 'none';

    let classBoxWomen = document.getElementsByClassName('box-women')[0];
    classBoxWomen.style.display = 'none';

    let classBoxKids = document.getElementsByClassName('box-kids')[0];
    classBoxKids.style.display = 'none';

    // let preDesktopMenu = document.getElementsByClassName('pre-desktop-menu')[0];
    // preDesktopMenu.style.display='none';

    let classPreCart = document.getElementsByClassName('pre-cart')[0];
    classPreCart.style.display = 'none';

    let classPreSearchContain = document.getElementsByClassName('pre-l-search-contain')[0];
    classPreSearchContain.style.float = 'none';
    classPreSearchContain.style.display = 'flex';
    classPreSearchContain.style.justifyContent = 'center';
    let classPreSearchInputbox = document.getElementsByClassName('pre-l-search-input-box')[0];
    classPreSearchInputbox.style.float = 'none';

    const mediaQuery = window.matchMedia('(min-width: 890px)')
    function handleTabletChange(e, bool) {
        // Check if the media query is true
        if (e.matches && bool === true) {
            let classPreSearchInputbox = document.getElementsByClassName('pre-l-search-input-box')[0];
            classPreSearchInputbox.style.width = '656px';
            
        }
        if (!e.matches && bool === true) {
            let classPreSearchInputbox = document.getElementsByClassName('pre-l-search-input-box')[0];
            classPreSearchInputbox.style.width = '300px';
            
        }
    }
    // Register event listener
    mediaQuery.addListener(handleTabletChange);

    // Initial check
    handleTabletChange(mediaQuery, clickSearch);

    let preCancelBtn = document.getElementsByClassName('pre-cancel-btn')[0];
    preCancelBtn.style.display = 'block';
    
}

function cancelSearch() {
    clickSearch = false;
    let classNvabarFrame = document.getElementsByClassName('nvabar-frame')[0];
    classNvabarFrame.removeAttribute('style');

    let classHeader = document.getElementsByClassName('pre-1-header')[0];
    if (classHeader.className.indexOf('vs-is-open') !== -1) {
        classHeader.className = classHeader.className.replace(' vs-is-open', '');
    }

    let classBoxMen = document.getElementsByClassName('box-men')[0];
    classBoxMen.removeAttribute('style');

    let classBoxWomen = document.getElementsByClassName('box-women')[0];
    classBoxWomen.removeAttribute('style');

    let classBoxKids = document.getElementsByClassName('box-kids')[0];
    classBoxKids.removeAttribute('style');

    // let preDesktopMenu = document.getElementsByClassName('pre-desktop-menu')[0];
    // preDesktopMenu.style.display='none';

    let classPreCart = document.getElementsByClassName('pre-cart')[0];
    classPreCart.removeAttribute('style');

    let classPreSearchContain = document.getElementsByClassName('pre-l-search-contain')[0];
    classPreSearchContain.removeAttribute('style');

    let classPreSearchInputbox = document.getElementsByClassName('pre-l-search-input-box')[0];
    classPreSearchInputbox.removeAttribute('style');

    let preCancelBtn = document.getElementsByClassName('pre-cancel-btn')[0];
    preCancelBtn.removeAttribute('style');
}

let expandOption = document.getElementById('expand-option');
expandOption.addEventListener('click', functionExpandOption);

function functionExpandOption(){
    let classMobileShow = document.getElementsByClassName('pre-mobile-menu')[0];
    if(classMobileShow.className.indexOf('pre-mobile-hide') !== -1){
        classMobileShow.className = classMobileShow.className.replace(' pre-mobile-hide', '')
        classMobileShow.className += ' pre-mobile-show';
    }
}

let closeExpandMobile = document.getElementById('close-expand-mobile');;
closeExpandMobile.addEventListener('click', functionCloseExpand);

function functionCloseExpand(){
    let classMobileShow = document.getElementsByClassName('pre-mobile-menu')[0];
    if(classMobileShow.className.indexOf('pre-mobile-show') !== -1){
        classMobileShow.className = classMobileShow.className.replace(' pre-mobile-show', '')
        classMobileShow.className += ' pre-mobile-hide';
    }
}

function expandAccount(){
    let preAccountExpand = document.getElementsByClassName('pre-account-expand')[0];
    preAccountExpand.style.opacity = 1;
    preAccountExpand.style.visibility = "visible";
    preAccountExpand.style.transform = 'translateY(0px)';
}
function closeAccount(){
    let preAccountExpand = document.getElementsByClassName('pre-account-expand')[0];
    preAccountExpand.removeAttribute('style');
}

function Logout(){
    localStorage.setItem('boolLogin',false);
    window.location.assign('index.html');
}

function clickFavorite(){
    if(localStorage.getItem('boolLogin') === 'false'){
        window.location.assign('./singin/index-singin.html');
    }
}

function clickBag(){
    if(localStorage.getItem('boolLogin') === 'false'){
        window.location.assign('./singin/index-singin.html');
    }
}