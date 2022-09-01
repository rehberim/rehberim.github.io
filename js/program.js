backend_ip = "192.168.1.49"
port = 9000;


function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

function get_program_url() {
    var code = getURLParameter('kod');
    let url = "http://" + backend_ip + ":" + port + "/kullanici_programi_getir?kod=" + code;
    var img = document.createElement("img");
    img.src = url;
    var src = document.getElementById("program");
    src.appendChild(img);
}

get_program_url();
