const userAttr = ['name', 'height', 'mass'];

async function getPeople() {
  let response = await fetch('https://swapi.dev/api/people/');
  let people = (await response.json()).results;
  return people;
}

function createTable(userAttr) {
  let table = document.createElement('table');
  let tr = document.createElement('tr');

  tr.className = 'header_tr';

  userAttr.forEach((element) => {
    let td = document.createElement('td');
    td.innerHTML = element;
    tr.append(td);
  });

  table.append(tr);

  let usersBlock = document.querySelector('.users_block');
  usersBlock.append(table);
}

async function pastePeople(peoplePromise) {
  let people = await peoplePromise;
  let table = document.querySelector('table');

  people.forEach((el) => {
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${el.name}</td>
    <td>${el.height}</td>
    <td>${el.mass}</td>`;
    table.append(tr);
  });
}

createTable(userAttr);
pastePeople(getPeople());
