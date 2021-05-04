const scrollBtn = document.querySelector(".scroll-to-top");

console.log(scrollBtn); 
scrollBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});
