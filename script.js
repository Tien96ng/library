// Variables to call Elements by ID.
const showFormBtn = document.getElementById("showFormBtn")
const form = document.getElementById("bookForm")
const libraryDivContainer = document.getElementById("renderLibrary")

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
    renderBook() // Works on Submission
    // Reset the form fields after submission.
    form.reset()
    alert(JSON.stringify(newBook)) // FOR DEBUGGING DELETE LATER!!
    return false
})

const renderBook = () => {
    let pNode = document.createElement("p")
    pNode.classList.add("book")


    myLibrary.map(book => {
        let authorText = document.createTextNode(`${book.author}`)
        let titleText = document.createTextNode(`${book.title}`)
        let numPagesText = document.createTextNode(`${book.numPages}`)
        let readText = document.createTextNode(`${book.read}`) // Change this to check mark or x.


        libraryDivContainer.appendChild(pNode.appendChild(authorText))
        libraryDivContainer.appendChild(pNode.appendChild(titleText))
        libraryDivContainer.appendChild(pNode.appendChild(numPagesText))
        libraryDivContainer.appendChild(pNode.appendChild(readText))
    })
}

document.getElementById("testRenderBook").addEventListener("click", () => {
    myLibrary.length > 0 && renderBook()
})


document.getElementById("debugLibrary").addEventListener("click", () => {
    alert(JSON.stringify(myLibrary))
    alert(myLibrary[0].author)
}) // FOR DEBUGGING DELETE LATER!!


let testP = document.createElement("p")
let testNode = document.createTextNode("test")
let finalP = testP.appendChild(testNode)
//libraryDivContainer.appendChild(finalP)


