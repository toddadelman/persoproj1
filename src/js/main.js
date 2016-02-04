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

$('#set-time').append(setTimer)
$('#goal-1').append(newTask)


});


//Start timer button
$('#start-1').on('click', function(e) {
  e.preventDefault();

  setTimeout(function(){
    $('#percentComplete').removeAttr('disabled')
    $('#focusValue').removeAttr('disabled')
    $('#energyLevel').removeAttr('disabled')
    $('#btn2').removeAttr('disabled')

  },4000)});

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
// clock timer







// end new timer



  console.log('sanity check!');

