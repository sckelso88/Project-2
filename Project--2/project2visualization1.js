Plotly.d3.csv(https://github.com/sckelso88/Project-2/blob/master/Project--2/aot.csv){
    var trace1 = {
        x:iyear,
        y:total,
        type: 'scatter',

        line: {
            color: 'coral',
            width: 3
        }
    
    }    
         
    
var layout1 = {

    margin: {
     l: 50,
     r: 50,
     b: 50,
     t: 50,
   },
    title: {
      text:'Date vs Number of Attacks',
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
 
       text: 'Number of Attacks',
 
       font: {
 
         family: 'Courier New, monospace',
 
         size: 12,
  
       }
      }
    }
  } 
}

Plotly.newPlot('myDiv', trace1, layout1);