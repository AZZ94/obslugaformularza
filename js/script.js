let form = document.getElementById("form");

const submitF = (event) => {
    event.preventDefault();
    
    let firstname = document.querySelector('[name="fname"]');
    let lastname = document.querySelector('[name="lname"]');
    
    console.log(firstname);
    console.log(lastname);

    console.log(`Imię: ${firstname.value}, Nazwisko: ${lastname.value}`);
}


form.addEventListener("submit", submitF);
console.log(form);