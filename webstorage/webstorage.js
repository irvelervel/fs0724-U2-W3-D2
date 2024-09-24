// Le WEB Storage API nascono con la standarizzazione di HTML5, al fine di migliorare
// una tecnologia esistente (cookies)
// Queste WEB Storage API migliorano due aspetti limitanti dei cookie:
// 1) I cookies possono memorizzazre al massimo 4KB di dati
// 2) I cookies NON hanno un concetto di "sessione" (non possono autodistruggersi)

// La soluzione è stata introdurre DUE nuove tecnologie per il salvataggio di piccole
// informazioni lato client (browser) a breve/medio termine:
// 1) localStorage (che memorizza i dati fino al suo svuotamento)
// 2) sessionStorage (che memorizza i dati fino alla chiusura del tab/browser)
// entrambe queste tecnologie condividono uno spazio di circa 5MB e memorizzano
// informazioni SEPARATE per ogni dominio

// nonostante queste due memorie siano gestito in modo separato, i metodi per interagirci
// sono condivisi:

// - setItem() -> salva un dato nel local/session storage
// - getItem() -> recupera un dato dal local/session storage
// - removeItem() -> elimina un dato dal local/session storage
// - clear() -> svuota completamente il local/session storage

// ricordiamoci di NON salvare dati particolarmente sensibili in questi motori
// di storage perchè il loro contenuto è COMPLETAMENTE ESPOSTO ALL'UTENTE (se
// l'utente sa navigare negli strumenti di sviluppo, può accedere e modificare
// queste informazioni)

// il metodo clear() svuota il localStorage
// localStorage.clear()

const myName = 'Giacomo'

// il metodo setItem() inserisce una chiave nel localStorage
localStorage.setItem('name', myName)
localStorage.setItem('benchmarkResult', 75)
localStorage.setItem('value', true)

const value = localStorage.getItem('benchmarkResult')
console.log(value) // 75

// LOCALSTORAGE E SESSIONSTORAGE SALVANO SEMPRE I VALORI COME STRINGA!!

const stringArray = ['uno', 'due', 'tre']
localStorage.setItem('array', stringArray)

const obj = { name: 'Stefano', age: 19 }
localStorage.setItem('object', obj)

// JSON.stringify() e JSON.parse()
// JSON.stringify() trasforma un array o un oggetto in una stringa in modo corretto
// JSON.parse() riconverte una stringa nell'array/oggetto originale

// ri-salviamo i dati complessi di prima nel modo corretto
localStorage.setItem('correctArray', JSON.stringify(stringArray))
localStorage.setItem('correctObject', JSON.stringify(obj))
// questi valori sono stati correttamente trasformati in stringa e salvati nel localStorage

// proviamo a recuperare l'oggetto...
const retrievedObject = localStorage.getItem('correctObject')
console.log('oggetto stringhifizzato', retrievedObject)

const objectAgain = JSON.parse(retrievedObject)
console.log('ri-convertito in oggetto vero e proprio', objectAgain)

const retrievedArray = localStorage.getItem('correctArray')
console.log('array stringhifizzato', retrievedArray)

const arrayAgain = JSON.parse(retrievedArray)
console.log('ri-convertito in array vero e proprio', arrayAgain)

// dobbiamo usare JSON.stringify() e JSON.parse() con quei tipi di dato complesso
// che JS non è in grado autonomamente di convertire (decentemente) in stringa:
// ARRAY e OGGETTI

const album = {
  title: 'The Dark Side of the Moon',
  artist: 'Pink Floyd',
  year: 1973,
  genre: ['rock', 'progressive rock'],
  totalTracks: 10,
  duration: 42.57,
}

localStorage.setItem('albumBrutto', album) // NON FUNZIONA
// modo corretto
localStorage.setItem('albumCorretto', JSON.stringify(album))
// recupero la stringa
const albumAsAString = localStorage.getItem('albumCorretto')
// però è solo una stringa! per ri-ottenere album dobbiamo ri-convertirla in oggetto
const newAlbum = JSON.parse(albumAsAString)
console.log('ALBUM PASSATO IN LOCALSTORAGE E RECUPERATO', newAlbum)
