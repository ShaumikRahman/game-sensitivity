let sens = 0;
let game;
let csgoMultiplier = new Map();
let sensList = new Map();

csgoMultiplier.set('overwatchSens', 3.33);
csgoMultiplier.set('valorantSens', 0.314);
csgoMultiplier.set('siegeSens', 0.001536);
csgoMultiplier.set('warzoneSens', 3.33333);
csgoMultiplier.set('coldWarSens', 3.33);
csgoMultiplier.set('apexSens', 1.00);
csgoMultiplier.set('fortniteSens', 3.96);
csgoMultiplier.set('tarkovSens', 0.176000);
csgoMultiplier.set('rustSens', 1.9555556);

let sensInputs = document.getElementsByClassName('sensInput');
for (let i = 0; i < sensInputs.length; i++) {
    sensInputs[i].addEventListener('input', e => {
        sens = e.target.value;
        game = e.target.id;
        console.log(`Input is ${sens} from ${game}`);
        conversion();
        //setTimeout(sensList.forEach(setNewSens), 1000);
        sensList.forEach(setNewSens)
    })
}

function conversion() {
    if (game == 'csgoSens') {
        sensList.set('csgoSens', sens);
        sensList.set('overwatchSens', 3.33 * sens);
        sensList.set('valorantSens', 0.314 * sens);
        sensList.set('siegeSens', 0.001536 * sens);
        sensList.set('warzoneSens', 3.33333 * sens);
        sensList.set('coldWarSens', 3.33 * sens);
        sensList.set('apexSens', 1.00 * sens);
        sensList.set('fortniteSens', 3.96 * sens);
        sensList.set('tarkovSens', 0.176000 * sens);
        sensList.set('rustSens', 1.9555556 * sens);
    } else {
        csgoMultiplier.forEach(
            function temp (value, key) {
                if (game == key) {
                    sens = sens / value;
                    game = 'csgoSens';
                    conversion(sens);
                }
            }
        );
    }
}

function setNewSens(value, key, map) {
    document.getElementById(key).value = value;
    console.log(`Key is ${key} and value is ${value}`);
}