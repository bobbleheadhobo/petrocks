window.onload = function(){

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
            if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length, cookie.length);
        }
        return null;
    }

    function countUniqueVisitors(){
        var visited = getCookie('visited');
        if(!visited){
        setCookie('visited', 'true', 365);
        var count = parseInt(localStorage.getItem('uniqueVisitorCount') || '0') + 1;
        }
        return count;
    }
    let num = countUniqueVisitors();
    var outputElement = document.getElementById('output');
    outputElement.innerHTML = 20;
}