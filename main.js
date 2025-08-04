const libraryArr = [];
//random id generator



const dialog = document.querySelector("#myModal");
const openBtn = document.querySelector("#openModal-btn");
const closeBtn = document.querySelector("#closeModal-btn");
const addBookForm = document.querySelector("form");
const bookContainer = document.querySelector(".book-container");



//constructor for a book
function Book(author, title, pages, isRead,id){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
    this.id = id;
}
//adds the book to the DOM displaying it on the screen
function displayBook(newBookObj){
    const book = document.createElement("div");
    const title = document.createElement("header1");
    const author = document.createElement("p")
    const pages = document.createElement("p")
    const isRead = document.createElement("p");
    const deleteBookBtn = document.createElement("button");


    //add the book title to teh display
    title.classList.add("book-title");
    title.textContent = "Title: "+newBookObj.title;
    book.appendChild(title);

    //add the author to display
    author.classList.add("book-title");
    author.textContent = "Author: "+newBookObj.author;
    book.appendChild(author);

    //add pages to display
    pages.classList.add("book-title");
    pages.textContent = "Number of Pages: "+newBookObj.pages;
    book.appendChild(pages);

    isRead.classList.add("book-title");
    isRead.textContent = "Is the Book Read: "+newBookObj.isRead;
    book.appendChild(isRead);


    deleteBookBtn.classList.add("deleteBook");
    deleteBookBtn.textContent = "Delete";
    deleteBookBtn.setAttribute("data-id", newBookObj.id); 
    book.appendChild(deleteBookBtn);

    book.classList.add("book");
    book.setAttribute("id",newBookObj.id);


    bookContainer.appendChild(book);
}
// take params, create a book then store it in the array
function addBookToLibrary(author,title,pages,isRead,id) 
{
    
    const newBook = new Book(author,title,pages,isRead,id);
    libraryArr.push(newBook);
    displayBook(newBook);
}

openBtn.addEventListener("click",function(){
    dialog.showModal();
});
closeBtn.addEventListener("click", function(){
    dialog.close();
});

bookContainer.addEventListener("click",function(e){
    if (e.target.classList.contains("deleteBook")) 
        {
        const id = e.target.dataset.id;
        const book = document.getElementById(id); 
        if (book) 
        {
            book.remove();
        }
    }
});

addBookForm.addEventListener("submit",function(event){
    //prevents going to server
    event.preventDefault();

    const formData = new FormData(addBookForm);
    const title = formData.get("title");
    const author = formData.get("author");
    const pages = parseInt(formData.get("pages"));
    const isRead = addBookForm.querySelector('input[type="checkbox"]').checked;
    let id = crypto.randomUUID();
    addBookToLibrary(author,title,pages,isRead,id)

    dialog.close();
});