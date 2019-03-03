var client_un = {};
client_un.identifiant = "aaaa";
client_un.mdp = "aaaa";
client_un.nom = "Lucas Clementei";

var client_deux = {};
client_deux.identifiant = "bbbb";
client_deux.mdp = "bbbb";
client_deux.nom = "Alexandre Guillon";

var client_trois = {};
client_trois.identifiant = "cccc";
client_trois.mdp = "cccc";
client_trois.nom = "Louis 14";

var client_quatre = {};
client_quatre.identifiant = "dddd";
client_quatre.mdp = "dddd";
client_quatre.nom = "Emmanuel Macron";
var tab_comptes = [client_un, client_deux, client_trois, client_quatre];

function connect(){
    var identifiant = document.getElementById("identifiant").value;
    var password = document.getElementById("password").value;
    var sucess=false;
    if(identifiant !== null && password !== null)
    {
        for(var i in tab_comptes)
        {
            if(tab_comptes[i].identifiant == identifiant)
            {
                if(tab_comptes[i].mdp == password)
                {
                    sessionStorage.setItem("identifiant", tab_comptes[i].identifiant);
                    sessionStorage.setItem("nom", tab_comptes[i].nom);
                    window.location.reload(true);
                    sucess=true;
                }
            }
        }
    }
    if(sucess)
        alert('L\'identification est réussie');
    else
        alert('L\'identification a échoué');

}