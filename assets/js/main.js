/*EXCHANGE RATES*/
var data = {
  labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
  datasets: [{
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "rgba(91,37,245, 1)",
      borderWidth: 4.5,
      data: [451, 512, 475, 465, 485, 535, 574, 552, 614, 654, 669],
  }]
};

var options = {
  maintainAspectRatio: false,
  legend: {
      display: false
  },
  scales: {
      yAxes: [{
          stacked: true,
          gridLines: {
              display: true,
              color: "rgba(91,37,245, 0.03)"
          },
          ticks: {
              maxTicksLimit: 5,
              min: 300,
              max: 700
          }
      }],
      xAxes: [{
          gridLines: {
              display: false
          }
      }]
  },
  elements: {
      point: {
          radius: 0
      }
  }
};


var ctx = document.getElementById('exchangeRates').getContext('2d');
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});

/*LAST COSTS*/
var data = {
  labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
  datasets: [{
      label: 'Spending',
      backgroundColor: "rgba(91,37,245, 0.2)",
      data: [35000, 40000, 22000, 15000, 20000, 60000, 90000, 50000, 90000, 100000],
  }, {
      label: 'Earning',
      backgroundColor: "rgba(91,37,245, 1)",
      data: [70000, 80000, 50000, 35000, 70000, 80000, 180000, 45000, 160000, 120000],
  }, ]
};

var options = {
  cornerRadius: 0,
  maintainAspectRatio: false,
  legend: {
      position: 'bottom',
      labels: {
          fontColor: "rgba(0,0,0, 0.5)",
          boxWidth: 20,
          padding: 10
      }
  },
  scales: {
      yAxes: [{
          gridLines: {
              display: true,
              color: "rgba(91,37,245, 0.03)"
          },
          ticks: {
              maxTicksLimit: 5,
          }
      }],
      xAxes: [{}]
  }
};


var ctx = document.getElementById('last_costs').getContext('2d');
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});

/*EFFICIENCY CHART*/

var data = {
  labels: ["", ""],
  datasets: [{
      label: "",
      backgroundColor: ["rgba(91,37,245, 1)", "#dad7e9"],
      data: [669, 231]
  }]
};

var options = {
  maintainAspectRatio: false,
  legend: {
      position: 'bottom',
      labels: {
          fontColor: "rgba(0,0,0, 0.5)",
          boxWidth: 20,
          padding: 10
      }
  },
};


var ctx = document.getElementById('efficiency').getContext('2d');
var myLineChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});