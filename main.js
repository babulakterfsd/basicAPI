
//get search query
// const dQuery = document.getElementById('dQuery');
// let dQueryValue = '';
// dQuery.addEventListener('keyup', (event) => {
//     dQueryValue = event.target.value;
// })

//get a random photo per click
// document.getElementById('post').addEventListener('click', () => {
//     const URL = `https://api.unsplash.com/photos/random?client_id=eXbAr6H_58atLvAvCNSDz_-eAaNkwlIBWU44adszX2Q`
//     const target = document.getElementById('checkImg');
//     fetch(URL)
//      .then((res) => res.json())
//       .then((data) => {
//           console.log(data);
//              target.setAttribute('src', data.urls.regular);
//              target.style.height = '300px'
//              target.style.width = '250px'
//              target.classList.add('img-fluid')
//           })
// })

//show random images depending on search 

// document.getElementById('post').addEventListener('click', () => {
//     const URL = `https://api.unsplash.com/search/photos/?client_id=eXbAr6H_58atLvAvCNSDz_-eAaNkwlIBWU44adszX2Q&query=${dQueryValue}`
//     fetch(URL)
//      .then((res) => res.json())
//       .then((data) => {
//           if(data.results.length < 1) {
//               alert('no image found');
//           } else {
//             [data.results].forEach((singleObj) => {
//                 singleObj.forEach((obj) => {
//                     createImage(obj.urls.regular)
//                 })
//             })
//           }
//      })
// })

// function createImage(srcPara) {
//     const imgParent = document.getElementById('imgcontainer')
//     const myImage = document.createElement('img');
//     myImage.classList.add('img-fluid');
//     myImage.style.height = '250px';
//     myImage.style.width = '300px';
//     myImage.setAttribute('src', srcPara)
//     imgParent.appendChild(myImage)
//     return imgParent;
// }

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
