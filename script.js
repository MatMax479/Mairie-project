// BOUTONS PRINCIPAUX

const boutonProbleme = document.getElementById("probleme-informatique");
const boutonDemarche = document.getElementById("demarche");
const boutonApprendre = document.getElementById("apprendre");
const boutonSignaler = document.getElementById("signaler");


// ZONES PRINCIPALES

const zoneInformatique = document.getElementById("zone-informatique");
const zoneDemarche = document.getElementById("zone-demarche");
const zoneApprendre = document.getElementById("zone-apprendre");
const zoneSignaler = document.getElementById("zone-signaler");


// ZONE DE REPONSE

const zoneReponse = document.getElementById("zone-reponse");
const titreReponse = document.getElementById("titre-reponse");
const texteReponse = document.getElementById("texte-reponse");
const fermerReponse = document.getElementById("fermer-reponse");


// FERMER LES GRANDES ZONES

function fermerZonesPrincipales() {

    zoneInformatique.style.display = "none";
    zoneDemarche.style.display = "none";
    zoneApprendre.style.display = "none";
    zoneSignaler.style.display = "none";
    zoneReponse.style.display = "none";

}


// OUVRIR OU FERMER UNE GRANDE ZONE

function afficherOuFermer(zone) {

    const estVisible = zone.style.display === "block";

    fermerZonesPrincipales();

    if (!estVisible) {
        zone.style.display = "block";
    }

}


// CLICS SUR LES 4 BOUTONS PRINCIPAUX

boutonProbleme.addEventListener("click", function() {
    afficherOuFermer(zoneInformatique);
});


boutonDemarche.addEventListener("click", function() {
    afficherOuFermer(zoneDemarche);
});


boutonApprendre.addEventListener("click", function() {
    afficherOuFermer(zoneApprendre);
});


boutonSignaler.addEventListener("click", function() {
    afficherOuFermer(zoneSignaler);
});


// FONCTION COMMUNE POUR AFFICHER UNE REPONSE

function afficherReponse(titre, contenu) {

    titreReponse.textContent = titre;
    texteReponse.innerHTML = contenu;

    messageResolu.style.display = "none";

    zoneReponse.style.display = "block";

    zoneReponse.scrollIntoView({
        behavior: "smooth"
    });

}


// ------------------------------------------------
// PROBLEMES INFORMATIQUES
// ------------------------------------------------

const boutonsConseils = document.querySelectorAll("[data-conseil]");


boutonsConseils.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        const type = bouton.dataset.conseil;

        if (type === "wifi") {

            afficherReponse(
                "Internet / Wi-Fi",
                `
                <p><strong>Essayez d'abord ces 3 choses :</strong></p>

                <p>1. Verifiez que le Wi-Fi est active sur votre appareil.</p>

                <p>2. Redemarrez votre ordinateur, telephone ou tablette.</p>

                <p>3. Si le probleme continue, redemarrez votre box Internet.</p>
                `
            );

        }


        if (type === "ordinateur") {

            afficherReponse(
                "Probleme avec votre ordinateur",
                `
                <p>1. Verifiez que l'ordinateur est correctement branche.</p>

                <p>2. Verifiez les cables.</p>

                <p>3. Eteignez puis redemarrez l'ordinateur.</p>
                `
            );

        }


        if (type === "smartphone") {

            afficherReponse(
                "Smartphone ou tablette",
                `
                <p>1. Fermez l'application qui pose probleme.</p>

                <p>2. Verifiez votre connexion Internet.</p>

                <p>3. Redemarrez votre appareil.</p>
                `
            );

        }


        if (type === "email") {

            afficherReponse(
                "Probleme d'e-mail",
                `
                <p>1. Verifiez votre connexion Internet.</p>

                <p>2. Verifiez l'adresse e-mail utilisee.</p>

                <p>3. Regardez si un message d'erreur apparait.</p>
                `
            );

        }


        if (type === "motdepasse") {

            afficherReponse(
                "Mot de passe",
                `
                <p>Utilisez le bouton "Mot de passe oublie" du service concerne.</p>

                <p>Ne communiquez jamais votre mot de passe a une autre personne.</p>

                <p>Choisissez un mot de passe different de vos anciens mots de passe.</p>
                `
            );

        }


        if (type === "suspect") {

            afficherReponse(
                "Message ou site suspect",
                `
                <p><strong>Ne cliquez pas sur le lien.</strong></p>

                <p>Ne communiquez aucune information bancaire.</p>

                <p>Ne communiquez aucun mot de passe.</p>

                <p>En cas de doute, demandez de l'aide avant de continuer.</p>
                `
            );

        }

    });

});


