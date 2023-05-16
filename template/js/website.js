function init() {
    var id = null;
    var currentGoods = null;
    if (window.location.search != "") {
        var search = window.location.search;
        search = search.replace("?", "");
        var arr = search.split("=");
        if (arr.length == 2 && arr[0] == "id") {
            id = arr[1];
        }
    }

    if (id) {
        allGoodsList.forEach(function (goods) {
            if (goods.id == id) {
                currentGoods = goods;
            }
        })
    } else {
        return alert("未找到产品，请重新进入！");
    }
    if (!currentGoods) {
        return alert("未找到产品，请重新进入！");
    }


    if (currentGoods.goodsImgList?.length) {
        var str1 = "";
        var str2 = "";
        currentGoods.goodsImgList.forEach(e => {
            str1 += `<div class="swiper-slide">
                        <img src="${e}" title="${currentGoods.title} alt="${currentGoods.title}">
                    </div>`;
            str2 += `<div class="swiper-slide">
                        <img src="${e}" title="${currentGoods.title} alt="${currentGoods.title}">
                    </div>`;
        })
        document.querySelector(".goodsImgList-1").innerHTML = str1;
        document.querySelector(".goodsImgList-2").innerHTML = str2;
    }
    var elTitle = document.querySelectorAll(".title");
    elTitle.forEach(e => e.innerText = currentGoods.title);

    document.querySelector(".updataTime").innerText = currentGoods.updataTime;
    document.querySelector(".brand").innerText = currentGoods.brand;

    classification.forEach(e => {
        if (e.type == currentGoods.type) {
            document.querySelector(".type").innerText = e.name;
        }
    })

    document.querySelector(".price").innerText = currentGoods.price;

    if (currentGoods.goodsContext) {
        document.querySelector(".goodsContext").innerText = currentGoods.goodsContext;
    }

    if (currentGoods.peculiarityList?.length) {
        var str = "";
        currentGoods.peculiarityList.forEach(e => {
            str += `<li>
                        <p>${e}</p>
                    </li>`;
        });
        document.querySelector(".peculiarityList").innerHTML = str;
    }

    if (currentGoods.goodsDetailsImgList?.length) {
        var str = "";
        currentGoods.goodsDetailsImgList.forEach(e => {
            str += `<img src="${e}" alt="${currentGoods.title}" />`;
        })
        document.querySelector(".goodsDetailsImgList").innerHTML = str;
    }

    if (currentGoods.downloadList?.length) {
        var str = "";
        currentGoods.downloadList.forEach(e => {
            str += `<p>
                        <span style="text-decoration-line: underline;">
                            <a href="${e.link}" title="${e.name}"  alt="${e.name}" target="_window">${e.name}</a>
                        </span>
                    </p>`;
        })
        document.querySelector(".downloadList").innerHTML = str;
    }
}


function swiper() {
    var viewSwiper = new Swiper('.view .swiper-container', {
        on: {
            slideChangeTransitionStart: function () {
                updateNavPosition()
            }
        }
    })

    $('.view .arrow-left,.preview .arrow-left').on('click', function (e) {
        e.preventDefault()
        if (viewSwiper.activeIndex == 0) {
            viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
            return
        }
        viewSwiper.slidePrev()
    })
    $('.view .arrow-right,.preview .arrow-right').on('click', function (e) {
        e.preventDefault()
        if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
            viewSwiper.slideTo(0, 1000);
            return
        }
        viewSwiper.slideNext()
    })

    var previewSwiper = new Swiper('.preview .swiper-container', {
        //visibilityFullFit: true,
        slidesPerView: 'auto',
        allowTouchMove: false,
        on: {
            tap: function () {
                viewSwiper.slideTo(previewSwiper.clickedIndex)
            }
        }
    })

    function updateNavPosition() {
        $('.preview .active-nav').removeClass('active-nav')
        var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
        if (!activeNav.hasClass('swiper-slide-visible')) {
            if (activeNav.index() > previewSwiper.activeIndex) {
                var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
                previewSwiper.slideTo(activeNav.index() - thumbsPerNav)
            } else {
                previewSwiper.slideTo(activeNav.index())
            }
        }
    }
}
init();
swiper();