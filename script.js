let constraints = {
    FirstName: 'required|alpha',
    LastName: 'required|alpha',
    Password: 'required|alpha_num',
    UserName: 'required|alpha',
    ConfirmPassword: 'required|alpha_num',
    Email: 'required|Email'
}
const errorMessages = {
    required: "this field is required",
    alpha: 'this field must be an alphabet'
}
const inputFields = document.querySelectorAll('.form-control');

function retrieveInputField(event) {
    const info = {
        [this.name]: this.value
    }
    const validation = new Validator(info, constraints);
    validation.passes();
    let errorMessage = validation.errors.first(this.name)
    if (errorMessage == false) {
       errorMessage = "" ;
    }
    document.querySelector(`#${this.name}`).innerHTML = errorMessage
    console.log('validation', validation)
}

for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener("input", retrieveInputField);
    
}