// Variables to call Elements by ID.
const showFormBtn = document.getElementById("showFormBtn")
const form = document.getElementById("bookForm")

// Initialized the Form to be hidden on load.
form.style.display = "none"

// Initialize the Library Array and new book variable.
let myLibrary = []
let newBook

// Book Constructor:
function Book(author, title, numPages, read = false) {
    this.author = author,
    this.title = title,
    this.numPages = numPages + "pg.",
    this.read = read
}

function addBookToLibrary() {
    // do stuff here
}

// Eventlistener to display Book form when button is clicked.
showFormBtn.addEventListener("click", () => {
    form.style.display === "none" ?
        form.style.display = "block" :
        form.style.display = "none"
})

// Eventlistener to read inputs on form submission.
form.addEventListener("submit", (event) => {
    event.preventDefault()
    let formValue = event.target.elements
    newBook =  new Book(
        formValue.author.value,
        formValue.title.value,
        formValue.numPages.value,
        form.read.value
    )


    myLibrary.push(newBook)
    alert(JSON.stringify(newBook))
    return false
})






document.getElementById("debugLibrary").addEventListener("click", () => alert(JSON.stringify(myLibrary)))