function init() {
    var el = document.querySelector(".projectList");
    var str = "";
    indexClassList.forEach(function (e, i) {
        str += `<div class= "col-12 col-sm-6 col-lg-3 wow zoomIn" onclick="handleProjectClick(${e.type})" data-wow-delay="${i}00ms" data-wow-duration="1s" >
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

function handleProjectClick(data) {
    location.replace("product.html?type=" + data);
}

init();