// OPZIONI DI SELEZIONE DEL LAVORO
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

let selectJobs = ''

jobList.forEach(function (option) {
    selectJobs = selectJobs + option
})

document.getElementById("jobSelect").innerHTML = selectJobs

// CODICI PROMOZIONALI
const promoCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

// FUNZIONI DI CALCOLO DEL PREZZO
let fullPrice = 0
let selectedValue = ''

function fullPriceCalc() {
    selectedValue = document.querySelector("#jobSelect").value;
    const selectedRate = jobs.find((element) => element.selectValue == selectedValue).rate
    fullPrice = selectedRate * 10;
}

let finalPrice = 0

function promo() {
    if (
        promoCodes.includes(document.getElementById("codeForm").value) == true
    ) {
        finalPrice = (fullPrice * 3) / 4;
    }
    else {
        finalPrice = fullPrice
    }
}

// VALIDAZIONE FORM
let formValid = false
function formValidation() {
    if (document.getElementById("nameForm").value == '' || document.getElementById("surnameForm").value == '' || document.getElementById("emailForm").value == '') {
        document.getElementById("formAlert").classList.remove('d-none');
        document.getElementById("privacyAlert").classList.add('d-none');
        document.getElementById("formAlert").classList.remove("alert-animation");
        document.getElementById("formAlert").offsetWidth = document.getElementById("formAlert").offsetWidth
        document.getElementById("formAlert").classList.add("alert-animation");
        document.getElementById("jobAlert").classList.add('d-none')

    } else if (
        document.getElementById("privacyCheck").checked == false
    ) {
        document.getElementById("formAlert").classList.add('d-none');
        document.getElementById("privacyAlert").classList.remove('d-none');
        document.getElementById("privacyAlert").classList.remove("alert-animation");
        document.getElementById("privacyAlert").offsetWidth = document.getElementById("privacyAlert").offsetWidth
        document.getElementById("privacyAlert").classList.add("alert-animation");
        document.getElementById("jobAlert").classList.add('d-none')


    } else if (document.getElementById("jobSelect").value == 'blank') {
        document.getElementById("privacyAlert").classList.add('d-none');
        document.getElementById("jobAlert").classList.remove('d-none')
        document.getElementById("jobAlert").classList.remove("alert-animation");
        document.getElementById("jobAlert").offsetWidth = document.getElementById("jobAlert").offsetWidth
        document.getElementById("jobAlert").classList.add("alert-animation");
    }
    else {
        formValid = true
    }
}


// STAMPA DEL PREZZO FORMATTATO
let splittedPrice = []

function writePrice() {
    if (formValid == false) {
    }
    else {
        finalPrice = finalPrice.toFixed(2)
        splittedPrice = finalPrice.split('.')
        document.getElementById("price").innerHTML = `<strong class="fs-2 text-black">&euro; ${splittedPrice[0]}</strong>,${splittedPrice[1]}`
        document.getElementById("jobAlert").classList.add('d-none')
    }
}

//SUBMIT
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener('click', fullPriceCalc)
submitButton.addEventListener('click', promo)
submitButton.addEventListener('click', formValidation)
submitButton.addEventListener('click', writePrice)