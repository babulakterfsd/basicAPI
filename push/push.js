const userInput = {};
//name
document.getElementById('name').addEventListener('keyup',(event) => {
    let name = '';
    name += event.target.value;
    userInput.name = name;
})

//position
document.getElementById('position').addEventListener('keyup',(event) => {
    let position = '';
    position += event.target.value;
    userInput.position = position;
})

//salary
document.getElementById('salary').addEventListener('keyup',(event) => {
    let salary = '';
    salary += event.target.value;
    userInput.salary = salary
})

//collect data and show in the UI
document.getElementById('submit').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(userInput),
      headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((res) => res.json())
     .then((data) => {
        for(let dataProperty in data) {
            if(dataProperty != 'id') {
                createLi(data[dataProperty])
            }
        }
     })
     document.getElementById('name').value = ''
     document.getElementById('position').value = ''
     document.getElementById('salary').value = ''
})

//li generator 
function createLi(liInnerText) {
    const liParent = document.getElementById('myul');
    const li = document.createElement('li');
    li.innerText = liInnerText;
    li.classList.add('text-center','p-2','text-success','border', 'list-unstyled');
    liParent.appendChild(li);
    return liParent;
}