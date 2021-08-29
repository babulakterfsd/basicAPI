let singleUser = [];
async function getData() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    singleUser = data.results[0];
}
getData()


//generate randomly
const generate = document.getElementById('generate');
generate.addEventListener('click', () => {

//display in the UI
displayUserData()
displayLocationData()

//modify the UI
const userimg = document.getElementById('userimg')
userimg.setAttribute('src',`${singleUser.picture.large}`)
userimg.style.height = '200px'
userimg.style.width = '200px'

//disables the button after a single click
generate.setAttribute('disabled', true)
})



//generate user info
function displayUserData() {
    const userDataContainer = document.getElementById('userinfocontainer')
    const ul = document.getElementById('userinfo');
    const li = document.createElement('li');
    li.classList.add('text-success','border','p-2','text-center','list-unstyled','fw-bolder');
    li.innerHTML = 
                   `
                     name : ${singleUser.name.title} ${singleUser.name.first} ${singleUser.name.last} <br/>
                     gender : ${singleUser.gender} <br/>
                     email : ${singleUser.email} <br/>
                     phone : ${singleUser.phone}
                   `
    ul.appendChild(li);
    const h4 = document.createElement('h4');
    h4.classList.add('text-center', 'mt-4', 'mb-1', 'text-decoration-underline')
    h4.innerText = `User's Info`;

    userDataContainer.append(h4,ul)
}

//generate user location
function displayLocationData() {
    const userLocationContainer = document.getElementById('userlocationcontainer')
    const ul = document.getElementById('userlocation');
    const li = document.createElement('li');
    li.classList.add('text-success','border','p-2','text-center','list-unstyled','fw-bolder');
    li.innerHTML = 
                   `
                     postcode : ${singleUser.location.postcode} ${singleUser.name.first} ${singleUser.name.last} <br/>
                     city : ${singleUser.location.city} <br/>
                     state : ${singleUser.location.state} <br/>
                     country : ${singleUser.location.country}
                   `
    ul.appendChild(li);
    const h4 = document.createElement('h4');
    h4.classList.add('text-center', 'mt-4', 'mb-1', 'text-decoration-underline')
    h4.innerText = `User's location`;

    userLocationContainer.append(h4,ul)
}




//generate button a click korle auto user change hobe, eta implement korte hobe