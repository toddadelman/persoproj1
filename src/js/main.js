// add scripts

var taskList =[];

// gloabl vars
//var newTask= document.getElementById('task').value
//var goalClass=document.getElementById('goal').value

//task input event handler

$('#btn1').on('click', function(e) {
  e.preventDefault();

  var newTask= document.getElementById('task').value
  var goalClass= document.getElementById('goal').value
  var setTimer= document.getElementById('set-timer').value

  taskList.push(newTask, goalClass, setTimer);
  console.log(taskList); 


});

// result form event handler

$('#btn2').on('click', function(e) {
  e.preventDefault();
 
  var percentComplete= document.getElementById('percentComplete').value
  var focusValue= document.getElementById('focusValue').value
  var energyLevel= document.getElementById('energyLevel').value
  var score =+((percentComplete/10)*+(focusValue/10)*+energyLevel).toFixed(0);
  taskList.push(percentComplete,focusValue,energyLevel,score)
  console.log(taskList)

  
  $('#completed').append(percentComplete)
  $('#quality').append(focusValue)
  $('#energy').append(energyLevel)
  $('#score').append(score)

});

// donut chart
/*
$('#donutChart').donutChart()

$('#donutChart').donutChart({
width: 300,
height: 200,
legendSizePadding: 0.05,
label: "Graph {0}",
hasBorder: true
})
*/



// end new timer



  console.log('sanity check!');

