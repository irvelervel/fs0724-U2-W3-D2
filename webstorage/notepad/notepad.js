// attribuiamo le funzionalità ai 3 bottoni esistenti
// prima li recupero:
const saveButton = document.getElementById('save')
const loadButton = document.getElementById('load')
const resetButton = document.getElementById('reset')

const textArea = document.getElementById('notepad')
// poiché la utilizzerò diverse volte, per evitare typos la salvo in una costante
const localStorageKey = 'notepad-memory'

const save = function () {
  // devo recuperare il contenuto della textarea
  const notepadContent = textArea.value
  // devo salvare questo contenuto in una chiave del localStorage
  localStorage.setItem(localStorageKey, notepadContent)
}

const load = function () {
  // deve recuperare il valore precedentemente salvato in localStorage (SE PRESENTE)
  const valueFromLocalStorage = localStorage.getItem(localStorageKey)
  if (valueFromLocalStorage) {
    // avevamo già premuto il tasto SALVA, abbiamo trovato il valore
    // utilizzerò questo valore come NUOVO contenuto della textarea
    textArea.value = valueFromLocalStorage
  } else {
    // il valore tornato dal localStorage è null -> prima apertura dell'app?
    alert('Nessun contenuto in memoria')
  }
}

const reset = function () {
  // voglio svuotare il contenuto della textarea
  textArea.value = ''
  // voglio anche eliminare il contenuto eventualmente salvato in localStorage
  localStorage.removeItem(localStorageKey)
}

saveButton.addEventListener('click', save)
loadButton.addEventListener('click', load)
resetButton.addEventListener('click', reset)
