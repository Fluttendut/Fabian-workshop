const btn = document.getElementById('button');

document.getElementById('formAddOrderAPI')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_2hje0p1';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                window.location.href = '../HTML/ConfirmationPage.html';
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });