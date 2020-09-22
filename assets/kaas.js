//Jason Ronoastro.
//Lab opdracht. 21-09-2020.
//Da Vinci College. Software Developer

var vragen;
const JA = 'ja';
const NEE = 'nee';

vragen = prompt('Is de kaas geel?');
if (vragen == JA) {
    alert('Dit anwtoord is goed!')
} else {
    alert('Dit antwoord is fout!');
    
};

vragen = prompt('Zitten er gaten in?');
if (vragen == NEE) {
    alert('Dit antwoord is goed!');
} else{
    alert('Dit antwoord is fout');
};

vragen = prompt('Is de kaas hard als steen?');
if (vragen == NEE) {
    alert('Dit antwoord is goed!');
    var kaasSoort = alert('De kaas soort is Pamigiano Reggiano.');
} else{
    alert('Dit antwoord is fout');
};






