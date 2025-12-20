let myLibrary = []; // An array of books in the library 
const tableBody = document.querySelector("tbody");
const newBook = document.querySelector(".new-bk");
const viewBook = document.querySelector(".view")


class Book{
    //a class for book and its basic operations//
    constructor(name, author, number_of_pages, read){
        this.ID = crypto.randomUUID();
        this.author = author;
        this.name = name;
        this.number_of_pages = number_of_pages;
        this.read = read;
    }


    addBook(){
        //a method to add books to the library//
        myLibrary.push(this)

    }
}

const ifReadBtn = document.createElement("button");//created a button to assert if the book as been read//
        ifReadBtn.textContent = "Book read"
function dispTable(myLibrary, tableBody){
    //displays books in the array with the table//
    tableBody.innerHTML = " " //to clear the table and prevent dublication 
    
    for (let book of myLibrary){
        const row = document.createElement("tr");
        const deleteBtn = document.createElement("button");
               
        deleteBtn.textContent = "Delete";
        deleteBtn.dataset.id = book.ID;

        row.innerHTML = `
        <td>${(myLibrary.indexOf(book) + 1)}</td>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.number_of_pages}</td>
        <td>${book.read}</td>
        `//delete individual items from the myLibrary//
        const del_td = document.createElement("td")
        del_td.appendChild(deleteBtn);
        row.appendChild(del_td)
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
                    <label for = "read"> Read<\label>
                    <input type = "checkbox" id = "read" name = "read">
                    <button>Submit</button>
                    
                    
                </fieldset>`
                

const dispForm = document.querySelector(".forms")//div to attach forms when displayed 
//newBook button to callup form when clicked 
newBook.addEventListener("click", ()=>{
    dispForm.appendChild(form)
    form.style.display ="block";
    
})
form.addEventListener("submit", (event)=>{
    //this function adds book to library on click of the submit button
    event.preventDefault()
    const name01 = form.Book_title.value;
    const author01 = form.Author.value;
    const pages01 = form.pages.value;
    const readStatus = form.read.checked;
 

    const item = new Book(name01, author01, pages01, readStatus)
    item.addBook()
    

    //also check the read checkbox if clicked 

    
   

    

})

viewBook.addEventListener("click", ()=>{
    //to display the content of myLibrary in table format//
    dispTable(myLibrary, tableBody)
       
})


//Event listener for delete button to delete books via clicks//
tableBody.addEventListener("click", (event)=>{
    if (event.target.textContent === "Delete"){
        const bookID = event.target.dataset.id;
        myLibrary = myLibrary.filter(book => book.ID !== bookID);
        dispTable(myLibrary, tableBody) //Render the table 
    }

})













