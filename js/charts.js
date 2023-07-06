google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['hours', 'Fuel Rate'],
          ['1',  570],
          ['2',  593],
          ['3',  592],
          ['4',  597],
          ['5',  597],
          ['6',  579],
          ['7',  559],
          ['8',  585],
          ['9',  560],
          ['10',  586],
          ['11',  560],
          ['12',  585],
          ['13',  560],
          ['14',  584],
          ['15',  594],
          ['16',  528],
          ['17',  592],
          ['18',  562],
          ['19',  597],
          ['20',  572],
          ['21',  581],
          ['22',  567],
          ['23',  580],
          ['24',  564],
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

// function drawChart(){
//   const canvas = document.getElementById('curve_chart');

//   // Replace the sampleData array with your extracted data
//   const sampleData = [570,592,592,597,597,579,559,585,560,586,560,584,594,558,592,562,597,572,581,567,573,567,580,564];

//   // Create the chart
//   new Chart(canvas, {
//     type: 'line',
//     data: {
//       labels: Array.from({ length: 24 }, (v, i) => `${i}:00`),
//       datasets: [{
//         label: 'Data',
//         data: sampleData,
//         borderColor: 'rgb(75, 192, 192)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         fill: true
//       }]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
// }

