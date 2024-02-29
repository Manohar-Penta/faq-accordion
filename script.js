let images = document.getElementsByClassName("icons");
let questions = document.getElementsByClassName("ques");
let answers = document.getElementsByClassName("details");
for(let i=0;i<images.length;i++){
    images[i].addEventListener("click",event => {
        if(event.target.src.match("assets/images/icon-plus.svg")){
            event.target.src = "assets/images/icon-minus.svg";
            answers[i].style.display = "inline";
        }
        else{
            event.target.src = "assets/images/icon-plus.svg";
            answers[i].style.display = "none";
        }
    });
    questions[i].addEventListener("click",event => {
        if(images[i].src.match("assets/images/icon-plus.svg")){
            images[i].src = "assets/images/icon-minus.svg";
            answers[i].style.display = "inline";
        }
        else{
            images[i].src = "assets/images/icon-plus.svg";
            answers[i].style.display = "none";
        }
    });
}