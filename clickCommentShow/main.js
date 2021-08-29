//fetch data from the server and put in commentsArray as an array
let commentsArray = [];
async function getData() {
    const URL = `https://jsonplaceholder.typicode.com/comments`;
    try {
        const gotComments = await fetch(URL);
        const comments = await gotComments.json()
        const firstTenComments = comments.splice(0,10);
        commentsArray = firstTenComments;
        createComment(commentsArray);
    } catch (error) {
        console.log(error.message);
    }
}

//create and display comments
let count = -1;
function createComment(commentsArray) {
    const parent = document.getElementById('table-body');
    const tr = document.createElement('tr');
        tr.innerHTML = 
        `
        <td>${commentsArray[count].id}</td>
        <td>${commentsArray[count].name}</td>
        `
      parent.appendChild(tr);
}

//onclick handler
const commentAddButton = document.getElementById('add-comment');
commentAddButton.addEventListener('click', () => {
    getData()
    count = count + 1;
})

//show detailed comment
// document.getElementById('table-body').addEventListener('click', (event) => {
//     for(let i = 0; i < commentsArray.length; i++) {
//         if(commentsArray[i].id == event.target.innerText || commentsArray[i].name == event.target.innerText) {
//              document.getElementById('details').innerText = commentsArray[i].body
//         }
//     }
// })
//show detailed comment dynamically
document.getElementById('table-body').addEventListener('click', (event) => {
    for(let i = 0; i < commentsArray.length; i++) {
        if(commentsArray[i].id == event.target.innerText || commentsArray[i].name == event.target.innerText) {
             const id = commentsArray[i].id;
             const commentUrl = `https://jsonplaceholder.typicode.com/comments?id=${id}`;

             async function showComment() {
                 const commentData = await fetch(commentUrl);
                 const specificComment = await commentData.json();
                 document.getElementById('details').innerText = specificComment[0].body
             }
             showComment()
        }
    }
})