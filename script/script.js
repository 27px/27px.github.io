let body;
const _ = s => document.querySelector(s);
const $ = s => Array.from(document.querySelectorAll(s));

window.onload = () => {
    body = document.body;
    _("#menu").addEventListener("click", () => {
        body.classList.toggle("hidden-menu");
    });
    scrolled();
};

window.onresize = () => {
    if (!body) {
        return
    }
    body.classList.add("hidden-menu");
    scrolled();
};

window.onscroll = () => {
    if (!body) {
        return
    }
    scrolled();
};

function scrolled() {
    const animated_elements = $(".animated");
    for (let element of animated_elements) {
        const classes = element.parentNode.classList
        const bounding_rect = element.getBoundingClientRect();
        if (!bounding_rect) {
            classes.add("animated-box");
            continue
        }
        const v = bounding_rect.y - 1 * bounding_rect.height;
        const f = bounding_rect.y + 0.6 * bounding_rect.height;
        if (v < 0 && f > 0) {
            classes.add("animated-box");
        } else {
            classes.remove("animated-box");
        }
    }
}
