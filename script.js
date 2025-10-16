const prenom = "arthur";
// prenom = "patuel" //c'est la ligne d'erreur
console.log(prenom);
let age = 16;
age = 45;
console.log(age);

const moyenne = 16;

if (moyenne < 13) {
    console.log("Accès interdit aux moins de 13 ans.");
} else if (moyenne < 18){
    console.log("Vous pouvez accéder à la section ado.");
} else {
    console.log("Bienvenue dans l'espace adulte.")
    }

for (let i = 0; i < 11; i++) {
  console.log("7 * " + i + " = " + (7 * i));
}

