const rocket = document.querySelector('.rocket');
const active = document.querySelector('.active');
var modal = document.querySelector('.modal');
const removeModal = document.querySelector('.fa-solid');
const planets = document.querySelectorAll('.planet');
/*var elementClassName = e.target.className;*/


function showRocket() {
    rocket.classList.add('show');
}

setTimeout(showRocket, 18000);



planets.forEach(planet => {
    planet.addEventListener('click', () => {
        removeActiveClasses()
        modal.classList.add('active');
    })
})

function removeActiveClasses() {
    planets.forEach(planet => {
        planet.classList.remove('active')
    })
}

removeModal.addEventListener('click', () => {
    modal.classList.remove('active');
})

