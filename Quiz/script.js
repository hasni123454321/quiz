const questions = [
    {
        question: "You receive three emails simultaneously. Which task do you prioritize?",
        answers: {
            A: "Respond to the team member",
            B: "Focus on the client’s request",
            C: "Start working on the presentation for your manager"
        },
        correctAnswer: "B"
    },
    {
        question: "During an important presentation with a client, the IT system crashes. What is your next step?",
        answers: {
            A: "Apologize and reschedule the meeting",
            B: "Try to fix the problem yourself",
            C: "Propose continuing with a discussion of key points without slides"
        },
        correctAnswer: "C"
    },
    {
        question: "You receive a call about a minor issue and an email with a critical update for a presentation. Which task do you focus on first?",
        answers: {
            A: "Resolve the minor issue",
            B: "Focus on the client presentation update",
            C: "Delegate the minor issue to a colleague and start on the update"
        },
        correctAnswer: "C"
    },
    {
        question: "You have two conflicting deadlines. How do you handle this situation?",
        answers: {
            A: "Attend the meeting and finish the report afterward",
            B: "Send an email postponing the meeting to focus on the report",
            C: "Delegate the report writing and attend the meeting"
        },
        correctAnswer: "C"
    },
    {
        question: "A client calls, upset they haven’t received a deliverable. What do you do next?",
        answers: {
            A: "Apologize and promise to deliver it by the end of the day",
            B: "Explain the situation and request an extension",
            C: "Delegate the task to the team and immediately begin working on it yourself"
        },
        correctAnswer: "A"
    },
    {
        question: "You notice a top team member is stressed. What is your immediate response?",
        answers: {
            A: "Reassign one of their tasks to another team member",
            B: "Encourage them to push through and offer support later",
            C: "Ask them to finish only the highest-priority task"
        },
        correctAnswer: "A"
    },
    {
        question: "Your boss asks for urgent data for a last-minute meeting. How do you respond?",
        answers: {
            A: "Pause the report and provide the data immediately",
            B: "Ask your boss if the data can wait and continue the report",
            C: "Delegate the data request to a colleague"
        },
        correctAnswer: "A"
    },
    {
        question: "You discover two departments are working on the same task but not coordinated. How do you resolve this?",
        answers: {
            A: "Bring both teams together immediately to align efforts",
            B: "Let them finish their tasks separately and combine the work later",
            C: "Choose one department to take the lead and inform the other to halt work"
        },
        correctAnswer: "A"
    },
    {
        question: "A key team member is sick right before the completion of a major task. What do you do next?",
        answers: {
            A: "Take over the task yourself",
            B: "Reassign the task to another team member",
            C: "Split the task between available team members"
        },
        correctAnswer: "C"
    },
    {
        question: "Your department’s budget has been cut by 20%. How do you decide which project to scale down?",
        answers: {
            A: "Cut back on the lowest-performing project",
            B: "Reduce the budget evenly across all projects",
            C: "Delay the least time-sensitive project"
        },
        correctAnswer: "A"
    },
    {
        question: "Two senior team members disagree on the approach for a critical task. How do you handle this situation?",
        answers: {
            A: "Encourage them to collaborate and find a compromise",
            B: "Make an executive decision to proceed with the new approach to save time",
            C: "Stick to the original plan to avoid risk and further delays",
            D: "Reassign both team members to different tasks to diffuse the conflict"
        },
        correctAnswer: "A"
    },
    {
        question: "Your marketing department has exceeded its budget by 15%. How do you proceed with upcoming campaigns?",
        answers: {
            A: "Scale back both campaigns to fit within the remaining budget",
            B: "Cancel the less critical campaign and focus on the major one",
            C: "Request additional budget to cover the shortfall",
            D: "Cut non-essential elements from both campaigns"
        },
        correctAnswer: "B"
    },
    {
        question: "A major client complains about late delivery. What do you do next?",
        answers: {
            A: "Apologize and offer a partial refund as compensation",
            B: "Reiterate that the client was informed of the delay and deny compensation",
            C: "Offer a discount on future orders as a goodwill gesture",
            D: "Investigate the delay further before making any decision"
        },
        correctAnswer: "C"
    },
    {
        question: "One of your team members is underperforming due to personal issues. What is your next step?",
        answers: {
            A: "Have a one-on-one meeting to discuss their personal issues",
            B: "Issue a formal warning and set strict deadlines",
            C: "Reassign their tasks to reduce the team’s burden",
            D: "Arrange for them to take some time off"
        },
        correctAnswer: "A"
    },
    {
        question: "Your company is planning to launch a new product but there's a flaw. What do you decide?",
        answers: {
            A: "Delay the launch to fix the flaw",
            B: "Proceed with the launch and address the flaw in a future update",
            C: "Launch on time with a limited release and fix the flaw",
            D: "Postpone the marketing campaign but proceed with the launch"
        },
        correctAnswer: "A"
    },
    {
        question: "Your company faces supply chain delays that could affect product release. What is your course of action?",
        answers: {
            A: "Outsource components at a higher cost to maintain the timeline",
            B: "Delay the release to avoid the additional expense",
            C: "Seek alternative suppliers with better prices, risking further delays",
            D: "Split production, releasing some units on time"
        },
        correctAnswer: "A"
    },
    {
        question: "Your project is experiencing scope creep. What do you do next?",
        answers: {
            A: "Implement the new features but extend the deadline",
            B: "Stick to the original scope to meet the deadline",
            C: "Negotiate with the client for additional resources",
            D: "Implement only the critical new features"
        },
        correctAnswer: "C"
    },
    {
        question: "A top-performing team member is showing signs of burnout. How do you address the situation?",
        answers: {
            A: "Provide immediate temporary support by redistributing tasks",
            B: "Encourage them to take a short leave, even if it delays the project",
            C: "Offer an incentive to keep them motivated",
            D: "Discuss deprioritizing some work to ease their load"
        },
        correctAnswer: "A"
    },
    {
        question: "Your company experiences a minor data breach. What is your decision?",
        answers: {
            A: "Resolve the issue quietly and inform only affected customers",
            B: "Inform all customers immediately to maintain transparency",
            C: "Wait for more information before notifying customers",
            D: "Launch an internal investigation and provide details to authorities"
        },
        correctAnswer: "B"
    },
    {
        question: "Your company merges with another firm, and team integration is poor. How do you proceed?",
        answers: {
            A: "Hold team-building workshops to foster better communication",
            B: "Assign mentors to guide new employees",
            C: "Focus on productivity and address team culture later",
            D: "Reorganize the team to encourage collaboration"
        },
        correctAnswer: "A"
    }
];
let currentQuestionIndex = 0;
let score = 0;
let questionTimer;
let overallTimer;
let timeLeft = 60; // 60 seconds per question
let overallTimeLeft = 300; // 5 minutes overall (300 seconds)

