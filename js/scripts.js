const boutonModale = document.querySelectorAll('.bouton');
const modale = document.querySelector('.modale');

for (let i = 0; i < boutonModale.length; i++) {
    boutonModale[i].addEventListener('click', OuvreModale);
}

function OuvreModale(event) {
    const bouton = event.currentTarget;
    event.preventDefault();

    modale.classList.add("visible");
    modale.addEventListener('click', FermerModale);
}

function FermerModale(){
    modale.classList.remove("visible");
}