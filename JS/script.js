'use strict';
// ハンバーガーメニュー設定
const nav = document.querySelector(".navi");
const btn = document.querySelector(".nav-btn");
const mask = document.querySelector(".nav-mask");
const navmenu = document.querySelector(".nav-menu");

btn.addEventListener("click",()=>{
    nav.classList.toggle("active");
    btn.classList.toggle("active");
    mask.classList.toggle("active");
});

mask.addEventListener("click",()=>{
    nav.classList.toggle("active");
    btn.classList.toggle("active");
    mask.classList.toggle("active");
})

navmenu.addEventListener("click",()=>{
    btn.classList.toggle("active");
    nav.classList.toggle("active");
    mask.classList.toggle("active");
})


// PickUp　swiper設定
const swiper = new Swiper('.swiper', {
    // Optional parameters 横スクロール　horizontal
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: 1.15,
    centeredSlides: true,
    breakpoints:{
        768:{
        slidesPerView: 3.35 ,
        }
    }
    // spaceBetween: 60, 
    // If we need pagination
/*     pagination: {
      el: '.swiper-pagination',

    }, */
  
    // Navigation arrows
/*     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, */
  
    // And if we need scrollbar
/*     scrollbar: {
      el: '.swiper-scrollbar',
    },  */
  });
  
//   スムーススクロール　メニューリンクをクリックした時、スクロール。
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }

  //Feature フェードイン　

  let fadeInTarget = document.querySelectorAll('.fadein');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 200) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});