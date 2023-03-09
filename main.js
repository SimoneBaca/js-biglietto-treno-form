/*Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/






let bottone = document.getElementById('calcolo');

const calcolatrice = function(){
    //variabili
    const prezzoKm = 0.21;
    const minorenni = 17;
    const over = 65;

    let km = document.getElementById('Km').value;
    let eta = document.getElementById('eta').value;

    let totaleKm = km * prezzoKm;
    let costo = Math.ceil(totaleKm)
    let costoTotale = costo.toFixed(2)



//Minorenni
    if(eta <= minorenni){
        let scontoMinorenni = costoTotale / 100 * 20;
        let totaleMinorenni = costoTotale - scontoMinorenni;
                
        document.getElementById('eta').innerHTML = eta
        document.getElementById('scontoViaggio').innerHTML = scontoMinorenni

        document.getElementById('costoViaggio').innerHTML = totaleMinorenni
        
    
//Over 
    } else if( eta >= over){
        let scontoOver = costoTotale / 100 * 40 ;
        let totaleOver = costoTotale - scontoOver;
        console.log(totaleOver)
        document.getElementById('eta').innerHTML = eta
        document.getElementById('scontoViaggio').innerHTML = scontoOver

        document.getElementById('costoViaggio').innerHTML = totaleOver

//Ne Minorenni ne Over
    }else {
        document.getElementById('eta').innerHTML = eta
        document.getElementById('scontoViaggio').innerHTML =
        `
        Nessun sconto
        `        
        document.getElementById('costoViaggio').innerHTML = costoTotale
    }

}
bottone.addEventListener('click', calcolatrice);
