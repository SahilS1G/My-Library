class Book {
    constructor(name, author, type) {
        this.name = name,
            this.author = author,
            this.type = type;
    }
}

//display constructor
class Display {
    constructor() {
    }

    //add methods to display prototype
    add(book) {
        console.log("adding to UI");
        tableBody = document.getElementById("tableBody");
        let uiString = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
        tableBody.innerHTML += uiString;

    }

    // implement the clear function
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    // implement the validate function
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    // implement show function
    show(type, displayMessage) {
        let message = document.getElementById("message");
        message.innerHTML = `
                  <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                      <strong>Message:</strong>  ${displayMessage}
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                      </button>
                  </div>`;
        setTimeout(function () {
            message.innerHTML = '';
        }, 2000);
    }
}






//add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm")
libraryForm.addEventListener("submit", libraryFormSubmit)

function libraryFormSubmit(e) {
    console.log("you have submittes library form")
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("Author").value;
    let type;

    let fiction = document.getElementById("fiction")
    let programming = document.getElementById("programming")
    let cooking = document.getElementById("cooking")

    if (fiction.checked) {
        type = fiction.value
    }
    else if (cooking.checked) {
        type = cooking.value
    }
    else if (programming.checked) {
        type = programming.value
    }

    let book = new Book(name, author, type)
    console.log(book)

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear()
        display.show("done", 'your book has been added')
    }
    else {
        display.show("danger", "sorry you cannot add this book")
    }
    e.preventDefault();
}

