window.onload = function(){
var searchBtn = document.getElementById("searchButton")

searchBtn.addEventListener('click', function(){

const httpRequest = new XMLHttpRequest();
var url = "superheroes.php";

httpRequest.onreadystatechange = function(){
    


    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          //var response = httpRequest.responseText;
          //alert(response)
          alert(httpRequest.responseText)
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
    httpRequest.open('GET', url);
    httpRequest.send();
});

}
