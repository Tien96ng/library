// Variables to call Elements by ID.
const showFormBtn = document.getElementById("showFormBtn")
const form = document.getElementById("bookForm")
const library = document.getElementById("renderLibrary")

// Initialized the Form to be hidden on load.
form.style.display = "none"

// Initialize the Library Array and new book variable.
let myLibrary = []
let newBook

// Book Constructor:
function Book(author, title, numPages, read = false) {
    this.author = author,
    this.title = title,
    this.numPages = numPages,
    this.read = read
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
        formValue.read.checked
    )

    // Pushes Obj to library array.
    myLibrary.push(newBook)
    // Reset the form fields after submission.
    form.reset()
    alert(JSON.stringify(newBook)) // FOR DEBUGGING DELETE LATER!!
    return false
})

const renderBook = () => {
    let pNode = document.createElement("p")


    myLibrary.map(book => {
        pNode.appendChild(book.author)
        pNode.appendChild(book.title)
        library.appendChild(pNode)
    })
}

// Eventlistener for when the Library changes.


document.getElementById("debugLibrary").addEventListener("click", () => alert(JSON.stringify(myLibrary))) // FOR DEBUGGING DELETE LATER!!
// document.getElementById("debugLibrary").addEventListener("click", renderBook) // FOR DEBUGGING DELETE LATER!!
