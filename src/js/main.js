// exo1
// - A l'aide de deux promptes récupérez 2 nombres et stockez les dans des variables
// - Vérifiez si les valeures sont égales et renvoyez la réponse dans une alerte
// - L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci : Le nombre x et   le nombre y sont-ils égaux ? :

// let nbr1 = prompt("nombre1 ?");
// let nbr2 = prompt("nombre2 ?");

// if (nbr1 == nbr2) {
//     alert(`Le nombre ${nbr1} et le nombre ${nbr2} sont-ils égaux ? : ${nbr1 == nbr2}`);
// } else {
//     alert(`Le nombre ${nbr1} et le nombre ${nbr2} sont-ils égaux ? : ${nbr1 == nbr2}`);
// }




// exo2
// A l'aide de deux promptes récupérez 2 nombres et stockez les dans des variables
// Vérifiez si la première valeures est plus petite que la seconde renvoyez la réponse dans une alerte
// L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci : Le nombre x et-il plus petit que le nombre y ? : réponse

// let nbr3 = prompt("nombre1 ?");
// let nbr4 = prompt("nombre2 ?");

// if (nbr3 < nbr4) {
//     alert(`le nombre ${nbr3} et-il plus petit que le nombre ${nbr4} ? : ${nbr3 < nbr4}`);
// } else {
//     alert(`le nombre ${nbr3} et-il plus petit que le nombre ${nbr4} ? : ${nbr3 < nbr4}`);
// }





// exo3
// A l'aide de trois promptes récupérez 3 nombres et stockez les dans des variables
// Additionner les deux premières valeures et comparer les avec la troiseme à l'aide de l'opérateur de comparaison ">"
// L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci : La somme du nombre x + le nombre y est-elle plus grande que le nombre z ? : reponse booléenne

// let nbr5 = parseInt(prompt("nombre1 ?"));
// let nbr6 = parseInt(prompt("nombre2 ?"));
// let nbr7 = parseInt(prompt("nombre3 ?"));
// let somme = nbr5 + nbr6;

// if (somme > nbr7) {
//     alert(`La somme du nombre ${nbr5} + le nombre ${nbr6} est-elle plus grande que le nombre ${nbr7} ? : ${somme > nbr7}`)
// } else {
//     alert(`La somme du nombre ${nbr5} + le nombre ${nbr6} est-elle plus grande que le nombre ${nbr7} ? : ${somme > nbr7}`)
// }





// exo4
// Créer un programme qui récupère la phrase de l'utilisateur,l'utilisateur doit également pouvoir estimer le nombre de caractères compris dans la phrase, ensuit retourne a l'utilisateur si oui ou non son estimation était correct si ce n'était pas correct annonce lui que sa réponse est fausse et à combien d'unitéx il était éloignée de la vrai réponse, exemple si la chaine de caractères fait 100 caractères et que l'utilisateur répond 85 alors renvoyez lui "Incorrect tu étais à 15 unités de la bonne réponse !"

// let phrase = prompt("votre phrase");
// let reponse = prompt("entré votre estimation de la phrase");
// let reponse2 = Math.abs(reponse - phrase.length);
// if (reponse == phrase.length) {
//     alert(`reponse exact`)
// } else {
//     alert(`C'est faux tu etait a ${reponse2} de la reponse correct`)
// }
// // correction 
// let quest = prompt("Entrez une phrase");
// let questLength = quest.length;
// let estim = parseInt(prompt("Estimez la longueur de la phrase"));
// let diff = Math.abs(questLength-estim);

// if(questLength == estim){
//     alert("Bien joué BG !");
// }else{
//     alert(`La réponse est fausse tu es à ${diff} unités de la bonne réponse`);
// }




// exo5
// Créer un programme ou tu vérifies que l'utilisateur à bien rentrer son prénom dans le prompt
// Si l'utilisateur ne rentre rien alors renvoyez un prompt avec comme texte "Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?
// Sinon, Bonjour, prénom
// A savoir ! Il est normal que la question n'est reposé qu'une seule fois

