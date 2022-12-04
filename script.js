let myLibrary = [];

function Book(title, author, pages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBook() {
    const books = document.querySelector(".books");


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
    })
}


addBookToLibrary("Dior", "Steven Dior", 356, "Read");
addBookToLibrary("Black Pen", "Robert E. Lee", 1065, "Not Read" );
addBookToLibrary("Game of Thrones", "George R.R. Martin", 2156, "Read");

console.log("End of array ", myLibrary);

displayBook();