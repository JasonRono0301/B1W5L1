//Jason Ronoastro.
//Lab opdracht. 21-09-2020.
//Da Vinci College. Software Developer

var vragen;
const JA = 'ja';
const NEE = 'nee';

vragen = prompt('Is de kaas geel?');

if (vragen == JA) {
    alert('Dit anwtoord is goed!')
        vragen = prompt('Zitten er gaten in?');
            vragen = true;
} else {
    alert('Dit antwoord is fout!');
        vragen = false;
};

if (vragen == NEE) {
    alert('Dit antwoord is goed!');
         vragen = prompt('Is de kaas hard als steen?');
            vragen = true;
} else{
    alert('Dit antwoord is fout');
        vragen = false;
};

if (vragen == NEE) {
    alert('Dit antwoord is goed!');
        alert('U denk aan de kaas soort Pamigiano Reggiano.');
            vragen = true;
} else{
    alert('Dit antwoord is fout');
        vragen = false;
};






