let incrementingTimer = setInterval(incrementSeconds, 1000)
let counter = document.querySelector("#counter")
let minus = document.querySelector("#minus")
let plus = document.querySelector("#plus")
let heart = document.querySelector("#heart")
let pause = document.querySelector("#pause")
let likes = document.querySelector(".likes")
let restart = document.querySelector("#restart")
let commentList = document.querySelector("#list")
let li = document.createElement('li')
let seconds = 0

document.addEventListener("DOMContentLoaded", () => {
    incrementingTimer
})

function incrementSeconds() {
    seconds += 1;
    counter.textContent = seconds
}

function decrementSeconds() {
    seconds -= 1;
    counter.textContent = seconds
}

let isPaused = true

function stopCounter() {
    clearTimeout(incrementingTimer)
    minus.style.display = 'none'
    plus.style.display = 'none'
    heart.style.display = 'none'
    pause.textContent = "resume"
    isPaused = false
}

function resumeCounter() {
    setInterval(incrementSeconds, 1000)
    minus.style.display = 'inline'
    plus.style.display = 'inline'
    heart.style.display = 'inline'
    pause.textContent = 'pause'
    isPaused = true
}

function togglePause() {
    isPaused ? stopCounter() : resumeCounter();
}

function restartCounter() {
    seconds = 0
}

plus.addEventListener("click", incrementSeconds)
minus.addEventListener("click", decrementSeconds)
heart.addEventListener("click", likeASecond)
pause.addEventListener("click", togglePause)
restart.addEventListener("click", restartCounter)

function likeASecond() {
    likes.append(li)
    li.style.listStyle = 'none'
    li.textContent = `You like the number ${seconds}`
}

document.querySelector("#comment-form").addEventListener('submit', displayComment)

function displayComment(e) {
    e.preventDefault()
    function inputLength() {
        return e.target[0].value.length
    }
    let commentLi = document.createElement('li')
    if (inputLength() === 0) {
        alert("Please enter a task to do")
    } else {
        commentList.append(commentLi)
        commentLi.textContent = e.target[0].value
        e.target[0].value = ""
    }
}
