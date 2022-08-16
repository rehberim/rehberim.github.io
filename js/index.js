document.getElementById("search_button").onclick = function () {
    var search_text = document.getElementById('choices-text-preset-values').value;
    location.href = "program.html?kod=" + search_text;
};