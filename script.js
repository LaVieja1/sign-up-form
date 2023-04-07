//UI

const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const tel = document.querySelector("#phone-number");
const passwordError = document.querySelector("#password-error");
const passwordConfirmationError = document.querySelector("#password-confirmation-error");
const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const telError = document.querySelector("#tel-error");

// Event Listeners

firstName.addEventListener('input', function(event) {
    if(firstName.value === '') {
        firstNameError.textContent = "Por favor, ingrese su nombre.";
    } else {
        firstNameError.textContent = '';
    }
});

lastName.addEventListener('input', function(event) {
    if (lastName.value === '') {
        lastNameError.textContent = "Por favor, ingrese su apellido.";
    } else {
        lastNameError.textContent = '';
    }
});

email.addEventListener('input', function(event) {
    if(email.validity.typeMismatch) {
        emailError.textContent = 'Por favor, ingrese un email valido.'
    } else {
        emailError.textContent = '';
    }
});

tel.addEventListener('input', function(event) {
    if (tel.validity.patternMismatch) {
        telError.textContent = 'Por favor, ingrese un numero de telefono de 10 digitos';
    } else {
        telError.textContent = '';
    }
});

password.addEventListener('input', function(event) {
    if (password.validity.patternMismatch) {

        const currentValue = password.value;
        const regExpCap = /[A-Z]/g;
        const regExpDig = /[0-9]/g;

        let result = '';

        if (regExpCap.test(currentValue)) {
            result += '';
        } else {
            result += `Falta por lo menos una letra en mayúscula. `;
            result += '\n';
        }

        if (regExpDig.test(currentValue)) {
            result += '';
        } else {
            result += `Falta por lo menos un numero. `;
            result += '\n';
        }

        if (currentValue.length < 9) {
            result += `La contraseña debe tener al menos 8 caracteres. `;
            result += '\n';
        } else {
            result += '';
        }

        //console.log(result);
        passwordError.textContent = result;

    } else {
        passwordError.textContent = '';
    }
});

passwordConfirmation.addEventListener('input', function(event) {
    if (passwordConfirmation.value !== password.value) {
        passwordConfirmationError.textContent = 'Las contraseñas no coinciden.';
    } else {
        passwordConfirmationError.textContent = '';
    }
})