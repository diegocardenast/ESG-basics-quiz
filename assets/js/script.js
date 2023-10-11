//Loads the second screen in the DOM to select the number of questions to play
document.getElementsByClassName("start-button")[0].addEventListener("click", function () {

    document.getElementsByClassName("game-area1")[0].style.display = "none";
    document.getElementsByClassName("game-area2")[0].style.display = "flex";
    console.log("Screen1 changes to screen2");

});

//Checks the question amount. Takes the question amount and hides the second screen
document.getElementsByClassName("go-button")[0].addEventListener("click", function () {

    let numQuestions;

    numQuestions = parseInt(document.getElementById("quests").value);

    if (numQuestions === 5) {
        console.log(numQuestions);
        document.getElementsByClassName("game-area2")[0].style.display = "none";
        console.log("screen2 changes to first question");
        assignQuestions(numQuestions);
    } else if (numQuestions === 10) {
        console.log(numQuestions);
        document.getElementsByClassName("game-area2")[0].style.display = "none";
        console.log("screen2 changes to first question");
        assignQuestions(numQuestions);
    } else if (numQuestions === 15) {
        console.log(numQuestions);
        document.getElementsByClassName("game-area2")[0].style.display = "none";
        console.log("screen2 changes to first question");
        assignQuestions(numQuestions);
    } else if (numQuestions === 20) {
        console.log(numQuestions);
        document.getElementsByClassName("game-area2")[0].style.display = "none";
        console.log("screen2 changes to question screen");
        assignQuestions(numQuestions);
    } else {
        alert(`Please select a valid number`)
    }


});

//Declaring a global array with the assigned questions for the game
const assignedQuestions = new Array();
//Declaring a number that tells in which question the user is
let currentPosition = 0;
// Declaring answer buttons
let buttons;
//Declaring score variable
let score = 100;
//Declaring check answer control
let checkControl = 0;

/**
 * It takes the amount of questions selected by user 
 * and randomly assign them from an Array of questions.
 */
