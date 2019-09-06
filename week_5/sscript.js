function movies() {
var xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'https://swapi.co/api/films');
  xhr.send()
  xhr.onload = function (){
   if (xhr.status == 200) {
      display_movie(JSON.parse(xhr.response));
      } else {
          console.log(xhr.status);
      }
  }
}

var display_movie = function(movies_details){
            var movies_about = document.getElementsByClassName('movies_about');
            var movies_details = document.getElementsByClassName('staffImg');
            for(var i=0; i<movies_details.length;i++){
                movies_details[i].src = movies_details[i].image;
                movies_about[i].innerHTML = "<strong>"+movies_details[i].name+"</strong><br>House: "+movies_details[i].house;
            }
            loadStudents();
        }
