$(document).ready(function(){

var questionOptions = [

	zero = {
		question: "What is the most popular sport in the world?",
		option: ["Baseball", "Football (soccer)", "Golf", "Cricket", "https://pbs.twimg.com/profile_images/649138479490797568/e6rIFQTY.jpg"],
	},

	one = {
		question: "index one",
		option: ["a", "c", "answer", "d"],
	},

	two = {
		question: "index two",
		option: ["a", "answer", "c", "d"],
	},

	three = {
		question: "index three",
		option: ["answer", "a", "c", "d"],
	},

	four = {
		question: "index four",
		option: ["a", "answer", "c", "d"],
	},

	five = {
		question: "index five",
		option: ["a", "answer", "c", "d"],
	},

	six = {
		question: "index six",
		option: ["a", "c", "d", "answer"],
	},

	seven = {
		question: "index seven",
		option: ["answer", "a", "c", "d"],
	},

	eight = {
		question: "index eight",
		option: ["a", "answer", "c", "d"],
	},

	nine = {
		question: "index nine",
		option: ["a", "c", "answer", "d"],
	},
];

$("#option1").hide();
$("#option2").hide();
$("#option3").hide();
$("#option4").hide();

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



	$("#start").on("click", function(){

		let correctAnsCount = 0;
		let incorrectAnsCount = 0
		let unAnsCount = 0;
		let numberOfQuestions = 0;
		$("#start").hide();
		
				function firstFunction(){
						//When the total number of questions asked reaches 10, end the game and give the option to restart.
						if (numberOfQuestions === 10){
							$("#timer").html("All done - here's how you did:" + numberOfQuestions);
							$("#timer").append("<br> Correct Answers: " + correctAnsCount +
											   "<br> Incorrect Answers: " + incorrectAnsCount +
											   "<br> Unanswered: " + unAnsCount);
							$("#start").show();
							$("#start").html("Start Over?");
							return $("#start").on("click", function(){
							$("#start").hide();
							});
						}

							//Set timer1
							$("#timer").html("<br>60");
							//Display question in sequence
							$("#first").html(questionOptions[numberOfQuestions].question);

							//Possible answers(4 - from button1 to button4)
							$("#option1").show();
							$("#option1").html(questionOptions[numberOfQuestions].option[0]);

							$("#option2").show();
							$("#option2").html(questionOptions[numberOfQuestions].option[1]);

							$("#option3").show();
							$("#option3").html(questionOptions[numberOfQuestions].option[2]);

							$("#option4").show();
							$("#option4").html(questionOptions[numberOfQuestions].option[3]);
						

							$("#option1").off().on("click", function(){
								if (questionOptions[numberOfQuestions].option[0] === questionOptions[numberOfQuestions].correctAns){
									console.log("Congrats!");
									//$("#firstRow").html(src = "http://www.grittv.com/wp-content/uploads/2014/08/Grit_Bluesky.png");
								}else{
									console.log("Nope!  Too Bad!");
								}
									numberOfQuestions++;
									firstFunction();
							});


							
							$("#option2").off().on("click", function(){
								if (questionOptions[numberOfQuestions].option[1] === questionOptions[numberOfQuestions].correctAns){
									console.log("Congrats!");
								}else{
									console.log("Nope!  Too Bad!");	
								}
									numberOfQuestions++;
									firstFunction();
							});


							
							$("#option3").off().on("click", function(){
								if (questionOptions[numberOfQuestions].option[2] === questionOptions[numberOfQuestions].correctAns){
									console.log("Congrats!");
								}else{
									console.log("Nope!  Too Bad!");
								}
									numberOfQuestions++;
									firstFunction();
							});


							
							$("#option4").off().on("click", function(){
								if (questionOptions[numberOfQuestions].option[3] === questionOptions[numberOfQuestions].correctAns){
									console.log("Congrats!");
								}else{
									console.log("Nope!  Too Bad!");
								}
									numberOfQuestions++;
									firstFunction();
							});

					console.log(numberOfQuestions);
				};
				firstFunction();
	
	});
});