// ------------------------------------------------
// DEMARCHES
// ------------------------------------------------

const boutonsDemarches = document.querySelectorAll("[data-demarche]");


boutonsDemarches.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        const type = bouton.dataset.demarche;


        if (type === "etat-civil") {

            afficherReponse(
                "Etat civil",
                `
                <p>Cette rubrique concerne par exemple :</p>

                <p>Carte d'identite, passeport, naissance, mariage ou deces.</p>

                <p>Nous pourrons ici ajouter les liens officiels correspondant a chaque demarche.</p>
                `
            );

        }


        if (type === "famille") {

            afficherReponse(
                "Famille et ecole",
                `
                <p>Cette rubrique concerne les demarches liees aux enfants et a la vie scolaire.</p>

                <p>Par exemple : inscription scolaire, restauration ou services pour les familles.</p>
                `
            );

        }


        if (type === "urbanisme") {

            afficherReponse(
                "Logement et urbanisme",
                `
                <p>Cette rubrique concerne les questions de logement, travaux et urbanisme.</p>

                <p>Les liens officiels pourront etre ajoutes ici apres verification.</p>
                `
            );

        }


        if (type === "solidarite") {

            afficherReponse(
                "Aides et solidarite",
                `
                <p>Vous recherchez une aide ou un accompagnement ?</p>

                <p>Cette rubrique pourra orienter vers le service competent selon votre situation.</p>
                `
            );

        }


        if (type === "autre") {

            afficherReponse(
                "Vous ne savez pas quelle demarche choisir ?",
                `
                <p>Ce n'est pas grave.</p>

                <p>Vous pouvez demander une aide humaine pour etre oriente vers le bon service.</p>
                `
            );

        }

    });

});


// ------------------------------------------------
// APPRENDRE
// ------------------------------------------------

const boutonsApprendre = document.querySelectorAll("[data-apprendre]");


boutonsApprendre.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        const type = bouton.dataset.apprendre;


        if (type === "internet") {

            afficherReponse(
                "Apprendre a utiliser Internet",
                `
                <p>Vous pourrez apprendre a :</p>

                <p>Faire une recherche.</p>

                <p>Ouvrir un site Internet.</p>

                <p>Reconnaitre un site fiable.</p>
                `
            );

        }


        if (type === "ordinateur") {

            afficherReponse(
                "Apprendre a utiliser un ordinateur",
                `
                <p>Vous pourrez apprendre a :</p>

                <p>Utiliser la souris et le clavier.</p>

                <p>Ouvrir et fermer un programme.</p>

                <p>Creer et retrouver un document.</p>
                `
            );

        }


        if (type === "smartphone") {

            afficherReponse(
                "Apprendre a utiliser un smartphone",
                `
                <p>Vous pourrez apprendre a :</p>

                <p>Installer et utiliser une application.</p>

                <p>Prendre et envoyer une photo.</p>

                <p>Utiliser Internet depuis votre telephone.</p>
                `
            );

        }


        if (type === "email") {

            afficherReponse(
                "Apprendre a utiliser l'e-mail",
                `
                <p>Vous pourrez apprendre a :</p>

                <p>Envoyer et recevoir un message.</p>

                <p>Ajouter une piece jointe.</p>

                <p>Reconnaitre un e-mail suspect.</p>
                `
            );

        }


        if (type === "securite") {

            afficherReponse(
                "Se proteger sur Internet",
                `
                <p>Ne communiquez jamais vos mots de passe.</p>

                <p>Ne transmettez pas vos informations bancaires apres avoir clique sur un lien recu par message.</p>

                <p>En cas de doute, demandez de l'aide avant de cliquer.</p>
                `
            );

        }

    });

});


// ------------------------------------------------
// SIGNALER UN PROBLEME
// ------------------------------------------------

const boutonsSignaler = document.querySelectorAll("[data-signaler]");
const formulaireSignalement = document.getElementById("formulaire-signalement");
const typeSignalement = document.getElementById("type-signalement");
const formSignalement = document.getElementById("form-signalement");
const confirmationSignalement = document.getElementById("confirmation-signalement");


