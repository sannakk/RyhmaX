function lisaa()
{

//haen ruutujen id:llä kyseisten tietojen valuen
  const nimi = document.getElementById("etunimi").value;
  const snimi = document.getElementById("sukunimi").value;
  const oso = document.getElementById("osoite").value;
  const post = document.getElementById("postinro").value;
  const paikka = document.getElementById("ppaikka").value;
  const nro = document.getElementById("puh").value;
  const sposti = document.getElementById("email").value;
  const tiedot = document.getElementById("tiedot");

//Jos ruutu on täytetty ohjelma asettaa niiden arvot jotka on täytetty
// local Storageen ja sen jälkeen käynnistyy hae() funktio
  if(nimi)
{
    localStorage.setItem("etunimi", nimi);
    hae();
}
if(snimi)
{
    localStorage.setItem("sukunimi", snimi);
    hae();
}
if(oso)
{
    localStorage.setItem("osoite", oso);
    hae();
}
if(post)
{
    localStorage.setItem("postinro", post);
    hae();
}
if(paikka)
{
    localStorage.setItem("ppaikka", paikka);
    hae();
}
if(nro)
{
    localStorage.setItem("puh", nro);
    hae();
}
if(sposti)
{
    localStorage.setItem("email", sposti);
    hae();
}
}
//Funktio hakee localstoragesta sinne tallennetut Tiedot
//ja näyttää ne sille luodussa kentässä hetken, jonka jälkeen
//tiedot menevät piiloon
function hae()
{

    const nimi = localStorage.getItem("etunimi");
    const snimi = localStorage.getItem("sukunimi");
    const oso = localStorage.getItem("osoite");
    const post = localStorage.getItem("postinro");
    const paikka = localStorage.getItem("ppaikka");
    const nro = localStorage.getItem("puh");
    const sposti = localStorage.getItem("email");
     document.getElementById("tiedot").innerHTML = nimi + " " + "<button type='button' id='poista' onclick='poista(this)'>Poista tieto</button>" + "<br>" +
     snimi + " " + "<button type='button' id='poista' onclick='remove2(this)'>Poista tieto</button>" + "<br>" +
     oso + " " + "<button type='button' id='poista' onclick='remove3(this)'>Poista tieto</button>" + "<br>" +
     post + " " + "<button type='button' id='poista' onclick='remove4(this)'>Poista tieto</button>" + "<br>" +
     paikka + " " + "<button type='button' id='poista' onclick='remove5(this)'>Poista tieto</button>" + "<br>" +
     nro + " " + "<button type='button' id='poista' onclick='remove6(this)'>Poista tieto</button>" + "<br>" +
     sposti + " " + "<button type='button' id='poista' onclick='remove7(this)'>Poista tieto</button>"+ "<br>";
     document.getElementById('etunimi').value = "";
     document.getElementById('sukunimi').value = "";
     document.getElementById('osoite').value = "";
     document.getElementById('postinro').value = "";
     document.getElementById('ppaikka').value = "";
     document.getElementById('puh').value = "";
     document.getElementById('email').value = "";
     setTimeout(function(){ tiedot.innerHTML = ""; }, 10000);
}

//Funktio poistaa kyseessä olevan boxin jossa on täytetyt tiedot
function poista(tama)
{
localStorage.removeItem("etunimi");
location.reload();
}
function remove2(tama)
{
localStorage.removeItem("sukunimi");
location.reload();
}
function remove3(tama)
{
localStorage.removeItem("osoite");
location.reload();
}
function remove4(tama)
{
localStorage.removeItem("postinro");
location.reload();
}
function remove5(tama)
{
localStorage.removeItem("ppaikka");
location.reload();
}
function remove6(tama)
{
localStorage.removeItem("puh");
location.reload();
}
function remove7(tama)
{
localStorage.removeItem("email");
location.reload();
}
