function menuClick(x) {
    x.classList.toggle('menu-open');
    var menu = document.getElementsByClassName('menu')
    var submenu = menu[0].firstElementChild.lastElementChild;
    if (x.classList.contains('menu-open')) {
        menu[0].classList.add('menu-main-open');
    } else {
        menu[0].classList.remove('menu-main-open')
        submenu.style.height = null;
    }
}

function submenu(x) {
    x.classList.toggle('submenu-open')
    var submenu = x.parentElement.lastElementChild;
    if (submenu.style.height) {
        submenu.style.height = null;
        
    } else {
        submenu.style.height = submenu.scrollHeight + 'px';
    }
}

function menuClose() {
    var menuBtn = document.getElementsByClassName('menu-btn');
    var menu = document.getElementsByClassName('menu')
    var submenu = menu[0].firstElementChild.lastElementChild;
    if (menuBtn[0].classList.contains('menu-open')) {
        menuBtn[0].classList.remove('menu-open')
        menu[0].classList.remove('menu-main-open');
        submenu.style.height = null;
    }
}

var scrollHeight = window.innerHeight / 2;

window.onscroll = function() {
    var header = document.getElementsByTagName('header');
    if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
        if (!header[0].classList.contains("header-scroll")) {
            header[0].classList.add('header-scroll');
        }
    } else {
        if (header[0].classList.contains("header-scroll")) {
            header[0].classList.remove('header-scroll');
        }
    }
}
