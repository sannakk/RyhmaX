// Nappia kun klikkaa
  var nappi = document.getElementById("enter");
  nappi.addEventListener("click",lisaa1);

//Enteriä kun painaa
  var teksti = document.getElementById("tekstiKentta");
  teksti.addEventListener("keypress", lisaa2);

var ul = document.querySelector("ul");

function syotonPituus()
{
	return teksti.value.length;
}

function teeLi() {
// Tekee li elementin
var li = document.createElement("li");
  // Katsotaan onko syötetty jotain
  if(teksti.value != '')
  {
    //Lisää tekstin joka on laatikossa
    li.appendChild(document.createTextNode(teksti.value));
  	ul.appendChild(li);
  	teksti.value = "";

    var nappi2 = document.createElement("button");
    var x = document.createTextNode("x");
      nappi2.classname = "sulje";
      nappi2.appendChild(x);
      li.appendChild(nappi2);
      

      function poista()
        {
      		li.classList.add("delete");
      	}
  }
}



  function lisaa1() {
    //Jos on syötetty jotain suoritetaan TeeLi()
  	if (syotonPituus() > 0) {
  		teeLi();
  	}
  }

  function lisaa2(event) {
    //Sama mutta enterin painalluksen jälkeen
  	if (syotonPituus() > 0 && event.which === 13) {
  		teeLi();
  	}
  }
