// const { default: axios } = require("axios");
// const axios = require('axios').default;

const lightSwitch = document.querySelector(".light-toggler");
const searchInput = document.querySelector(".search-box input");
const productsDOM = document.querySelector(".products");
const btns = document.querySelectorAll(".btn");

window.onload = () => {
  setTimeout(() => {
    document.querySelector('.loader').style.height = '0';
  }, 1000)
}

let allProductsData = [];
const filters = {
  searchItems: "",
};

lightSwitch.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    lightSwitch.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>`;
    document.querySelector(".search-box").style.backgroundColor = `#f8fafc`;
    document.querySelector(".search-box input").style.backgroundColor = `#fff`;
  } else {
    lightSwitch.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>`;
    document.querySelector(".search-box").style.backgroundColor = `#111111`;
    document.querySelector(
      ".search-box input"
    ).style.backgroundColor = `#121314`;
  }
  document.body.classList.toggle("dark");
});

document.addEventListener("DOMContentLoaded", () => {
  axios
    .get("../db.json")
    .then((res) => {
      allProductsData = res.data.items;
      renderProducts(res.data.items, filters);
    })
    .catch((err) => console.log(err.message));
});

function renderProducts(_products, _filters) {
  const filteredProducts = _products.filter((p) => {
    return p.title.toLowerCase().includes(_filters.searchItems.toLowerCase());
  });
  productsDOM.innerHTML = "";
  filteredProducts.forEach((item, index) => {
    const productsDiv = document.createElement("div");
    productsDiv.classList.add("product");
    productsDiv.innerHTML = `<img src=${item.image} alt="p-${index}" loading="lazy">
                              <section class="description">
                                  <p class="title">${item.title}</p>
                                  <p class="price">$${item.price}</p>
                              </section>`;
    productsDOM.appendChild(productsDiv);
  });
}

// search products
searchInput.addEventListener("input", (evt) => {
  filters.searchItems = evt.target.value;
  renderProducts(allProductsData, filters);
});

// filter based on groups
btns.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    const filtered = [];
    allProductsData.forEach((item) => {
      if (item.class === evt.target.dataset.filter) {
        filtered.push(item);
      }
    });
    renderProducts(filtered, filters);
  });
});
document.querySelector('a[data-filter=""]').onclick = () => {
  renderProducts(allProductsData, filters);
}
