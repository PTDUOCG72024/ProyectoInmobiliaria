document.addEventListener('DOMContentLoaded', function(){
    getAreaConstructiva();
});

function getTooltip(label, x, y) {
    return "%s: %p.0% (" + y + ")";
}

function getCountConstructionArea(data) {
    var constructionAreaData = [];

    data.accidents.forEach((element => {
        var constructionArea = element.construction_area;
        if (constructionAreaData[constructionArea]) {
            constructionAreaData[constructionArea] += 1;
        } else {
            constructionAreaData[constructionArea] = 1;
        }
    }))

    var constructionAreaCountData = []
    for (var key in constructionAreaData) {
        var value = constructionAreaData[key]
        constructionAreaCountData.push({label: key, data: value})
    }

    return constructionAreaCountData;
}

async function getAreaConstructiva(initDate, endDate, project) {
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

console.log(apiUrl);


    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    /* var dataAreaConstructiva = [{
                 label: "Terminaciones",
                 data: 1
             }, {
                 label: "Obra Gruesa",
                 data: 2
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

    var dataAreaConstructiva = getCountConstructionArea(response);

    if(dataAreaConstructiva.length > 0) {
        $("#flot-pie-chart-area-constructiva").show();
        var plotAreaConstructivaObj = $.plot($("#flot-pie-chart-area-constructiva"), dataAreaConstructiva, {
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
        $("#flot-pie-chart-area-constructiva").hide();
    }
}
