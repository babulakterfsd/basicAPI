const sQuery = document.getElementById('sQuery');
let sQueryValue = '';
sQuery.addEventListener('keyup', (event) => {
    sQueryValue = event.target.value;
})

document.getElementById('search').addEventListener('click', () => {
    const userID = 'eXbAr6H_58atLvAvCNSDz_-eAaNkwlIBWU44adszX2Q';
    const URL = `https://api.unsplash.com/search/photos/?client_id=${userID}&query=${sQueryValue}`
    fetch(URL)
     .then((res) => res.json())
      .then((data) => {
          if(data.results.length < 1) {
              alert('no image found');
          } else {
            [data.results].forEach((singleObj) => {
                singleObj.forEach((obj) => {
                    createImage(obj.urls.regular);
                })
            })
          }
     })
})

function createImage(imgsrc) {
    const imgParent = document.getElementById('imgcontainer')
    const myImage = document.createElement('img');
    myImage.classList.add('img-fluid');
    myImage.style.height = '300px';
    myImage.style.width = '300px';
    myImage.style.margin = '10px';
    myImage.style.transition = '.5s';
    myImage.setAttribute('src', imgsrc)
    imgParent.appendChild(myImage);
    return imgParent;
}