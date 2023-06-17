const books = [{
    id: 1,
    title: "An Introduction to Dreamland1",
    author: "Bhagat Singh",
    description: "Description of Book 1",
   // image:"https://m.media-amazon.com/images/I/41BPXcvTyJL.jpg"
},
{
    id: 2,
    title: "War and Peace",
    author: "Leo Tolstoy",
    description: "Description of Book 2",
  //  image:"https://images.indianexpress.com/2019/08/war-and-peace-2.jpg"
},
{
    id: 3,
    title: "A Tale of Two Cities",
    author: "Charles Darwin",
    description: "Description of Book 3"
},
{
    id: 4,
    title: "The Ambuja Story",
    author: "Narotam Sekhsaria",
    description: "Description of Book 3"
},
{
    id: 5,
    title: "1971: Charge of the Gorkhas and other stories",
    author: "Rachna Bisht Rawat",
    description: "Description of Book 3"
},
{
    id: 6,
    title: "Vahana Masterclass",
    author: "Alfredo Covelli",
    description: "Description of Book 3"
},
{
    id: 7,
    title: "Death of a City",
    author: "Amrita Pritam",
    description: "Description of Book 3"
},
{
    id: 8,
    title: "A Suitable Boy",
    author: "Vikram Seth",
    description: "Description of Book 3"
},
{
    id: 9,
    title: "A Week with Gandhi",
    author: "Louis Fisher",
    description: "Description of Book 3"
},
{
    id: 10,
    title: "A Woman's Life",
    author: "Guy de Maupassant",
    description: "Description of Book 3"
}


];

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const cartItems = document.getElementById("cartItems");
const clearCartBtn = document.getElementById("clearCartBtn");

let cart = [];

// Display all books initially
displayBooks(books);

// Event listeners for search, sort, and cart
searchInput.addEventListener("input", handleSearch);
sortSelect.addEventListener("change", handleSort);
bookList.addEventListener("click", addToCart);
clearCartBtn.addEventListener("click", clearCart);

function displayBooks(booksArray) {
// Clear the book list
bookList.innerHTML = "";

booksArray.forEach(book => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book");

    const title = document.createElement("h2");
    title.textContent = book.title;
    bookItem.appendChild(title);

    const author = document.createElement("p");
    author.textContent = "By " + book.author;
    bookItem.appendChild(author);

    const description = document.createElement("p");
    description.textContent = book.description;
    bookItem.appendChild(description);

    const image = document.createElement("img");
    image.src = book.image;
    bookItem.appendChild(image);

    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.style.backgroundColor = "#F99245";
    addToCartBtn.dataset.id = book.id;
    bookItem.appendChild(addToCartBtn);

    bookList.appendChild(bookItem);
});
}

function handleSearch() {
const searchText = searchInput.value.toLowerCase();

const filteredBooks = books.filter(book => {
    const title = book.title.toLowerCase();
    const author = book.author.toLowerCase();
    return title.includes(searchText) || author.includes(searchText);
});

displayBooks(filteredBooks);
}

function handleSort() {
const sortKey = sortSelect.value;

const sortedBooks = books.sort((a, b) => {
    const itemA = a[sortKey].toLowerCase();
    const itemB = b[sortKey].toLowerCase();

    if (itemA < itemB) {
        return -1;
    }
    if (itemA > itemB) {
        return 1;
    }
    return 0;
});

displayBooks(sortedBooks);
}

function addToCart(event) {
if (event.target.tagName === "BUTTON") {
    const bookId = parseInt(event.target.dataset.id);
    const selectedBook = books.find(book => book.id === bookId);

    if (selectedBook) {
        cart.push(selectedBook);
        updateCartUI();
    }
}
}

function updateCartUI() {
cartItems.innerHTML = "";

cart.forEach(book => {
    const cartItem = document.createElement("li");
    cartItem.textContent = book.title;
    cartItems.appendChild(cartItem);
});
}

function clearCart() {
cart = [];
updateCartUI();
}




let l = document.getElementById("login");
var email = document.getElementById("email");
var password = document.getElementById("password");
var emailerr = document.getElementById("emailerr");
var passworderr = document.getElementById("passworderr");
email.addEventListener("blur", function(event) {
if (event.target.value === "") {
    emailerr.textContent = "Required*";
} else {
    emailerr.textContent = "";
}
});
password.addEventListener("blur", function(event) {
if (event.target.value === "") {
    passworderr.textContent = "Required*";
} else {
    passworderr.textContent = "";
}
});
console.log(email)
l.addEventListener("submit", function(event) {
event.preventDefault();

// Authenticate user (you can replace this with your own authentication logic)
// For this example, let's assume the user credentials are "admin" and "password"
if (email === "admin" && password === "password") {

    document.getElementById("message").textContent = "Authentication successful!";
} else {
    document.getElementById("message").textContent = "Invalid email or password.";
}


// Function to handle Gmail signup
function signupWithGmail() {
    // Add your logic for Gmail signup here
    console.log("Signing up with Gmail...");
}

// Function to handle phone number signup
function signupWithPhoneNumber() {
    // Add your logic for phone number signup here
    console.log("Signing up with phone number...");

}

// Attach event listeners
//document.getElementById("authForm").addEventListener("submit", submitForm);
document.getElementById("gmailSignup").addEventListener("click", signupWithGmail);
document.getElementById("phoneSignup").addEventListener("click", signupWithPhoneNumber);

});



