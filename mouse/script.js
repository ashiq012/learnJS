let abcd = document.querySelector("#abcd");
window.addEventListener('mousemove',(e)=>{
    abcd.style.top = `${e.clientY - 60}px`;
    abcd.style.left = `${e.clientX + 10}px`;
})