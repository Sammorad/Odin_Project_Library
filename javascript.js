const myLibrary = []; // An array of books in the library 

function Book(name, author, number_of_pages, read){
    //the constructor for Books to be added to the library//
    this.ID = crypto.randomUUID()
    this.name = name;
    this.author = author;
    this.number_of_pages = number_of_pages;
    this.read = read;
}


Book.prototype.toLibrary = function(){
    //adding books to the library //
    myLibrary.push(this)
};

const Book1 = new Book("General Mathematics", "Ayodeji Owoeye", 600, true);
Book1.toLibrary()

const Book2 = new Book("English for Arts", "Moji Owoeye", 368, false)
Book2.toLibrary()

function displayBook(ID){
    
    for(let i = 0; i < (myLibrary.length -1); i++){
        if (myLibrary[i].ID ===ID){
            return myLibrary[i] 
        }
        else{
            return "Book not found "
        }
    }
}


console.log(myLibrary)

console.log(displayBook(Book1.ID))

