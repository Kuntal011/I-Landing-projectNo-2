// nav toggler
const menu = document.querySelector(".nav-menu")
const toggler = document.querySelector("#toggler")

toggler.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {

        menu.classList.remove("deactive")
        menu.classList.add("active")
    }
    else {
        menu.classList.remove("active")
        menu.classList.add("deactive")
    }
})

// Dynamic Tab

const dtab = document.querySelector("#d-tab")
const buttons = document.querySelectorAll("#d-tab .btn .button")
const tabs = document.querySelectorAll("#d-tab .acc-body .acc-tab")

buttons.forEach((button) => {
    const tab = dtab.querySelector(`#${button.dataset.tab}`)

    if (tab.classList.contains("acc-active")) {
        button.style.backgroundColor = "#0516fcff"
        button.style.color = "#ffffff"
    }
    else {

        button.style.backgroundColor = "#f5f5f5ff"
        button.style.color = "#0516fcff"
    }

    button.addEventListener("click", () => {
        tabs.forEach((tab) => {
            tab.classList.remove("acc-active")
        })
        tab.classList.add("acc-active")

        buttons.forEach((button) => {

            const tab = dtab.querySelector(`#${button.dataset.tab}`)
            if (tab.classList.contains("acc-active")) {
                button.style.backgroundColor = "#0516fcff"
                button.style.color = "#ffffff"
            }
            else {

                button.style.backgroundColor = "#f5f5f5ff"
                button.style.color = "#0516fcff"
            }
        })
    })
})


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    lazyLoad: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})

// accordian

const accs = document.querySelectorAll("#accordian-wrapper .accordian")
console.log(accs)

accs.forEach((acc) => {
    const head = acc.querySelector(".acc-head")
    const body = acc.querySelector(".acc-body")
    head.addEventListener("click", () => {
        const flag = acc.classList.contains("accordian-open")
        accs.forEach((acc) => {
            if (acc.classList.contains("accordian-open")) {
                acc.classList.remove("accordian-open")
                acc.classList.add("accordian-close")
            }
        })

        if (flag || acc.classList.contains("accordian-open")) {
            acc.classList.add("accordian-close")
            acc.classList.remove("accordian-open")
        }
        else {
            acc.classList.add("accordian-open")
            acc.classList.remove("accordian-close")
        }
    })
    body.addEventListener("click",()=>{
        acc.classList.add("accordian-close")
        acc.classList.remove("accordian-open")

    })

})


//  Using window.scrollTo() with behavior option
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}
scrollToSection("hero")


// aos animation
AOS.init({
    duration: 1000,
    once: true,
});