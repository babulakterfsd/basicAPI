/* document.getElementById('mock').addEventListener('click', () => {
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

const URL = `https://jsonplaceholder.typicode.com/comments`;

async function getData() {
    const comment = await fetch(URL);
    const comments = await comment.json();
    const firstTenComments = comments.splice(0,10);
    firstTenComments.forEach(singleComment => {
        generateTable(singleComment.id, singleComment.name)
    })
}

function generateTable(id,name) {
    const tbody = document.getElementById('table-body')
    const tr = document.createElement('tr');
    tr.innerHTML = 
                 `<td>${id}</td>
                 <td>${name}</td>
                 `
    tbody.appendChild(tr)
    return tbody
}


getData()