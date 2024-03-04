const resetIntervalDays = 45;

function updateCountdown() {
    const now = new Date().getTime();

    let distance = 0;

    if (typeof(Storage) !== "undefined") {
        let nextReset = localStorage.getItem("nextReset");
        if (nextReset != null) {
            nextReset = new Date(nextReset);
            distance = nextReset - now;
            if (distance < 0) {
                const nextResetNew = new Date(now + resetIntervalDays * 24 * 60 * 60 * 1000);
                localStorage.removeItem("nextReset");
                localStorage.setItem("nextReset", nextResetNew);
                distance = resetIntervalDays * 24 * 60 * 60 * 1000;
            }
        } else {
            const nextResetNew = new Date(now + resetIntervalDays * 24 * 60 * 60 * 1000);
            localStorage.setItem("nextReset", nextResetNew);
            let distance = resetIntervalDays * 24 * 60 * 60 * 1000;
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

    document.getElementById("countdown").innerHTML = `
        Next reset in: ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
}

updateCountdown();

setInterval(updateCountdown, 1000); // Update every second
