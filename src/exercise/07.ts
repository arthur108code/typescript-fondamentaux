// Les opérateurs & Cast de types
// http://localhost:3000/alone/exercise/07.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'

init()

// ✔️ Début de l'exercice

// 🐶 Modifile le type `car` avec toutes les propriétés demandée par 👨‍✈️ Hugo
type car = {
    name: string
    maxSpeed?: number
    mass?: number
}
// 🐶 Complete la fonction `kineticEnergy` avec toutes les propriétés demandée par 👨‍✈️ Hugo
// Fonction prenant en entrée 2 parametre
// - speed un nombre obligatoire
// - mass un nombre optionel
function kineticEnergy(speed: number, mass?: number) {

    return mass ? {result: (0.5 * mass * Math.pow(speed as number, 2))} : null
}

let tesla: car
tesla = {name: 'tesla', mass: 1850, maxSpeed: 78}

let teslaEnergie

teslaEnergie = kineticEnergy(tesla.maxSpeed!, tesla.mass)!

    displayText(`energie cinetique de ${tesla.name} est ${teslaEnergie.result} joules`)



// 🐶 le type unknown permet de dire qu'on ne sait pas ce que contiendra la variable
// nous les utiliseront ici pour pouvoir tester cast de type
let unknowCarSpeed: unknown = 150
let unknowCarMass: unknown = 2000

// ⛏️ décommente la ligne ci-dessous et appelle correctement la fonction 'kineticEnergy' avec 'unknowCarSpeed' et 'unknowCarMass'
let unknowCarEnergie
unknowCarEnergie = kineticEnergy(<number>unknowCarSpeed, <number>unknowCarMass)!

    displayText(
        `energie cinetique est ${unknowCarEnergie.result} joules`
    )


/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
/*eslint
  @typescript-eslint/consistent-type-assertions : 'off'
*/
