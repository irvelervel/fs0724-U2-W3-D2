const localStorageKey = 'agenda-memory'

class Appointment {
  constructor(_name, _date) {
    this.name = _name
    this.date = _date
  }
}

// agiamo sull'evento di submit del form
const form = document.querySelector('form')

const handleSubmit = function (e) {
  e.preventDefault()
  // recuperiamo i valori dei due campi
  const appointmentName = document.getElementById('appointment-name').value
  const appointmentDate = document.getElementById('appointment-date').value
  // creo l'oggetto a partire da questi campi
  const newApp = new Appointment(appointmentName, appointmentDate)
  console.log('OGGETTO APPUNTAMENTO GENERATO', newApp)
  // salvo ora l'oggetto nel localStorage
  // recupero il contenuto attuale di localStorageKey ('agenda-memory')
  let appointmentsInLocalStorage = localStorage.getItem(localStorageKey)
  if (!appointmentsInLocalStorage) {
    // appointmentsInLocalStorage è null
    appointmentsInLocalStorage = []
  } else {
    // appointmentsInLocalStorage esiste già e contiene già degli appuntamenti
    appointmentsInLocalStorage = JSON.parse(appointmentsInLocalStorage)
  }
  console.log('ARRAY DI APPUNTAMENTI ESISTENTI', appointmentsInLocalStorage)
  // ora appointmentsInLocalStorage è un array per forza, vuoto o pieno
  // ci pusho dentro il newApp
  appointmentsInLocalStorage.push(newApp)
  // salvo questo array appena riempito in localStorage
  localStorage.setItem(
    localStorageKey,
    JSON.stringify(appointmentsInLocalStorage) // una stringa
  )
  // genero la lista di appuntamenti
  generateListFromLocalStorage()
}

const generateListFromLocalStorage = function () {
  // recupera l'array di appuntamenti dal localStorage (sempre se presente)
  const appointmentsAsStringFromLocalStorage =
    localStorage.getItem(localStorageKey)
  const ul = document.querySelector('.list-group')
  ul.innerHTML = ''
  if (appointmentsAsStringFromLocalStorage) {
    const arrayOfAppointments = JSON.parse(appointmentsAsStringFromLocalStorage)
    arrayOfAppointments.forEach((appointment) => {
      // azzero la lista esistente nel DOM
      const newLi = document.createElement('li')
      newLi.classList.add('list-group-item')
      newLi.innerText = appointment.name + ' ' + appointment.date
      ul.appendChild(newLi)
    })
  }
  // per ogni elemento di quella array genera un list-item nel DOM
}

form.addEventListener('submit', handleSubmit)

// carichiamo all'avvio della pagina gli appuntamenti già in localStorage
generateListFromLocalStorage()
