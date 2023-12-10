document.addEventListener('DOMContentLoaded', function () {
    // Button Click Redirection
    document.querySelector('.hire-button').addEventListener('click', function () {
        window.location.href = 'https://www.facebook.com/profile.php?id=100085904125895';
    });

    // Form Validation and Submission for Gmail
    document.querySelector('.submit-button.gmail-button').addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var subject = document.getElementById('subject').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (!name || !subject || !email || !message) {
            alert('Please fill up the form first');
            return;
        }

        // Display success alert
        alert('Your response is submitted to Rey Owen\'s via Gmail');
    });

    // Form Validation and Submission for Github
    document.querySelector('.submit-button.github-button').addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var subject = document.getElementById('subject').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (!name || !subject || !email || !message) {
            alert('Please fill up the form first');
            return;
        }

        // Display success alert
        alert('Your response is submitted to Rey Owen\'s via Github');
    });

    // Update Copyright Year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Hide the loader and show the content
    document.querySelector('.loader').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
});