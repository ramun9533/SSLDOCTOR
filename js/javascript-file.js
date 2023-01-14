const progressBar = document.getElementById("progress-bar");
    let progress = 0;
    function updateProgress(newValue) {
        progress = newValue;
        progressBar.style.width = progress + "0%";
    }
let i = 0;
        const intervalId = setInterval(() => {
            updateProgress(i);
            i += 1;
            if (i > 10) {
                clearInterval(intervalId);
            }
        }, 1000);
