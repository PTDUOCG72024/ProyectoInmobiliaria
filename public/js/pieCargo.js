document.addEventListener('DOMContentLoaded', function(){
    getCargo();
});

function getTooltip(label, x, y) {
    return "%s: %p.0% (" + y + ")";
}

function getCountCargo(data) {
    var dataCargo = [];

    data.accidents.forEach((element => {
        var employeeCargo = element.employee.position.name;
        if (dataCargo[employeeCargo]) {
            dataCargo[employeeCargo] += 1;
        } else {
            dataCargo[employeeCargo] = 1;
        }
    }))

    var countCargo = []
    for (var key in dataCargo) {
        var value = dataCargo[key]
        countCargo.push({label: key, data: value})
    }

    return countCargo;
}

async function getCargo(initDate, endDate, project) {
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

/*
    var dataCargo = [{
        label: "Kanguero",
        data: 1
    }, {
        label: "Carpintero",
        data: 2
    }]; */

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

    var dataCargo = getCountCargo(response);

    if (dataCargo.length > 0) {
        $("#flot-pie-chart-cargo").show();
        var plotCargoObj = $.plot($("#flot-pie-chart-cargo"), dataCargo, {
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
        $("#flot-pie-chart-cargo").hide();
    }


}
