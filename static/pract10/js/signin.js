import * as cookies from "./cookies.js";

export function signOut() {
    cookies.eraseCookie('signed_in')
}

export function signIn() {
    cookies.setCookie("signed_in", true, 1)
}

export function setSignOutListener() {
    let elem = document.getElementById('sign-in-btn-h')

    if (elem) {
        elem.addEventListener('click', signOut)
    }
}

export function setSignInListener() {
    let elem = document.getElementById('sign_in_btn')

    if (elem) {
        elem.addEventListener("click", signIn)
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

