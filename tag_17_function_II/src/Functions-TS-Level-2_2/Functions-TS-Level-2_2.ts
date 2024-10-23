//* Functions-TS-Level-2_2

const firstNameInput = document.getElementById('first-name-input') as HTMLInputElement;
const lastNameInput = document.getElementById('last-name-input') as HTMLInputElement;
const emailInput = document.getElementById('email-input') as HTMLInputElement;
const phoneInput = document.getElementById('phone-input') as HTMLInputElement;
const inputBtn = document.getElementById('submit-button') as HTMLInputElement;
const output = document.getElementById('output') as HTMLDivElement;

type TNewCustomer  = {
    firstName: string,
    lastName: string,
    email?: string,
    phone?: string,
}

function greetNewUser1(user: TNewCustomer): string{
    if(user.firstName && user.lastName && !user.email && !user.phone){
        return `Hello ${user.firstName} ${user.lastName}. We will not contact you`;

    } else if(user.firstName && user.lastName && user.email && !user.phone){
        return `Hello ${user.firstName} ${user.lastName}. We will contact you via ${user.email}`;

    } else if(user.firstName && user.lastName && !user.email && user.phone){
        return `Hello ${user.firstName} ${user.lastName}. We will contact you via ${user.phone}`;
        
    } else {
        return `Hello ${user.firstName} ${user.lastName}. We will contact you via ${user.email} and ${user.phone}`;
    }
}

function greetNewUser2(firstName: string, lastName: string, email?: string, phone?: string){
    const user: TNewCustomer = {firstName, lastName, email, phone};
    return greetNewUser1(user);
}

inputBtn?.addEventListener('click', () => {
    const newCustomer: TNewCustomer = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value || undefined,
        phone: phoneInput.value || undefined,
    }

    console.log(greetNewUser1(newCustomer));

    output.innerHTML = greetNewUser2(newCustomer.firstName, newCustomer.lastName, newCustomer.email, newCustomer.phone);
});