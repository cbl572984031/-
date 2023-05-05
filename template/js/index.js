function init() {
    var el = document.querySelector(".projectList");
    var str = "";
    productList.forEach(function (e) {
        str += `<div class= "col-12 col-sm-6 col-lg-3 wow zoomIn" data - wow - delay="100ms" data - wow - duration="1s" >
            <div class="card">
                <div class="card-img-150"><img class="card-img-top"
                    src="${e.imgSrc}" alt="${e.imgAlt}">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${e.title}</h5>
                    <p class="card-text">
                        ${e.context}
                    </p>
                </div>
            </div>
        </div>`;
    })
    el.innerHTML = str;
}


init();