var config_firebase = {
    apiKey: "AIzaSyDHEPLFgaTRQyxWifIhl3qQPcALMIrgfqM",
    authDomain: "smart-farm-27e2b.firebaseapp.com",
    databaseURL: "https://smart-farm-27e2b.firebaseio.com",
    projectId: "smart-farm-27e2b",
    storageBucket: "smart-farm-27e2b.appspot.com",
    messagingSenderId: "788362802638"
  };
  
firebase.initializeApp(config_firebase);
var status = 0;
var database = firebase.database();
var chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};


// function query10data() {
//     var send_data = new Array();
//     var i = 0;
//     var scoresRef = database.ref("users");
//     scoresRef.orderByValue().limitToLast(20).on("value", function(snapshot) {
//         if(snapshot.exists()){
//             snapshot.forEach(function(data){
//                 var val = data.val();
//                 send_data.push(val.V1);
//                 send_data.push(val.V2);
//                 send_data.push(val.V3);
//                 send_data.push(val.V4);
//                 send_data.push(val.time);        
//                 i++;
//             })
//         }
//     })
//     // console.log(i);
//     // console.log(send_data.length)
//     return send_data;
// }


var color1 = Chart.helpers.color;
var config1 = {
	type: 'line',
	data: {
		datasets: [{
			label: 'โหนดX',
			backgroundColor: color1(chartColors.red).alpha(0.5).rgbString(),
			borderColor: chartColors.red,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        }
        , {
			label: 'โหนดA',
			backgroundColor: color1(chartColors.blue).alpha(0.5).rgbString(),
			borderColor: chartColors.blue,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        },
        {
			label: 'โหนดB',
			backgroundColor: color1(chartColors.green).alpha(0.5).rgbString(),
			borderColor: chartColors.green,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        },
        {
			label: 'โหนดC',
			backgroundColor: color1(chartColors.purple).alpha(0.5).rgbString(),
			borderColor: chartColors.purple,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        }
    ]
	},
	options: {
		responsive: true,
		maintainAspectRatio: true,
		title: {
			display: true,
			text: 'อุณหภูมิของอากาศ'
		},
		scales: {
			xAxes: [{
				type: 'realtime',
				realtime: {
					duration: 24*60*60000,
					ttl: 24*67*60000,
					refresh: 1500,
					delay: 0,
					pause: false,
				}
			}],
			yAxes: [{
				type: 'linear',
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'องศาเซลเซียส (C)'
				},
				ticks: {
                	beginAtZero:true,
                }
			}]
		},
		 legend: {
            display: true,
            labels: {
                boxWidth:30, 
            }
           
        },
		tooltips: {
			mode: 'nearest',
			intersect: false
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		plugins: {
			streaming: {
				frameRate: 60
			},
		},
	}
};

var color2 = Chart.helpers.color;
var config2 = {
	type: 'line',
	data: {
		datasets: [{
			label: 'โหนดX',
			backgroundColor: color2(chartColors.red).alpha(0.5).rgbString(),
			borderColor: chartColors.red,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        }
        , {
			label: 'โหนดA',
			backgroundColor: color2(chartColors.blue).alpha(0.5).rgbString(),
			borderColor: chartColors.blue,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        },
        {
			label: 'โหนดB',
			backgroundColor: color2(chartColors.green).alpha(0.5).rgbString(),
			borderColor: chartColors.green,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        },
        {
			label: 'โหนดC',
			backgroundColor: color2(chartColors.purple).alpha(0.5).rgbString(),
			borderColor: chartColors.purple,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        }
    ]
	},
	options: {
		responsive: true,
		maintainAspectRatio: true,
		title: {
			display: true,
			text: 'ความชื้นของอากาศ'
		},
		scales: {
			xAxes: [{
				type: 'realtime',
				realtime: {
					duration: 24*60*60000,
					ttl: 24*67*60000,
					refresh: 1500,
					delay: 0,
					pause: false,
				}
			}],
			yAxes: [{
				type: 'linear',
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'เปอร์เซ็น (%)'
				},
				ticks: {
                	beginAtZero:true,
                }
			}]
		},
		 legend: {
            display: true,
            labels: {
                boxWidth:30, 
            }
           
        },
		tooltips: {
			mode: 'nearest',
			intersect: false
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		plugins: {
			streaming: {
				frameRate: 60
			},
		},
	}
};

