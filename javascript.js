const myLibrary = []; // An array of books in the library 
const tableBody = document.querySelector("tbody");
const newBook = document.querySelector(".new-bk");


function Book(name, author, number_of_pages, read){
    //the constructor for Books to be added to the library//
    this.ID = crypto.randomUUID()
    this.name = name;
    this.author = author;
    this.number_of_pages = number_of_pages;
    this.read = read;
}


function addBook (item){
    //add books to the library folder 
    myLibrary.push(item)
    return item 
      
}

function dispTable(myLibrary, tableBody){
    //displays books in the array with the table//
    tableBody.innerHTML = " " //to clear the table and prevent dublication 
    
    for (let book of myLibrary){
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${book.ID}</td>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.number_of_pages}</td>
        <td>${book.read}</td>`
        tableBody.appendChild(row)


    }
    return tableBody
}
//form to take inputs when users add Books to myLibrary
const form = document.createElement("form")
form.innerHTML = `<fieldset>
                    <label for = "Book_title">Book Title </label>
                    <input type="text" id= "Book_title" name= "name"></input>
                    <label for = "Author">Book Author</label>
                    <input type="text" id="Author" name="author"></input>
                    <label for ="pages" >Number of Pages</label>
                    <input type="number" id="pages" name="number_of_pages"></input>
                    <label for="read"  >Read</label>
                    <input id="read" type="radio" value="yes" name="read"></input>
                    <button>Submit</button>
                    
                </fieldset>`
                

const formDisp = document.querySelector(".lib-form"); //div containing forms imported to append child element//
//newBook button to callup form when clicked 
newBook.addEventListener("click", ()=>{
    formDisp.appendChild(form)
    form.style.display ="block";
    
})
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const name01 = form.Book_title.value;
    const author01 = form.Author.value;
    const pages01 = form.pages.value;
    const read01 = form.read.value
    const item = new Book(name01, author01, pages01, read01)
    addBook(item)
    dispTable(myLibrary, tableBody)

})

    
const item1 = new Book("AYod", "you", 54, true)
const item2 = new Book("Tedi", "Tat", 56, false)


addBook(item1)
addBook(item2)


console.log(myLibrary) 

