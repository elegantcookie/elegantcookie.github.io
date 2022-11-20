import * as cookies from "./cookies.js";
import * as signin from "./signin.js";

function get_header() {
    return `
    <div class="flex-header">
        <div class="logo">
            <!-- Logo -->
            <a href="index.html">
                <img height="64" width="64" src="../static/pract8/lgoo.png">
            </a>
        </div>
<!--        <div class="mobile-menu">-->
            <input id="daxak_toggle" type="checkbox" wfd-invisible="true">
            <label class="daxak_btn" for="daxak_toggle"><span></span></label>
<!--        </div>-->
        ` + (cookies.getCookie('signed_in') ?
        `
        <nav class="web-nav">
            <div class="nav-item">
                <a href="profile.html">
                    <span>Profile</span>
                </a>
            </div>
        ` :
        `
        <nav class="web-nav">
            <div class="nav-item">
                <a href="register.html">
                    <span>Profile</span>
                </a>
            </div>
        `)
        +
        `
            <div class="nav-item">
                <a href="about.html">
                    <span>About us</span>
                </a>
            </div>
        ` +
        `
            <div class="nav-item">
                <a href="contact.html">
                    <span>Support</span>
                </a>
            </div>
        `+ (cookies.getCookie('signed_in') ?
            `
        <div class="nav-item last">
            <a id="sign-in-btn-h" href="index.html">
                <span>Sign Out</span>
            </a>
        ` :
            `
        <div class="nav-item last">
            <a href="register.html">
                <span>Sign In</span>
            </a>
        `+
        `
        </nav>
    </div>
    `)
}

function get_footer() {
    return `
    <div class="ftr-container">
        <div class="ftr-container-item w">
            <p>Contact:</p>
            <div class="f-contacts-phone"><a href="tel:+000000000">+01 234 567 88</a></div>
            <div class="f-contacts-email"><a href="mailto:support@email.domain">support@email.domain</a></div>
        </div>
        <div class="ftr-container-item">
            <p>Services:</p>
            <div><a href="">Service 1</a></div>
            <div><a href="">Service 2</a></div>
            <div><a href="">Service 3</a></div>
        </div>
        <div class="ftr-container-item">
            <p>Developers:</p>
            <div class="f-socials-yt"><a href="">Forum</a></div>
            <div class="f-socials-news"><a href="">Projects</a></div>
            <div class="f-socials-twitter"><a href="">Open Source</a></div>
        </div>
    </div>`
}

function get_elem(what) {
    return  document.getElementsByTagName(what)[0]
}

function get_inner_html(what) {
    switch (what) {
        // case 'head':
        //     return get_head()
        case 'header':
            return get_header()
        case 'footer':
            return get_footer()
    }
}

function generate(what) {

    const elem = get_elem(what)
    elem.innerHTML = get_inner_html(what)
}


function buildPage() {

    generate('header')
    generate('footer')
}

function loadSignIn() {
    signin.setSignInListener()
    signin.setSignOutListener()
}

let signedIn = 0

window.onload = function () {
    buildPage()
    loadSignIn()
}