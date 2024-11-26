/** 
 * Developer: Oswaldo Fabrizio De Los Santos Ascencio
 * EMPLID: 24232142
 * File name: script.js
 * The main script for the website 
 */

// Sort cards, filter out cards, add cards to shopping cart across the entire website and make each card display its own information
// Dynamic pagination, search bar and perhaps ratings?
console.log("Hello world!");

// In the future, an SQL database should be looked into 
var products = [
    {id: 1, name: "Product 1", type: "Shirt", desc: "Product 1 description", price: 100, image: "Product.webp", title: "Product title 1", caption: "Product caption 1"},
    {id: 2, name: "Product 2", type: "Hoodie", desc: "Product 2 description", price: 200, image: "Product.webp", title: "Product title 2", caption: "Product caption 2"},
    {id: 3, name: "Product 3", type: "Jeans", desc: "Product 3 description", price: 300, image: "Product.webp", title: "Product title 3", caption: "Product caption 3"},
    {id: 4, name: "Product 4", type: "Sweatshirt", desc: "Product 4 description", price: 400, image: "Product.webp", title: "Product title 4", caption: "Product caption 4"},
    {id: 5, name: "Product 5", type: "T-Shirt", desc: "Product 5 description", price: 500, image: "Product.webp", title: "Product title 5", caption: "Product caption 5"}
];

var products = [
    { id: 1, name: "Aurora Tee", type: "Shirt", desc: "A luminous tee that glows in the dark, perfect for night outings.", price: 150, image: "aurora_tee.webp", title: "Glow Tee", caption: "Shine Bright Everywhere!" },
    { id: 2, name: "Velvet Blaze", type: "Hoodie", desc: "A sleek and warm hoodie with a luxurious velvet finish.", price: 250, image: "velvet_blaze.webp", title: "Velvet Hoodie", caption: "Stay Warm in Style" },
    { id: 3, name: "Ocean Drift Jeans", type: "Jeans", desc: "Comfortable and stylish jeans inspired by ocean waves.", price: 300, image: "ocean_drift.webp", title: "Wave Jeans", caption: "Ride the Fashion Wave" },
    { id: 4, name: "Cloud Burst Sweater", type: "Sweatshirt", desc: "A cozy sweatshirt with a cloud-patterned design.", price: 400, image: "cloud_burst.webp", title: "Cozy Clouds", caption: "Wrap Yourself in Comfort" },
    { id: 5, name: "Retro Splash Tee", type: "T-Shirt", desc: "A funky retro-themed t-shirt that brings back the 80s vibes.", price: 180, image: "retro_splash.webp", title: "Retro Tee", caption: "Flashback in Style" },
    { id: 6, name: "Lunar Eclipse Jacket", type: "Jacket", desc: "A bold jacket with a reflective lunar eclipse design.", price: 600, image: "lunar_eclipse.webp", title: "Eclipse Jacket", caption: "Outshine the Night" },
    { id: 7, name: "Solar Flare Joggers", type: "Pants", desc: "Joggers designed for comfort with a solar-inspired gradient.", price: 350, image: "solar_flare.webp", title: "Flare Joggers", caption: "Run in Style" },
    { id: 8, name: "Galaxy Explorer Backpack", type: "Accessory", desc: "A spacious backpack with a stunning galaxy print.", price: 500, image: "galaxy_explorer.webp", title: "Galaxy Bag", caption: "Carry the Universe" },
    { id: 9, name: "Meteor Trail Scarf", type: "Accessory", desc: "A lightweight scarf with a unique meteor trail design.", price: 120, image: "meteor_trail.webp", title: "Meteor Scarf", caption: "Trail Your Style" },
    { id: 10, name: "Spectrum Sneakers", type: "Footwear", desc: "Color-changing sneakers powered by your steps.", price: 700, image: "spectrum_sneakers.webp", title: "Dynamic Sneakers", caption: "Step into the Future" },
    { id: 11, name: "Phoenix Rise Hoodie", type: "Hoodie", desc: "A vibrant hoodie with fiery phoenix artwork.", price: 450, image: "phoenix_rise.webp", title: "Phoenix Hoodie", caption: "Rise Above the Ordinary" },
    { id: 12, name: "Nebula Canvas Hat", type: "Accessory", desc: "A hat with a nebula-inspired design, ideal for sunny days.", price: 150, image: "nebula_canvas.webp", title: "Nebula Hat", caption: "Cover Your Style" },
    { id: 13, name: "Breeze Runner Shorts", type: "Shorts", desc: "Lightweight shorts designed for high-performance activities.", price: 200, image: "breeze_runner.webp", title: "Runner Shorts", caption: "Move with Ease" },
    { id: 14, name: "Aurora Borealis Socks", type: "Accessory", desc: "Socks inspired by the Northern Lights, soft and vibrant.", price: 100, image: "aurora_socks.webp", title: "Northern Socks", caption: "Step in Color" },
    { id: 15, name: "Shadow Drift Coat", type: "Coat", desc: "A sleek, water-resistant coat perfect for all seasons.", price: 850, image: "shadow_drift.webp", title: "Shadow Coat", caption: "Weather the Storm in Style" }
];

