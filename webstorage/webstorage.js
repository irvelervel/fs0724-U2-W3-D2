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

// il metodo setItem() inserisce una chiave nel localStorage
localStorage.setItem('benchmarkResult', 75)

const value = localStorage.getItem('benchmarkResult')
console.log(value) // 75
