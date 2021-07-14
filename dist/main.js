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
        if ('scrollBehavior' in document.documentElement.style) {
            addEventListener('click', () => {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "center"
                });
            });
        } else {
            addEventListener('click', () => {
                element.scrollIntoView(true);
            });
        }
    }
}
const moveTop = new MoveTop();