let sens = 0;
let game;

let sensInputs = document.getElementsByClassName('sensInput');
for (let i = 0; i < sensInputs.length; i++) {
    sensInputs[i].addEventListener('input', e => {
        sens = e.target.value;
        game = e.target.id;
        conversion(sens);
        //console.log(e.target.id);
    })
}

function conversion(sens) {

}