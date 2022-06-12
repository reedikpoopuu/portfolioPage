let timer = document.getElementById("timer");

let startingDate = new Date("Jan 22, 2022 12:35:42").getTime();

let myfunc = setInterval(function() {

    let now = new Date().getTime();
    let timeFrom = now - startingDate;
        
    // Calculating the days, hours, minutes and seconds left
    let days = Math.floor(timeFrom / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeFrom % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeFrom % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeFrom % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    timer.innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds!"
    }, 1000);

    /*let green = document.getElementById("about-me-pic");
let switcher = document.getElementById("about-me-text");


function pictureSwitch() {
    if(green.style.border == "1px dashed white") {
        green.style.border = "1px solid white";
        green.src = "pattern.jpg";
    } else {
        green.style.border = "1px dashed white";
        green.src = "logo.jpg";
    };
};

green.addEventListener("click", pictureSwitch); */