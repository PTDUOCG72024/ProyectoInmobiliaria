document.addEventListener('DOMContentLoaded', function(){
    getLesionPorGravedad();
});

function getRowLesionPorGravedad(data) {

    var project = [];
    var projectBaja = [];
    var projectMedia = [];
    var projectAlta = [];
    var dataColumn = [];

    $('#lesionPorGravedad thead').remove();
    $('#lesionPorGravedad tbody').remove();
    $('#lesionPorGravedad').append('<thead></thead><tbody></tbody>');
    $("#morris-bar-chart").remove();
    $('#father-morris-bar-chart').append('<div id="morris-bar-chart"></div>');

    if(data.accidents.length > 0) {
        data.accidents.forEach((element => {
            var projectName = element.project.name;

             if (project.includes(projectName) == false) {
                project.push(projectName);
             }
        }))

        data.accidents.forEach((element => {
            var projectName = element.project.name;
            var criticidad = element.gravity.name;

            if(criticidad === 'Baja') {
                if (projectBaja[projectName] != undefined) {
                    projectBaja[projectName] = 1 + projectBaja[projectName];
                } else {
                    projectBaja[projectName] = 1;
                }
            } else if (criticidad === 'Media'){
                if (projectMedia[projectName] != undefined) {
                    projectMedia[projectName] = 1 + projectMedia[projectName];
                } else {
                    projectMedia[projectName] = 1;
                }
            } else {
                if (projectAlta[projectName] != undefined) {
                    projectAlta[projectName] = 1 + projectAlta[projectName];
                } else {
                    projectAlta[projectName] = 1;
                }
            }
        }))

        var thead = "<tr><th>#</th>";
        var tbodyBaja = "<tr><td>Baja</td>"
        var tbodyMedia = "<tr><td>Media</td>"
        var tbodyAlta = "<tr><td>Alta</td>"

        for (var i = 0; i < project.length; i++) {
            var amountBaja = 0;
            var amountMedia = 0;
            var amountAlta = 0;
            thead = thead + "<th>" +project[i]+"</th>";
            if(projectBaja[project[i]] != undefined) {
                amountBaja = projectBaja[project[i]];
            }
            if(projectMedia[project[i]] != undefined) {
                amountMedia = projectMedia[project[i]];
            }
            if(projectAlta[project[i]] != undefined) {
                amountAlta = projectAlta[project[i]];
            }
            tbodyBaja = tbodyBaja + "<td>"+amountBaja+"</td>";
            tbodyMedia = tbodyMedia + "<td>"+amountMedia+"</td>";
            tbodyAlta = tbodyAlta + "<td>"+amountAlta+"</td>";
            dataColumn.push({'y': project[i], 'a': amountAlta, 'b': amountBaja, 'm': amountMedia})
        }
        thead = thead + "</tr>";
        tbodyBaja = tbodyBaja + "</tr>";
        tbodyMedia = tbodyMedia + "</tr>";
        tbodyAlta = tbodyAlta + "</tr>";

        $('#lesionPorGravedad thead').append(thead);
        $('#lesionPorGravedad tbody').append(tbodyBaja+tbodyMedia+tbodyAlta);

        Morris.Bar({
                element: 'morris-bar-chart',
                data: dataColumn,
                xkey: 'y',
                ykeys: ['a', 'b', 'm'],
                labels: ['Alta', 'Baja', 'Media'],
                hideHover: 'auto',
                resize: true
            });

    }

}

async function getLesionPorGravedad(initDate, endDate, project) {
    var apiUrl = 'https://pitagoras-api-production.up.railway.app/accidents?';

    if(project != undefined && project != 'all') {
        apiUrl = apiUrl + "project_id="+project;
    }

    if (initDate != undefined) {
        apiUrl = apiUrl + "&init_date="+initDate;
        if(endDate != undefined) {
            apiUrl = apiUrl + '&end_date=' + endDate;
        }
    }

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

    var dataCargo = getRowLesionPorGravedad(response);

}
