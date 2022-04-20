function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


// below is playground


//console.log(photos)

// console.log("Photos Array")


// setTimeout(() => console.log('one'), 3000)


// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(res => console.log(res))


// console.log('After')

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => {
//     console.log(res)
// })




// function renderOnePhoto(photo){


//     let card = document.createElement("li")
//     card.className = 'card'
//     card.innerHTML = `

//         <img src="${photo.thumbnailUrl}">

//         <div>
//             <h4>${photo.title}</h4>

//             <p>
//             $<span class='photo-count'>${photo.id}</span> Counted
//             </p>
//         </div>


//     ` 
//     document.querySelector('#photo-list').appendChild(card)

//     console.log(card)
// }



// function getPhotos(){
//     fetch("https://jsonplaceholder.typicode.com/photos")
//     .then(res => res.json())
//     .then(photos => photo.forEach(photo => renderOnePhoto(photo)))
//     console.log("before fetch returns")
// }
// initialize render
// get data and render our photos to the Dom
// function initialize(){
//     photos.forEach(photo => renderOnePhoto(photo))
//     getPhotos()
//     console.log("after fetch get all")
// }


// initialize()