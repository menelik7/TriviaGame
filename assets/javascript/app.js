$(document).ready(function(){

	var questionOptions = [

		zero = {
			question: "1. What is the most popular sport in the world?",
			option: ["Baseball", "Football (soccer)", "Golf", "Cricket", "<img src= https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/images/brazuca-lead.jpg?itok=fEwfZ4Sc>"],
		},

		one = {
			question: "2. index one",
			option: ["a", "c", "answer", "d"],
		},

		two = {
			question: "3. index two",
			option: ["a", "answer", "c", "d"],
		},

		three = {
			question: "4. index three",
			option: ["answer", "a", "c", "d"],
		},

		four = {
			question: "5. index four",
			option: ["a", "answer", "c", "d"],
		},

		five = {
			question: "6. index five",
			option: ["a", "answer", "c", "d"],
		},

		six = {
			question: "7. index six",
			option: ["a", "c", "d", "answer"],
		},

		seven = {
			question: "8. index seven",
			option: ["answer", "a", "c", "d"],
		},

		eight = {
			question: "9. index eight",
			option: ["a", "answer", "c", "d"],
		},

		nine = {
			question: "10. index nine",
			option: ["a", "c", "answer", "d"],
		},
	];

	//
	questionOptions[0].correctAns = questionOptions[0].option[1];
	questionOptions[1].correctAns = questionOptions[1].option[2];
	questionOptions[2].correctAns = questionOptions[2].option[1];
	questionOptions[3].correctAns = questionOptions[3].option[0];
	questionOptions[4].correctAns = questionOptions[4].option[1];
	questionOptions[5].correctAns = questionOptions[5].option[1];
	questionOptions[6].correctAns = questionOptions[6].option[3];
	questionOptions[7].correctAns = questionOptions[7].option[0];
	questionOptions[8].correctAns = questionOptions[8].option[1];
	questionOptions[9].correctAns = questionOptions[9].option[2];

	//function to hide answer buttons during feedback.
	function hide(){
		$("#option1").hide();
		$("#option2").hide();
		$("#option3").hide();
		$("#option4").hide();
	}

	//Start button to kick-off the game.
	$("#start").on("click", function(){

		//Declare variables that need to be reset at the start of a new round.
		let correctAnsCount = 0;
		let incorrectAnsCount = 0
		let unAnsCount = 0;
		let numberOfQuestions = 0;
		$("#start").hide();
		
		//Set timer functions*************************
		function decrement() {
	        timer1--;
	        $("#timer").html("Time remaining: " + timer1);

		        if (timer1 === 0){
					stop();
					unAnsCount++;
					$("#question").html("Sorry, but you ran out of time");
					$("#answer").html('The correct answer was: "' + questionOptions[numberOfQuestions].correctAns + '"');
					hide();
					$("#pic").html(questionOptions[numberOfQuestions].option[4]);
					setTimeout(timeUp, 4000);
					numberOfQuestions++;
				}
	    }

		function stop() {
		    clearInterval(intervalId);
		}

		function run() {
		    intervalId = setInterval(decrement, 1000);
		}

		function timeUp(){
			firstFunction();
		}
	    //********************************************
		
		

    		//This Main Function handles the majority of the logic - from setting up the initial display during a question, to having several other functions within it to handle score keeping and rotation between the questions.
			function firstFunction(){
					run();
					//When the total number of questions asked reaches 10, end the game and give the option to restart.
					if (numberOfQuestions === 10){
						stop();
						stop(firstFunction);
						$("#answer").html("");
						$("#question").html("");
						$("#question").html("All done - here's how you did out of " + numberOfQuestions + " questions:");
						$("#question").append("<br> Correct Answers: " + correctAnsCount +
										   "<br> Incorrect Answers: " + incorrectAnsCount +
										   "<br> Unanswered: " + unAnsCount);
						hide();
						$("#pic").html("");
						$("#start").show();
						$("#start").html("Start Over?");
						return $("#start").on("click", function(){
						$("#start").hide();
						});
					}

					//Set timer1 starting value
					timer1 = 25;
					$("#pic").html("");
					$("#answer").html("");
					$("#timer").html("Time remaining: " + timer1);
					//Display question in sequence
					$("#question").html(questionOptions[numberOfQuestions].question);

					//Possible answers(4 - from button1 to button4)
					$("#option1").show();
					$("#option1").html(questionOptions[numberOfQuestions].option[0]);

					$("#option2").show();
					$("#option2").html(questionOptions[numberOfQuestions].option[1]);

					$("#option3").show();
					$("#option3").html(questionOptions[numberOfQuestions].option[2]);

					$("#option4").show();
					$("#option4").html(questionOptions[numberOfQuestions].option[3]);

					function myOptions(){
						if (questionOptions[numberOfQuestions].option[optionNum] === questionOptions[numberOfQuestions].correctAns){
							stop();
							correctAnsCount++;
							console.log("Correct answer count: " + correctAnsCount);
							$("#question").html("Correct!");
							hide();
							$("#pic").html(questionOptions[numberOfQuestions].option[4]);
							setTimeout(timeUp, 4000);
						}
						else if (questionOptions[numberOfQuestions].option[optionNum] !== questionOptions[numberOfQuestions].correctAns){
							stop();
							$("#question").html("Nope!  Too Bad!");
							incorrectAnsCount++;
							console.log("Incorrect answer count: " + incorrectAnsCount);
							$("#answer").html("The correct answer was: " + questionOptions[numberOfQuestions].correctAns);
							hide();
							$("#pic").html(questionOptions[numberOfQuestions].option[4]);
							setTimeout(timeUp, 4000);
						}
							numberOfQuestions++;
					}
				

						$("#option1").off().on("click", function(){
							optionNum = 0;
							if (numberOfQuestions < 9){
								myOptions();
							}
						});

						$("#option2").off().on("click", function(){
							optionNum = 1;
							if (numberOfQuestions < 9){
								myOptions();
							}
						});

						$("#option3").off().on("click", function(){	
							optionNum = 2;
							if (numberOfQuestions <=9){
								myOptions();
							}
						});
						
						$("#option4").off().on("click", function(){
							optionNum = 3;
							if (numberOfQuestions <= 9){
								myOptions();
							}
						});
			}

			firstFunction();
	});
});