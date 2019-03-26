$(window).ready(function () {
    $('.banner_items').slick({
        dots: true,
        customPaging : function(slider, i) {
            return '<button class="bannerArrowsDots__item"></button>';
        },
        arrows: true,
        appendArrows: $('.bannerArrows'),
        prevArrow: '<button type="button" class="bannerArrows__btn"><div class="icon-bannerArrow_left"></div></button>',
        nextArrow: '<button type="button" class="bannerArrows__btn bannerArrows__btn-right"><div class="icon-bannerArrow_right"></div></button>'
    });
});

document.addEventListener('DOMContentLoaded', e => {
    let recIndex = document.querySelector('.recIndex');
    let recIndexItemsFirstEl = document.querySelector('.recIndex__item:first-child');
    let recIndexTitle = document.querySelector('.recIndex__title');
    let recIndexHeight = recIndexItemsFirstEl.offsetHeight + recIndexTitle.offsetHeight + 70;

    recIndex.style.height = recIndexHeight + 'px';
});

$(function () {
    $('.smoIndexTabs__link').on('click',function (e) {
        e.preventDefault();

        let index = $(this).index();
        let tab = $('.smoIndexTabs__link');
        let tabs = $('.smoIndexTab__item');

        tab.eq(index).addClass('active').siblings().removeClass('active');
        tabs.eq(index).addClass('active').siblings().removeClass('active');
    });
});