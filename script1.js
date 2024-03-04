const resetIntervalDays1 = 30;
setInterval(updateCountdown2, 1000);
function updateCountdown2() {
    const now = new Date().getTime();
    let distance = 0;
    if (typeof(Storage) !== "undefined") {
        let nextReset = localStorage.getItem("nextReset1");
        if (nextReset != null) {
            nextReset = new Date(nextReset);
            distance = nextReset - now;
            if (distance < 0) {
                const nextResetNew = new Date(now + resetIntervalDays1 * 24 * 60 * 60 * 1000);
                localStorage.removeItem("nextReset1");
                localStorage.setItem("nextReset1", nextResetNew);
                distance = resetIntervalDays1 * 24 * 60 * 60 * 1000;
            }
        } else {
            const nextResetNew = new Date(now + resetIntervalDays1 * 24 * 60 * 60 * 1000);
            localStorage.setItem("nextReset1", nextResetNew);
            let distance = resetIntervalDays1 * 24 * 60 * 60 * 1000;
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

    document.getElementById("countdown2").innerHTML = `
    Next Harvest In: ${days}d ${hours}h ${minutes}m ${seconds}s
`;
}
updateCountdown2();