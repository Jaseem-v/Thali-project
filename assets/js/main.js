// //////////////////
//TABS


var swiper = new Swiper(".video-Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     640: {
    //         slidesPerView: 1,
    //         spaceBetween: 20,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         spaceBetween: 40,
    //     },
    //     990: {
    //         slidesPerView: 2,
    //         spaceBetween: 60,
    //     },
    //     1400: {
    //         slidesPerView: 3,
    //         spaceBetween: 60,
    //     },
    //     1600: {
    //         slidesPerView: 3,
    //         spaceBetween: 60,
    //     }
    // },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: false,
});

//////////////////


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    mouseDrag: false,
    autoplay: true,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


////////////////////////

$('input').focus(function () {
    $(this).parent().addClass('active');
    $('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    })
});

///////////////////////////////////////
// Navbar scroll

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }

});
///////////////////////////////

// $(window).scroll(function () {
//     var windscroll = $(window).scrollTop();
//     if (windscroll >= 100) {
//         $('section').each(function (i) {
//             // The number at the end of the next line is how pany pixels you from the top you want it to activate.
//             if ($(this).position().top <= windscroll - -1500) {
//                 $('.navigation__link.active').removeClass('active');
//                 $('.navigation__link').eq(i).addClass('active');

//             }
//         });

//     } else {

//         $('.navigation__link.active').removeClass('active');
//         $('.navigation__link:first').addClass('active');
//     }

// }).scroll();

//////////////////////////////////////////
// enroll btn
if (document.querySelector("#enroll")) {

    let enquireBtn = document.querySelectorAll(".offers__btn")
    let model = document.querySelector(".enroll")
    let modelContainer = document.querySelector(".enroll__container")
    let modelOverlay = document.querySelector(".enroll__overlay")
    let modelClose = document.querySelector(".model-close");


    function modelCloseFunction() {
        document.body.classList.remove("remove-scrolling");
        modelContainer.classList.remove("active")
        setTimeout(() => {
            modelOverlay.classList.remove("active")
        }, 200)
        setTimeout(() => {
            model.classList.remove("active")
        }, 500)
    }


    modelClose.addEventListener("click", modelCloseFunction)
    modelOverlay.addEventListener("click", modelCloseFunction)


    enquireBtn.forEach((e) => {
        e.addEventListener("click", () => {
            document.body.classList.add("remove-scrolling");
            model.classList.add("active")
            modelOverlay.classList.add("active")

            setTimeout(() => {
                modelContainer.classList.add("active")
            }, 200)
        })
    })

}

/////////////////////////////////////
// Hamburg menu
// $(document).ready(function () {
//     $(".hamburger").click(function () {
//         $(this).toggleClass("is-active");
//     });
// });


//////////////////////////////////////////
// Navbar-scroll

$('a[href^="#"]').on('click', function (e) {
    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 70
    }, 200, 'swing', function () {
        window.location.hash = target;
    });
});


/////////////////////////////////////////////////////
// Mobile menu
const openBtn = document.querySelector("#hamburger-1")
const closeBtn = document.querySelector("#hamburger-2")
const nav_list = document.querySelector(".navigation__list")
const overlay = document.querySelector(".overlay")
const navContact = document.querySelector(".nav-contact")
overlay.classList.add("hidden")

function mobileMenu() {
    openBtn.classList.add("active");
    nav_list.classList.add("active")
    overlay.classList.remove("hidden")
}
function mobileMenuClose() {
    openBtn.classList.remove("active");
    nav_list.classList.remove("active")
    overlay.classList.add("hidden")
}


openBtn.addEventListener("click", mobileMenu)
closeBtn.addEventListener("click", mobileMenuClose)
overlay.addEventListener("click", mobileMenuClose)

/////////////////////////////////////////////////////
// scroll

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

// //////////////////
//GALLERY

// const info = document.querySelectorAll(".projects__info");
// const projectBtns = document.querySelectorAll(".projects__btn");
// let clickedBtn;

// projectBtns.forEach(el => {
//     el.addEventListener("click", () => {
//         clickedBtn = el.closest(".projects__info")

//         console.log(clickedBtn);
//     })
// })
// $('.projects__btn').magnificPopup({
//     type: 'image',
//     gallery: {
//         enabled: true
//     },
//     callbacks: {
//         open: function () {
//             $.magnificPopup.instance.close = function () {
//                 $.magnificPopup.proto.close.call(this);
//                 clickedBtn.style.bottom = "0rem"
//                 setTimeout(() => {
//                     clickedBtn.style.bottom = "-6rem"
//                 }, 200)
//             };

//         }
//     }
// })

// //////////////////////////
// // project

// const projectBtn = document.querySelectorAll(".projects__single-item")

// projectBtn.forEach((btn) => {
//     btn.addEventListener("click", (el) => {
//         let projectInfo = el.target.closest(".projects__outer");

//         console.log(projectInfo.style);
//         projectInfo.style.bottom = "-6rem"
//     })
// })



var tabs = document.getElementsByClassName('gallery__item');

Array.prototype.forEach.call(tabs, function (tab) {
    tab.addEventListener('click', setActiveClass);
});

function setActiveClass(evt) {
    Array.prototype.forEach.call(tabs, function (tab) {
        tab.classList.remove('active');
    });

    evt.currentTarget.classList.add('active');
}


