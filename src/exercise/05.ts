// Les types alias
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// 🐶 Déclare une variable `civility` et un type `Civility` avec comme valeur possible 'Mr' 'Mme' 'Mlle'
type Civility = 'Mr' | 'Mme' | 'Mlle';
let civility : Civility = 'Mr';

// 📝 documentation Literal types https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
// avec displayText affiche 'Bonjour Mr' en utilisant civility
displayText(`Bonjour ${civility}`)

// 🐶 Déclare une variable `uploadSize` et un type `maxUploadSize` avec comme valeur possible 2048 ou 4096
// avec displayText affiche 'Upload size 2048' en utilisant uploadSize
type maxUploadSize = 2048 | 4096;
let uploadSize : maxUploadSize = 2048

displayText(`Upload size : ${uploadSize}`)

// 🐶 Déclare un Enum  `HttpStatusCode` et code toutes les valeurs demandées par 👨‍✈️ Hugo
enum HttpStatusCode {
    CONTINUE = 100,
    OK = 200,
    MOVED_PERMANENTLY = 301,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}
// 📝 documentation declaration Enum https://www.typescriptlang.org/docs/handbook/enums.html
// Créér une variable `httpResponse` et initialise la avec la valeur '400' sans utliser de Magic String
let httpResponse : HttpStatusCode
httpResponse = HttpStatusCode.BAD_REQUEST
// avec displayText affiche 'Reponse du serveur 400' en utilisant httpResponse
displayText(`Reponse du serveur ${httpResponse}`)

// 🐶 Déclare un Enum  `TransfertMessage` et code toutes les valeurs demandées par 👨‍✈️ Hugo
// Créér une variable `message` et initialise la avec la valeur 'Transfert avec succès' sans utliser de Magic String
enum TransfertMessage {
    OK = 'Transfert avec succès',
    KO ='Erreur durant le transfert',
    RETRY = 'Recommencez le transfert'
}
let message : TransfertMessage
message = TransfertMessage.OK

// avec displayText affiche 'Message : Transfert avec succès' en utilisant `message`
displayText(`Message : ${message}`)


enum Note {
    un = 1,
    deux,
    trois,
    quatre,
    cinq,
    NSP = 'Ne se prononce pas'
}
let note : Note
note = Note.NSP
displayText(`Note : ${note}`)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
