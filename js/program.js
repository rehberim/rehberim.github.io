backend_ip = "111.222.333.444"
port = 9000;

document.getElementById("choices-text-preset-values").value = decodeURI(getURLParameter('kod'));

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

function search() {

    var code = getURLParameter('kod');

    let url = "http://" + backend_ip + ":" + port + "/kullanici_programi_getir?kod=" + code;

    var client = new HttpClient();
    client.get(url, function(response) {
        // fotoyu buraya koy
        document.getElementById('result').innerHTML = "<pre>" + response + "</pre>";
    });
}

search()