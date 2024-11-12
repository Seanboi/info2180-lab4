window.onload = function(){
var searchBtn = document.getElementById("searchButton")
var searchin = document.getElementById("searchin")
var result = document.getElementById("result")

searchBtn.addEventListener('click', function(){
var query = searchin.value.trim();
const httpRequest = new XMLHttpRequest();
var url = "superheroes.php";

if (query){
    url += '?query=' + query;
}

httpRequest.onreadystatechange = function(){
    
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          result.innerHTML = httpRequest.responseText
        } else {
          result.innerHTML = 'There was a problem with the request.';
        }
      }
    }
    httpRequest.open('GET', url);
    httpRequest.send();
});

}
