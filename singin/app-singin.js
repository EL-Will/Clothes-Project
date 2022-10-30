

let getEmail = document.getElementById('input-email');
let getPass = document.getElementById('input-pass');

function statusLogin(){
    let checkLogin = localStorage.getItem('boolLogin');
    console.log(11);
    if (checkLogin === 'true'){
        console.log(22);
        window.location.assign('/index-login.html');
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function checkEmail(str) {
    // let arr = Array.from(str)
    if (validateEmail(str) == true) {
        return true;
    } else {
        return false;
    }
}

function findEmail(str, arr) {
    let newArr1 = [];
    for (let i = 0; i < arr.length; i++) {
        newArr1.push(arr[i].email);
    }
    if (newArr1.indexOf(str) !== -1) {
        return true;
    }
    else {
        return false;
    }
}

function validUserPass(str1, str2, arr) {
    let newArr1 = [];
    let newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
        newArr1.push(arr[i].email);
        newArr2.push(arr[i].pass);
    }
    if (newArr1.indexOf(str1) !== -1) {
        indexUsername = newArr1.indexOf(str1);
        if (str2 === newArr2[indexUsername]) {
            localStorage.setItem('userLogin', indexUsername);
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}


function inputEmail(getEmail) {
    let errEmail = document.getElementById('err-mail');
    if (checkEmail(getEmail.value) === true) {
        errEmail.innerText = '';
        getEmail.removeAttribute('style');
        errEmail.removeAttribute('style');
    }
    else {
        errEmail.innerText = 'Please enter a valid email address';
        errEmail.style.color = "red";
        getEmail.style.border = "1px solid red";
    }
}

let btnSingin = document.getElementById('btn-singin');
btnSingin.addEventListener('click', funcSingin)

function funcSingin() {
    let classBoxEmail = document.getElementsByClassName('ip-email')[0];
    let classBoxPass = document.getElementsByClassName('ip-pass')[0];
    getEmail = document.getElementById('input-email').value;
    getPass = document.getElementById('input-pass').value;
    // getEmail.removeAttribute('style');
    // errEmail.removeAttribute('style');
    let arrInforUser = JSON.parse(localStorage.getItem('User'))
    let errEmail = document.getElementById('err-mail');
    let errPass = document.getElementById('err-pass');
    if (arrInforUser === null) {
        errEmail.innerText = 'Account does not exist';
        errPass.innerText = 'Account does not exist';

        errEmail.style.color = "red";
        classBoxEmail.style.border = "1px solid red";

        errPass.style.color = "red";
        classBoxPass.style.border = "1px solid red";
    }
    else {
        if (getEmail === "" && getPass === '') {
            errEmail.innerText = 'Please enter a valid email address';
            errPass.innerText = 'Please enter a valid password';

            errEmail.style.color = "red";
            classBoxEmail.style.border = "1px solid red";

            errPass.style.color = "red";
            classBoxPass.style.border = "1px solid red";
        }
        else if (getEmail !== "" && getPass === '') {
            if (findEmail(getEmail, arrInforUser) === true) {
                errEmail.innerText = '';
                classBoxEmail.style.border = "1px solid #e5e5e5";
            }
            else {
                errEmail.innerText = 'Account does not exist';
                errEmail.style.color = "red";
                classBoxEmail.style.border = "1px solid red";
            }
            errPass.innerText = 'Please enter a valid password';
            errPass.style.color = "red";
            classBoxPass.style.border = "1px solid red";
        }
        else if (getEmail === "" && getPass !== '') {
            errEmail.innerText = 'Please enter a valid email address';
            errEmail.style.color = "red";
            classBoxEmail.style.border = "1px solid red";
            errPass.innerText = '';
        }
        else {
            if (validUserPass(getEmail, getPass, arrInforUser) === true) {
                errEmail.innerText = '';
                errPass.innerText = '';
                classBoxEmail.style.border = "1px solid #e5e5e5";
                classBoxPass.style.border = "1px solid #e5e5e5";
                localStorage.setItem('boolLogin','true');
                window.location.assign('/index-login.html')
            }
            else {
                errEmail.innerText = 'Account does not exist or password is incorrect';
                errPass.innerText = 'Account does not exist or password is incorrect';

                errEmail.style.color = "red";
                classBoxEmail.style.border = "1px solid red";

                errPass.style.color = "red";
                classBoxPass.style.border = "1px solid red";
            }
        }
    }

}