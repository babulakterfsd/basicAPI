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

// document.getElementById('mock').addEventListener('click', () => {
//     let id,name,gender,email,country;
//     fetch('https://612856ca86a213001729f8a2.mockapi.io/users')
//      .then((res) => res.json())
//       .then((data) => {
//           data.forEach((userData) => {
//              id = userData.id;
//              name = userData.name;
//              gender = userData.gender;
//              email = userData.email;
//              country = userData.country;
//           })
//          generateTable(id,name,gender,email,country)
//       })
// })

function generateTable(id,name,gender,email,country) {
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr');
    // const td = document.createElement('td');
    // td.innerText = 
    // tr.appendChild(td);
    // tbody.appendChild(tr)
    // return tr;
    tr.innerHTML = 
                 `<td>${id}</td>
                 <td>${name}</td>
                 <td>${gender}</td>
                 <td>${email}</td>
                 <td>${country}</td>
                 `
    tbody.appendChild(tr)
    return tbody
}