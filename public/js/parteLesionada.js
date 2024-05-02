document.addEventListener('DOMContentLoaded', function(){
    getParteLesionada();
});

function getTooltip(label, x, y) {
    return "%s: %p.0% (" + y + ")";
}

function getCountInjuredPart(data) {
    var injuredPartData = [];

    data.accidents.forEach((element => {
        var injuredPart = element.injured_part.name;
        if (injuredPartData[injuredPart]) {
            injuredPartData[injuredPart] += 1;
        } else {
            injuredPartData[injuredPart] = 1;
        }
    }))

    var injuredPartCountData = []
    for (var key in injuredPartData) {
        var value = injuredPartData[key]
        injuredPartCountData.push({label: key, data: value})
    }

    return injuredPartCountData;
}

async function getParteLesionada() {
    const apiUrl = 'https://pitagoras-api-production.up.railway.app/accidents';
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

/*
    var dataParteLesionada = [{
                label: "Pie",
                data: 1
            }, {
                label: "Dedo Mano",
                data: 1
           }, {
                label: "Rodilla",
                data: 1
            }];
*/
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

    var dataParteLesionada = getCountInjuredPart(response);

    var plotParteLesionadaObj = $.plot($("#flot-pie-chart-parte-lesionada"), dataParteLesionada, {
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

}