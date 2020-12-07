// Variables to call Elements by ID.
const showFormBtn = document.getElementById("showFormBtn"),
    form = document.getElementById("bookForm"),
    libraryDivContainer = document.getElementById("renderLibrary"),
    removeBookBtnQuery = document.getElementsByClassName("deleteBookBtn"),
    openModalTrigger = document.querySelector(".trigger"),
    closeModalTrigger = document.querySelector(".close"),
    modal = document.querySelector(".modal")

// Initialize the Library Array and new book variable.
let myLibrary = []
let newBook

// Book Constructor:
function Book(title, author, pages, read = false) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

// Modal EventListeners for Open, Close, and click outside Modal.
openModalTrigger.addEventListener("click", () => modal.classList.add("open"))
closeModalTrigger.addEventListener("click", () => modal.classList.remove("open"))
window.addEventListener("click", (event) => {
    if(event.target === modal) {
        modal.classList.remove("open")
    }
})



// Eventlistener to read inputs on form submission.
form.addEventListener("submit", (event) => {
    event.preventDefault()
    let formValue = event.target.elements

    newBook =  new Book(
        formValue.title.value,
        formValue.author.value,
        formValue.pages.value,
        formValue.read.checked
    )

    // Pushes Obj to library array.
    myLibrary.push(newBook)
    // Renders new book on Submission.
    renderBook(newBook) 
    // Reset the form fields after submission.
    form.reset()
    modal.classList.remove('open');
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
            pNode.innerHTML = `Number of Pages: ` + `<span class="numberStyle">` + value + `</span>`
            pNode.classList.add("numPages")
        } else if(key === "read") {

            if(value) {
                btnNode.innerHTML = "Read: Yes"
                btnNode.style.backgroundColor = "limegreen"
            } else {
                btnNode.innerHTML = "Read: No"
                btnNode.style.backgroundColor = "Red"
            }

        } else if(key === "author"){
            pNode.innerHTML = `by ${value}`
            pNode.classList.add("bookAuthor")
        } else {
            pNode.innerHTML = value
            pNode.classList.add("bookTitle")
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
            if(myLibrary[index].author === authorElement) {
                myLibrary.splice(index, 1)
                bookContainerDiv.remove()
            }
            
        })
        
    })

    // EventHandler to toggle the read button.
    btnNode.addEventListener("click", () => {
        if(btnNode.innerHTML.split(" ")[1] === "Yes") {
            btnNode.style.backgroundColor = "Red"
            btnNode.innerText = "Read: No"
        } else {
            btnNode.style.backgroundColor = "limegreen"
            btnNode.innerText = "Read: Yes"
        }
    })
}


