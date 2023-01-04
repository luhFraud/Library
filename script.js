


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
let cardCheckbox = 0;
function displayBook() {
    clearDisplay();
    

    myLibrary.forEach(myLibrary => {
        
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute('id', `card-${cardCheckbox}`);
        books.appendChild(card);
        
        const titleH2 = document.createElement("h2");
        titleH2.textContent = `${myLibrary.title}`
        card.appendChild(titleH2);

        const authorP = document.createElement("p");
        authorP.textContent = `${myLibrary.author}`
        card.appendChild(authorP);
        
        const pagesP = document.createElement("p");
        pagesP.textContent = `# of Pages: ${myLibrary.pages}`
        card.appendChild(pagesP);


        
        let readShow = document.createElement("input");
        readShow.classList.add("read-checkbox");
        readShow.setAttribute('type', 'checkbox');
        
        

        readShow.setAttribute('id', `readShow-checkbox-${cardCheckbox}`);

        const readP = document.createElement('p');
        readP.textContent = 'Read?'
        card.appendChild(readP);
        card.appendChild(readShow);
        if(myLibrary.read === true) {
            card.style.backgroundColor = '#32CD32'
            console.log("this card is true")

            readShow.checked = true
        } else {
            card.style.backgroundColor = '#D2042D'
            console.log("this card is false")
            readShow.checked = false
        }
        

        
        document.querySelector('#readShow-checkbox-' + cardCheckbox)
        .addEventListener('click', function(){
            let changeReadStatus = this.parentNode;
            console.log(changeReadStatus);
            if (readShow.checked === true) {
                changeReadStatus.style.background = '#32CD32'
            } else {
                changeReadStatus.style.background = '#D2042D'
            }

        })
        

        const removeBookBtn = document.createElement("button");
        removeBookBtn.classList.add("remove-book-btn"); 
        removeBookBtn.setAttribute('id', `remove-btn-${x}`);
        removeBookBtn.textContent = "Delete";
        card.appendChild(removeBookBtn); 

        document.querySelector('#remove-btn-' + x).addEventListener('click', function() {
            let removeEl = this.parentNode; 
            books.removeChild(removeEl);
            removeMoveFromArray();
            
        })  
        x++;
        cardCheckbox++;
        

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

    convertData();
    resetForm();

   

  });
//subBtn.addEventListener('click', convertData);
subBtn.addEventListener('click', undisplayForm);

function undisplayForm(){
    document.getElementById("form-display").style.display = "none";
}


function convertData() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    let read = document.getElementById("read").checked;

    //let checkboxValue = document.getElementById("read").value

    


    addBookToLibrary(title, author, pages, read);
}

function resetForm() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const readInput = document.getElementById('read');

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.checked= '';
}
function clearDisplay() {
    while (books.lastChild) {
        books.removeChild(books.lastChild);
    }
}

  
function removeMoveFromArray(x) {
    myLibrary.splice(x , 1);
}