const questionContainer = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const timerElement = document.getElementById('time');
const overallTimerElement = document.getElementById('overall-time');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
let selectedAnswer = null; // Store selected answer

// Start the quiz
function startQuiz() {
    showQuestion();
    startTimers();
}

// Show question and answers
function showQuestion() {
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;

    Object.keys(currentQuestion.answers).forEach(key => {
        const button = document.createElement('button');
        button.innerText = currentQuestion.answers[key];
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, key));
        answersContainer.appendChild(button);
    });
}

// Handle answer selection and highlight selected button
function selectAnswer(button, answer) {
    if (selectedAnswer) {
        selectedAnswer.classList.remove('selected'); // Remove highlight from previous selection
    }
    button.classList.add('selected'); // Highlight the selected answer
    selectedAnswer = button;

    const currentQuestion = questions[currentQuestionIndex];
    nextButton.disabled = false; // Enable the next button after selection
    nextButton.onclick = () => {
        if (answer === currentQuestion.correctAnswer) {
            score++;
        }
        nextQuestion();
    };
}

// Go to the next question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
        resetTimer();
    } else {
        endQuiz();
    }
}

// Countdown timer for each question
function startTimers() {
    // Overall timer
    overallTimer = setInterval(() => {
        overallTimeLeft--;
        overallTimerElement.innerText = overallTimeLeft;

        if (overallTimeLeft <= 0) {
            clearInterval(overallTimer);
            endQuiz(); // End quiz when overall timer runs out
        }
    }, 1000);

    // Question timer
    startQuestionTimer();
}

// Question-specific timer
function startQuestionTimer() {
    questionTimer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            nextButton.disabled = false; // Enable next button if time runs out
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(questionTimer);
    timeLeft = 60;
    timerElement.innerText = timeLeft;
    startQuestionTimer();
}

// Reset state before showing the next question
function resetState() {
    nextButton.disabled = true;
    answersContainer.innerHTML = ''; // Clear previous answers
    selectedAnswer = null;
}

// End quiz
function endQuiz() {
    clearInterval(questionTimer);
    clearInterval(overallTimer);
    questionContainer.innerText = 'Quiz Completed!';
    answersContainer.innerHTML = '';
    nextButton.style.display = 'none';
    scoreContainer.innerText = `Your score: ${score}/${questions.length}`;
}

// Start the quiz when the page loads
startQuiz();