// Our pagination count 
let currentPage = 1;
var itemsPerPage = 9;

function renderProducts() {
    // Create a string to hold the HTML for the product cards
    var productList = ""; 

    // Calculate the start and end indices of the current page's products in the products array
    var startIndex = (currentPage - 1) * itemsPerPage;
    console.log(startIndex);
    var endIndex = Math.min(startIndex + itemsPerPage, products.length);
    console.log(endIndex);

    // Create product cards with data- attributes to use later on
    for(var i = startIndex; i < endIndex; i++) {

        productList += "<article class='product-section__list__item'";
            // Loop through all the properties of the current product, registers the properties of an array item as data attributes 
            for (var key in products[i]) {
                if (products[i].hasOwnProperty(key)) {
                    productList += " data-" + key + "='" + products[i][key] + "'";
                    productList += ` data-${key}='${products[i][key]}'`;
                }
            }
        productList += 
        `>
            <img src='resources/images/${products[i].image}' alt=''>
            <header>
                <h2>${products[i].title}</h2>
                <h2>${products[i].price}</h2>
            </header>
            <footer>
                <h2>${products[i].caption}</h2>
            </footer>
            <button class='product-section__list__item__btn' type='button'>
                Add to cart <i class='fas fa-plus'></i>
            </button>
        </article>`;     
    }

    // Add product cards to the DOM
    document.getElementById("products").innerHTML = productList;

    // Add event listeners to each product card
    document.querySelectorAll(".product-section__list__item").forEach(function(item) {

        let itemButton = item.querySelector(".product-section__list__item__btn");

        item.addEventListener("click", function() {
            viewPage(this);
        });

        itemButton.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevents firing the item click event listener and simply fires the item button click event listener instead
            addToCart(this);
        });
    });
}

