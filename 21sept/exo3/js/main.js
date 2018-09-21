var apiKey = "eb09dd46f99b48e18ba4b62d99845410";
var baseUrl = "https://newsapi.org/v2/";
var select = document.getElementsByTagName("select")[0];
var getSources = function (url) {
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then(function (response) { return response.json(); })
            .then(function (jsonData) { return resolve(jsonData); })["catch"](function (error) { reject(error); });
    });
};
var url = baseUrl + "sources?apikey=" + apiKey;
getSources(url)
    .then(function (res) {
    for (var _i = 0, _a = res.sources; _i < _a.length; _i++) {
        var item = _a[_i];
        var option = document.createElement("option");
        option.textContent = item.name;
        option.value = item.id;
        select.appendChild(option);
    }
})["catch"](function (error) { return console.error(error); });
select.addEventListener("change", function (e) {
    var url = baseUrl + "everything?apikey=" + apiKey + "&sources=" + select.value;
    getSources(url)
        .then(function (res) {
        var main = document.getElementsByTagName("main")[0];
        for (var _i = 0, _a = res.articles; _i < _a.length; _i++) {
            var item = _a[_i];
            var div = document.createElement("div");
            var h2 = document.createElement("h2");
            h2.textContent = item.title;
            div.appendChild(h2);
            var p = document.createElement("p");
            p.textContent = item.content;
            div.appendChild(p);
            main.appendChild(div);
        }
    })["catch"](function (error) { return console.error(error); });
});
