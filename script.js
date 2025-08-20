  const play = document.getElementById("play");
        const next = document.getElementById("next");
        const prev = document.getElementById("prev");
        const progressBar = document.querySelector(".progress-bar");
        const sName = document.querySelector(".sName");
        let startTime = document.getElementById("start");
        let endTime = document.getElementById("end");

        let songArr = ['/audio1.mp3', '/audio2.mp3', '/audio3.mp3', '/audio4.mp3', '/audio5.mp3','/dil_day_dia_hai_tune.mp3','/kick_tune.mp3'];

        function formatTime(seconds) {
            let mins = Math.floor(seconds / 60);
            let secs = Math.floor(seconds % 60);
            if (secs < 10) secs = `0${secs}`;
            return `${mins}:${secs}`;
        }

        let currentIndex = 0;
        let audio = new Audio();

        sName.innerText = songArr[currentIndex].split('/')[1];
        audio.src = songArr[currentIndex];

        next.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex > songArr.length - 1) {
                currentIndex = 0;
            }
            sName.innerText = songArr[currentIndex].split('/')[1];
            audio.src = songArr[currentIndex];
            play.innerHTML = `<i class = "fa-solid fa-pause"></i>`;
            audio.play();

            audio.addEventListener('timeupdate', () => {
                let curr = audio.currentTime;
                let dur = audio.duration;
                let progress = (curr / dur) * 100;
                progressBar.style.width = `${progress}%`;
                progressBar.style.backgroundColor = 'blue';

                let displayCurr = formatTime(curr);
                let displayDur = formatTime(dur);

                startTime.textContent = displayCurr;
                endTime.textContent = displayDur;

                if (displayCurr == displayDur) {
                    currentIndex++;
                    if (currentIndex > songArr.length - 1) {
                        currentIndex = 0;
                    }
                    sName.innerText = songArr[currentIndex].split('/')[1];
                    audio.src = songArr[currentIndex];
                    play.innerHTML = `<i class = "fa-solid fa-pause"></i>`;
                    audio.play();
                }

            })
        })

        prev.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = songArr.length - 1;
            }
            sName.innerText = songArr[currentIndex].split('/')[1];
            audio.src = songArr[currentIndex];
            play.innerHTML = `<i class = "fa-solid fa-pause"></i>`;
            audio.play();

            audio.addEventListener('timeupdate', () => {
                let curr = audio.currentTime;
                let dur = audio.duration;
                let progress = (curr / dur) * 100;
                progressBar.style.width = `${progress}%`;
                progressBar.style.backgroundColor = 'blue';

                let displayCurr = formatTime(curr);
                let displayDur = formatTime(dur);

                startTime.textContent = displayCurr;
                endTime.textContent = displayDur;

                if (displayCurr == displayDur) {
                    currentIndex++;
                    if (currentIndex > songArr.length - 1) {
                        currentIndex = 0;
                    }
                    sName.innerText = songArr[currentIndex].split('/')[1];
                    audio.src = songArr[currentIndex];
                    play.innerHTML = `<i class = "fa-solid fa-pause"></i>`;
                    audio.play();
                }

            })
        })

        play.addEventListener('click', () => {

            if (audio.paused) {

                play.innerHTML = `<i class = "fa-solid fa-pause"></i>`;
                audio.play();
            } else {
                play.innerHTML = `<i class = "fa-solid fa-play"></i>`;
                audio.pause();
            }

            audio.addEventListener('timeupdate', () => {
                let curr = audio.currentTime;
                let dur = audio.duration;
                let progress = (curr / dur) * 100;
                progressBar.style.width = `${progress}%`;
                progressBar.style.backgroundColor = 'blue';

                let displayCurr = formatTime(curr);
                let displayDur = formatTime(dur);

                startTime.textContent = displayCurr;
                endTime.textContent = displayDur;

                if (displayCurr == displayDur) {
                    currentIndex++;
                    if (currentIndex > songArr.length - 1) {
                        currentIndex = 0;
                    }
                    sName.innerText = songArr[currentIndex].split('/')[1];
                    audio.src = songArr[currentIndex];
                    play.innerHTML = `<i class = "fa-solid fa-pause"></i>`;
                    audio.play();
                }

            })

        })