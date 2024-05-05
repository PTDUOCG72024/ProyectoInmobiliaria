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

    fetch(apiUrl, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Usuario o contraseña incorrectos');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        Swal.fire({
            icon: 'success',
            title: '¡Inicio de sesión exitoso!',
            html: '<span style="font-size: 20px;">Bienvenido ' + data.name + '</span>',
        });

        setTimeout(function(){
            window.location.replace("paginaInicio?name=" + encodeURIComponent(data.name));
        }, 2000);
    })
    .catch(error => {
        console.error('Error:', error);
        // Mostrar un SweetAlert en caso de error
        Swal.fire({
            icon: 'error',
            title: 'Error al iniciar sesión',
            text: error.message,
        });
    });
} 