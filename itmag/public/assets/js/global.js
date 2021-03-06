export const debounce = (fn, delay) => {
    let timer = {};

    return function (p) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn(p);
        }, delay);
    }
};

export const setActive = Elem => {
    Elem.classList.add("active");
};

export const removeActive = Elem => {
    Elem.classList.remove("active");
};

const pageLoader = document.querySelector(".page-loader");
const pageLoaderBullets = Array.from(pageLoader.children);

export const loadPageLoader = () => {
    if (!pageLoader.classList.contains("active")) {
        pageLoader.classList.add("active");

        pageLoaderBullets.forEach(Bullet => {
            Bullet.classList.add("active");
        });
    } else {
        pageLoader.classList.remove("active");

        pageLoaderBullets.forEach(Bullet => {
            Bullet.classList.remove("active");
        });
    }
};