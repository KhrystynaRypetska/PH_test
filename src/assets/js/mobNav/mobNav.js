

export const navSettings = () => {}

export class Navigation {
    constructor(className) {
        this.className = className
        this.headerId = document.getElementById('header')
        this.navClass = document.getElementById('show-menu')
        this.navBtn = document.querySelector('.show-menu_button')
        this.menuBtn = document.querySelector('.buttonMob')
        this.bady = document.body
    }

    windowWidth() {
        return window.innerWidth
    }

    toggleNav() {
        let element = document.querySelector('.header_nav_wrapper')
        if(element.classList.contains('show-menu')) {
            element.classList.remove('show-menu')
            this.bady.classList.remove('active-menu')
            this.menuBtn.classList.remove('open')
        } else {
            element.classList.add('show-menu')
            this.bady.classList.add('active-menu')
            this.menuBtn.classList.add('open')
        }

    }

    init() {
        this.navBtn.addEventListener('click', ()=> this.toggleNav())

        if (this.windowWidth() <= 820) {
            this.toggleNav()
        }

    }

}

export default Navigation