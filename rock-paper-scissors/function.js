const squares = document.querySelectorAll(".button")
const reset = document.getElementById("reset")

const counter = {
    "red" : 0,
    "blue" : 0,
    "yellow" : 0
}

squares.forEach(square => {
    square.onclick = () => {
        counter[square.value] += 1
        square.innerText = counter[square.value]
    }
})

const zeroValue = () => {
    squares.forEach(square => {
        counter[square.value] = 0
        square.innerText = counter[square.value]
    })
}

reset.onclick = () => {
   zeroValue()
}

