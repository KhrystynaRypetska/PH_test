// 'use-strict'
import 'swiper/swiper-bundle.css'
import '../styles/style.scss'


import Slider from './slider/slider'


import {ourFriendsConfig} from  './slider/config/ourFriendsConfig'

import Navigation from './mobNav/mobNav'


const nav = new Navigation("")
nav.init()


document.addEventListener("DOMContentLoaded", ()=> {
  new Slider(".js--our-friends", ourFriendsConfig).init()

})














//MobNav
// const menuBtn = document.querySelector('.buttonMob')
//
// let menuOpen = false
// menuBtn.addEventListener('click', () => {
//   if(!menuOpen) {
//     menuBtn.classList.add('open')
//     menuOpen = true
//     document.querySelector('.header_list').classList.add('show-menu')
//   } else {
//     menuBtn.classList.remove('open')
//     menuOpen = false
//     document.querySelector('.header_list').classList.remove('show-menu')
//   }
// })