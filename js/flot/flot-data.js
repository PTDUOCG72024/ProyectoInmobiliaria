//Flot Line Chart
$(document).ready();

//Flot Pie Chart
$(function() {

    var dataNacionalidad = [{
        label: "Chileno",
        data: 3
    }];

    var dataCargo = [{
        label: "Kanguero",
        data: 1
    }, {
        label: "Carpintero",
        data: 2
    }];

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

     var dataAreaConstructiva = [{
                 label: "Terminaciones",
                 data: 1
             }, {
                 label: "Obra Gruesa",
                 data: 2
             }];

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

function getTooltip(label, x, y) {
    return "%s: %p.0% (" + y + ")";

}

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
});
