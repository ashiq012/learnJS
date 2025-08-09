let device = document.querySelector("#device");
let select = document.querySelector("select");
select.addEventListener("change",(e)=>{
    device.textContent = `${e.target.value} device selected`
});