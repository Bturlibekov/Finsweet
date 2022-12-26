// animOnScroll
const animItems = document.querySelectorAll('.__anim-items')

export function animOnScroll() {
    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll)
        function animOnScroll(params) {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index]
                const animItemHeight = animItem.offsetHeight
                const animItemOffset = offset(animItem).top
                const animStart = 4

                let animItemPoint = window.innerHeight - animItemHeight / animStart
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart
                }
                if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('__animate')
                } else {
                    if (!animItem.classList.contains('__anim-no-hide')) {
                        animItem.classList.remove('__animate')
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        setTimeout(() => {
            animOnScroll()
        }, 300);
        animOnScroll()
    }
}
// /animOnScroll