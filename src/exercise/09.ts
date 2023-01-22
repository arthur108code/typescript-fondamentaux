// Les fonctions
// http://localhost:3000/alone/exercise/08.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'

init()

// ✔️ Début de l'exercice

// 🐶 Regarde le code existant et sous le Class 'Cat' créé la classe 'Dog'
interface IName {
    name: string
    printName: () => string
}

interface Runnable {
    run: () => void
}

interface Drinkable {
    drink: () => void
}

interface Swimable {
    swim: () => void
}
// type Mammal = Drinkable & Runnable

interface Mammal extends Drinkable, Runnable {
    mammal: () => void
}

class Animal implements IName {
    // name: string | undefined
    nbLeg: number
    underwater: boolean

    constructor(name: string, nbLeg: number, underwater: boolean) {
        this.name = name
        this.nbLeg = nbLeg
        this.underwater = underwater
    }

    name: string

    printName() {
        console.log(`Mon nom est ${this.name}`)
        return this.name
    }
}

class Cat extends Animal implements Mammal {
    constructor(name: string) {
        super(name, 4, false)
    }

    run() {
        console.log(`Je cours`)
    }

    drink() {
        console.log(`Je bois`)
    }

    mammal() {
        console.log("j'ai des mammelles !");
    }
}

class Dog extends Animal implements Mammal {
    constructor(name: string) {
        super(name, 4, false)
    }

    run() {
        console.log(`Je cours`)
    }

    drink() {
        console.log(`Je bois`)
    }

    mammal() {
        console.log("j'ai des mammelles !");
    }
}

// 🐶 Créé une interface 'Swimable' contenant la fonction 'swim()'

// 🐶 adapte la classe Fish en étantdant 'annimal' et implementant 'Swimable'
class Fish extends Animal implements Swimable {
    constructor(name: string) {
        super(name, 0, true)
    }
    swim() {
        console.log('Je nage');
    }
}

const tigrou = new Cat('Tigrou')
tigrou.run()
tigrou.drink()
tigrou.mammal()
displayText(`Nom du chat ${tigrou.printName()}`)

// 🐶 Créé une instance de Dog et appelle les fonctions 'run' et 'drink'
// utilise 'displayText' pour afficher son nom à l'écran
const mowgli = new Dog('Mowgli')
mowgli.run()
mowgli.drink()
mowgli.mammal()
displayText(`Nom du chien ${mowgli.printName()}`)

// 🐶 Créé une instance de Fish et appelle la fonction 'swim'
// utilise 'displayText' pour afficher son nom à l'écran
const nemo = new Fish('Némo')
nemo.swim()
displayText(`Nom du poisson ${nemo.printName()}`)

interface Drinker {
    drink(): void
}

function doSomeThingWithDrinkers(drinker: Drinkable) {
    displayText('Je booois')
    drinker.drink()
}
doSomeThingWithDrinkers(mowgli)
doSomeThingWithDrinkers(tigrou)
// class boisson implements Drinker {
//     name : string
//     constructor(name:string) {
//         this.name = name
//     }
//     drink() {
//         console.log("je bois pas que de l'eau");
//     }
//     printName() {
//         console.log(`Mon nom est ${this.name}`)
//         return this.name
//     }
// }
// const john = new boisson('John')
// john.drink()
// john.printName()


/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
