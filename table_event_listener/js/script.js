const data = [
  {
    firstName: 'Ashton',
    lastName: 'Kutcher',
    age: 40,
  },
  {
    firstName: 'Bradley',
    lastName: 'Pitt',
    age: 54,
  },
  {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age: 24,
  },
];
const tbody = document.querySelector('table tbody');
const formAddUser = document.querySelector('form');
let defaultArr = [];

function addUser(firstName, lastName, age) {
  let tr = document.createElement('tr');

  tr.innerHTML = `            
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${age}</td>`;
  addTdWithBtns(tr);
  tbody.append(tr);
}
function deleteUser() {
  let deleteTr = this.closest('tr');
  deleteTr.remove();
}
function editRow() {
  const tr = this.closest('tr');
  const tdArr = tr.cells;
  for (let i = 0; i < tdArr.length - 1; i++) {
    const value = tdArr[i].querySelector('input').value;
    tdArr[i].innerHTML = value;
  }
  tdArr[tdArr.length - 1].remove();
  addTdWithBtns(tr);
}
function cancelRow() {
  const tr = this.closest('tr');
  const tdArr = tr.cells;
  for (let i = 0; i < tdArr.length - 1; i++) {
    tdArr[i].innerHTML = defaultArr[i];
  }
  tdArr[tdArr.length - 1].remove();
  addTdWithBtns(tr);
  defaultArr = [];
}
function editUser() {
  let tr = this.closest('tr');
  let tdArr = tr.cells;
  for (let i = 0; i < tdArr.length; i++) {
    if (tdArr[i].classList.contains('btns_td')) {
      tdArr[
        i
      ].innerHTML = `<button class="submit_btn">ok</button><button class="cancel_btn">cancel</button>`;

      const submitBtn = tdArr[i].querySelector('.submit_btn');
      const cancelBtn = tdArr[i].querySelector('.cancel_btn');
      submitBtn.addEventListener('click', editRow);
      cancelBtn.addEventListener('click', cancelRow);
    } else {
      let tdValue = tdArr[i].innerHTML;
      defaultArr.push(tdValue);
      let input = document.createElement('input');
      input.value = tdValue;
      tdArr[i].innerHTML = '';
      tdArr[i].append(input);
    }
  }
  console.log(defaultArr);
}
function addTdWithBtns(tr) {
  let deleteUserBtn = document.createElement('button');
  let editUserBtn = document.createElement('button');
  let btnsTd = document.createElement('td');

  deleteUserBtn.className = 'delete_user_btn';
  editUserBtn.className = 'edit_user_btn';
  btnsTd.className = 'btns_td';

  deleteUserBtn.addEventListener('click', deleteUser);
  editUserBtn.addEventListener('click', editUser);

  deleteUserBtn.innerHTML = '-';
  editUserBtn.innerHTML = 'edit';

  btnsTd.append(editUserBtn);
  btnsTd.append(deleteUserBtn);
  tr.append(btnsTd);
}

for (let i = 0; i < data.length; i++) {
  let tr = document.createElement('tr');

  for (let key in data[i]) {
    let td = document.createElement('td');
    td.innerHTML = data[i][key];
    tr.append(td);
  }

  addTdWithBtns(tr);

  tbody.append(tr);
}

formAddUser.addEventListener('submit', (event) => {
  console.log(event);
  event.preventDefault();
  let inputNameValue = event.target.querySelector('.input_name').value;
  let inputSecondNameValue = event.target.querySelector('.input_second_name')
    .value;
  let inputAgeValue = event.target.querySelector('.input_age').value;
  addUser(inputNameValue, inputSecondNameValue, inputAgeValue);
  formAddUser.reset();
});
