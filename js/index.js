backend_ip = "37.148.212.229"
port = 9000;

document.getElementById("click_button").onclick = function () {
    var code = document.getElementById('search').value;
    let url = "http://" + backend_ip + ":" + port + "/kullanici_programi_getir?kod=" + code;
    window.location.replace(url);
};
