const data = [
    { name: "John Doe", email: "john@example.com", phone: "1234567890" },
    { name: "Jane Smith", email: "jane@example.com", phone: "0987654321" }
];

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const resultContainer = document.getElementById('result');

let isNameValid = false;
let isEmailValid = false;
let isPhoneValid = false;

nameInput.addEventListener('input', () => {
    isNameValid = nameInput.value.trim() !== '';
    nameError.classList.toggle('error', !isNameValid);
});

emailInput.addEventListener('input', () => {
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    isEmailValid = emailPattern.test(emailInput.value.trim());
    emailError.classList.toggle('error', !isEmailValid);
});

phoneInput.addEventListener('input', () => {
    const phonePattern = /^\\d{10}$/;
    isPhoneValid = phonePattern.test(phoneInput.value.trim());
    phoneError.classList.toggle('error', !isPhoneValid);
});

document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (isNameValid && isEmailValid && isPhoneValid) {
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim()
        };
        const foundData = data.find(
            item =>
                item.name === formData.name &&
                item.email === formData.email &&
                item.phone === formData.phone
        );
        resultContainer.textContent = foundData
            ? `Data Found: Name: ${foundData.name}, Email: ${foundData.email}, Phone: ${foundData.phone}`
            : 'Data not exist';
    } else {
        resultContainer.textContent = 'Please fix validation errors before submitting.';
    }
});