var color3 = Chart.helpers.color;
var config3 = {
	type: 'line',
	data: {
		datasets: [{
			label: 'โหนดX',
			backgroundColor: color3(chartColors.red).alpha(0.5).rgbString(),
			borderColor: chartColors.red,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        }
        , {
			label: 'โหนดA',
			backgroundColor: color3(chartColors.blue).alpha(0.5).rgbString(),
			borderColor: chartColors.blue,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        },
        {
			label: 'โหนดB',
			backgroundColor: color3(chartColors.green).alpha(0.5).rgbString(),
			borderColor: chartColors.green,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        },
        {
			label: 'โหนดC',
			backgroundColor: color3(chartColors.purple).alpha(0.5).rgbString(),
			borderColor: chartColors.purple,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        }
    ]
	},
	options: {
		responsive: true,
		maintainAspectRatio: true,
		title: {
			display: true,
			text: 'อุณหภูมิในดิน'
		},
		scales: {
			xAxes: [{
				type: 'realtime',
				realtime: {
					duration: 24*60*60000,
					ttl: 24*67*60000,
					refresh: 1500,
					delay: 0,
					pause: false,
				}
			}],
			yAxes: [{
				type: 'linear',
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'องศาเซลเซียส (C)'
				},
				ticks: {
                	beginAtZero:true,
                }
			}]
		},
		 legend: {
            display: true,
            labels: {
                boxWidth:30, 
            }
           
        },
		tooltips: {
			mode: 'nearest',
			intersect: false
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		plugins: {
			streaming: {
				frameRate: 60
			},
		},
	}
};

var color4 = Chart.helpers.color;
var config4 = {
	type: 'line',
	data: {
		datasets: [{
			label: 'โหนดX',
			backgroundColor: color4(chartColors.red).alpha(0.5).rgbString(),
			borderColor: chartColors.red,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        }
        , {
			label: 'โหนดA',
			backgroundColor: color4(chartColors.blue).alpha(0.5).rgbString(),
			borderColor: chartColors.blue,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        },
        {
			label: 'โหนดB',
			backgroundColor: color4(chartColors.green).alpha(0.5).rgbString(),
			borderColor: chartColors.green,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        },
        {
			label: 'โหนดC',
			backgroundColor: color4(chartColors.purple).alpha(0.5).rgbString(),
			borderColor: chartColors.purple,
			fill: true,
			cubicInterpolationMode: 'monotone',
			data: []
        }
    ]
	},
	options: {
		responsive: true,
		maintainAspectRatio: true,
		title: {
			display: true,
			text: 'ความชื้นในดิน'
		},
		scales: {
			xAxes: [{
				type: 'realtime',
				realtime: {
					duration: 24*60*60000,
					ttl: 24*67*60000,
					refresh: 1500,
					delay: 0,
					pause: false,
				}
			}],
			yAxes: [{
				type: 'linear',
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'เปอร์เซ็น (%)'
				},
				ticks: {
                	beginAtZero:true,
                }
			}]
		},
		 legend: {
            display: true,
            labels: {
                boxWidth:30, 
            }
           
        },
		tooltips: {
			mode: 'nearest',
			intersect: false
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		plugins: {
			streaming: {
				frameRate: 60
			},
		},
	}
};


window.onload = function() {
	var x = window.matchMedia("(max-width: 767px)");
	var ctx = document.getElementById('airtempChart').getContext('2d');
	var ctx2 = document.getElementById('airhumidChart').getContext('2d');
	var ctx3 = document.getElementById('soiltempChart').getContext('2d');
	var ctx4 = document.getElementById('soilhumidChart').getContext('2d');
	if (!x.matches) {
		ctx.canvas.height = 130;
		ctx2.canvas.height = 130;
		ctx3.canvas.height = 130;
		ctx4.canvas.height = 130;
	}else{
		ctx.canvas.height = 300;
		ctx2.canvas.height = 300;
		ctx3.canvas.height = 300;
		ctx4.canvas.height = 300;
	}
	window.myChart1 = new Chart(ctx, config1);
	window.myChart2 = new Chart(ctx2, config2);
	window.myChart3 = new Chart(ctx3, config3);
	window.myChart4 = new Chart(ctx4, config4);
};