// let quest = prompt(`Inscrit ton prenom`);
// if (quest.length != 0) {
//     alert(`Bonjour ${quest}`);   
// } else {
//     quest = prompt(`Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?`);
//     if (quest.length != 0) {
//         alert(`ah enfin, bonjour ${quest}`);
//     } else {
//         alert(`barre toi`);
//     }
// }
// correction 
// let prenom = prompt("Entrez votre prénom");

// if(prenom.length == 0){
//     prenom = prompt("Attention vous devez remplir le champ ci-dessous, quel est votre prénom ?");
//     alert("Bonjour "+ prenom);
// }else{
//     alert("Bonjour "+ prenom);
// }





// exo6 
// Trouver une méthode qui permet de répondre par l'affirmative et la negative
// Lancer cette méthode en proposant à l'utilisateur de s'abonner
// Si l'utilisateur confirme alors renvoyez lui un prompt pour lui demander quelle formule elle veut prendre Luxe ou Normal, selon ce qu'elle répond renvoyer une alert pour la féliciter de s'etre abonné
// Si c'est Luxe renvoyez lui : Félicitation vous avez choisis la formule Luxe !
// Si c'est normal renvoyez lui : Merci pour votre abonnement.
// Si l'utilisateur ne répond rien demandez lui si elle est certaine avec la meme methode que vous avez trouvé par l'affirmative ou la negative
// Si Elle répond par l'affirmation alors dite lui que c'est dommage et souhaiter lui une bonne journée
// Si elle répond par la négative reproposez lui de choisir entre les formules Luxe ou Normal

// let rep = window.confirm(`Abonne toi en cliquant ici`);
// if (rep == true) {
//     toLowercase; 
//     rep = prompt(`quelle formule elle veut prendre Luxe ou Normal ?`);
//     if (rep == "luxe") {
//         alert(`Félicitation vous avez choisis la formule Luxe !`)
//     } else if (rep == "normal") {
//         alert(`Merci pour votre abonnement.`)
//     } else if (rep == false){
//         rep = window.confirm(`est tu certain de vouloir t'abonné ?`);
//         if (rep == true) {
//             rep = prompt(`quelle formule elle veut prendre Luxe ou Normal ?`);
//         } else {
//             alert(`dommage, bonne journée`)
//         }
//     }
// } else {
//     alert(`BYE BYE`);
// }
// correction 
// let abo = confirm("Voulez-vous vous abonner ?");
// let formula;
// let confirmation;

// if(abo == true){
//     formula = prompt("Bonne initiative, voulez-vous la formule Luxe ou Normale ?").toLowerCase();
//     if(formula == "normale" ){
//         alert("Merci pour votre abonnement Normal.");
//     }else if(formula == "luxe"){
//         alert("Merci pour votre abonnement Luxe et votre moula.")
//     }else{
//         confirmation = confirm("Êtes-vous sûr ?");
//         if(confirmation == true){
//             alert("Dommage, passez une bonne journée !");
//         }else{
//             alert("Actualisez la page web svp");
//         }
//     }
// }else{
//     confirmation = confirm("Êtes-vous sûr ?");
//         if(confirmation == true){
//             alert("Dommage, passez une bonne journée !");
//         }else{
//             alert("Actualisez la page web svp");
//         }
// }





// exo7 
// Dans cet exercice il faudra préparer un mini quizz
// Créer 2 variables contenant chacun un prompt posant une questions
// Créer 2 variables contenant la réponses a chacune de ces questions
// Si l'utilisateur ne répond a aucune réponse de manière correct alors affichez une alert pour lui dire qu'il à échoué
// Si l'utilisateur répond correctement à une des deux questions alors dit lui qu'il y est presque et renvoyez lui comme information a quel question il a eu tord
// Si l'utilisateur répond correctement à toutes les questions, félicitez le

