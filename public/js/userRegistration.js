function register(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatPassword").value;

    // Verificar si hay campos vacíos
    if (name === "" || email === "" || password === "" || repeatPassword === "") {
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            html: '<span style="font-size: 20px;">Por favor, completa todos los campos!</span>',
        });
        return;
    }

    // Verificar si las contraseñas coinciden
    if (password !== repeatPassword) {
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            html: '<span style="font-size: 20px;">Las contraseñas no coinciden!</span>',
        });
        return;
    }

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

    fetch(apiUrl, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Registro exitoso
        return response.json();
     })
    .then(data => {
        console.log(data);
        Swal.fire({
            icon: 'success',
            title: 'Registro EXITOSO!',
            html: '<span style="font-size: 20px;">Ahora puedes iniciar sesión</span>',
        }).then((result) => {
            if (result.isConfirmed || result.isDismissed) {
                window.location.replace("login");
            }
        });
    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            html: '<span style="font-size: 20px;">Algo salió mal, por favor intenta de nuevo más tarde</span>',
        });
    });
}