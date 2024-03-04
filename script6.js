const resetIntervalDays6 = 41;
setInterval(updateCountdown7, 1000);
function updateCountdown7() {
    const now = new Date().getTime();
    let distance = 0;
    if (typeof(Storage) !== "undefined") {
        let nextReset = localStorage.getItem("nextReset6");
        if (nextReset != null) {
            nextReset = new Date(nextReset);
            distance = nextReset - now;
            if (distance < 0) {
                const nextResetNew = new Date(now + resetIntervalDays6 * 24 * 60 * 60 * 1000);
                localStorage.removeItem("nextReset6");
                localStorage.setItem("nextReset6", nextResetNew);
                distance = resetIntervalDays6 * 24 * 60 * 60 * 1000;
            }
        } else {
            const nextResetNew = new Date(now + resetIntervalDays6 * 24 * 60 * 60 * 1000);
            localStorage.setItem("nextReset6", nextResetNew);
            let distance = resetIntervalDays6 * 24 * 60 * 60 * 1000;
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

    document.getElementById("countdown7").innerHTML = `
    Next Harvest In: ${days}d ${hours}h ${minutes}m ${seconds}s
`;
}
updateCountdown7();