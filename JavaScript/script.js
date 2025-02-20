function updateClock() {
    let now = new Date();

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateStr = now.toLocaleDateString('en-US', options);

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM"; 

    hours = hours % 12;
    hours = hours ? hours : 12; 

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeStr = `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById("date-display").innerHTML = dateStr;
    document.getElementById("time-display").innerHTML = timeStr;
}

setInterval(updateClock, 1000);

updateClock();
