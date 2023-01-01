


let myLibrary = [];

function addLocalStorage() {
  // localStorage => save things in key value pairs - key = library : myLibrary
  myLibrary = JSON.parse(localStorage.getItem("library")) || [];
  saveAndDisplayBooks();
}

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    saveAndDisplayBooks();
}

function displayBook() {
    const books = document.querySelector(".books");

    const removeDivs = document.querySelectorAll(".card");
    for (let i = 0 ; i < removeDivs.length; i ++) {
        removeDivs[i].remove();
    }

    myLibrary.forEach(myLibrary => {



        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }

        const removeBookBtn = document.createElement("button");
        removeBookBtn.classList.add("remove-book-btn");
        removeBookBtn.textContent = "Delete";
        card.appendChild(removeBookBtn); 
    })
}


const addBookBtn = document.querySelector(".add-book-btn");
addBookBtn.addEventListener("click", displayFrom);

function displayFrom() {
    document.getElementById("form-display").style.display = "";
}

const subBtn = document.getElementById("submit-btn");
document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault()
  });
subBtn.addEventListener('click', convertData);
subBtn.addEventListener('click', undisplayForm);

function undisplayForm(){
    document.getElementById("form-display").style.display = "none";
}


function convertData() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    let read;

    if(document.getElementById("read").checked) {
        read = true
    } else {
        read = false
    }

    addBookToLibrary(title, author, pages, read);
}

function saveAndDisplayBooks() {
    localStorage.setItem("library", JSON.stringify(myLibrary));
    displayBook();
  }
  

