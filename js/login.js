function auth(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const apiUrl = 'https://pitagoras-api-production.up.railway.app/auth/login';

    const data = {
        email: email,
        password: password,
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    fetch(apiUrl, requestOptions).then(response => {
        if (!response.ok) {
            throw new Error('User not found');
        }
    })
    .then(data => {
        console.log(data)
        window.location.replace("dashboard.html");
        outputElement.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });

 }