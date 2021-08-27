//show pushed data in LI
// document.getElementById('push').addEventListener('click',() => {
//    fetch('https://jsonplaceholder.typicode.com/posts', {
//        method: 'POST',
//        body: JSON.stringify({
//         name: 'Nayeem Chowdhury',
//         position: 'font-end developer'
//     }),
//        headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//       }
//    })
//    .then((res) => res.json())
//      .then((data) => {
//          for(let singleData in data) {
//              if(singleData != 'id') {
//                  createLi(data[singleData])
//              }
//          }
//      })
// })

// function createLi(listtext) {
//     const li = document.createElement('li');
//     const liParent = document.getElementById('myul');
//     li.classList.add('text-center','p-2','text-success','border', 'list-unstyled');
//     li.innerText = listtext;
//     liParent.appendChild(li)
//     return liParent
// }



//mock api testing
// document.getElementById('mock').addEventListener('click', () => {
//     fetch('https://6127a34ec2e8920017bc0e15.mockapi.io/users')
//      .then((res) => res.json())
//       .then((data) => console.log(data))
// })
