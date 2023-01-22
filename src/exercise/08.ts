// Les fonctions
// http://localhost:3000/alone/exercise/08.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'

init()

// ✔️ Début de l'exercice
// 🐶 Remplace le type `any` de `doSomeThing` qui est trop généraliste
//  pour ques les fonctions `doSomeThing` ci-après fonctionnement
let doSomeThing: Function

// ❌ NE PAS MODIFIER
doSomeThing = () => {
    displayText(`Hello developpeur`)
}
doSomeThing()

doSomeThing = (name: string) => {
    displayText(`Hello ${name}`)
}
doSomeThing('John')
// ❌ END

// 🐶 Implemente et spécifie les paramètres et types de la fonction `sum`
// n'oublie pas de spécifier le type de retour
// let sum : (a: number, b: number) => number
function sum(a: number, b: number): number {
    return (a + b)
}

displayText(`La somme de 2 et 3 donne ${sum(2, 3)}`)

// 🚀 N'oublie pas les bonus

type CalculExpFunction = {
    description : string
    (a: number) : number }
function calculExp(cb: CalculExpFunction, base: number): number {
    return cb(base)
}

function carre(a: number): number {
    return (a * a)
}
carre.description = 'Fonction au carré'

function cube(a: number): number {
    return (a * a * a)
}
cube.description = 'Fonction au cube'

calculExp(carre, 5) // 25

displayText(`${carre.description} 5 au carré donne ${calculExp(carre, 5)}`)
displayText(`5 au cube donne ${calculExp(cube, 5)}`)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
