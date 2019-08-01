Plotly.d3.csv(https://raw.githubusercontent.com/sckelso88/Project-2/master/Project--2/data2.csv)  {
    var trace2 {
        x: iyear,
        y: weaptype1,
        type: 'scatter',
        mode: 'markers'
    }

    var layout2 = {

        margin: {
         l: 50,
         r: 50,
         b: 50,
         t: 50,
       },
        title: {
          text:'Date vs Weapon Type',
          font: {
          family: 'Courier New, monospace',
          size: 18
          },
         },
     
       xaxis: {
          title: {
          text: 'Year',
          font: {
              family: 'Courier New, monospace',
              size: 12,
            }
          },
        },
        yaxis: {
            title: {
     
           text: 'Weapon Type',
     
           font: {
     
             family: 'Courier New, monospace',
     
             size: 12,
      
           }
          }
        }
      } 
    }
    
    Plotly.newPlot('myDiv', trace2, layout2);

}