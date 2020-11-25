// Variables to call Elements by ID.
const showFormBtn = document.getElementById("showFormBtn")
const form = document.getElementById("bookForm")

// Initialized the Form to be hidden on load.
form.style.display = "none"

// Eventlistener to display Book form when button is clicked.
showFormBtn.addEventListener("click", () => {
    form.style.display === "none" ?
        form.style.display = "block" :
        form.style.display = "none"
})

// Eventlistener to read inputs on form submission.
form.addEventListener("submit", (event) => {
    // event.target.elements.(ELEMENT ID).checked
    event.preventDefault()
    
    return false
})


// Initialize the Library Array and new book variable.
let myLibrary = []
let newBook

// Book Constructor:
function Book(author, title, numPages, read = false) {
    author = this.author,
    title = this.title,
    numPages = this.numPages + "pg.",
    read = this.read
}

function addBookToLibrary() {
    // do stuff here
}


const showForm = () => {

}