// Function to create pagination buttons
function renderPaginationButtons() { 
    var totalPages = Math.ceil(products.length / itemsPerPage); // Rounds our integer up if it's a decimal 
    var paginationHTML = "";

    for (var i = 1; i <= totalPages; i++) {
        paginationHTML += `<button class='product-section__pagination__btn' type='button' data-page='${i}'>${i}</button>`;
    }

    let paginationContainer = document.querySelector(".product-section__pagination");

    paginationContainer.innerHTML = paginationHTML;

    // Helper function to create a button
    function createButton(direction, text) {
        let button = document.createElement("button");
        button.classList.add("product-section__pagination__btn");
        button.setAttribute("type", "button");
        button.setAttribute("data-direction", direction);
        button.innerHTML = text;
        return button;
    }

    paginationContainer.prepend(createButton("previous", "&LeftArrow; Previous"));
    paginationContainer.appendChild(createButton("next", "&RightArrow; Next"));

    // Event listener for all of our pagination buttons
    document.querySelectorAll(".product-section__pagination__btn").forEach((button) => {

        button.addEventListener("click", (event) => {
            const direction = event.target.getAttribute("data-direction");

            switch (direction) {
                case "previous":
                    currentPage = Math.max(1, currentPage - 1);
                    updatePaginationStyling(direction);
                    break;
                case "next":
                    currentPage = Math.min(totalPages, currentPage + 1);
                    updatePaginationStyling(direction);
                    break;
                default:
                    currentPage = parseInt(event.target.dataset.page);
                    updatePaginationStyling(); 
                    break;
            }

            function updatePaginationStyling(btn) {
                if (btn) {
                    document.querySelectorAll(".product-section__pagination__btn").forEach((btn) => {
                        btn.classList.remove("product-section__pagination__btn--limit");
                    });
                    event.target.classList.add("product-section__pagination__btn--limit");
                }
                else {
                    if (currentPage == 1) {
                        document.querySelector(".product-section__pagination__btn[data-direction='previous']").classList.add("product-section__pagination__btn--limit");
                    }
                    else if (currentPage == totalPages) {
                        document.querySelector(".product-section__pagination__btn[data-direction='next']").classList.add("product-section__pagination__btn--limit");
                    }
                    else {
                        document.querySelectorAll(".product-section__pagination__btn").forEach((button) => {
                            button.classList.remove("product-section__pagination__btn--limit");
                        });
                    }
                }
            }

            renderProducts(); // Re-render products for the selected page with the currentPage variable
        });
    });

    // Add event listeners to pagination number buttons
    // document.querySelectorAll(".product-section__pagination__btn").forEach((button) => {
    //     button.addEventListener("click", (event) => {
    //         currentPage = parseInt(event.target.dataset.page); 
    //         renderProducts(); // Re-render products for the selected page
    //     });
    // });
}

// Initial render
renderProducts();
renderPaginationButtons();

function viewPage(card) {
    window.alert("View page function called");
    
    createPage(card);

    // window.location.href = "product.html?id=" + card.dataset.id;
    // console.log(this.innerHTML);
    // console.log(this);
    // console.log(card.dataset.name);
    // console.log(card.dataset.type);
    // console.log(card.dataset.price);
}

function createPage(card) { 
    console.log("createPage() function called.");
    console.log(card);

    // Create a new HTML page with a product page layout
    var productPage = document.createElement("article");
    productPage.classList.add("product-page");
    productPage.innerHTML += "<h2>" + card.dataset.name + "</h2>";
    productPage.innerHTML += "<img src='" + "resources/images/" + card.dataset.image + "'>";
    productPage.innerHTML += "<p>" + card.dataset.desc + "</p>";
    productPage.innerHTML += "<p>" + card.dataset.price + "</p>";

    // Add a close button to the new page
    var closeBtn = document.createElement("button");
    closeBtn.classList.add("product-page__close-btn");
    var iconBtn = document.createElement("i");
    iconBtn.classList.add("fas");
    iconBtn.classList.add("fa-xmark");
    closeBtn.appendChild(iconBtn); 
    
    closeBtn.addEventListener("click", function() {
        document.body.removeChild(productPage);
    });

    productPage.appendChild(closeBtn);
    document.body.appendChild(productPage);
}

function createToast(message) {
    console.log("createToast(" + message + ") has been called.");
    let toast = document.createElement("div");
    toast.innerHTML = message;
    toast.classList.add("toast");
    document.body.appendChild(toast);

    setTimeout(function() {
        document.body.removeChild(toast);
    }, 4000); // 2 seconds
}

// function returnProductInformation(card) {
//     console.log("Return product information function called.");
//     console.log(card);
// }

function addToCart(btn) {
    window.alert("Product card added");
    console.log(btn.parentNode);
    let product = btn.parentNode;

    console.log(btn.parentNode.getAttribute("data-name"));
    console.log(btn.parentNode.getAttribute("data-type"));
    console.log(btn.parentNode.getAttribute("data-price"));

    console.log(btn);

    shoppingCart.push(
        {
            id: product.dataset.id,
            name: product.dataset.name,
            type: product.dataset.type,
            price: product.dataset.price,
            quantity: 1
        }
    );

    createToast("Added to the cart");
}

// addEventListener("click", addToCart() {});
// document.getElementById("cart").innerHTML = shoppingCartContent;

// Creates an empty array to hold our cart data
var shoppingCart = [];

let total = 0;