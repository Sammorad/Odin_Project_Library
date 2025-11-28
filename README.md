# My Library App 📚

A dynamic web application for managing your personal book collection. Add books, track your reading progress, and organize your library with ease.

## Features ✨

- **Add Books** - Create new book entries with title, author, page count, and reading status
- **View Library** - Display all books in a clean, organized table format
- **Track Reading Progress** - Mark books as read or unread
- **Delete Books** - Remove books from your library with a single click
- **Unique Identification** - Each book gets a unique UUID for reliable tracking
- **Real-time Updates** - Table updates automatically when you add or delete books

## Technology Stack 🛠️

- **HTML5** - Semantic markup and form structure
- **CSS3** - Responsive design and modern styling
- **JavaScript (ES6+)** - Dynamic functionality with OOP principles

## Project Structure 📁

```
Odin_Project_Library/
├── index.html       # Main HTML structure
├── style.css        # Styling and layout
├── javascript.js    # Application logic
└── README.md        # Project documentation
```

## How to Use 🚀

1. **Clone or download the project:**
   ```bash
   git clone <repository-url>
   cd Odin_Project_Library
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser

3. **Add a Book:**
   - Click the "Add Book" button
   - Fill in the book details (title, author, pages)
   - Check the "Read" checkbox if you've read the book
   - Click "Submit"

4. **View Your Library:**
   - Click the "View Book" button to display all books in table format

5. **Delete a Book:**
   - Click the "Delete" button next to any book to remove it from your library

## Code Architecture 🏗️

### Book Constructor
```javascript
function Book(name, author, number_of_pages, read) {
    this.ID = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.number_of_pages = number_of_pages;
    this.read = read;
}
```

### Core Functions

- **`addBook(item)`** - Adds a book object to the library array
- **`dispTable(myLibrary, tableBody)`** - Renders the library as an HTML table
- **Form Event Listener** - Captures user input and creates book objects

### Key Features

- **Event Delegation** - Single event listener handles all delete button clicks
- **Dynamic DOM Manipulation** - Table updates in real-time without page refresh
- **Array Filtering** - Efficient deletion using JavaScript array methods
- **Unique IDs** - Uses `crypto.randomUUID()` for reliable book identification

## Data Structure 📊

Books are stored as objects in the `myLibrary` array:

```javascript
{
    ID: "uuid-string",
    name: "Book Title",
    author: "Author Name",
    number_of_pages: 300,
    read: true/false
}
```

## Browser Compatibility 🌐

- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires support for:
  - ES6+ JavaScript features
  - Crypto API for UUID generation
  - CSS Flexbox

## Future Enhancements 🔮

- [ ] Add edit functionality for existing books
- [ ] Search and filter books by title or author
- [ ] Sort books by various criteria
- [ ] Local storage persistence
- [ ] Book ratings and reviews
- [ ] Export library to PDF/CSV
- [ ] Dark mode theme
- [ ] Mobile-responsive improvements

## Learning Outcomes 📖

This project demonstrates:
- Object-oriented JavaScript with constructor functions
- DOM manipulation and dynamic content rendering
- Event handling and event delegation
- Form validation and data capture
- Array methods (map, filter, indexOf)
- ES6+ features (template literals, arrow functions, const/let)

## Author 👨‍💻

**Sammorad** - The Odin Project

## License 📄

This project is part of The Odin Project curriculum and is available for educational purposes.

## Contributing 🤝

Feel free to fork this project, submit issues, or create pull requests with improvements!

---

Happy reading! 📚✨
