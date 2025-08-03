const libraryArr = [];
//random id generator
crypto.randomUUID()


const dialog = document.querySelector("#myModal");
const openBtn = document.querySelector("#openModal-btn");
const closeBtn = document.querySelector("#closeModal-btn");
const addBookBtn = document.querySelector("#addBookBtn");

openBtn.addEventListener("click",function(){
    dialog.showModal();
});
closeBtn.addEventListener("click", function(){
    dialog.close();
});

addBookBtn.addEventListener("click",function(){
    dialog.close();
});


//constructor for a book
function Book(author, title, pages, isRead,id){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
    this.id = id;
}
// take params, create a book then store it in the array
function addBookToLibrary(author,title,pages,isRead,id) 
{
    libraryArr.push(newBook);
    const newBook = new Book(author,title,pages,isRead,id);
  
}