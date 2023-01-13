/* MENU ANCORA DESCENDO NO CLIQUE */

const menuItens = document.querySelectorAll('.menu a')

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    const to = getScrollTopByHref(event.target)

    window.scroll({
        top: to,
        behavior: "smooth",
    });
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

/* MENU MUDA QUANDO ROLA A TELA */

window.onscroll = function () {
    scroll()
}

function scroll() {

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.querySelector('header').style.top = '-50px'
        document.querySelector('header').style.backgroundColor = 'black'
        document.querySelector('.header').style.paddingTop = '50px'
        document.querySelector('nav ul').style.top = '48px'
    } else {
        document.querySelector('header').style.top = '-25px'
        document.querySelector('header').style.backgroundColor = 'transparent'
        document.querySelector('nav ul').style.top = '78px'
    }
}

/* DÚVIDAS FREQUENTES */

let question = document.querySelectorAll(".tab4--box")
let content = document.querySelectorAll(".tab4--content")
let seta = document.querySelectorAll(".tab4--seta")

for (let i = 0 ; i < question.length ; i++) {
    question[i].addEventListener('click', () => {
        if(seta[i].classList.contains('close')) {
            seta[i].classList.remove('close')
            seta[i].classList.add('open')
            content[i].classList.remove('active')
        } else {
            seta[i].classList.add('close')
            content[i].classList.add('active')
        }
    })
}

/* MENU OPENER */

var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn img');

function menuShow() {
    if(ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }
}

var link1 = document.querySelector('nav ul li .home');
var link2 = document.querySelector('nav ul li .sobre');
var link3 = document.querySelector('nav ul li .depoimentos');
var link4 = document.querySelector('nav ul li .planos');
var link5 = document.querySelector('nav ul li .duvidas');
var link6 = document.querySelector('nav ul li .contato');

link1.addEventListener('click', function() {
    ul.classList.remove('open')
})

link2.addEventListener('click', function() {
    ul.classList.remove('open')
})

link3.addEventListener('click', function() {
    ul.classList.remove('open')
})

link4.addEventListener('click', function() {
    ul.classList.remove('open')
})

link5.addEventListener('click', function() {
    ul.classList.remove('open')
})

link6.addEventListener('click', function() {
    ul.classList.remove('open')
})