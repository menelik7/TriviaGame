$(document).ready(function(){

	var questionOptions = [

		zero = {
			question: "1. What is the most popular sport in the world?",
			option: ["Baseball", "Football (soccer)", "Golf", "Cricket", "<img src= https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/images/brazuca-lead.jpg?itok=fEwfZ4Sc>"],
		},

		one = {
			question: "2. How many colours are there in a rainbow?",
			option: ["Ten", "Eight", "Seven", "None of the above", "<img src= https://dncache-mauganscorp.netdna-ssl.com/thumbseg/2158/2158865-bigthumbnail.jpg>"],
		},

		two = {
			question: "3. Which branch of mathematics deals with the sides and angles of triangles, and their relationship to each other?",
			option: ["Linear Algebra", "Trigonometry", "Geometry", "Triangular Algebra", "<img src= https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Circle-trig6.svg/1280px-Circle-trig6.svg.png>"],
		},

		three = {
			question: "4. Name the largest freshwater lake in the world",
			option: ["Lake Superior", "Lake Victoria", "Great Lakes", "Lake Michigan", "<img src= http://www.themcguffins.ca/wp-content/uploads/2015/03/Lake_Superior_Water_Trail_Working_Nov18_2015-01.jpg>"],
		},

		four = {
			question: "5. What is another word for lexicon?",
			option: ["leprechaun", "Dictionary", "Larousse", "Standard", "<img src= http://i.amz.mshcdn.com/0BpLCvUcriUZ_XHw5N4XItL29_4=/1200x627/2013%2F06%2F13%2F3b%2FDictionary.b302b.jpg>"],
		},

		five = {
			question: "6. Which actress has won the most Oscars?",
			option: ["Meryl Streep", "Katherine Hepburn", "Julia Roberts", "Demi Moore", "<img src= http://www.johnnytimes.com/wp-content/uploads/2016/10/901x508xKATHARINE-HEPBURN-.jpeg.pagespeed.ic.KBHDuhK8OB.jpg>"],
		},

		six = {
			question: "7. What is the diameter of Earth?",
			option: ["24 Hours", "10,000 Miles", "24,000 Miles", "8,000 Miles", "<img src= https://i.ytimg.com/vi/ePKoVNGGJTc/maxresdefault.jpg>"],
		},

		seven = {
			question: "8. Name the author of On Her Majesty’s Secret Service, Dr No and Thunderball, among others.",
			option: ["Ian Flemming", "James Bond", "Sean Connery", "Marlon Brando", "<img src= https://ichef.bbci.co.uk/images/ic/1920x1080/p01hg09f.jpg>"],
		},

		eight = {
			question: "9. Which animal is responsible for killing more people than plane crashes?",
			option: ["Lion", "Donkey", "Shark", "King Cobra", "<img src= http://c8.alamy.com/comp/ATBPWG/domestic-donkey-equus-asinus-f-asinus-donkey-with-foal-kicking-against-ATBPWG.jpg>"],
		},

		nine = {
			question: "10. What is the best selling recorded music album of all time?",
			option: ['"Led Zeppelin IV" - Led Zeppelin', '"The Bodyguard" - Whitney Houston', '"Thriller" - Michael Jackson', '"Back in Black" - AC/DC', "<img src= http://i.dailymail.co.uk/i/pix/2011/09/21/article-2040037-0E04BC2A00000578-667_634x324.jpg>"],
		},
	];


			//Set values for correct answers to be called later in functions
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
				function stop() {
				    clearInterval(intervalId);
				}

				function run() {
				    intervalId = setInterval(decrement, 1000);
				}

				function timeUp(){
					firstFunction();
				}

				function decrement() {
			        timer--;
			        $("#timer").html("Time remaining: " + timer);

				        if (timer === 0){
							stop();
							unAnsCount++;
							$("#question").html("Sorry, but you ran out of time...");
							$("#answer").html('The correct answer was: "' + questionOptions[numberOfQuestions].correctAns + '"');
							hide();
							$("#pic").html(questionOptions[numberOfQuestions].option[4]);
							setTimeout(timeUp, 7000);
							numberOfQuestions++;
						}
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
							$("#question").html("All done - here's how you did out of " + numberOfQuestions + " questions:");
							$("#stats").append("<br><br>Correct Answers: " + correctAnsCount +
											   "<br> Incorrect Answers: " + incorrectAnsCount +
											   "<br> Unanswered: " + unAnsCount);
							hide();
							$("#pic").html("");
							$("#start").show();
							$("#start").html("Start Over?");
							return $("#start").on("click", function(){
							$("#start").hide();
							$("#stats").html("");
							});
						}

							//Set timer1 starting value
							timer = 25;
							$("#pic").html("");
							$("#answer").html("");
							$("#timer").html("Time remaining: " + timer);



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
								if ((questionOptions[numberOfQuestions].option[optionNum] === questionOptions[numberOfQuestions].correctAns) && (numberOfQuestions <= 9)){
									stop();
									correctAnsCount++;
									console.log("Correct answer count: " + correctAnsCount);
									$("#question").html("Correct!");
									hide();
									$("#pic").html(questionOptions[numberOfQuestions].option[4]);
									setTimeout(timeUp, 500);
								}
								else if ((questionOptions[numberOfQuestions].option[optionNum] !== questionOptions[numberOfQuestions].correctAns) && (numberOfQuestions <= 9)){
									stop();
									$("#question").html("Negatory!");
									incorrectAnsCount++;
									console.log("Incorrect answer count: " + incorrectAnsCount);
									$("#answer").html("The correct answer was: " + questionOptions[numberOfQuestions].correctAns);
									hide();
									$("#pic").html(questionOptions[numberOfQuestions].option[4]);
									setTimeout(timeUp, 7000);
								}
									numberOfQuestions++;
							}
						

									$("#option1").off().on("click", function(){
										optionNum = 0;
										myOptions();
									});

									$("#option2").off().on("click", function(){
										optionNum = 1;
										myOptions();
									});

									$("#option3").off().on("click", function(){	
										optionNum = 2;
											myOptions();
									});
									
									$("#option4").off().on("click", function(){
										optionNum = 3;
										myOptions();
									});
					}

				firstFunction();

			});

});