document.addEventListener('DOMContentLoaded', function(){
    getDataNacionalidad();
});

function getTooltip(label, x, y) {
    return "%s: %p.0% (" + y + ")";
}

function getCountNacionalidad(data) {
    var dataNacionalidad = [];

    data.accidents.forEach((element => {
        var employeeNationality = element.employee.nationality.name;
        if (dataNacionalidad[employeeNationality]) {
            dataNacionalidad[employeeNationality] += 1;
        } else {
            dataNacionalidad[employeeNationality] = 1;
        }
    }))

    var nationalityData = []
    for (var key in dataNacionalidad) {
        var value = dataNacionalidad[key]
        nationalityData.push({label: key, data: value})
    }

    return nationalityData;
}

async function getDataNacionalidad(initDate, endDate, project) {
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

    var dataNacionalidad = getCountNacionalidad(response);

/*
    var dataNacionalidad = [{
        label: "Chileno",
        data: 3
    }];
*/

    if(dataNacionalidad.length > 0) {
        $("#flot-pie-chart-nacionalidad").show();
        var plotNacionalidadObj = $.plot($("#flot-pie-chart-nacionalidad"), dataNacionalidad, {
            series: {
                pie: {
                    show: true
                }
            },
            grid: {
                hoverable: true
            },
            tooltip: true,
            tooltipOpts: {
                content: getTooltip, // show percentages, rounding to 2 decimal places
                shifts: {
                    x: 20,
                    y: 0
                },
                defaultTheme: false
            }
        });
    } else {
        $("#flot-pie-chart-nacionalidad").hide();
    }


}