boutonsSignaler.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        const type = bouton.dataset.signaler;

        let titre = "";


        if (type === "eclairage") {
            titre = "Probleme d'eclairage";
        }


        if (type === "voirie") {
            titre = "Probleme de route ou de trottoir";
        }


        if (type === "proprete") {
            titre = "Probleme de proprete";
        }


        if (type === "espace-vert") {
            titre = "Probleme dans un espace vert";
        }


        if (type === "autre") {
            titre = "Autre probleme";
        }


        typeSignalement.textContent = titre;

        confirmationSignalement.style.display = "none";

        formulaireSignalement.style.display = "block";

        formulaireSignalement.scrollIntoView({
            behavior: "smooth"
        });

    });

});

formSignalement.addEventListener("submit", function(event) {

    event.preventDefault();

    confirmationSignalement.style.display = "block";

    confirmationSignalement.scrollIntoView({
        behavior: "smooth"
    });

});

// ------------------------------------------------
// FERMER UNE REPONSE
// ------------------------------------------------

fermerReponse.addEventListener("click", function() {

    zoneReponse.style.display = "none";

});


// ------------------------------------------------
// AIDE A L'ORIENTATION
// ------------------------------------------------

const boutonOrientation = document.getElementById("orientation");
const zoneOrientation = document.getElementById("zone-orientation");
const orientationNumerique = document.getElementById("orientation-numerique");
const orientationDemarche = document.getElementById("orientation-demarche");
const orientationVille = document.getElementById("orientation-ville");
const orientationApprendre = document.getElementById("orientation-apprendre");
const orientationHumain = document.getElementById("orientation-humain");

orientationNumerique.addEventListener("click", function() {

    fermerZonesPrincipales();

    zoneInformatique.style.display = "block";
    zoneOrientation.style.display = "none";

    zoneInformatique.scrollIntoView({
        behavior: "smooth"
    });

});


orientationDemarche.addEventListener("click", function() {

    fermerZonesPrincipales();

    zoneDemarche.style.display = "block";
    zoneOrientation.style.display = "none";

    zoneDemarche.scrollIntoView({
        behavior: "smooth"
    });

});


orientationVille.addEventListener("click", function() {

    fermerZonesPrincipales();

    zoneSignaler.style.display = "block";
    zoneOrientation.style.display = "none";

    zoneSignaler.scrollIntoView({
        behavior: "smooth"
    });

});


orientationApprendre.addEventListener("click", function() {

    fermerZonesPrincipales();

    zoneApprendre.style.display = "block";
    zoneOrientation.style.display = "none";

    zoneApprendre.scrollIntoView({
        behavior: "smooth"
    });

});


orientationHumain.addEventListener("click", function() {

    zoneOrientation.style.display = "none";
    zoneAideHumaine.style.display = "block";

    zoneAideHumaine.scrollIntoView({
        behavior: "smooth"
    });

});


boutonOrientation.addEventListener("click", function() {

    if (zoneOrientation.style.display === "block") {

        zoneOrientation.style.display = "none";

    } else {

        zoneOrientation.style.display = "block";

    }

});


// ------------------------------------------------
// AIDE HUMAINE
// ------------------------------------------------

const boutonAideHumaine = document.getElementById("aide-humaine");
const zoneAideHumaine = document.getElementById("zone-aide-humaine");


boutonAideHumaine.addEventListener("click", function() {

    if (zoneAideHumaine.style.display === "block") {

        zoneAideHumaine.style.display = "none";

    } else {

        zoneAideHumaine.style.display = "block";

    }

});

const boutonAccueil = document.getElementById("retour-accueil");

boutonAccueil.addEventListener("click", function() {

    fermerZonesPrincipales();

    zoneOrientation.style.display = "none";
    zoneAideHumaine.style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const boutonResolu = document.getElementById("probleme-resolu");
const boutonBesoinAide = document.getElementById("besoin-aide");
const messageResolu = document.getElementById("message-resolu");


boutonResolu.addEventListener("click", function() {

    messageResolu.style.display = "block";

});


boutonBesoinAide.addEventListener("click", function() {

    zoneAideHumaine.style.display = "block";

    zoneAideHumaine.scrollIntoView({
        behavior: "smooth"
    });

});