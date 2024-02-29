let images = document.getElementsByClassName("icons");
let questions = document.getElementsByClassName("ques");
let but = document.getElementsByClassName("questions");
let answers = document.getElementsByClassName("details");
for(let i=0;i<images.length;i++){
    images[i].addEventListener("click",event => {
        if(event.target.src.match("assets/images/icon-plus.svg")){
            event.target.src = "assets/images/icon-minus.svg";
            answers[i].style.maxHeight = answers[i].scrollHeight+'px';
            but[i].style.borderBottom = "0";
        }
        else{
            event.target.src = "assets/images/icon-plus.svg";
            answers[i].style.maxHeight = null ;
            if(i!=images.length-1) but[i].style.borderBottom = "1px solid black";
        }
    });
    questions[i].addEventListener("click",event => {
        if(images[i].src.match("assets/images/icon-plus.svg")){
            images[i].src = "assets/images/icon-minus.svg";
            answers[i].style.maxHeight = answers[i].scrollHeight+'px';
            but[i].style.borderBottom = "0";
        }
        else{
            images[i].src = "assets/images/icon-plus.svg";
            answers[i].style.maxHeight = null;
            if(i!=images.length-1) but[i].style.borderBottom = "1px solid black";
        }
    });
}