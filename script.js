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
function Book(author, title, pages, read = false) {
    this.author = author,
    this.title = title,
    this.pages = pages,
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
        formValue.pages.value,
        formValue.read.checked
    )

    // Pushes Obj to library array.
    myLibrary.push(newBook)
    // Renders new book on Submission.
    renderBook(newBook) 
    // Reset the form fields after submission.
    form.reset()
    return false
})

const renderBook = (book) => {
    // Create container to separate each book entry.
    let bookContainerDiv = document.createElement("div")
    // Add a Class for styling in CSS.
    bookContainerDiv.classList.add("bookContainer")

    // Append the Div to the Initial Container.
    libraryDivContainer.appendChild(bookContainerDiv)

    // Look through the book information entered to display details.
    for (const [key, value] of Object.entries(book)) {
        // Create a P tag for every detail and append to page.
        let pNode = document.createElement("p")
        let readBtn = document.createElement("button")

        if(key === "pages") {
            pNode.innerHTML = `Number of Pages: ${value}`
        } else if(key === "read") {
            value ?
                pNode.innerHTML = "Read: Yes" :
                pNode.innerHTML = "Read: No"
        } else {
            pNode.innerHTML = `${key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase()}: ${value}`
        }

        pNode.classList.add("bookDetail")
        bookContainerDiv.append(pNode)
    }
}

document.getElementById("debugLibrary").addEventListener("click", () => {
    alert(JSON.stringify(myLibrary))
    alert(myLibrary[0].author)
}) // FOR DEBUGGING DELETE LATER!!