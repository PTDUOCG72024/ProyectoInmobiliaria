$(function() {

    Morris.Line({
            element: 'morris-line-chart',
            data: [{
                        edad: 35,
                        interno: null,
                        subcontrato: null
                    }, {
                        edad: 36,
                        interno: null,
                        subcontrato: 4.0
                    }, {
                        edad: 37,
                        interno: null,
                        subcontrato: null
                    }, {
                        edad: 38,
                        interno: null,
                        subcontrato: null
                    }, {
                        edad: 39,
                        interno: null,
                        subcontrato: null
                    }, {
                        edad: 40,
                        interno: null,
                        subcontrato: null
                    }, {
                        edad: 41,
                        interno: null,
                        subcontrato: null
                    }, {
                        edad: 42,
                        interno: null,
                        subcontrato: null
                    }, {
                        edad: 43,
                        interno: null,
                        subcontrato: null
                    }, {
                        edad: 44,
                        interno: null,
                        subcontrato: null
                    }, {
                        edad: 45,
                        interno: null,
                        subcontrato: null
                    }, {
                        edad: 46,
                        interno: null,
                        subcontrato: null
                    }, {
                        edad: 47,
                        interno: 3.0,
                        subcontrato: null
                        },
                    {
                        edad: 48,
                        interno: null,
                        subcontrato: null
                    }
                    ],
            xkey: 'edad',
            ykeys: ['interno', 'subcontrato'],
            labels: ['interno', 'subcontrato'],
            parseTime: false,
            pointSize: 15,
            hideHover: 'auto',
            resize: true,
            verticalGrid: true
        });

    });
    
