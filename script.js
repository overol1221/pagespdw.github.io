document.addEventListener("DOMContentLoaded", function () {

    const greeting = document.getElementById("greeting");
    const dateTime = document.getElementById("date-time");


    const currentTime = new Date();
    const currentHour = currentTime.getHours();


    let greetingText = "";
    if (currentHour < 12) {
        greetingText = "Good morning, Yvist!";
    } else if (currentHour < 18) {
        greetingText = "Good afternoon, Yvist!";
    } else {
        greetingText = "Good evening, Yvist!";
    }


    greeting.textContent = greetingText;


    const currentDate = currentTime.toLocaleDateString();
    const currentTimeString = currentTime.toLocaleTimeString();


    dateTime.textContent = `${currentDate} ${currentTimeString}`;
});
