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

function expandAccount() {
    let preAccountExpand = document.getElementsByClassName('pre-account-expand')[0];
    preAccountExpand.style.opacity = 1;
    preAccountExpand.style.visibility = "visible";
    preAccountExpand.style.transform = 'translateY(0px)';
}
function closeAccount() {
    let preAccountExpand = document.getElementsByClassName('pre-account-expand')[0];
    preAccountExpand.removeAttribute('style');
}

function Logout() {
    localStorage.setItem('boolLogin', false);
    window.location.assign('index.html');
}

function checkCurrentPass(currentPass, arrUser, index) {
    if (currentPass === arrUser[index].pass) {
        return true;
    }
    else {
        return false;
    }
}
function validNewPassConfirmPass(currentPass, newPass, confirmPass) {
    if (currentPass === newPass) {
        return false;
    }
    else {
        if (newPass.length < 8 || newPass.indexOf(" ") !== -1) {
            return 1;
        }
        else {
            if (newPass !== confirmPass) {
                return 2;
            }
            else {
                return true;
            }
        }
    }
}

function changePass() {
    let classBoxPass = document.getElementsByClassName('ip-pass')[0];
    let classBoxNewPass = document.getElementsByClassName('ip-newpass')[0];
    let classBoxConfirmPass = document.getElementsByClassName('ip-confirmpass')[0];

    let getCurrentPass = document.querySelector('#input-pass').value;
    let getNewPass = document.querySelector('#input-newpass').value;
    let getConfirmPass = document.querySelector('#input-confirmpass').value;

    let messageCurrentPass = document.getElementById('err-pass');
    let messageNewPass = document.getElementById('err-newpass');
    let messageConfirmPass = document.getElementById('err-confirm-pass');

    let strIndex = localStorage.getItem('userLogin');
    if (strIndex === null) {

    }
    else {
        let indexUsername = Number(strIndex);
        let arrUser = JSON.parse(localStorage.getItem('User'));

        if (getCurrentPass === '' && getNewPass === '' && getConfirmPass === '') {
            messageCurrentPass.innerHTML = 'M???t kh???u c???a b???n ph???i ch???a t??? 8-60 k?? t???';
            messageNewPass.innerHTML = 'M???t kh???u c???a b???n ph???i ch???a t??? 8-60 k?? t???';
            messageConfirmPass.innerHTML = 'M???t kh???u c???a b???n ph???i ch???a t??? 8-60 k?? t???';

            messageCurrentPass.style.color = "red";
            classBoxPass.style.border = "1px solid red";

            messageNewPass.style.color = 'red';
            classBoxNewPass.style.border = "1px solid red";

            messageConfirmPass.style.color = "red";
            classBoxConfirmPass.style.border = "1px solid red";
        }
        else if (getCurrentPass !== '' && getNewPass === '' && getConfirmPass === '') {
            messageCurrentPass.innerHTML = '';
            messageNewPass.innerHTML = 'M???t kh???u c???a b???n ph???i ch???a t??? 8-60 k?? t???';
            messageConfirmPass.innerHTML = 'M???t kh???u c???a b???n ph???i ch???a t??? 8-60 k?? t???';

            messageCurrentPass.removeAttribute("style");
            classBoxPass.removeAttribute("style");

            messageNewPass.style.color = 'red';
            classBoxNewPass.style.border = "1px solid red";

            messageConfirmPass.style.color = "red";
            classBoxConfirmPass.style.border = "1px solid red";
        }
        else if (getCurrentPass === '' && getNewPass !== '' && getConfirmPass === '') {
            messageCurrentPass.innerHTML = 'M???t kh???u c???a b???n ph???i ch???a t??? 8-60 k?? t???';
            messageNewPass.innerHTML = '';
            messageConfirmPass.innerHTML = 'M???t kh???u c???a b???n ph???i ch???a t??? 8-60 k?? t???';

            messageCurrentPass.style.color = "red";
            classBoxPass.style.border = "1px solid red";

            messageNewPass.removeAttribute("style");
            classBoxNewPass.removeAttribute("style");

            messageConfirmPass.style.color = "red";
            classBoxConfirmPass.style.border = "1px solid red";
        }
        else if (getCurrentPass === '' && getNewPass === '' && getConfirmPass !== '') {
            messageCurrentPass.innerHTML = 'M???t kh???u c???a b???n ph???i ch???a t??? 8-60 k?? t???';
            messageNewPass.innerHTML = 'M???t kh???u c???a b???n ph???i ch???a t??? 8-60 k?? t???';
            messageConfirmPass.innerHTML = '';

            messageCurrentPass.style.color = "red";
            classBoxPass.style.border = "1px solid red";

            messageNewPass.style.color = 'red';
            classBoxNewPass.style.border = "1px solid red";

            messageConfirmPass.removeAttribute("style");
            classBoxConfirmPass.removeAttribute("style");
        }
        else if (getCurrentPass !== '' && getNewPass !== '' && getConfirmPass === '') {
            messageCurrentPass.innerHTML = '';
            messageNewPass.innerHTML = '';
            messageConfirmPass.innerHTML = 'M???t kh???u c???a b???n ph???i ch???a t??? 8-60 k?? t???';
            messageCurrentPass.removeAttribute("style");
            classBoxPass.removeAttribute("style");

            messageNewPass.removeAttribute("style");
            classBoxNewPass.removeAttribute("style");

            messageConfirmPass.style.color = "red";
            classBoxConfirmPass.style.border = "1px solid red";
        }
        else if (getCurrentPass !== '' && getNewPass === '' && getConfirmPass !== '') {
            messageCurrentPass.innerHTML = '';
            messageNewPass.innerHTML = 'M???t kh???u c???a b???n ph???i ch???a t??? 8-60 k?? t???';
            messageConfirmPass.innerHTML = '';

            messageCurrentPass.removeAttribute("style");
            classBoxPass.removeAttribute("style");

            messageNewPass.style.color = 'red';
            classBoxNewPass.style.border = "1px solid red";

            messageConfirmPass.removeAttribute("style");
            classBoxConfirmPass.removeAttribute("style");
        }
        else if (getCurrentPass === '' && getNewPass !== '' && getConfirmPass !== '') {
            messageCurrentPass.innerHTML = 'M???t kh???u c???a b???n ph???i ch???a t??? 8-60 k?? t???';
            messageNewPass.innerHTML = '';
            messageConfirmPass.innerHTML = '';

            messageCurrentPass.style.color = "red";
            classBoxPass.style.border = "1px solid red";

            messageNewPass.removeAttribute("style");
            classBoxNewPass.removeAttribute("style");

            messageConfirmPass.removeAttribute("style");
            classBoxConfirmPass.removeAttribute("style");
        }
        else {
            if (checkCurrentPass(getCurrentPass, arrUser, indexUsername) === false) {
                messageCurrentPass.innerHTML = 'M???t kh???u kh??ng ch??nh x??c';
                messageNewPass.innerHTML = '';
                messageConfirmPass.innerHTML = '';

                messageCurrentPass.style.color = "red";
                classBoxPass.style.border = "1px solid red";

                messageNewPass.removeAttribute("style");
                classBoxNewPass.removeAttribute("style");

                messageConfirmPass.removeAttribute("style");
                classBoxConfirmPass.removeAttribute("style");
            }
            else {
                if (validNewPassConfirmPass(getCurrentPass, getNewPass, getConfirmPass) === false) {
                    messageNewPass.innerHTML = 'M???t kh???u c???a b???n ph???i ch???a t??? 8-60 k?? t??? v?? kh??ng ???????c tr??ng v???i m???t kh???u c??';
                    messageCurrentPass.innerHTML = '';
                    messageConfirmPass.innerHTML = '';

                    messageCurrentPass.style.color = "red";
                    classBoxPass.style.border = "1px solid red";

                    messageNewPass.removeAttribute("style");
                    classBoxNewPass.removeAttribute("style");

                    messageConfirmPass.removeAttribute("style");
                    classBoxConfirmPass.removeAttribute("style");
                }
                else if (validNewPassConfirmPass(getCurrentPass, getNewPass, getConfirmPass) === 1) {
                    messageNewPass.innerHTML = 'M???t kh???u c???a b???n ph???i ch???a t??? 8-60 k?? t???';
                    messageCurrentPass.innerHTML = '';
                    messageConfirmPass.innerHTML = '';

                    messageCurrentPass.style.color = "red";
                    classBoxPass.style.border = "1px solid red";

                    messageNewPass.removeAttribute("style");
                    classBoxNewPass.removeAttribute("style");

                    messageConfirmPass.removeAttribute("style");
                    classBoxConfirmPass.removeAttribute("style");
                }
                else if (validNewPassConfirmPass(getCurrentPass, getNewPass, getConfirmPass) === 2) {
                    messageNewPass.innerHTML = '';
                    messageCurrentPass.innerHTML = '';
                    messageConfirmPass.innerHTML = 'M???t kh???u kh??ng tr??ng kh???p';

                    messageCurrentPass.removeAttribute("style");
                    classBoxPass.removeAttribute("style");

                    messageNewPass.removeAttribute("style");
                    classBoxNewPass.removeAttribute("style");

                    messageConfirmPass.style.color = "red";
                    classBoxConfirmPass.style.border = "1px solid red";
                }
                else {
                    messageCurrentPass.innerHTML = '';
                    messageNewPass.innerHTML = '';
                    messageConfirmPass.innerHTML = '';

                    messageCurrentPass.removeAttribute("style");
                    classBoxPass.removeAttribute("style");

                    messageNewPass.removeAttribute("style");
                    classBoxNewPass.removeAttribute("style");

                    messageConfirmPass.removeAttribute("style");
                    classBoxConfirmPass.removeAttribute("style");

                    arrUser[indexUsername].pass = getNewPass;
                    let strUser = JSON.stringify(arrUser);
                    localStorage.setItem('User', strUser);
                    localStorage.setItem("boolLogin", "false");
                    window.location.assign('/singin/index-singin.html')
                }
            }
        }
    }
}
function checkLogout(){
    let checkLogin = localStorage.getItem('boolLogin');
    if (checkLogin === 'false'){
        window.location.assign('index.html');

    }
}