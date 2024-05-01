function register(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatPassword").value;

    const apiUrl = 'https://pitagoras-api-production.up.railway.app/auth/register';
    const data = {
        name: name,
        email: email,
        password: password,
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    fetch(apiUrl, requestOptions).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
     })
    .then(data => {
        console.log(data);
        window.location.replace("/");
    })
    .catch(error => {
        console.error('Error:', error);
    });

 }