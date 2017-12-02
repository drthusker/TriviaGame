// Timer code here
var stoptimer = false

var count = 30
      timer = setInterval(function() {
        $("#timer").html(count--);
        
         if (stoptimer == true){
          // alert(stoptimer); 
          stoptimer = false;
            return clearInterval(timer);      
          }
          else
            if(count === 0){
                $('#submitButton').click(function() {
                  stoptimer = true    
                $(this).addClass('hide');
               console.log(this);

  });

            }
        else
          if(count == -1){

            clearInterval(timer);
            
            // resultCalculator(timer);
        };
    }, 1000);


  

  function submitQuiz() {
    console.log('submitted');


    function answerScore (qName) {
      var radiosNo = document.getElementsByName(qName);

      for (var i = 0, length = radiosNo.length; i < length; i++) {
          if (radiosNo[i].checked) {
  
          var answerValue = Number(radiosNo[i].value);
        }
      }
 
      if (isNaN(answerValue)) {
        answerValue = 0;
      }
      return answerValue;
    }

    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5'));
    console.log("CalcScore: " + calcScore); 


    function correctAnswer (correctStringNo, qNumber) {
      console.log("qNumber: " + qNumber);
      return ("The correct answer for question #" + qNumber + ": &nbsp;" +
        (document.getElementById(correctStringNo).innerHTML));
      }

    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
      questionCounter++;
    }


    var showScore = "Your Score: " + calcScore +"/5";

    if (calcScore === questionCounter) {
      showScore = showScore + "&nbsp"
    };
    document.getElementById('userScore').innerHTML = showScore;
  }

$(document).ready(function() {

  $('#submitButton').click(function() {
    stoptimer = true    
    $(this).addClass('hide');

  });


});




