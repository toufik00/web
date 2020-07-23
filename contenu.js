const send = (event) => {
    event.preventDefault();

    var monFormulaire = new Object();
    monFormulaire.nom = document.getElementById("name").value;
    monFormulaire.prenom = document.getElementById("prenom").value;
    monFormulaire.date_de_naissance = document.getElementById("birth").value;
    monFormulaire.email = document.getElementById("mail").value;
    monFormulaire.login = document.getElementById("login").value;
    monFormulaire.mot_de_passe = document.getElementById("Mot_de_passe")
    

    console.log(monFormulaire);
}

    document.getElementById("MonBouton").addEventListener("click", send);

