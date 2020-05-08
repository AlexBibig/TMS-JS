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
function editUser() {
  let tr = this.closest('tr');
  let tdArr = tr.cells;
  console.log(tdArr);
  for (let i = 0; i < tdArr.length; i++) {
    if (tdArr[i].classList.contains('btns_td')) {
      alert('Now you could edit user with lastname ' + tdArr[1].innerText);
    } else {
      tdArr[i].addEventListener('click', function createInputArea() {
        let inputArea = document.createElement('input');
        inputArea.value = this.innerHTML;
        this.innerHTML = '';
        this.append(inputArea);

        let td = this;
        inputArea.addEventListener('blur', function blurInputArea() {
          td.innerHTML = this.value;
        });
        this.removeEventListener('click', createInputArea);
      });
    }
  }
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

  deleteUserBtn.innerHTML = 'delete';
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
  event.preventDefault();
  let inputNameValue = event.target.querySelector('.input_name').value;
  let inputSecondNameValue = event.target.querySelector('.input_second_name')
    .value;
  let inputAgeValue = event.target.querySelector('.input_age').value;

  addUser(inputNameValue, inputSecondNameValue, inputAgeValue);
  formAddUser.reset();
});
