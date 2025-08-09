let form = document.querySelector("form");
let inputs = document.querySelectorAll("input")
let main = document.querySelector("#main");
form.addEventListener('submit',(e) => {
    e.preventDefault();
  
    let card = document.createElement("div");
    card.classList.add("card");
    let h1 = document.createElement("h1");
    h1.textContent = `${inputs[0].value}`;
    let h4 = document.createElement("h4");
    h4.textContent = `${inputs[1].value}`;
    let p = document.createElement("p");  
    p.textContent = `${inputs[2].value}`;  
    card.appendChild(h1);
    card.appendChild(h4);
    card.appendChild(p);
    main.appendChild(card);
    form.reset();
})