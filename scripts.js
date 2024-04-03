// Wait for the DOM content to be fully loaded before executing the code.
document.addEventListener("DOMContentLoaded", function () {

    // Find elements with class names ('.wrapper','.register-link','.login-link')
    //and assign to the variables ( const wrapper, registerLink, loginLink)
    const wrapper = document.querySelector('.wrapper');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');

    // Add an event listener to the 'registerLink' element
    registerLink.addEventListener('click', function (event) {
        event.preventDefault();
        wrapper.classList.add('active');

    });

    // Add an event listener to the 'loginLink' element
    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        wrapper.classList.remove('active');
    });

});
