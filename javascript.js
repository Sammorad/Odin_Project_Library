const myLibrary = []; // An array of books in the library 
const tableBody = document.querySelector("tbody");


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
    
const item1 = new Book("AYod", "you", 54, true)
const item2 = new Book("Tedi", "Tat", 56, false)

addBook(item1)
addBook(item2)


console.log(dispTable(myLibrary, tableBody)) 

