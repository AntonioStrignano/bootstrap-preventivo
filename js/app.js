// Quando l’utente fa click sul bottone submit del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste. 

// Il prezzo finale è dato dal numero di ore per prezzo orario. Supponiamo per semplicità che ogni progetto richieda lo stesso numero di ore di lavoro (es: 10 ore).

// Il prezzo orario per una commissione varia in questo modo:
// se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
// se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
// se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora

// L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.

// Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.

// Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro).

console.log("Bool Factory - richiesta preventivo");

// CREAZIONE OGGETTI DEI LAVORI
// dando ai lavori il costo orario come key e assegnando i lavori diversi
// e creare variabile della lista di lavori nel DOM con id jobSelect

const jobs = [
    { jobLabel: 'Seleziona il tipo di lavoro', rate: NaN, selectValue: 'blank' },
    { jobLabel: 'Backend Development', rate: 20.5, selectValue: 'backend' },
    { jobLabel: 'Frontend Development', rate: 15.3, selectValue: 'frontend' },
    { jobLabel: 'Project Analysis', rate: 33.6, selectValue: 'analysis' },
];

const jobList = []

jobs.forEach(function (job) {
    jobList.push('<option value="' + job.selectValue + '">' + job.jobLabel + '</option>');
})

let selectJob = ''
console.log(selectJob);

jobList.forEach(function (option) {
    selectJob = selectJob + option
})

document.getElementById("jobSelect").innerHTML = selectJob


// FUNZIONE CALCOLO PREZZO
// vabiabile lavoro dal form, prendendo la tariffa oraria dalla key di ogni oggetto * 10 (ore) = prezzo pieno
// se inserito codice sconto allora parte ciclo che verifica se il codice sconto inserito esiste nell'array di codici sconto funzionanti e prezzo pieno * 3 / 4 = prezzo finale
// POI FORMATTA prezzo finale con due cifre decimali, dividi in in array numero intero e parte decimale



// QUINDI
// listener del submit (il form è in method dialog, quindi non invia), se NON tutti i campi sono pieni stampa "compilare tutti i campi", altrimenti invoca funzione del calcolo prezzo
// la funzione calcolo prezzo come output darà il prezzo diviso in due parti in un array
// risultato del listener = stampa nell'html il numero intero del prezzo in #strongPrice e la parte decimale in #decPrice

//INFINE EXTRA
// aggiungere animazione con CSS al messaggio "compila tutti i campi" a comparsa così da capire quando lo script viene invocato e dà errore
