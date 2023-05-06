
function init() {
    var type = 0;
    if (window.location.search != "") {
        var search = window.location.search;
        search = search.replace("?", "");
        var arr = search.split("=");
        if (arr.length == 2 && arr[0] == "type") {
            type = arr[1];
        }
    }

    var el = document.querySelector(".project-list");
    var str = "";
    classification.forEach(function (e) {
        if (e.type == type) {
            str += `<span class="mb-3 btn btn-info" data-type="${e.type}">${e.name}</span>`;
        } else {
            str += `<span class="mb-3 btn btn-light">${e.name}</span>`;
        }
    })
    el.innerHTML = str;

    el.addEventListener("click", function (event) {
        console.log(event)
        if (event.target.getAttribute("data-type")) {

        }
    });
}

init();
