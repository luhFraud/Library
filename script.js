


let myLibrary = [];
const books = document.querySelector(".books");


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    displayBook();
}
let x = 0;
function displayBook() {
    
    clearDisplay();

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
        removeBookBtn.setAttribute('id', `remove-btn-${x}`);
        console.log(removeBookBtn);
        removeBookBtn.textContent = "Delete";
        card.appendChild(removeBookBtn); 

        document.querySelector('#remove-btn-' + x).addEventListener('click', function() {
            let removeEl = this.parentNode;
            console.log(removeEl); 
            books.removeChild(removeEl);
            
        })  
        x++;
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

function clearDisplay() {
    while (books.lastChild) {
        books.removeChild(books.lastChild);
    }
}
  

