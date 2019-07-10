function unique(a) {
        return a.sort().filter(function(value, index, array) {
            return (index === 0) || (value !== array[index-1]);
        });
    }



var csv = "aot.csv"
d3.csv(csv).then(function(data) {            
    console.log(data);
    var year = [];
    var event = [];
    
    
    for (var i = 0; i < data.length; i++) {
    	var iyear = data[i].iyear;
    	var total = data[i].total;
    	year.push(iyear);
    	event.push(total)
	}


	
	
	// for (var j = 0; j < year.length; j++) {
	// 	var count  = year[j];
	// 	var total = 0;
	// 	if (count in year) {
	// 		event[count] += 1;

	// 	} else {
	// 		event[count] = 1;
	// 	}

	// }
	

	


	
	// x_axis = unique(year);
var trace1 = {
  x: year,
  y: event,
  type: 'scatter',
  
  line: {
  color: 'coral',
  width: 3
  }

};


var layout = {
   margin: {
    l: 100,
    r: 100,
    b: 100,
    t: 100,
    
 },

  title: {
    text:'Number of Attacks Overtime',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
   },
  xaxis: {
    title: {
      text: 'Years',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        
      }
    },
  },
  yaxis: {
    title: {
      text: 'Number of Attacks',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        
      }
    }
  }
};


var data = [trace1];

Plotly.newPlot('myDiv', data, layout);

	//console.log(x_axis);
    console.log(year);
    console.log(event);
    
	 
	 });

