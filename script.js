let sens = 0;

let sensInputs = document.getElementsByClassName('sensInput');
for (let i = 0; i < sensInputs.length; i++) {
    sensInputs[i].addEventListener('input', e => {
        console.log(e.target.value);
    })
}