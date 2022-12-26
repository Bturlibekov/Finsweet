// import * as flsFunctions from "./modules/functions.js"
// import { Modal } from '../js/libs/modal.js'
// import { Accordion } from '../js/libs/accordion.js'
// import * as noUiSlider from 'nouislider'
// import fslightbox from "fslightbox"
// import { animOnScroll } from "./libs/animOnScroll.js"
// import { headerFixed } from "./libs/fixed-header.js"
// import { simpleBar } from "simplebar"; => data-simplebar должен быть у обьекта
// import { select } from './libs/select.js';
import { lazyLoading } from './libs/lazy-loading.js'
// import { backgroundImageWebp } from './libs/backgroundImageWebp.js'
import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);


// Preloader
// window.addEventListener('load', function() {
//     let preloader = document.getElementById('preloader')
//     preloader.style.display = 'none'
//     document.body.style.overflow = 'auto'
// })
// Preloader

// flsFunctions.isWebP()
// animOnScroll()
// headerFixed()
// Accordion()
// select()
lazyLoading()
// backgroundImageWebp()

// const modal = new Modal({})

const toggle = document.querySelector(".toggle")
const menuBar = document.querySelector(".menu-bar")
const body = document.body


toggle.addEventListener("click", () => {
  toggle.classList.toggle('--active')
  menuBar.classList.toggle('--active')
  body.classList.toggle('--lock')
})

window.addEventListener("click", (event) => {
  if (event.target === menuBar) {
    toggle.classList.remove('--active')
    menuBar.classList.remove('--active')
    body.classList.remove('--lock')
  }
})

const testimonialsSlider = new Swiper(".testimonials-slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: '.testimonials-navigation-next',
    prevEl: '.testimonials-navigation-prev',
    disabledClass: "testimonials-navigation-disabled"
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
})


// Range slider
// const rangeSlider = document.getElementById('range-slider');

// if (rangeSlider) {
// 	noUiSlider.create(rangeSlider, {
//     start: [500, 999999],
// 		connect: true,
// 		step: 1,
//     range: {
// 			'min': [500],
// 			'max': [999999]
//     }
// 	});

// 	const input0 = document.getElementById('input-0');
// 	const input1 = document.getElementById('input-1');
// 	const inputs = [input0, input1];

// 	rangeSlider.noUiSlider.on('update', function(values, handle){
// 		inputs[handle].value = Math.round(values[handle]);
// 	});

// 	const setRangeSlider = (i, value) => {
// 		let arr = [null, null];
// 		arr[i] = value;

// 		console.log(arr);

// 		rangeSlider.noUiSlider.set(arr);
// 	};

// 	inputs.forEach((el, index) => {
// 		el.addEventListener('change', (e) => {
// 			console.log(index);
// 			setRangeSlider(index, e.currentTarget.value);
// 		});
// 	});
// }
// /Range slider

// =============================
// document.addEventListener('DOMContentLoaded', () => {

// 	let mySwiper = new Swiper('.slider-block', {
// 		slidesPerView: 1,
// 	})
// 	const sliderNavItems = document.querySelectorAll('.slider-nav__item');
// 	const sliderNav = document.querySelector('.slider-nav');

// 	sliderNavItems.forEach((el, index) => {
// 		el.setAttribute('data-index', index);

// 		el.addEventListener('click', (e) => {
// 			const index = parseInt(e.currentTarget.dataset.index);
// 			console.log(index)
// 			mySwiper.slideTo(index);
// 		});
// 	});
// })
// =============================

// Gallery
// Gallery

// Lazy Loading



//Lazy Loading


// disable-scroll & enable-scroll

// const fixBlocks = document.querySelectorAll('.fix-block')

// let disableScroll = function () {
//     let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
//     let pagePosition = window.scrollY
//     fixBlocks.forEach((el) => {
//         el.style.paddingRight = paddingOffset
//     })
//     body.style.paddingRight = paddingOffset
//     body.classList.add('disable-scroll')
//     body.dataset.position = pagePosition
//     body.style.top = -pagePosition + 'px'
// }

// let enableScroll = function () {
//     let pagePosition = parseInt(document.body.dataset.position, 10)
//     body.style.top = 'auto'
//     body.classList.remove('disable-scroll')
//     fixBlocks.forEach((el) => {
//         el.style.paddingRight = '0px'
//     })
//     body.style.paddingRight = '0px'
//     window.scroll({ top: pagePosition, left: 0 })
// }

// disable-scroll & enable-scroll 

