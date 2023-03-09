/*Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/


/*1 - Chiedere all'utente il numero di chilometri da percorrere
2 - Chiedere l'età del passeggero.
3 - Calcolare prezzo totale del viaggio in base a:
    3.1 - Prezzo del biglietto definito in base ai km (0.21 € al km)
    3.2 - Sconto del 20% per i minorenni
    3.3 - Sconto del 40% per gli over 65
    4 - Inserire prezzo finale con massimo due decimali (centesimi)*/





alert("prendi la macchina la prossima volta!")



const buttonSend = document.getElementById('send');
const buttonDelete = document.getElementById('delete');
const fullName = document.getElementById('full-name');
const userKm = document.getElementById('kms');
const userAgeRange = document.getElementById('age-range');
let ticketType = document.getElementById('ticket-type');
const ticketCarriage = document.getElementById('ticket-carriage');
const ticketCode = document.getElementById('ticket-code');
let ticketCost = document.getElementById('ticket-cost');
const ticketForm = document.getElementById('your-ticket');

buttonSend.addEventListener('click', function () {
    if (fullName.value !== '' && userKm.value !== '' && userAgeRange.value !== '') {

        const fullNameValue = fullName.value.trim();
        console.log(fullNameValue);

        const userKmValue = parseInt(userKm.value);
        console.log(`${userKmValue}km`);

        const userAgeRangeValue = userAgeRange.value;
        console.log(userAgeRangeValue);

        let ticketName = document.getElementById('ticket-fullname');
        ticketName.innerHTML = fullNameValue;

        const randomCarriage = Math.floor(Math.random() * 9) + 1;
        ticketCarriage.innerText = randomCarriage;

        const randomCode = Math.floor(Math.random() * 9999) + 1;
        ticketCode.innerText = randomCode;

        let costoTotale = userKm.value * 0.21;
        let prezzoScontato = 0;
        let tipoUtente = userAgeRange.value;


        switch (tipoUtente) {
            case 'underage':
                prezzoScontato = .20;
                costoTotale = (costoTotale - (costoTotale * prezzoScontato)).toFixed(2);
                console.log(`Il prezzo del biglietto per i minorenni è di ${costoTotale}€`);
                ticketType.innerText = 'Sconto minorile';
                break;
            case 'over65':
                prezzoScontato = .40;
                costoTotale = (costoTotale - (costoTotale * prezzoScontato)).toFixed(2);
                console.log(`Il prezzo del biglietto per gli over 65 è di ${costoTotale}€`);
                ticketType.innerText = 'Sconto signorile';
                break;
            case 'overage':
                costoTotale = costoTotale.toFixed(2);
                console.log(`Il prezzo del biglietto senza sconti è di ${costoTotale}€`);
                ticketType.innerText = 'Biglietto standard';
        }

        ticketCost.innerHTML = costoTotale + '€';

        ticketForm.classList.add('visible');

        fullName.value = '';
        userKm.value = '';
        userAgeRange.value = '';

    }


});

buttonDelete.addEventListener('click', function () {
    fullName.value = '';
    userKm.value = '';
    userAgeRange.value = '';
})