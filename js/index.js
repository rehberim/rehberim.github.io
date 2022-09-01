document.getElementById("click_button").onclick = function () {
    var search_text = document.getElementById('search').value;
    location.href = "program.html?kod=" + search_text;
};