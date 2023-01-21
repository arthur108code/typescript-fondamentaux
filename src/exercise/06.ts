// Les tuples
// http://localhost:3000/alone/exercise/06.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'

init()

// ✔️ Début de l'exercice

// 🐶 Déclare un type `Connexion` un tuple contennant toutes les informations utile a la connexion
// - le nom de la connexion  (ex : Connexion à Google) `string`
// - le protocole (ex : ftp, http) `string`
// - le hostname (ex : google.com) `string`
// - le port  (ex : 423) `number`
// - le username : (ex : admin) `string`
// - le password (ex : admin) `string`
// 📝 documentation tuples https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types

enum Protocol {
    HTTP = 'http',
    HTTPS = 'https',
    FTP = 'ftp',
}
// type Connexion
type Connexion = [string, Protocol, string, number, string, string];

// 🐶 Créer une variable 'google' qui contiendra les infos de connexion à google
// https google.com 443

let google: Connexion
google = ['Connexion à Google', Protocol.HTTPS, 'google.com', 443, 'admin', 'admin'];

// Affiche le resultat à l'ecran avec le code
displayText(`${google[0]} : ${google[1]}://${google[2]}:${google[3]} `)

// 🐶 créer 3 autres connexions de ton choix et affiche le resultat à l'écran
let amazon: Connexion
amazon = ['Coonexion à Amazon', Protocol.HTTP, 'amazon.fr', 80, 'admin', 'admin'];
displayText(`${amazon[0]} : ${amazon[1]}://${amazon[2]}:${amazon[3]} `)

let ftp: Connexion
ftp =  ['Coonexion à ftp', Protocol.FTP, 'monsite.fr', 21, 'admin', 'admin'];
displayText(`${ftp[0]} : ${ftp[1]}://${ftp[2]}:${ftp[3]} `)

let gmail: Connexion
gmail = ['Coonexion à gmail', Protocol.HTTP, 'gmail.fr', 80, 'admin', 'admin'];
displayText(`${gmail[0]} : ${gmail[1]}://${gmail[2]}:${gmail[3]} `)

// 🐶 créer un tableau `connexions` qui contiendra toutes les connexions
// Ajoute des connexion via l'initialisation et via la méthode `push`
let connexions : Connexion [];
connexions = [google];
connexions.push(gmail, amazon, ftp)
displayText(`Il y a ${connexions.length} connexions`)

let [,gmailProtocol,gmailHostname] = gmail

displayText(`Le protocole de gmail est ${gmailProtocol} et le hostname est ${gmailHostname}`);
/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
