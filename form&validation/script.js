let form = document.getElementById('myForm');
let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');

form.addEventListener("submit",(e) => {
    e.preventDefault();
    // Clear previous error messages
    let nameRegex = /^[A-Za-z\s]{3,30}$/; // Only letters & spaces, length 3-30
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email format
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //validate check
    let nameAns = nameRegex.test(name.value);
    let emailAns = emailRegex.test(email.value);    
    let passwordAns = passwordRegex.test(password.value);
    if(!nameAns) {
        document.querySelector('.NameError').textContent="Name must be 3-30 characters long and contain only letters and spaces.";
}
    if(!emailAns) {
        document.querySelector('.EmailError').textContent="Please enter a valid email address.";
    }
    if(!passwordAns) {
        document.querySelector('.PasswordError').textContent="Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }
   
    if(nameAns && emailAns && passwordAns) {
        alert("Form submitted successfully!");
        form.reset(); // Reset the form
    }
})