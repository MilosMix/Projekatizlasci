const events = [];

const trenutnoDugme = document.getElementsByClassName('send')[0];
trenutnoDugme.addEventListener('click', kadaSeKliknePosalji);
let noviDogadjaj = '';
let inputNoviDogadjaj = document.getElementById('dogadjaj');
let opisDogadjaja = '';
let inputOpisDogadjaja = document.getElementById('opis');
let lokacija = '';
let inputLokacije = document.getElementById('lokacija');
let datum = '';
let inputDatuma = document.getElementById('datum');
let slika = '';
let inputSlike = document.getElementById('slika');

function kadaSeKliknePosalji(event) {
    noviDogadjaj = inputNoviDogadjaj.value;
    opisDogadjaja = inputOpisDogadjaja.value;
    lokacija = inputLokacije.value;
    datum = inputDatuma.value;
    slika = inputSlike.value;

    
    const event2 = {
        name: noviDogadjaj, event: opisDogadjaja, date: datum, location: lokacija, image: slika
    };

    addEvent(event2);

    localStorage.setItem("events", JSON.stringify(events));
}

let imeDogadjaja = '';
const inputImeDogadjaja = document.getElementsByClassName('placeholder')[0];


function kadaSeUpiseDogadjaj(event) {
    imeDogadjaja = event.target.value;
    console.log('ime dog:', imeDogadjaja)
}

function addEvent(event) {
    events.push(event);
}


