function retrieveTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    let seconds = currentDate.getSeconds()

    // add a 0 in-front of single digits
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    const timeElement = document.querySelector("h1");

    timeElement.innerHTML = `${hours} : ${minutes} : ${seconds}`;

    setInterval(retrieveTime, 1000);
}

retrieveTime();

