const queryBoxQuestions=document.querySelectorAll(".query__box-question");

queryBoxQuestions.forEach(queryBoxQuestion =>{
    queryBoxQuestion.addEventListener("click", function(){
        queryBoxQuestion.classList.toggle('active')
    })
})