function assignQuestions(operand1) {
    //Array of objects holding all the trivia questions
    const questions = [
        //1
        {
            "questionText": 'What does "ESG" stand for?',
            "option1": "a) Energy, Sustainability, Governance",
            "option2": "b) Environmental, Social, Governance",
            "option3": "c) Equity, Sustainability, Governance",
            "option4": "d) Economic, Social, Growth",
            "correctAnswer": "b) Environmental, Social, Governance"
        },
        //2
        {
            "questionText": 'Which of the following is considered an "E" factor in ESG?',
            "option1": "a) Employee diversity",
            "option2": "b) Ethical leadership",
            "option3": "c) Carbon emissions",
            "option4": "d) Shareholder value",
            "correctAnswer": "c) Carbon emissions"
        },
        //3
        {
            "questionText": 'What is the primary goal of the ESG framework?',
            "option1": "a) Maximizing shareholder profits",
            "option2": "b) Enhancing stakeholder engagement",
            "option3": "c) Minimizing environmental regulations",
            "option4": "d) Promoting short-term financial gains",
            "correctAnswer": "b) Enhancing stakeholder engagement"
        },
        //4
        {
            "questionText": 'Which of the following is an example of a "Social" factor in ESG analysis?',
            "option1": "a) Annual revenue growth",
            "option2": "b) Employee safety initiatives",
            "option3": "c) Quarterly profit margins",
            "option4": "d) CEO compensation",
            "correctAnswer": "b) Employee safety initiatives"
        },
        //5
        {
            "questionText": 'Why is the "Governance" component important in the ESG framework?',
            "option1": "a) It measures a company's environmental impact.",
            "option2": "b) It assesses a company's impact on society.",
            "option3": "c) It evaluates a company's management and ethics.",
            "option4": "d) It focuses on a company's charitable donations.",
            "correctAnswer": "c) It evaluates a company's management and ethics."
        },
        //6
        {
            "questionText": 'Which of the following best describes the concept of "Sustainable Investing" within the ESG framework?',
            "option1": "a) Investing in companies that maximize short-term profits",
            "option2": "b) Investing in companies that prioritize environmental concerns",
            "option3": "c) Investing without considering social factors",
            "option4": "d) Investing in companies regardless of governance practices",
            "correctAnswer": "b) Investing in companies that prioritize environmental concerns"
        },
        //7
        {
            "questionText": 'Which UN initiative provides a global framework for companies to demonstrate their commitment to ESG principles?',
            "option1": "a) Universal Sustainable Goals (USG)",
            "option2": "b) United Nations Principles for Responsible Investment (PRI)",
            "option3": "c) Sustainable Development Goals (SDGs)",
            "option4": "d) Ethical Business Alliance (EBA)",
            "correctAnswer": "b) United Nations Principles for Responsible Investment (PRI)"
        },
        //8
        {
            "questionText": 'Which of the following is an example of an "E" factor indicator in ESG analysis?',
            "option1": "a) Diversity and inclusion policies",
            "option2": "b) Water consumption reduction",
            "option3": "c) Executive compensation",
            "option4": "d) Product quality ratings",
            "correctAnswer": "b) Water consumption reduction"
        },
        //9
        {
            "questionText": 'What term describes the integration of ESG factors into investment analysis and decision-making?',
            "option1": "a) Corporate Social Responsibility (CSR)",
            "option2": "b) Ethical capitalism",
            "option3": "c) Sustainable investing",
            "option4": "d) Shareholder activism",
            "correctAnswer": "c) Sustainable investing"
        },
        //10
        {
            "questionText": 'Which of the following is NOT a common ESG rating agency?',
            "option1": "a) Moody's",
            "option2": "b) MSCI",
            "option3": "c) Sustainalytics",
            "option4": "d) Dow Jones",
            "correctAnswer": "d) Dow Jones"
        },
        //11
        {
            "questionText": 'What does the "G" in ESG primarily focus on?',
            "option1": "a) Environmental conservation efforts",
            "option2": "b) Social responsibility initiatives",
            "option3": "c) Corporate governance practices",
            "option4": "d) Employee engagement strategies",
            "correctAnswer": "c) Corporate governance practices"
        },
        //12
        {
            "questionText": 'Which of the following is an example of a "Social" factor in ESG analysis?',
            "option1": "a) Use of renewable energy sources",
            "option2": "b) Labor union disputes",
            "option3": "c) Ethical sourcing of raw materials",
            "option4": "d) Board diversity",
            "correctAnswer": "b) Labor union disputes"
        },
        //13
        {
            "questionText": 'ESG investing aims to create financial returns while also promoting:',
            "option1": "a) Environmental degradation",
            "option2": "b) Social inequality",
            "option3": "c) Sustainable business practices",
            "option4": "d) Short-term financial gains",
            "correctAnswer": "c) Sustainable business practices"
        },
        //14
        {
            "questionText": 'Which of the following best describes the "Triple Bottom Line" concept in ESG?',
            "option1": "a) Maximizing profits, revenue, and shareholder value",
            "option2": "b) Balancing financial, social, and environmental performance",
            "option3": "c) Focusing solely on financial returns",
            "option4": "d) Ignoring social and environmental factors",
            "correctAnswer": "b) Balancing financial, social, and environmental performance"
        },
        //15
        {
            "questionText": 'What is the primary motivation for companies to adopt ESG practices?',
            "option1": "a) Avoiding government regulations",
            "option2": "b) Maximizing short-term profits",
            "option3": "c) Enhancing long-term sustainability and reputation",
            "option4": "d) Reducing employee salaries",
            "correctAnswer": "c) Enhancing long-term sustainability and reputation"
        },
        //16
        {
            "questionText": 'Which ESG factor is often associated with climate change and carbon footprint?',
            "option1": "a) Environmental",
            "option2": "b) Social",
            "option3": "c) Governance",
            "option4": "d) Economic",
            "correctAnswer": "a) Environmental"
        },
        //17
        {
            "questionText": 'Which of the following is an example of an "E" factor in ESG analysis?',
            "option1": "a) Workplace safety measures",
            "option2": "b) Community engagement programs",
            "option3": "c) Pollution reduction initiatives",
            "option4": "d) Employee compensation packages",
            "correctAnswer": "c) Pollution reduction initiatives"
        },
        //18
        {
            "questionText": 'What role does the "Social" aspect of ESG focus on?',
            "option1": "a) Ensuring gender diversity in executive positions",
            "option2": "b) Maximizing shareholder value",
            "option3": "c) Reducing energy consumption",
            "option4": "d) Managing corporate finances",
            "correctAnswer": "a) Ensuring gender diversity in executive positions"
        },
        //19
        {
            "questionText": 'Which stakeholder group is NOT typically considered in ESG analysis?',
            "option1": "a) Shareholders",
            "option2": "b) Customers",
            "option3": "c) Competitors",
            "option4": "d) Employees",
            "correctAnswer": "c) Competitors"
        },
        //20
        {
            "questionText": 'What is the ultimate goal of ESG integration into business practices?',
            "option1": "a) Maximizing short-term profits",
            "option2": "b) Balancing financial success with societal and environmental well-being",
            "option3": "c) Eliminating corporate governance entirely",
            "option4": "d) Focusing solely on shareholder interests",
            "correctAnswer": "b) Balancing financial success with societal and environmental well-being"
        },
    ]

    let randomNum;
    const assignedNums = new Array();
    let x;
    console.log(operand1); //control log

    //It provides random numbers that can be used to select the questions from the questions array and do not reapeat
    for (let i = 0; i < operand1; i++) {

        do {
            randomNum = Math.floor(Math.random() * 20);
        } while (assignedNums.includes(randomNum));

        assignedNums.push(randomNum);
    };

    console.log(assignedNums); //control log

    //It assigns the selected questions into an array called assignedQuestions
    for (let y = 0; y < assignedNums.length; y++) {
        x = assignedNums[y];
        assignedQuestions.push(questions[x]);
    }

    console.log(assignedQuestions); //control log
    //It shows the question screen
    document.getElementsByClassName("game-questions-area")[0].style.display = "flex";
    showQuestions(0);
};

