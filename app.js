function start() {
    location.href = "quiz.html";
  
}

window.onload = function () { 
    questions.sort( () => Math.random() - 0.5);
    show()
}
var count=0;
count++;
var questions = [
    {
        question:"Q) What is the Full form of RAM",
        answer: "Random Access Memory",
        option: [
            "Read Access Memory",
            "Random Access Memory",
            "Read Abble Memory",
            "None of these"
        ]
    },
    {
        question: "Q) What is the Capital of Pakistan ?",
        answer: "Islamabad",
        option: [
            "Islamabad",
            "turkey",
            "Dubai",
            "None of these"
            
        ]
    },
    {
        question: "Q) What is the full form of CPU ?",
        answer: "Central Processing Unit",
        option: [
            "Central processed unit",
            "Central Processing Unit",
            "central process unit",
            "None of these"
            
        ]
    },
    {
        question: "Q) What is Calculation of 61-5?",
        answer: "56",
        option: [
            "55",
            "60",
            "56",
            "None of these"
        ]
    },
    {
        question: "Q) What is the full form of E-mail ?",
        answer: "Electronic mail",
        option: [
            "Emergency mail",
            "Electrically mail",
            "Electronic mail",
            "None of these"
            
        ]
        
    },
    
];






var number = document.getElementById("number");

var question_count = 0;
function next() {
    if (question_count == questions.length - 1) {
        location.href = "result.html";
    }
    question_count++;
    deleteClass()
    // releax()
    number.innerHTML = question_count + 1;
    
    removeClass()
    show()
    next_btn1.disabled=true;
}

function show(e) {
    var ques = document.getElementById("ques");
    ques.innerHTML = questions[question_count].question;
    var opt = document.getElementsByClassName("option");
    opt[0].innerHTML = questions[question_count].option[0];
    opt[1].innerHTML = questions[question_count].option[1];
    opt[2].innerHTML = questions[question_count].option[2];
    opt[3].innerHTML = questions[question_count].option[3];
    
}
var score = 0;
var right = 0;
var wong = 0;
var next_btn1=document.getElementById("arham");



var ali = document.getElementsByClassName("ali");
var flag = false;
var option = document.getElementsByClassName("option");
function putActiveClass(e) {
    
    if (e.innerHTML == questions[question_count].answer) {
        e.classList.add("correct");
    

    
        // e.style.color=" white";
        right++;
        sessionStorage.setItem("right", right);
        console.log(right)
        score += 10;
        console.log(score)


        for (var i = 0; i < ali.length; i++) {
            if (e.innerHTML == questions[question_count].answer) {

                flag = true;
                ali[question_count].innerHTML = "<i class='fas fa-check tick'></i>"
                ali[question_count].style.backgroundColor = "green";

                break;


            }









        }
        next_btn1.disabled=false;

    }
    else {
        e.classList.add("wrong");
        // e.style.color=" white";
        
        wong++;
        sessionStorage.setItem("wrong", wong);
        console.log(wong)
        ali[question_count].style.backgroundColor = "red";
        ali[question_count].innerHTML = "<i class='fas fa-times  cross'></i>";
        var a = document.getElementsByClassName("option");
        for (var i = 0; i < a.length; i++) {
            if (a[i].innerHTML == questions[question_count].answer) {
                a[i].classList.add("correct")

            }

        }

        next_btn1.disabled=false;
        
    }
    
    stop()


}
function removeClass() {
    var b = document.getElementsByClassName("option");
    for (var i = 0; i < b.length; i++) {
        b[i].classList.remove("correct");
        b[i].classList.remove("wrong");
    }
}


function back() {
    location.href = "index.html";
    sessionStorage.clear();
}

function stop(){
    for (var i=0;i<option.length;i++){
        option[i].classList.add("arham")
    }
}
function deleteClass(){
    for (var i=0;i<option.length;i++){
        if (option[i].hasAttribute("class","arham")){
            option[i].classList.remove("arham")
        }
    }
}