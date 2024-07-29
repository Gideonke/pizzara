let cartIcon = document.getElementById("carticon");
let cartSection = document.getElementById("cartsection");
const cartContainer = document.querySelector(".cart-container");
let cartAdd = document.querySelector(".cart");
let button = document.querySelectorAll(".bttn");
let cartItems = [];
console.log(cartSection);

cartIcon.addEventListener("click", function (e) {
  cartContainer.classList.toggle("show__cart");
});

if (cartItems.length === 0) {
  cartSection.innerHTML = `
  <h3>  No items added to cart</h3>
  `;
}
function updateCartItems() {
  cartSection.innerHTML = "";
  cartItems.map((item) => {
    cartProduct = document.createElement("div");
    cartProduct.classList.add("items");
    console.log(item);
    cartProduct.innerHTML = `
<img src=${item.image} width="50" />
<h2>${item.name}</h2>
<p class="item-price">${item.price}</p>
<div>
<button class="decreament">-</button>
<p class="quantity">1</p>
<button class="increament">+</button>
</div>

<p class="price">${item.price}</P>
`;
    cartSection.append(cartProduct);
    cartProduct.display = `flex`;
  });

  if (cartItems.length === 0) {
    cartSection.innerHTML = `
    <h3>  No items added to cart</h3>
    `;
    document.querySelector(".cart-total").style.display = "none";
  } else {
    document.querySelector(".cart-total").style.display = "block";
  }

  updatePrices();
}

for (let i = 0; i < button.length; i++) {
  let btn = button[i];
  // console.log(btn);
  btn.addEventListener("click", function (e) {
    const pizzaImage = e.target.parentElement.children[0].src;
    const pizzaName = e.target.parentElement.children[1].textContent;
    const pizzaPrice = e.target.parentElement.children[2].textContent.replace(
      "Ksh. ",
      ""
    );

    if (e.target.textContent.toLowerCase() === "add to cart") {
      e.target.textContent = "Remove from cart";
      e.target.style.background = "red";
      // console.log(e);

      let pizzaItem = {
        name: pizzaName,
        price: pizzaPrice,
        image: pizzaImage,
      };

      // console.log(pizzaItem);
      cartItems.push(pizzaItem);
      // console.log(cartItems);
      // console.log(cartItems.length);
      cartAdd.textContent = cartItems.length;

      updateCartItems();
    } else {
      cartAdd.textContent = Number(cartAdd.textContent) - 1;
      e.target.style.background = "black";
      e.target.textContent = "Add to Cart";
      const indexToRemove = cartItems.findIndex(
        (item) => item.name === pizzaName
      );
      cartItems.splice(indexToRemove, 1);
      cartAdd.textContent = cartItems.length;
      updateCartItems();
    }
  });
}

cartSection.addEventListener("click", function (e) {
  if (e.target.classList.contains("increament")) {
    let currentQuantity = e.target.previousElementSibling;
    currentQuantity.textContent++;
  } else if (e.target.classList.contains("decreament")) {
    let currentQuantity = e.target.nextElementSibling;
    if (currentQuantity.textContent > 1) {
      currentQuantity.textContent--;
    }
  }
  updatePrices(); 
});

function updatePrices() {
  let cartTotals = 0;
  let cartItemProduct = document.querySelectorAll(".items");
  for (let i = 0; i < cartItemProduct.length; i++) {
    let productItem = cartItemProduct[i];

    const itemName = productItem.querySelector("h2").textContent;
    console.log(itemName);
    let item = cartItems.find((element) => element.name === itemName);
    if (item) {
      const itemQuantity = parseInt(
        productItem.querySelector(".quantity").textContent
      );
      // console.log(itemQuantity)
      // console.log(typeof(itemQuantity))
      const price = parseInt(
        productItem.querySelector(".item-price").textContent
      );
      // console.log(price)
      // console.log(typeof(price))
      let total = itemQuantity * price;
      productItem.querySelector(".price").textContent = total;
      cartTotals += total;
    }
  }
  document.querySelector(
    ".cart-total"
  ).textContent = `Total Price: Ksh. ${cartTotals}`;
}
