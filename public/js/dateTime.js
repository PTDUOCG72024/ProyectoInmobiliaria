function updateGraph () {
    var initDate, endDate, project;

    project = 'all';
    if(document.getElementById("project").value != '') {
        project = document.getElementById("project").value;
    }

    if(document.getElementById("initDate").value != '') {
        var initDateArray = (document.getElementById("initDate").value).split("/");
        var initDate = initDateArray[2] + "-" + initDateArray[1] + "-" + initDateArray[0];
    }

    if(document.getElementById("endDate").value != '') {
        var endDateArray = (document.getElementById("endDate").value).split("/");
        var endDate = endDateArray[2] + "-" + endDateArray[1] + "-" + endDateArray[0];
    }

    getDataNacionalidad(initDate, endDate, project);
    getAreaConstructiva(initDate, endDate, project);
    getDetalleIngreso(initDate, endDate, project);
    getParteLesionada(initDate, endDate, project);
    getCargo(initDate, endDate, project);
    getLesionPorGravedad(initDate, endDate, project)
}