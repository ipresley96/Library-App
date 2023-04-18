//let myLibrary = [];

// Whe you return to this project you will add local storage options to it.

//display form 

document.querySelector('.book__add').addEventListener("click", () => {
  document.querySelector('.form').classList.toggle("none")
  document.querySelector(".slide-out").classList.toggle("slide-in")

})

class Book {
    constructor (title, author, pages, hasRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    // Add Book Function
    info (book) {
        const container = document.querySelector(".book-container");
        const list = document.createElement("div")
        list.classList.add("list")
        list.innerHTML = `
          <div class="card">
            <h1 class="title"> ${book.title} </h1>
            <h2 class="author"> ${book.author} </h2>
            <p class="pages"> ${book.pages} </p>
            <div class='card-bottom'>
              <button class="read"> Has Read </button>
              <button class="delete"> X </button>
            </div>
          </div>
        `
        container.appendChild(list)
        console.log(list)
      
      };

      //Clear form
      clearForm () {
        const title = document.querySelector(".title").value = '',
          author = document.querySelector(".author").value = '',
          pages = document.querySelector(".pages").value = ''
      }


}


//Event Listeners 
document.querySelector('.submit').addEventListener("click",
  function(e) {

    // Intialize variables used by book object
    const title = document.querySelector(".title").value,
      author = document.querySelector(".author").value,
      pages = document.querySelector(".pages").value

    // create book
    const book = new Book(title, author, pages)

    if (title === '' || author === '' || pages === '') {
        console.log("Try again")
    } else {
      book.info(book)
      book.clearForm(book)
      document.querySelector('.slide-out').classList.toggle("slide-in")
    }

    e.preventDefault()
  })


document.querySelector('.book-container').addEventListener("click", (e) => {
  if (e.target.nextElementSibling.classList.contains("delete")) {
        e.target.classList.toggle("hasRead")
  }
})

document.querySelector('.book-container').addEventListener("click", (e) => {
  if (e.target.previousElementSibling.classList.contains("read")) {
    e.target.parentElement.parentElement.remove()
  }
})