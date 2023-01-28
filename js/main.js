var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var eamilError = document.getElementById('email-error');
var meassageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;
    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write Your full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validatePhone() {
    var phone = document.getElementById("contact-phone").value;
    if(phone.length == 0) {
        phoneError.innerHTML = 'Phone No is required';
        return false;
    }
    if(phone.length !== 11) {
        phoneError.innerHTML = 'Phone Number should be 11 digit';
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = 'Only digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true;
}
function validateEmail() {
    var name = document.getElementById('contact-name').value;
    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write Your full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ashrafulcse.ru@gmail.com",
        Password : "12364564566544566444566655",
        To : 'ashrafulcse.ru@gmail.com',
        From : 'ashrafulcse.ru@gmail.com',
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("contact-name").value
        + "<br> Email: " + document.getElementById("contact-email").value
        + "<br> Phone No: " + document.getElementById("contact-phone").value
        + "<br> Message: " + document.getElementById("contact-message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}
