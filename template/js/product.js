
function init() {
    var type = 0;
    var renderList = [];

    if (window.location.search != "") {
        var search = window.location.search;
        search = search.replace("?", "");
        var arr = search.split("=");
        if (arr.length == 2 && arr[0] == "type") {
            type = arr[1];
        }
    }
    if (type == 0) {
        renderList = allGoodsList;
    } else {
        renderList = allGoodsList.filter(function (e) { return e.type == dataType });
    }
    render(renderList);

    var el = document.querySelector(".project-list");
    var str = "";
    classification.forEach(function (e) {
        if (e.type == type) {
            str += `<span class="mb-3 btn btn-info" data-type="${e.type}">${e.name}</span>`;
        } else {
            str += `<span class="mb-3 btn btn-light" data-type="${e.type}">${e.name}</span>`;
        }
    })
    el.innerHTML = str;

    el.addEventListener("click", function (event) {
        var dataType = event.target.getAttribute("data-type");
        if (dataType != null) {

            document.querySelector(".btn.btn-info").className = "mb-3 btn btn-light";
            event.target.className = "mb-3 btn btn-info";
            if (dataType == 0) {
                renderList = allGoodsList;
            } else {
                renderList = allGoodsList.filter(function (e) { return e.type == dataType });
            }

            render(renderList);
        }
    });
}

function render(renderList) {
    var elList = document.querySelector(".goods-list");
    var elStr = "";
    elList.innerHTML = "";
    renderList.forEach(function (e, i) {
        elStr += `<div class="col-12 col-sm-6 col-lg-3 wow zoomIn" data-wow-delay="${i}00ms" onclick="toDetail(${e.id})" data-wow-duration="1s">
        <div class="card">
            <div class="card-img-150">
                <img class="card-img-top" src="${e.imgUrl}" alt="${e.imgAlt}">
            </div>
            <div class="card-body">
                <h5 class="card-title">${e.title}</h5>
                <p class="card-text">
                    <span class="badge badge-danger">置顶</span>
                    ${e.context}
                </p>
            </div>
        </div>
    </div>`
    })
    elList.innerHTML = elStr;
}

function toDetail(id) {
    location.replace("website.html?id=" + id);

}

init();
