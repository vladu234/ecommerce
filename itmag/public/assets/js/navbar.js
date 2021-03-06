import {
    debounce,
    setActive,
    removeActive
} from "./global.js";

const navbar = document.querySelector(".navbar");

const navbarLeftArea = navbar.children[0];
const navbarLeftHamburger = navbarLeftArea.children[0];
const navbarLeftCategoriesMenu = navbarLeftArea.children[1];

const navbarLogoLink = navbar.children[1].children[0];
const navbarLogoImg = navbarLogoLink.children[0];

const navbarSearchContainer = navbar.children[2].children[0];
const navbarSearch = navbarSearchContainer.parentElement;
const navbarSearchCloseIcon = navbar.children[2].children[0].children[1];
const navbarSearchBackBtn = navbarSearch.querySelector(".navbar__search__suggestions__back");
const navbarSearchInput = navbarSearchContainer.children[0];
const navbarSearchSuggestions = navbarSearch.children[1];

const navbarSearchRightIcon = navbar.children[3].children[0];
const navbarUserTab = navbar.children[3].children[1];
const navbarUserPanel = navbarUserTab.children[1];

const navbarStickyItems = [
    navbar, navbarLeftArea, navbarLogoLink,
    navbarLogoImg, navbarSearchContainer, navbarSearchSuggestions, navbarUserPanel
];

const setNavbarSticky = () => {
    const scrolled = window.scrollY;

    navbarStickyItems.forEach(Item => {
        if (scrolled > 100) {
            Item.classList.add("sticky");

            removeNavbarElementActive(navbarLeftCategoriesMenu);
            removeNavbarElementActive(navbarSearchSuggestions);
            removeNavbarElementActive(navbarSearch);
        } else {
            Item.classList.remove("sticky");
        }
    });
};

const setNavbarElementActive = Elem => {
    setActive(Elem);

    if (Elem == navbarLeftCategoriesMenu) {
        navbarLeftHamburger.removeAttribute("class", "fa fa-bars");
        navbarLeftHamburger.setAttribute("class", "fa fa-times");
    }

    if (Elem == navbarSearchSuggestions) {
        setActive(navbarSearchContainer);
        setActive(navbarSearchCloseIcon);
    }
};

const removeNavbarElementActive = Elem => {
    removeActive(Elem);

    if (Elem == navbarLeftCategoriesMenu) {
        navbarLeftHamburger.removeAttribute("class", "fa fa-times");
        navbarLeftHamburger.setAttribute("class", "fa fa-bars");
    }

    if (Elem == navbarSearchSuggestions) {
        removeActive(navbarSearchContainer);
        removeActive(navbarSearchCloseIcon);
    }
};

const navbarFunctionalities = () => {
    window.addEventListener("scroll", debounce(setNavbarSticky, 75));

    if (window.innerWidth < 768 && window.TouchEvent) {
        navbarSearchRightIcon.addEventListener("touchstart", debounce(() => {
            setNavbarElementActive(navbarSearch, null);

            removeNavbarElementActive(navbarLeftCategoriesMenu);
        }, 75));

        navbarSearchCloseIcon.addEventListener("touchstart", debounce(() => {
            if (navbarSearchInput.value === "") {
                removeNavbarElementActive(navbarSearch, null);
            } else {
                navbarSearchInput.value = "";
            }
        }, 75));
    }

    if ((window.innerWidth < 768 || window.innerWidth <= 2740) && window.TouchEvent) {
        navbarLeftHamburger.addEventListener("touchstart", debounce(() => {
            if (navbarLeftCategoriesMenu.classList.contains("active")) {
                removeNavbarElementActive(navbarLeftCategoriesMenu);
            } else {
                setNavbarElementActive(navbarLeftCategoriesMenu);

                removeNavbarElementActive(navbarSearchSuggestions);
            }
        }, 75));

        navbarSearchBackBtn.addEventListener("touchstart", debounce(() => {
            removeNavbarElementActive(navbarSearch);
            navbarSearchInput.value = "";
        }, 75));
    }

    if (window.innerWidth <= 2740 && window.TouchEvent) {
        navbarSearchInput.addEventListener("touchstart", debounce(() => {
            setNavbarElementActive(navbarSearchSuggestions);

            removeNavbarElementActive(navbarLeftCategoriesMenu);
        }, 75));

        navbarSearchCloseIcon.addEventListener("touchstart", debounce(() => {
            if (navbarSearchInput.value === "") {
                removeNavbarElementActive(navbarSearchSuggestions);
            } else {
                navbarSearchInput.value = "";
            }
        }, 75));
    }

    if (window.innerWidth > 1200 && window.MouseEvent) {
        navbarLeftArea.addEventListener("mouseenter", debounce(() => {
            setNavbarElementActive(navbarLeftCategoriesMenu);

            removeNavbarElementActive(navbarSearchSuggestions);
        }, 75));

        navbarLeftArea.addEventListener("mouseleave", debounce(() => {
            removeNavbarElementActive(navbarLeftCategoriesMenu);
        }, 75));

        navbarSearchInput.addEventListener("click", debounce(() => {
            setNavbarElementActive(navbarSearchSuggestions);
        }, 75));

        navbarSearchCloseIcon.addEventListener("click", debounce(() => {
            if (navbarSearchInput.value === "") {
                removeNavbarElementActive(navbarSearchSuggestions);
            } else {
                navbarSearchInput.value = "";
            }
        }, 75));

        navbarUserTab.addEventListener("mouseenter", debounce(() => {
            setNavbarElementActive(navbarUserPanel);

            removeNavbarElementActive(navbarSearchSuggestions);
        }, 75));

        navbarUserTab.addEventListener("mouseleave", debounce(() => {
            removeNavbarElementActive(navbarUserPanel);
        }, 75));
    }
};
navbarFunctionalities();

// After Login Settings
const userEmailInCircle = document.querySelector(".navbar__right-area .user") || null;

if (userEmailInCircle) {
    const userEmailFirstLetter = userEmailInCircle.innerText.slice(0, 1).toUpperCase();
    userEmailInCircle.innerText = userEmailFirstLetter;
}

const navbarUserActions = navbarUserPanel.children[0];

if (navbarUserActions.classList.contains("active")) {
    navbarUserPanel.style.left = "-25%";

    const userEmail = navbarUserActions.children[0];
    const userEmailAt = userEmail.innerHTML.search("@");
    const user = userEmail.innerHTML.slice(0, userEmailAt);
    userEmail.innerHTML = `Salut, ${user}!`;
}