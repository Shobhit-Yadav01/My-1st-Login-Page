document.getElementById('reset-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    fetch('/reset-password', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
    })
    .catch(error => {
    });
});
