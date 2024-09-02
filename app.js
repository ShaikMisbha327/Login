document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const passwordField = document.getElementById('password');
    const confirmpasswordField = document.getElementById('confirmpassword');
    const message = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        if (passwordField.value !== confirmpasswordField.value) {
            event.preventDefault(); // Prevent form submission
            message.textContent ='Passwords do not match!Try agian.'
            message.style.color = 'red';
            //alert('Passwords do not match!Try agian');

        }
         else {

           alert('Form submitted successfully!');
            // You can also perform further actions like sending data to the server here
        }
    });
});