var ref1 = database.ref("X");
ref1.on("child_added", function(snapshot) {
  var changedData = snapshot.val();
  myChart1.data.datasets[0].data.push({
    x: changedData.time*1000,
    y: changedData.data.air_temperature
  });
  myChart2.data.datasets[0].data.push({
    x: changedData.time*1000,
    y: changedData.data.air_humidity
  });
  myChart3.data.datasets[0].data.push({
    x: changedData.time*1000,
    y: changedData.data.soil_temperature
  });
  myChart4.data.datasets[0].data.push({
    x: changedData.time*1000,
    y: changedData.data.soil_moisure
  });

  myChart1.update({
    preservation: true
  });
  myChart2.update({
    preservation: true
  });
  myChart3.update({
    preservation: true
  });
  myChart4.update({
    preservation: true
  });
});

var ref2 = database.ref("node_0");
ref2.on("child_added", function(snapshot) {
  var changedData = snapshot.val();
  myChart1.data.datasets[1].data.push({
    x: changedData.time*1000,
    y: changedData.data.air_temperature
  });
  myChart2.data.datasets[1].data.push({
    x: changedData.time*1000,
    y: changedData.data.air_humidity
  });
  myChart3.data.datasets[1].data.push({
    x: changedData.time*1000,
    y: changedData.data.soil_temperature
  });
  myChart4.data.datasets[1].data.push({
    x: changedData.time*1000,
    y: changedData.data.soil_moisure
  });

  myChart1.update({
    preservation: true
  });
  myChart2.update({
    preservation: true
  });
  myChart3.update({
    preservation: true
  });
  myChart4.update({
    preservation: true
  });
});

var ref3 = database.ref("B");
ref3.on("child_added", function(snapshot) {
  var changedData = snapshot.val();
  myChart1.data.datasets[2].data.push({
    x: changedData.time*1000,
    y: changedData.data.air_temperature
  });
  myChart2.data.datasets[2].data.push({
    x: changedData.time*1000,
    y: changedData.data.air_humidity
  });
  myChart3.data.datasets[2].data.push({
    x: changedData.time*1000,
    y: changedData.data.soil_temperature
  });
  myChart4.data.datasets[2].data.push({
    x: changedData.time*1000,
    y: changedData.data.soil_moisure
  });

  myChart1.update({
    preservation: true
  });
  myChart2.update({
    preservation: true
  });
  myChart3.update({
    preservation: true
  });
  myChart4.update({
    preservation: true
  });
});

var ref4 = database.ref("C");
ref4.on("child_added", function(snapshot) {
  var changedData = snapshot.val();
  myChart1.data.datasets[3].data.push({
    x: changedData.time*1000,
    y: changedData.data.air_temperature
  });
  myChart2.data.datasets[3].data.push({
    x: changedData.time*1000,
    y: changedData.data.air_humidity
  });
  myChart3.data.datasets[3].data.push({
    x: changedData.time*1000,
    y: changedData.data.soil_temperature
  });
  myChart4.data.datasets[3].data.push({
    x: changedData.time*1000,
    y: changedData.data.soil_moisure
  });


	myChart1.update({
	  preservation: true
	});
	myChart2.update({
	  preservation: true
	});
	myChart3.update({
	  preservation: true
	});
	myChart4.update({
	  preservation: true
	});
});



// var ref1 = database.ref("A");
// ref1.on("child_added", function(snapshot) {
//   var changedData = snapshot.val();
//   console.log(changedData);
//   myChart.data.datasets[1].data.push({
//     x: changedData.time,
//     y: changedData.data.air_humidity
//   });

//   myChart.update({
//     preservation: true
//   });
// });

