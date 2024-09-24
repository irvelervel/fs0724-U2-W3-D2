const objAsAString = localStorage.getItem('albumCorretto')
const obj = JSON.parse(objAsAString)

document.querySelector('h2').innerText = obj.artist
// funziona anche qui! :)

// versione monoriga
// const artist = JSON.parse(localStorage.getItem('albumCorretto')).artist
