// Les types alias
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'

init()

// ✔️ Début de l'exercice

// 🐶 Déclare un type `pinType` qui permet d'avoir un number ou string
// affecte ce type à la variable `pin`

type Pin = number | string // ⛏️ remplace cette declaration
let pin: Pin
pin = 0
displayText(`Le pin est ${pin}`)
pin = '10'
displayText(`Le pin est ${pin}`)

// 🐶 Déclare un type `primitives` qui permet d'avoir tous les types primitif number | boolean | string
type Primitives = number | boolean | string
// ⛏️ remplace `any` par le type `primitives` et affecte une bonne valeur
let prim: Primitives
prim = 'Mike'
displayText(`prim vaut  ${prim}`)

// 🐶 modifie le type `primitivesNullUndefined` pour que les lignes suivantes compilent
type primitivesNullUndefined = number | boolean | string | null | undefined

// ⛏️ décommente le code ci-dessous et fait en sorte que la compilation fonctionne en modifiant `primitivesNullUndefined`
let prim2: primitivesNullUndefined
displayText(`prim2 vaut  ${prim2}`)

// 🐶 Modifie le type `Person` avec les propiétés
// - name de type string
// - age de type number
// - isActive de type boolean
// - roles un tableau de string
// - params un object non defini
// - payload peut avoir n'importe quel type

type Person = {
    name: string
    age: number
    isActive: boolean
    roles: string []
    params: object
    payload: any
    friend: Person | undefined
}

const person: Person = {
    name: 'John',
    age: 23,
    isActive: true,
    roles: ['admin'],
    params: {id: '50'},
    payload: undefined,
    friend: undefined
}

displayText(
    `${person.name} a ${person.age} ans et a le role ${person.roles[0]} `,
)

// 🐶 N'oublie pas l'exercice bonus

displayText(`${person.name} a pour ami : ${person.friend?.name ?? 'aucun'}`)
/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
