//Question bank
let questionBank= [
    {
        question : 'Paljonko on 10+5?',
        option : ['11','15','10','16'],
        answer : '15'
    },
    {
        question : 'Paljonko on 13-7?',
        option : ['5','6','7','8'],
        answer : '6'
    },
    {
        question : 'Paljonko on 9+8?',
        option : ['14','15','16','17'],
        answer : '17'
    },
    {
        question : 'Paljonko on 5+7?',
        option : ['11','12','13','14'],
        answer : '12'
    },
    {
        question : 'Paljonko on 17-6?',
        option : ['11','13','15','16'],
        answer : '11'
    }
]

let question= document.getElementById('question');
let quizContainer= document.getElementById('quiz-container');
let scorecard= document.getElementById('scorecard');
let option0= document.getElementById('option0');
let option1= document.getElementById('option1');
let option2= document.getElementById('option2');
let option3= document.getElementById('option3');
let next= document.querySelector('.next');
let points= document.getElementById('score');
let span= document.querySelectorAll('span');
let i=0;
let score= 0;



//function to display questions
function displayQuestion(){
    for(let a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= ''+(i+1)+'. '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Kysymykset"+' '+(i+1)+' '+'/'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= '#57E30B';
    }
    else{
        document.getElementById(e.id).style.background= '#E30B21';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
        if(points===5){
            document.getElementById("answerComment").textContent= PERFECT;
            IMAGE4.classList.remove("hidden");
        } else if (points===4){
            document.getElementById("answerComment").textContent= GOOD;
            IMAGE3.classList.remove("hidden");
        } else if(points===3){
            document.getElementById("answerComment").textContent= AVERAGE;
            IMAGE2.classList.remove("hidden");
            hideButton.classList.add("hidden");
            showButton.classList.remove("hidden");
        } else if (points===2){
            document.getElementById("answerComment").textContent= POOR;
            IMAGE1.classList.remove("hidden");
            hideButton.classList.add("hidden");
            showButton.classList.remove("hidden");
        } else if (points===0 || points===1){
            document.getElementById("answerComment").textContent= POOR;
            IMAGE0.classList.remove("hidden");
            hideButton.classList.add("hidden");
            showButton.classList.remove("hidden");
            
        }
    }
    
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    let answerBank= document.getElementById('answerBank');
    let answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(let a=0;a<questionBank.length;a++)
    {
        let list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();

// Koodin lähde: https://www.youtube.com/watch?v=2jwdyO_UunE&t=121s//