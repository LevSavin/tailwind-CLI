class Menu {
    constructor() {
        const navbar = this.setVisual(document.querySelector("#navbarBtn"));
        const close = this.setVisual(document.querySelector("#navbarClose"));
    }

    setVisual($element) {
        $element.addEventListener('click', () => {
            document.querySelector("#navbar").classList.toggle("hidden");
        })
    }

}
const menu = new Menu();

class MoveTop {
    constructor() {
        const scroll = this.setVisual();
        const move = this.getScroll();
    }

    setVisual() {
        window.addEventListener('scroll', () => {
            moveToTop.hidden = (pageYOffset < 200);
        })
    }

    getScroll() {
        let element = document.querySelector("#app"),
        isSafari = window.safari !== undefined,
            is_ios = /iP(ad|od|hone)/i.test(window.navigator.userAgent);

        if (isSafari || is_ios) {
            document.body.scrollTop = 0;
        } else {
            addEventListener('click', () => {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            })
        }
    }   
}
    const moveTop = new MoveTop();