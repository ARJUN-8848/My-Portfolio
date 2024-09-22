document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value || "No subject provided";
    var message = document.getElementById('message').value;

    // Format the WhatsApp message
    var whatsappMessage = `Name: ${name}%0aEmail: ${email}%0aPhone: ${phone}%0aSubject: ${subject}%0aMessage: ${message}`;

    // Redirect to WhatsApp
    var whatsappUrl = `https://wa.me/918848613225?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
});