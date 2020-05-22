const userAttr = ['name', 'height', 'mass'];
const planetAttr = ['name', 'diameter', 'gravity', 'climate'];
let table = document.createElement('table');

function addPlanetTd(tr, text) {
    let planetTd = document.createElement('td');
    planetTd.classList.add('planet_td');

    if (text) {
        planetTd.innerHTML = text;
        planetTd.addEventListener('click', showPlanet);
    }
    
    tr.append(planetTd);
}

function closeModal() {
    let modal = this.closest('.planet_modal');
    modal.remove();
}

function showPlanetModal(planet, top) {
    let modal = document.createElement('div');
    modal.className = 'planet_modal';
    modal.style.top = `${top}px`;

    let table = document.createElement('table');
    table.className = 'planet_table';
    let trHead = document.createElement('tr');
    trHead.className = 'tr_head';
    let tr = document.createElement('tr');

    planetAttr.forEach((el) => {
        let td = document.createElement('td');
        let tdHead = document.createElement('td');
        
        tdHead.innerHTML = el;
        td.innerHTML = planet[el];

        trHead.append(tdHead);
        tr.append(td);
    });

    let closeBtn = document.createElement('div');
    closeBtn.className = 'close_btn';
    closeBtn.innerHTML = `<span>X</span>`;

    closeBtn.addEventListener('click', closeModal);

    table.append(trHead);
    table.append(tr);
    modal.append(table);
    modal.append(closeBtn);
    document.body.prepend(modal);
}

async function showPlanet(event) {
    let top = event.layerY;
    let planet = await getPlanet(this);
    console.log(planet);
    showPlanetModal(planet, top);
    
}

async function getPeople() {
    let response = await fetch('https://swapi.dev/api/people/');
    let people = (await response.json()).results;
    return people;
}

async function getPlanet(td) {
    let url = td.closest('tr').dataset.planetUrl;
    let response = await fetch(url);
    let planet = await response.json();
    return planet;
}

function createTableHead(userAttr) {
    let tr = document.createElement('tr');

    tr.className = 'header_tr';

    userAttr.forEach(element => {
        let td = document.createElement('td');
        td.innerHTML = element;
        tr.append(td);
    });

    addPlanetTd(tr, null);

    table.append(tr);

    let usersBlock = document.querySelector('.users_block');
    usersBlock.append(table);
}

async function pastePeople(peoplePromise) {
    let people = await peoplePromise;
    people.forEach((el) => {
        let tr = document.createElement('tr');
        tr.dataset.planetUrl = el.homeworld;
        userAttr.forEach((item) => {
            let td = document.createElement('td');
            td.innerHTML = el[item];
            tr.append(td);
        });

        addPlanetTd(tr, 'homeworld');

        table.append(tr);
    });
}

createTableHead(userAttr);
pastePeople(getPeople());




