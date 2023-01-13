/* eslint-disable @typescript-eslint/no-unused-vars */
// Les Types de bases
// http://localhost:3000/alone/exercise/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// 🐶 Créer une fonction `sayHello` qui prend un argument `name` de type `string`
// cette fonction retournera un string "Hello Mike" si l'argument est Mike
// 🤖 affiche le resultat de cette fonction dans le navigateur grace à

function sayHello(name : string) {
   const msg : string = "Hello ";
  return msg + name
}
displayText(`${sayHello('Mike')}`)
// ⛏️ Décommente pour afficher le résultat de la fonction à l'écran
// displayText(`${sayHello('Mike')}`)

// 🐶 Créer une fonction `sum` qui retourne la somme de 2 nombres passés en argument
// Affiche le resultat à l'écran avec `displayText`
function sum(num1 : number, num2 : number) {
  const somm = num1+num2
  const somme = "La somme de "+num1 +" et "+num2 +" vaut "+ somm
  return somme
}
displayText(`${sum(2,3)}`)

// 🐶 Créer une fonction `printGender` qui retourne 'Monsieur' ou 'Madame' en fonction d'un argument `isMale`
function printGender(isMale  : boolean) {
    return isMale ? 'Monsieur' : 'Madame';
}
displayText(`Bonjour ${printGender(true)}`)
displayText(`Bonjour ${printGender(false)}`)

