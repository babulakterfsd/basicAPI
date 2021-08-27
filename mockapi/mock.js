/*  add all user within a single click

document.getElementById('mock').addEventListener('click', () => {
    fetch('https://612856ca86a213001729f8a2.mockapi.io/users')
     .then((res) => res.json())
      .then((data) => {
          data.forEach((userData) => {
            let {id,name,gender,email,country} = userData;
            generateTable(id,name,gender,email,country)
          })
      })
})

function generateTable(id,name,gender,email,country) {
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr');
    tr.innerHTML = 
                 `<td>${id}</td>
                 <td>${name}</td>
                 <td>${gender}</td>
                 <td>${email}</td>
                 <td>${country}</td>
                 `
    tbody.appendChild(tr)
    return tbody
} */
























// add one user in one click
let users = [];

const loadUsers = async () => {
  const res = await fetch('https://612856ca86a213001729f8a2.mockapi.io/users');
  const data = await res.json();
  return data;
};

loadUsers().then((allUsers) => (users = allUsers));

let i = 0;
const addUser = (users) => {
  if (i == 50) {
    return;
  }
  displayUser(users[i]);
  i++;
};

const displayUser = (user) => {
  const tbody = document.getElementById('tbody');
  const {name, email, gender, country } = user;

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${i + 1}</td>
    <td>${name}</td>
    <td>${gender}</td>
    <td>${email}</td>
    <td>${country}</td>
    `;
  tbody.appendChild(tr);
};

const addBtn = document.getElementById('mock');

addBtn.addEventListener('click', function () {
  addUser(users);
});