const resetIntervalDays3 = 19;
setInterval(updateCountdown4, 1000);
function updateCountdown4() {
    const now = new Date().getTime();
    let distance = 0;
    if (typeof(Storage) !== "undefined") {
        let nextReset = localStorage.getItem("nextReset3");
        if (nextReset != null) {
            nextReset = new Date(nextReset);
            distance = nextReset - now;
            if (distance < 0) {
                const nextResetNew = new Date(now + resetIntervalDays3 * 24 * 60 * 60 * 1000);
                localStorage.removeItem("nextReset3");
                localStorage.setItem("nextReset3", nextResetNew);
                distance = resetIntervalDays3 * 24 * 60 * 60 * 1000;
            }
        } else {
            const nextResetNew = new Date(now + resetIntervalDays3 * 24 * 60 * 60 * 1000);
            localStorage.setItem("nextReset3", nextResetNew);
            let distance = resetIntervalDays3 * 24 * 60 * 60 * 1000;
        }
    } else {
        console.log("Browser does not support local storage!")
    }


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(`
    Next reset in: ${days}d ${hours}h ${minutes}m ${seconds}s
`)

    document.getElementById("countdown4").innerHTML = `
    Next Harvest In: ${days}d ${hours}h ${minutes}m ${seconds}s
`;
}
updateCountdown4();