/**
 * It takes a number to insert it in the array of assignedQuestions and starts showing it in the DOM 
 */
function showQuestions(num1) {

    console.log(num1); //control log

    let questionScreen = document.getElementsByClassName("game-questions-area");

    console.log(assignedQuestions); //control log

    if (num1 < assignedQuestions.length) {
        questionScreen[0].innerHTML = `
            <div class="question-area">
                <h1 class="question-number">Question ${currentPosition+1} of ${assignedQuestions.length}</h1>
                <p>${assignedQuestions[currentPosition].questionText}</p>
            </div>
            <div class="answer-area">
                <span class="answer-option">${assignedQuestions[currentPosition].option1}</span>
                <span class="answer-option">${assignedQuestions[currentPosition].option2}</span>
                <span class="answer-option">${assignedQuestions[currentPosition].option3}</span>
                <span class="answer-option">${assignedQuestions[currentPosition].option4}</span>
            </div>
            <div class="control-area">
                <span class="next-question">Next</span>
            </div>`;

        console.log("question printed. Our current question is " + currentPosition + 1); //control log

    };

    document.getElementsByClassName("score-bar")[0].style.display = "flex";
    buttons = document.getElementsByClassName("answer-option");
    checkAnswer();

}

/**
 * It assign event listeners to buttons and checks the answer from the user with the correct one saved in the array 
 */
function checkAnswer() {
    checkControl = 1;
    console.log(buttons); //control log
    for (let button of buttons) {
        button.addEventListener("click", function () {
            console.log(this.innerText);
            console.log(assignedQuestions[currentPosition].correctAnswer);
            if (this.value === assignedQuestions[currentPosition].correctAnswer) {
                this.style.backgroundColor = "#6A971B";
            } else {
                score = score - (100 / assignedQuestions.length);
                this.style.backgroundColor = "#B1106B";
                for (i = 0; i < 4; i++) {
                    if (document.getElementsByClassName("answer-option")[i].innerText === assignedQuestions[currentPosition].correctAnswer) {
                        document.getElementsByClassName("answer-option")[i].style.backgroundColor = "#6A971B";
                    }
                }
            };

            currentPosition++;
            console.log(`The correct answer is: ${assignedQuestions[currentPosition].correctAnswer}`); //control log
            nextQuestion();
        })
    }
    
}


function nextQuestion() {

    let questionScreen = document.getElementsByClassName("game-questions-area");
    //Score updates on screen
    document.getElementsByClassName("score-bar")[0].innerText = `Score: ${score}%`;

    if (currentPosition < assignedQuestions.length) {
        questionScreen[0].innerHTML = `
            <div class="question-area">
                <h1 class="question-number">Question ${currentPosition+1} of ${assignedQuestions.length}</h1>
                <p>${assignedQuestions[currentPosition].questionText}</p>
            </div>
            <div class="answer-area">
                <span class="answer-option">${assignedQuestions[currentPosition].option1}</span>
                <span class="answer-option">${assignedQuestions[currentPosition].option2}</span>
                <span class="answer-option">${assignedQuestions[currentPosition].option3}</span>
                <span class="answer-option">${assignedQuestions[currentPosition].option4}</span>
            </div>
            <div class="control-area">
                <span class="next-question">Next</span>
            </div>`;

        console.log("question printed. Our current question is " + currentPosition + 1); //control log
        checkControl = 0;

        document.getElementsByClassName("next-question")[0].addEventListener("click",function(){
            if(checkControl===0){
                checkAnswer();
            }
                nextQuestion();
        });

    } else if(currentPosition+1===assignedQuestions.length) {
        questionScreen.innerHTML = `
            <div class="question-area">
                <h1 class="question-number">Question ${assignedQuestions.length} of ${assignedQuestions.length}</h1>
                <p>${assignedQuestions[currentPosition].questionText}</p>
            </div>
            <div class="answer-area">
                <span class="answer-option">${assignedQuestions[currentPosition].option1}</span>
                <span class="answer-option">${assignedQuestions[currentPosition].option2}</span>
                <span class="answer-option">${assignedQuestions[currentPosition].option3}</span>
                <span class="answer-option">${assignedQuestions[currentPosition].option4}</span>
            </div>
            <div class="control-area">
                <span class="submit">Submit</span>
            </div>`;
        
        checkControl = 0;

        document.getElementsByClassName("submit")[0].addEventListener("click",function(){
            if(checkControl===0){
                checkAnswer();
                finishGame();
            }else{
                finishGame();
            }

        });

    };
}

function finishGame() {
    console.log(`Game finished. Score: ${score}%`);
}

