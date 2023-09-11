import * as flsFunctions from "./modules/functions.js";
import "./jquery-3.6.3.js";
import "./slick.min.js";


flsFunctions.isWebp();


import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper('.swiper', {
    
});

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__li'),
    hamburger = document.querySelector('.header__hamburger');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
    });
    
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })

    $('.reviews__slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow:'<button type="button" class="slick-prev"><img src="img/icon_arrow-left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="img/icon_arrow_right.svg"></button>',
        responsive: [
        ]
    });
    

      

});