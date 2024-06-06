

let url = 'https://data.techforpalestine.org/api/v3/summary.min.json';

fetch(url)
.then(res => res.json())
.then(out =>
  elaborate2(out))
.catch(err => { throw err });



url = 'https://data.techforpalestine.org/api/v2/killed-in-gaza.min.json';
fetch(url)
.then(res => res.json())
.then(out => document.getElementById("tribute").innerHTML = "Sono <span style='color:#E4312B;  text-shadow: 3.2px 3.2px black;'>" + out.length + "</span> i nomi registrati delle persone mancate"
 )
.catch(err => { throw err });



 url = 'https://data.techforpalestine.org/api/v2/killed-in-gaza.min.json';

function show(){

  var l = document.getElementById("loading");
  l.innerHTML = "caricamento dei dati";

fetch(url)
.then(res => res.json())
.then(out =>
  elaborate(out))
.catch(err => { throw err });

  

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function elaborate(x){
    var count = 0;
    
    var cont = document.getElementById("nomi");
    removeAllChildNodes(cont);
    x.forEach(compagnu => {
        var par = document.createElement("p");
        count++;
        if ( compagnu.sex == "m" && compagnu.age < 23){
            var text = document.createTextNode(compagnu.name + " " + compagnu.en_name +"\n era un ragazzo di " + compagnu.age + " anni" );
        }

        if ( compagnu.sex == "f" && compagnu.age < 23){
            var text = document.createTextNode(compagnu.name + " " + compagnu.en_name +"\n era una ragazza di " + compagnu.age + " anni" );
        }

        if ( compagnu.sex == "m" && compagnu.age >= 23){
            var text = document.createTextNode(compagnu.name + " " + compagnu.en_name +"\n era un uomo di " + compagnu.age + " anni" );
        }



        if ( compagnu.sex == "f" && compagnu.age >= 23){
            var text = document.createTextNode(compagnu.name + " " + compagnu.en_name +"\n era una donna di " + compagnu.age + " anni" );
        }

        par.appendChild(text);
        par.style = "color:white;text-align: center;font-size: 38px;margin-left:25%;margin-right:25%;padding-top: 50px;padding-bottom: 50px;white-space: pre-line;  text-shadow: 3.2px 3.2px black;";

        var img = document.createElement("img");
        img.src = "./separatore.png";
        img.style = "display: block;margin: auto;";
        cont.appendChild(img);
        cont.appendChild(par);

    });   
    return;
}

function elaborate2(x){

    document.getElementById("data").innerHTML = "I <a href='https://data.techforpalestine.org/docs/killed-in-gaza/' style='color: #E4312B;  text-shadow: 1px 1px black;'' target='_blank'>DATI</a> IN QUESTO SITO SONO AGGIORNATI AL " + x.gaza.last_update;
    document.getElementById("count").innerHTML = " <span style='color:#E4312B;  text-shadow: 3.2px 3.2px black;'>" + (parseInt(x.gaza.killed.total) + parseInt(x.west_bank.killed.total))  + "</span> i morti";
    document.getElementById("count2").innerHTML = "<span style='color:#E4312B;  text-shadow: 3.2px 3.2px black;'>" + (parseInt(x.gaza.injured.total) + parseInt(x.west_bank.injured.total))  + "</span> i feriti";
    document.getElementById("bimbi").innerHTML = "<span style='color:#E4312B;  text-shadow: 3.2px 3.2px black;'>" + (parseInt(x.gaza.killed.children) + parseInt(x.west_bank.killed.children)) + "</span> SONO BAMBINI";
    document.getElementById("donne").innerHTML = "<span style='color:#E4312B;  text-shadow: 3.2px 3.2px black;'>" + x.gaza.killed.women+ "</span> SONO DONNE";
    
    
    return;
}
