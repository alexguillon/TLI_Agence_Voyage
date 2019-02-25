var client_un = {};
client_un.identifiant = "client1";
client_un.mdp = "password1";
client_un.nom = "Nicolas Jannolfo";

var client_deux = {};
client_deux.identifiant = "client2";
client_deux.mdp = "password2";
client_deux.nom = "John Doe";

var comptes = [client_un];

function connect(){
    var identifiant = document.getElementById("identifiant").value;
    var password = document.getElementById("password").value;

    if(identifiant !== null && password !== null)
    {
        for(var i in comptes)
        {
            if(comptes[i].identifiant == identifiant)
            {
                if(comptes[i].mdp == password)
                {
                    sessionStorage.setItem("identifiant", comptes[i].identifiant);
                    sessionStorage.setItem("nom", comptes[i].nom);
                    window.location.reload(true);
                }
                else
                {
                    alert('L\'identification a échoué');
                }
            }
            else
            {
                alert('L\'identification a échoué');
            }
        }
    }
    else
    {
        alert('L\'identification a échoué');
    }
}