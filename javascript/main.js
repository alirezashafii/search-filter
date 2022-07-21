const lightSwitch = document.querySelector(".light-toggler");

// window.onload = () => {
//   setTimeout(() => {
//     document.querySelector('.loader').style.height = '0';
//   }, 1000)
// }

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
    document.querySelector(".search-box input").style.backgroundColor = `#121314`;
  }
  document.body.classList.toggle("dark");
});
