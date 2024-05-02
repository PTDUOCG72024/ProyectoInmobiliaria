document.addEventListener('DOMContentLoaded', function(){
    getDetalleIngreso();
});

function getRowDetalleIngreso(data) {
    var dataDetalleIngreso = [];
    var reporte = 122332

    data.accidents.forEach((element => {
        reporte += 3
        var centroTrabajo = element.project.name;
        var empresaTrabajo = element.employee.contract_type;
        var nombreTrabajador = element.employee.name;
        var rutTrabajador = element.employee.identification_number;
        var fechaTrabajador = element.employee.start_date;
        var clasificacion = element.classification.name;
        var ley = "Ley";
        var description = element.description;
        var supervisor = element.employee.supervisor.name;

        $('#detalleIngreso tbody').append("<tr><td> "+reporte+" </td><td> "+centroTrabajo+" </td><td> "+empresaTrabajo+" </td><td> "+nombreTrabajador+" </td><td> "+rutTrabajador+" </td><td> "+fechaTrabajador+" </td><td> "+clasificacion+" </td><td> "+ley+" </td><td> "+description+" </td><td> "+supervisor+" </td></tr>");
    }))

}

async function getDetalleIngreso() {
    const apiUrl = 'https://pitagoras-api-production.up.railway.app/accidents';
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    var data = await fetch(apiUrl, requestOptions).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response;
         })
        .catch(error => {
            console.error('Error:', error);
        });

    const response = await data.json()

    var dataCargo = getRowDetalleIngreso(response);

}