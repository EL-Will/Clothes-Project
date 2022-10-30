// const arrInfor = [{username: "Tuan", email:"thienbinh1155@gmail.com" , pass:"1234567890"}];
// let arrStr = JSON.stringify(arrInfor);
// localStorage.setItem('User',arrStr);

let getUsername = document.getElementById('input-username')
let getEmail = document.getElementById('input-email');
let getPass = document.getElementById('input-pass');
let getConfirmPass = document.getElementById('input-confirmpass')

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
        return false;
    }
    else {
        return true;
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

function checkPass(str) {

    if (str.length < 8 || str.indexOf(" ") !== -1) {
        return false;
    } else {
        return true;
    }
}
function checkConfirmpass(str, str2) {
    if (str === str2) {
        return true;
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

let btnSingup = document.getElementById('btn-singup');
btnSingup.addEventListener('click', funcSingup)

function funcSingup() {
    let classBoxUsername = document.getElementsByClassName('ip-user-name')[0];
    let classBoxEmail = document.getElementsByClassName('ip-email')[0];
    let classBoxPass = document.getElementsByClassName('ip-pass')[0];
    let classBoxConfirmPass = document.getElementsByClassName('ip-confirmpass')[0];

    getUsername = document.getElementById('input-username').value;
    getEmail = document.getElementById('input-email').value;
    getPass = document.getElementById('input-pass').value;
    getConfirmPass = document.getElementById('input-confirmpass').value;

    let arrInforUser = JSON.parse(localStorage.getItem('User'));
    let errUsername = document.getElementById('err-user-name');
    let errEmail = document.getElementById('err-mail');
    let errPass = document.getElementById('err-pass');
    let errConfirmPass = document.getElementById('err-confirm-pass');

    if (arrInforUser === null) {
        let newArr = [];
        let strNewArr = JSON.stringify(newArr);
        localStorage.setItem('User', strNewArr);

        if (getEmail === "" && getPass === "" && getConfirmPass === "" && getUsername === "") {

            errUsername.innerText = 'Please enter a valid user name';
            errEmail.innerText = 'Please enter a valid email address';
            errPass.innerText = 'Please enter a valid password';
            errConfirmPass.innerText = 'Please enter a valid password';

            errUsername.style.color = 'red';
            classBoxUsername.style.border = "1px solid red";

            errEmail.style.color = "red";
            classBoxEmail.style.border = "1px solid red";

            errPass.style.color = "red";
            classBoxPass.style.border = "1px solid red";

            errConfirmPass.style.color = "red";
            classBoxConfirmPass.style.border = "1px solid red";
        }
        else if (getEmail !== "" && getPass === "" && getConfirmPass === "" && getUsername === "") {
            if (checkEmail(getEmail) === true) {
                errEmail.innerText = '';
            }
            else {
                errEmail.innerText = 'Please enter a valid email address';
                errEmail.style.color = "red";
                classBoxEmail.style.border = "1px solid red";
            }
            errUsername.innerText = 'Please enter a valid user name';
            errPass.innerText = 'Please enter a valid password';
            errConfirmPass.innerText = 'Please enter a valid password';

            errUsername.style.color = 'red';
            classBoxUsername.style.border = "1px solid red";

            errPass.style.color = "red";
            classBoxPass.style.border = "1px solid red";

            errConfirmPass.style.color = "red";
            classBoxConfirmPass.style.border = "1px solid red";
        }
        else if (getEmail === "" && getPass !== "" && getConfirmPass === "" && getUsername === "" ||
            getEmail === "" && getPass === "" && getConfirmPass !== "" && getUsername === "" ||
            getEmail === "" && getPass !== "" && getConfirmPass !== "" && getUsername === "") {

            errUsername.innerText = 'Please enter a valid user name';
            errEmail.innerText = 'Please enter a valid email address and password';
            errPass.innerText = 'Please enter a valid email address and password';
            errConfirmPass.innerText = 'Please enter a valid email address and password';

            errUsername.style.color = 'red';
            classBoxUsername.style.border = "1px solid red";

            errEmail.style.color = "red";
            classBoxEmail.style.border = "1px solid red";

            errPass.style.color = "red";
            classBoxPass.style.border = "1px solid red";

            errConfirmPass.style.color = "red";
            classBoxConfirmPass.style.border = "1px solid red";
        }
        else if (getEmail === "" && getPass !== "" && getConfirmPass === "" && getUsername !== "" ||
            getEmail === "" && getPass === "" && getConfirmPass !== "" && getUsername !== "" ||
            getEmail === "" && getPass !== "" && getConfirmPass !== "" && getUsername !== "") {

            errUsername.innerText = '';
            errEmail.innerText = 'Please enter a valid email address and password';
            errPass.innerText = 'Please enter a valid email address and password';
            errConfirmPass.innerText = 'Please enter a valid email address and password';

            errUsername.removeAttribute('style');
            classBoxUsername.removeAttribute('style');

            errEmail.style.color = "red";
            classBoxEmail.style.border = "1px solid red";

            errPass.style.color = "red";
            classBoxPass.style.border = "1px solid red";

            errConfirmPass.style.color = "red";
            classBoxConfirmPass.style.border = "1px solid red";
        }
        else {
            if (checkEmail(getEmail) === true) {
                errEmail.innerText = '';
                if (checkPass(getPass) === true) {
                    if (checkConfirmpass(getPass, getConfirmPass) === true) {
                        errUsername.innerText = '';
                        errEmail.innerText = '';
                        errPass.innerText = '';
                        errConfirmPass.innerText = '';

                        errUsername.removeAttribute('style');
                        classBoxUsername.removeAttribute('style');

                        errEmail.removeAttribute('style');
                        classBoxEmail.removeAttribute('style');

                        errPass.removeAttribute('style');
                        classBoxPass.removeAttribute('style');

                        errConfirmPass.removeAttribute('style');
                        classBoxConfirmPass.removeAttribute('style');

                        let objUser = { username: `${getUsername}`, email: `${getEmail}`, pass: `${getPass}` };
                        newArr.push(objUser);
                        strNewArr = JSON.stringify(newArr);
                        localStorage.setItem('User', strNewArr);

                        window.location.assign('/singin/index-singin.html');
                    }
                    else {
                        errUsername.innerText = '';
                        errEmail.innerText = '';
                        errPass.innerText = '';
                        errConfirmPass.innerText = 'Password is incorrect';

                        errUsername.removeAttribute('style');
                        classBoxUsername.removeAttribute('style');

                        errEmail.style.color = "red";
                        classBoxEmail.style.border = "1px solid #e5e5e5";

                        errPass.style.color = "red";
                        classBoxPass.style.border = "1px solid #e5e5e5";

                        errConfirmPass.style.color = "red";
                        classBoxConfirmPass.style.border = "1px solid red";
                    }
                }
                else {
                    errEmail.innerText = '';
                    errPass.innerText = 'Password is incorrect';
                    errConfirmPass.innerText = '';

                    errEmail.style.color = "red";
                    classBoxEmail.style.border = "1px solid #e5e5e5";

                    errPass.style.color = "red";
                    classBoxPass.style.border = "1px solid red";

                    errConfirmPass.style.color = "red";
                    classBoxConfirmPass.style.border = "1px solid #e5e5e5";

                    errUsername.innerText = '';
                    errUsername.removeAttribute('style');
                    classBoxUsername.removeAttribute('style');
                }
            }
            else {
                errEmail.innerText = 'Please enter a valid email address';
                errEmail.style.color = "red";
                classBoxEmail.style.border = "1px solid red";

                errPass.innerText = '';
                errPass.removeAttribute('style');
                classBoxPass.removeAttribute('style');

                errUsername.innerText = '';
                errUsername.removeAttribute('style');
                classBoxUsername.removeAttribute('style');

                errConfirmPass.innerText = '';
                errConfirmPass.removeAttribute('style');
                classBoxConfirmPass.removeAttribute('style');
            }


        }
    }
    else {
        let strNewArr;

        if (getEmail === "" && getPass === "" && getConfirmPass === "" && getUsername === "") {
            errEmail.innerText = 'Please enter a valid email address';
            errEmail.style.color = "red";
            classBoxEmail.style.border = "1px solid red";

            errPass.innerText = 'Please enter a valid password';
            errPass.style.color = "red";
            classBoxPass.style.border = "1px solid red";

            errConfirmPass.innerText = 'Please enter a valid password';
            errConfirmPass.style.color = "red";
            classBoxConfirmPass.style.border = "1px solid red";

            errUsername.innerText = 'Please enter a valid user name';
            errUsername.style.color = 'red';
            classBoxUsername.style.border = "1px solid red";
        }
        else if (getEmail !== "" && getPass === "" && getConfirmPass === "" && getUsername === "") {
            if (checkEmail(getEmail) === true) {
                if (findEmail(getEmail) === true) {
                    errEmail.innerText = '';
                }
                else {
                    errEmail.innerText = 'Email address have been exist, please input another email address';
                    errEmail.style.color = "red";
                    classBoxEmail.style.border = "1px solid red";
                }
            }
            else {
                errEmail.innerText = 'Please enter a valid email address';
                errEmail.style.color = "red";
                classBoxEmail.style.border = "1px solid red";
            }
            errUsername.innerText = 'Please enter a valid user name';
            errUsername.style.color = 'red';
            classBoxUsername.style.border = "1px solid red";

            errPass.innerText = 'Please enter a valid password';
            errConfirmPass.innerText = 'Please enter a valid password';

            errPass.style.color = "red";
            classBoxPass.style.border = "1px solid red";

            errConfirmPass.style.color = "red";
            classBoxConfirmPass.style.border = "1px solid red";
        }
        else if (getEmail === "" && getPass !== "" && getConfirmPass === "" && getUsername === "" ||
            getEmail === "" && getPass === "" && getConfirmPass !== "" && getUsername === "" ||
            getEmail === "" && getPass !== "" && getConfirmPass !== "" && getUsername === "") {
            errEmail.innerText = 'Please enter a valid email address and password';
            errPass.innerText = 'Please enter a valid email address and password';
            errConfirmPass.innerText = 'Please enter a valid email address and password';

            errEmail.style.color = "red";
            classBoxEmail.style.border = "1px solid red";

            errPass.style.color = "red";
            classBoxPass.style.border = "1px solid red";

            errConfirmPass.style.color = "red";
            classBoxConfirmPass.style.border = "1px solid red";

            errUsername.innerText = 'Please enter a valid user name';
            errUsername.style.color = 'red';
            classBoxUsername.style.border = "1px solid red";
        }
        else if (getEmail !== "" && getPass !== "" && getConfirmPass === "" && getUsername === "" ||
            getEmail !== "" && getPass === "" && getConfirmPass !== "" && getUsername === "" ||
            getEmail !== "" && getPass !== "" && getConfirmPass !== "" && getUsername === "") {
            errEmail.innerText = '';
            errPass.innerText = '';
            errConfirmPass.innerText = '';

            errEmail.removeAttribute('style');
            classBoxEmail.removeAttribute('style');

            errPass.removeAttribute('style');
            classBoxPass.removeAttribute('style');

            errConfirmPass.removeAttribute('style');
            classBoxConfirmPass.removeAttribute('style');

            errUsername.innerText = 'Please enter a valid user name';
            errUsername.style.color = 'red';
            classBoxUsername.style.border = "1px solid red";
        }
        else if (getEmail === "" && getPass !== "" && getConfirmPass === "" && getUsername !== "" ||
            getEmail === "" && getPass === "" && getConfirmPass !== "" && getUsername !== "" ||
            getEmail === "" && getPass !== "" && getConfirmPass !== "" && getUsername !== "") {

            errEmail.innerText = 'Please enter a valid email address and password';
            errPass.innerText = 'Please enter a valid email address and password';
            errConfirmPass.innerText = 'Please enter a valid email address and password';

            errEmail.style.color = "red";
            classBoxEmail.style.border = "1px solid red";

            errPass.style.color = "red";
            classBoxPass.style.border = "1px solid red";

            errConfirmPass.style.color = "red";
            classBoxConfirmPass.style.border = "1px solid red";

            errUsername.innerText = '';
            errUsername.removeAttribute('style');
            classBoxUsername.removeAttribute('style');
        }
        else {
            if (checkEmail(getEmail) === true && findEmail(getEmail, arrInforUser) === true) {

                errEmail.innerText = '';
                errEmail.removeAttribute('style');
                classBoxEmail.removeAttribute('style');
                if (checkPass(getPass) === true) {
                    if (checkConfirmpass(getPass, getConfirmPass) === true) {
                        errEmail.innerText = '';
                        errPass.innerText = '';
                        errConfirmPass.innerText = '';

                        errEmail.style.color = "red";
                        classBoxEmail.style.border = "1px solid #e5e5e5";

                        errPass.style.color = "red";
                        classBoxPass.style.border = "1px solid #e5e5e5";

                        errConfirmPass.style.color = "red";
                        classBoxConfirmPass.style.border = "1px solid #e5e5e5";

                        errUsername.innerText = '';
                        errUsername.removeAttribute('style');
                        classBoxUsername.removeAttribute('style');

                        let objUser = { username: `${getUsername}`, email: `${getEmail}`, pass: `${getPass}` };
                        arrInforUser.push(objUser);
                        strNewArr = JSON.stringify(arrInforUser);
                        localStorage.setItem('User', strNewArr);

                        window.location.assign('/singin/index-singin.html');
                    }
                    else {
                        errEmail.innerText = '';
                        errPass.innerText = '';
                        errConfirmPass.innerText = 'Password is incorrect';

                        errEmail.style.color = "red";
                        classBoxEmail.style.border = "1px solid #e5e5e5";

                        errPass.style.color = "red";
                        classBoxPass.style.border = "1px solid #e5e5e5";

                        errConfirmPass.style.color = "red";
                        classBoxConfirmPass.style.border = "1px solid red";

                        errUsername.innerText = '';
                        errUsername.removeAttribute('style');
                        classBoxUsername.removeAttribute('style');
                    }
                }
                else {
                    errEmail.innerText = '';
                    errPass.innerText = 'Password is incorrect';
                    errConfirmPass.innerText = '';

                    errEmail.removeAttribute('style');
                    classBoxEmail.removeAttribute('style');

                    errPass.style.color = "red";
                    classBoxPass.style.border = "1px solid red";

                    errConfirmPass.removeAttribute('style');
                    classBoxConfirmPass.removeAttribute('style');

                    errUsername.innerText = '';
                    errUsername.removeAttribute('style');
                    classBoxUsername.removeAttribute('style');
                }
            }
            else {
                errEmail.innerText = 'Email address have been exist or not valid';
                errEmail.style.color = "red";
                classBoxEmail.style.border = "1px solid red";

                errPass.innerText = '';
                errConfirmPass.innerText = '';

                errPass.removeAttribute('style');
                classBoxPass.removeAttribute('style');

                errConfirmPass.removeAttribute('style');
                classBoxConfirmPass.removeAttribute('style');

                errUsername.innerText = '';
                errUsername.removeAttribute('style');
                classBoxUsername.removeAttribute('style');
            }
        }
    }

}

function statusLogin(){
    let checkLogin = localStorage.getItem('boolLogin');
    if (checkLogin === 'true'){
        window.location.assign('/index-login.html');
    }
}