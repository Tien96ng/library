// Variables to call Elements by ID.
const showFormBtn = document.getElementById("showFormBtn")
const form = document.getElementById("bookForm")
const libraryDivContainer = document.getElementById("renderLibrary")
const removeBookBtnQuery = document.getElementsByClassName("deleteBookBtn")

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
    errorMsg.innerHTML = ""
    return false
})


const renderBook = (book) => {
    // Create Buttons to delete book and for read toggle.
    let removeBookBtn = document.createElement("button")
    let btnNode = document.createElement("button")
    removeBookBtn.innerText = "Remove"

    // Create container to separate each book entry.
    let bookContainerDiv = document.createElement("div")

    // Add a Class for styling in CSS and Eventlistener handling.
    bookContainerDiv.classList.add("bookContainer")
    removeBookBtn.classList.add("deleteBookBtn")
    removeBookBtn.setAttribute("type", "button")

    // Append the Div to the Initial Container.
    libraryDivContainer.appendChild(bookContainerDiv)

    // Look through the book information entered to display details.
    for (const [key, value] of Object.entries(book)) {
        // Create a P tag for every detail and append to page.
        let pNode = document.createElement("p")

        // Logic for displaying book information to screen.
        if(key === "pages") {
            pNode.innerHTML = `Number of Pages: ${value}`
        } else if(key === "read") {

            if(value) {
                btnNode.innerHTML = "Read: Yes"
                btnNode.style.backgroundColor = "Green"
            } else {
                btnNode.innerHTML = "Read: No"
                btnNode.style.backgroundColor = "Red"
            }

        } else {
            pNode.innerHTML = `${key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase()}: ${value}`
        }

        pNode.classList.add("bookDetail")
        btnNode.classList.add("readBtn")
        btnNode.setAttribute("type", "button")
        bookContainerDiv.append(pNode)
        bookContainerDiv.append(btnNode)
    }
    bookContainerDiv.appendChild(removeBookBtn)
    removeBookBtn.addEventListener("click", () => {

        // Loop through the myLibrary array until finding book to remove on screen and within the array.
        myLibrary.map((value, index) => {
            let authorElement = bookContainerDiv.firstChild.innerHTML.slice(8)
            alert(myLibrary[index].author === authorElement) // FOR DEBUGGING, REMOVE LATER!!!
            if(myLibrary[index].author === authorElement) {
                myLibrary.splice(index, 1)
                bookContainerDiv.remove()
            }
            
        })
        
    })

    btnNode.addEventListener("click", () => {
        if(btnNode.innerHTML.split(" ")[1] === "Yes") {
            btnNode.style.backgroundColor = "Red"
            btnNode.innerText = "Read: No"
        } else {
            btnNode.style.backgroundColor = "Green"
            btnNode.innerText = "Read: Yes"
        }
    })
}

const readToggleBtn = document.getElementsByClassName("readBtn")


/*
document.getElementById("debugLibrary").addEventListener("click", () => {
    alert(JSON.stringify(myLibrary))
}) // FOR DEBUGGING DELETE LATER!!

*/
