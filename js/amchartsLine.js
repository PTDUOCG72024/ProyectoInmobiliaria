am5.ready(function() {
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {})
    );
    
    chart.get("colors").set("step", 2);
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {})
      })
    );
    
    xAxis.children.push(am5.Label.new(root, {
      text: 'Edad Trabajador (años)',
      textAlign: 'center',
      x: am5.p50,
      fontWeight: 'bold'
    }));
    
    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
        tooltip: am5.Tooltip.new(root, {})
      })
    );
    
    yAxis.children.unshift(am5.Label.new(root, {
      text: "Antiguedad Laboral (meses)",
      textAlign: 'center',
      fontWeight: 'bold',
      y: am5.p50,
      centerY: am5.p50,
      rotation: -90
    }));
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series0 = chart.series.push(
      am5xy.LineSeries.new(root, {
        calculateAggregates: true,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "ay",
        valueXField: "x",
        valueField: "aValue",
        tooltip: am5.Tooltip.new(root, {
          labelText: "Antiguedad laboral: {valueY} (meses)\nEdad del trabajador: {valueX} años\n1 accidentes"
        }),
      })
    );
    
    
    // Add bullet
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
    var circleTemplate = am5.Template.new({});
    series0.bullets.push(function () {
      var graphics = am5.Circle.new(
        root,
        {
          fill: series0.get("fill")
        },
        circleTemplate
      );
      return am5.Bullet.new(root, {
        sprite: graphics
      });
    });
    
    var starTemplate = am5.Template.new({});
    
    // Create second series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series1 = chart.series.push(
      am5xy.LineSeries.new(root, {
        calculateAggregates: true,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "by",
        valueXField: "x",
        valueField: "bValue",
        tooltip: am5.Tooltip.new(root, {
          labelText: "Antiguedad laboral: {valueY} (meses)\nEdad del trabajador: {valueX} años\n1 accidentes"
        }),
      })
    );
    
    // Add bullet
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
    series1.bullets.push(function () {
      var graphics = am5.Star.new(root, {
        fill: series1.get("fill"),
        spikes: 15,
        innerRadius: am5.percent(90)
      }, starTemplate);
      return am5.Bullet.new(root, {
        sprite: graphics
      });
    });
    
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      behavior: "zoomXY"
    }));
    
    // Add scrollbars
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));
    
    chart.set("scrollbarY", am5.Scrollbar.new(root, {
      orientation: "vertical"
    }));
    
    var data = [
      {
        x: 35,
        ay: 6.5,
        by: 2.2,
        aValue: 15
      },
      {
        x: 36,
        ay: 12.3,
        by: 4.9,
        aValue: 8
      },
      {
        x: 37,
        ay: 12.3,
        by: 5.1,
        aValue: 16
      },
      {
        x: 38,
        ay: 2.9,
        aValue: 9
      },
      {
        x: 39,
        by: 8.3,
        bValue: 13
      },
      {
        x: 40,
        ay: 2.8,
        by: 13.3,
        aValue: 9,
        bValue: 13
      },
      {
        x: 41,
        ay: 3.5,
        by: 6.1,
        aValue: 5,
        bValue: 2
      },
      {
        x: 42,
        ay: 5.1,
        aValue: 10
      },
      {
        x: 43,
        ay: 6.7,
        by: 10.5,
        aValue: 3,
        bValue: 10
      },
      {
        x: 44,
        ay: 8,
        by: 12.3,
        aValue: 5,
        bValue: 13
      },
      {
        x: 45,
        by: 4.5,
        bValue: 11
      },
      {
        x: 46,
        ay: 9.7,
        by: 15,
        aValue: 15,
        bValue: 10
      },
      {
        x: 47,
        ay: 10.4,
        by: 10.8,
        aValue: 1,
        bValue: 11
      },
      {
        x: 48,
        ay: 1.7,
        by: 19,
        aValue: 12,
        bValue: 3
      }
    ];
    
    series0.data.setAll(data);
    series1.data.setAll(data);
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series0.appear(1000);
    series1.appear(1000);
    
    chart.appear(1000, 100);
    
    }); // end am5.ready()