// let rep1 = prompt("Quel est la capital de la Belgique ?");
// let rep2 = prompt("Quel est la capital de la France ?");
// v1 = "bruxelles";
// v2 = "paris";

// if (rep1 != v1 && rep2 != v2) {
//     alert("Vous n'avez pas répondu correctement au deux question");
// } else if (rep1 == v1 && rep2 != v2) {
//     alert("tu y était presque, tu as eu tord pour la France, réessaye !")
// } else if (rep1 != v1 && rep2 == v2) {
//     alert("tu y était presque, tu as eu tord pour la Belgique, réessaye !")
// }
// else {
//     alert("BIEN JOUER");
// }
// correction 
// if(quest1 == rep1 && quest2 == rep2){
//     alert("Félicitations tout est correct");
// }else if(quest1 == rep1 || quest2 == rep2){
//     //trompé à la première question :
//     if(quest1 != rep1){
//         alert("Tu y es presque, la question 1 est incorrecte !");
//     //trompé à la deuxième question :
//     }else{
//         alert("Tu y es presque, la question 2 est incorrecte !");
//     }
// }else{
//     alert("Vous avez échoué, rien n'est correct !");
// }






// exo8 
// Lancez un prompt pour qu'un utilisateur entre son age (pour une réservation au cinéma). Suivant l'age entré, vous devez afficher une alerte (une seule) avec un des messages suivant :

// Si la personne est majeur (18 ou plus) => affiche "vous êtes majeur, vous pouvez réserver"
// Si la personne est mineur (moins que 18) => "vous êtes mineur, l’accès est réservé aux grands"
// Ajoutons quelques conditions supplémentaires :

// Si la personne n'est pas née (moins de 0) => "vous n’êtes même pas nés, n’essayez pas de tricher"
// Si la personne est trop vieille (plus de 100) => "vous êtes encore vivant ? Évitez de voir ce film pour le rester."
// Si la personne passe tout juste (pile 18) => "pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant."

// let age = parseInt(prompt("Quel est votre age ?"));

// if (age == 18) {
//     alert("pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.");
// } else if (age < 18 && age > 0 ) {
//     alert("vous êtes mineur, l’accès est réservé aux grands");
// } else if (age == 0) {
//     alert("vous n’êtes même pas nés, n’essayez pas de tricher");
// } else if (age > 100) {
//     alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester.");
// } else if (age >= 18 && age <= 100) {
//     alert("vous êtes majeur, vous pouvez réserver");
// } else {
//     alert("aucune reponse");
// }
// correction
// let age = parseInt(prompt("Quel est votre âge ?"));

// if(age <= 0){
//     alert("Vous n'êtes même pas né");
// }else if (age < 18 ){
//     alert("Vous êtes mineur, l'accès est réservé aux adultes");
// }else if(age == 18){
//     alert("Vous pouvez y aller mais c'est tout juste !");
// }else if(age > 100){
//     alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester.");
// }else{
//     alert("Vous êtes majeur, vous pouvez réserver");
// }







// consigne 4
// exo1

// tabPrenoms = ["agim","niki","kenny","francois","adem","atila","bella","dita","skend"];
// tabLength = tabPrenoms.length;
// console.log(`bonjour ${tabPrenoms[0]}`);
// console.log(`bonjour ${tabPrenoms[1]}`);
// console.log(`bonjour ${tabPrenoms[2]}`);
// console.log(`bonjour ${tabPrenoms[3]}`);
// console.log(`bonjour ${tabPrenoms[4]}`);
// console.log(`bonjour ${tabPrenoms[5]}`);
// console.log(`bonjour ${tabPrenoms[6]}`);
// console.log(`bonjour ${tabPrenoms[7]}`);
// console.log(`bonjour ${tabPrenoms[8]}`);

// exo2 

// let chiffre = Math.round(Math.random()*10);
// rep = prompt("entre un chiffre entre 1 et 10");
// if (rep != chiffre) {
//     rep = prompt("faux! entre un chiffre entre 1 et 10");
// } else {
//     alert("GG")
// }